import os
import csv
import yaml
import pandas as pd
import time

# Load tags.yml
with open('/home/amuriel/GameDataBase/tags.yml', 'r') as file:
    tags_definitions = yaml.safe_load(file)
print("Loaded tags.yml")

# Function to validate tags
def validate_tags(tags, tags_definitions):
    errors = []
    warnings = []
    for tag_group in tags:
        if not isinstance(tag_group, str):
            continue
        
        # Split multiple tags by whitespace
        individual_tags = [t.strip() for t in tag_group.split() if t.strip()]
        
        for tag in individual_tags:
            if not tag.startswith('#'):
                continue

            # Split by '>' first to handle third level
            parts = tag[1:].split('>')  # Remove # and split
            if len(parts) > 2:
                errors.append((f"Too many '>' separators in tag: '{tag}'", None))
                continue

            base_parts = parts[0].split(':')
            value = parts[1] if len(parts) == 2 else None

            # Handle different levels
            if len(base_parts) == 1:
                category = base_parts[0]
                # Check if it's a standalone tag
                if category in tags_definitions.get('standalone', {}).get('values', {}):
                    if value:  # Standalone tags shouldn't have a value
                        errors.append((f"Standalone tag '{category}' cannot have a value", None))
                    continue
                
                # Check if it's a valid main category
                if category not in tags_definitions:
                    errors.append((f"Unknown category: '{category}'", None))
                continue

            elif len(base_parts) == 2:
                category, subcategory = base_parts
                
                # Validate category exists
                if category not in tags_definitions:
                    errors.append((f"Unknown category: '{category}'", None))
                    continue

                # Validate subcategory exists
                if subcategory not in tags_definitions[category].get('subcategories', {}):
                    errors.append((f"Unknown subcategory: '{subcategory}' in '{category}'", None))
                    continue

                # Validate value if present
                if value:
                    valid_values = tags_definitions[category]['subcategories'][subcategory].get('values', {})
                    if value not in valid_values:
                        errors.append((f"Invalid value: '{value}' for '{category}:{subcategory}'", None))
            else:
                errors.append((f"Invalid tag format: '{tag}'", None))

    return errors, warnings

# Get all CSV files in the directory
csv_files = []
for root, dirs, files in os.walk('/home/amuriel/GameDataBase'):
    for file in files:
        if file.endswith('.csv'):
            csv_files.append(os.path.join(root, file))

# Ordenar alfabéticamente los archivos
csv_files.sort()

# Initialize lists to accumulate errors and warnings
all_errors = []
all_warnings = []
file_results = []

# Process each CSV file
start_time = time.time()
for file_path in csv_files:
    # Skip files in .tagguardianignore
    if '.tagguardianignore' in file_path:
        print(f"Skipping file (in .tagguardianignore): {os.path.basename(file_path)}")
        continue

    print(f"Processing file: {os.path.basename(file_path)}")
    # Read CSV file
    df = pd.read_csv(file_path)
    
    # Check if 'Tags' column exists
    if 'Tags' not in df.columns:
        print(f"Skipping file (no 'Tags' column): {os.path.basename(file_path)}")
        continue
    
    # Validate tags in the CSV file
    tags = df['Tags'].tolist()
    game_titles = df['Screen title @ Exact'].tolist() if 'Screen title @ Exact' in df.columns else ['Unknown'] * len(tags)
    errors, warnings = validate_tags(tags, tags_definitions)

    # Accumulate errors and warnings
    all_errors.extend([{
        'file': os.path.basename(file_path), 
        'row': idx + 1, 
        'game': game_title, 
        'tag': tag, 
        'error': error[0],
        'correction': error[1] if error[1] else "No suggestion"
    } for idx, (tag, game_title, error) in enumerate(zip(tags, game_titles, errors))])
    all_warnings.extend([{'file': os.path.basename(file_path), 'row': idx + 1, 'game': game_title, 'tag': tag, 'warning': warning} 
                        for idx, (tag, game_title, warning) in enumerate(zip(tags, game_titles, warnings))])

    # Collect file results
    file_results.append({
        'file': os.path.basename(file_path),
        'valid': len(tags) - len(errors),
        'invalid': len(errors),
        'warnings': len(warnings)
    })

# Calculate processing time
processing_time = time.time() - start_time

def collect_unregistered_tags(all_errors):
    # Count occurrences of unregistered tags
    tag_counts = {}
    for error in all_errors:
        if error['error'].startswith('Unknown category'):
            # Separar las etiquetas compuestas
            tags = error['tag'].split()
            for single_tag in tags:
                tag_counts[single_tag] = tag_counts.get(single_tag, 0) + 1
    
    # Generate suggestions based on tag patterns
    tag_suggestions = {}
    common_categories = {
        'players': 'Add player count category with numeric values',
        'save': 'Add save feature category (backup, memory, etc)',
        'lang': 'Add language support category (en, ja, etc)',
        'region': 'Add region category (jp, us, eu, etc)',
        'mode': 'Add game mode category (vs, coop, etc)'
    }
    
    for tag in tag_counts:
        category = tag.split(':')[0] if ':' in tag else tag
        category = category.replace('#', '')
        if category in common_categories:
            tag_suggestions[tag] = common_categories[category]
        else:
            tag_suggestions[tag] = f"Consider adding {category} category"
    
    return [(tag, count, tag_suggestions[tag]) 
            for tag, count in sorted(tag_counts.items(), key=lambda x: x[1], reverse=True)]

# Generate a single validation report in Markdown format
report_path = '/home/amuriel/GameDataBase/tag_validation_report.md'
with open(report_path, 'w') as report_file:
    report_file.write("# 📊 Tag Validation Report\n\n")
    report_file.write("\n## Overview\n")
    report_file.write("| Metric | Value |\n")
    report_file.write("|--------|-------|\n")
    report_file.write(f"| Files Processed | {len(file_results)} |\n")
    report_file.write(f"| Total Tags | {sum([result['valid'] + result['invalid'] for result in file_results])} |\n")
    report_file.write(f"| Processing Time | {processing_time:.2f}s |\n")
    
    report_file.write("\n## Status Summary\n")
    report_file.write("| Type | Count | Percentage | Status |\n")
    report_file.write("|------|--------|------------|---------|\n")
    total_tags = sum([result['valid'] + result['invalid'] for result in file_results])
    valid_tags = sum([result['valid'] for result in file_results])
    invalid_tags = sum([result['invalid'] for result in file_results])
    warnings = sum([result['warnings'] for result in file_results])
    report_file.write(f"| Valid | {valid_tags} | {valid_tags / total_tags * 100:.1f}% | ✅ |\n")
    report_file.write(f"| Invalid | {invalid_tags} | {invalid_tags / total_tags * 100:.1f}% | ❌ |\n")
    report_file.write(f"| Warnings | {warnings} | {warnings / total_tags * 100:.1f}% | ⚠️ |\n")
    
    report_file.write("## Validation Results\n")
    report_file.write("| File | Valid | Invalid | Warnings |\n")
    report_file.write("|------|--------|----------|-----------|\n")
    for result in file_results:
        report_file.write(f"| {result['file']} | {result['valid']} | {result['invalid']} | {result['warnings']} |\n")
    
    report_file.write("\n## Suggested Actions\n")
    report_file.write("1. Remove/correct the tags in the CSV files\n")
    report_file.write("2. Or add these tags to tags.yml if they are valid:\n")
    report_file.write("   - players: For player count\n")
    report_file.write("   - save: For save features\n")
    report_file.write("   - lang: For language support\n")

    # Agregar sección de Unregistered Tags antes de Invalid Tags Found
    unregistered_tags = collect_unregistered_tags(all_errors)
    if unregistered_tags:
        report_file.write("\n## Unregistered Tags\n")
        report_file.write("| Tag | Usage Count | Suggestion |\n")
        report_file.write("|-----|-------------|------------|\n")
        for tag, count, suggestion in unregistered_tags:
            report_file.write(f"| `{tag}` | {count} | {suggestion} |\n")

    # Solo mostrar la sección de Invalid Tags si hay errores
    if all_errors:
        report_file.write("\n## Invalid Tags Found\n")
        for file_result in file_results:
            file_errors = [error for error in all_errors if error['file'] == file_result['file']]
            if file_errors:  # Solo mostrar archivo si tiene errores
                report_file.write(f"\n### {file_result['file']}\n")
                report_file.write("| Row | Game | Invalid Tag | Error Type | Suggested Correction |\n")
                report_file.write("|-----|------|-------------|------------|--------------------|\n")
                
                # Group errors by row number and game
                grouped_errors = {}
                for error in file_errors:
                    key = (error['row'], error['game'], error['tag'])
                    if key not in grouped_errors:
                        grouped_errors[key] = []
                    grouped_errors[key].append(error['error'])
                
                # Write grouped errors
                for (row, game, tag), errors in grouped_errors.items():
                    # Join all errors with <br> for markdown line breaks
                    error_text = '<br>'.join(errors)
                    report_file.write(f"| {row} | {game} | `{tag}` | {error_text} | `No suggestion` |\n")

    # Solo mostrar la sección de Warnings si hay advertencias
    if all_warnings:
        report_file.write("\n## Warnings\n")
        for file_result in file_results:
            file_warnings = [warning for warning in all_warnings if warning['file'] == file_result['file']]
            if file_warnings:  # Solo mostrar archivo si tiene advertencias
                report_file.write(f"\n### {file_result['file']}\n")
                report_file.write("| Row | Game | Invalid Tag | Warning |\n")
                report_file.write("|-----|------|-------------|----------|\n")
                for warning in file_warnings:
                    report_file.write(f"| {warning['row']} | {warning['game']} | `{warning['tag']}` | {warning['warning']} |\n")

print(f"Generated report: {os.path.basename(report_path)}")
