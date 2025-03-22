import os
import yaml

def load_tags_yaml(filepath):
    """Load the tags.yml file."""
    with open(filepath, 'r') as file:
        return yaml.safe_load(file)

def generate_table_for_category(category_data):
    """Generate a Markdown table for a category."""
    subtags = category_data.get('subtag', {})
    
    # Determine if "Children" columns are needed
    has_children = any('children' in subtag_data for subtag_data in subtags.values() if isinstance(subtag_data, dict))
    
    # Build the table header dynamically
    table = "| Subcategory | Description"
    if has_children:
        table += " | Children | Children Description"
    table += " |\n"
    table += "|-------------|-------------"
    if has_children:
        table += "|----------|--------------------"
    table += "|\n"
    
    # Populate the table rows
    for subtag_name, subtag_data in subtags.items():
        if isinstance(subtag_data, str):  # Handle case where subtag_data is a string
            description = subtag_data
            children = ""
            children_description = ""
        else:
            description = subtag_data.get('description', 'No description')
            children_dict = subtag_data.get('children', {})
            if children_dict:
                children = '<br>'.join(f"`>{key}`" for key in children_dict.keys())
                children_description = '<br>'.join(f"{value}" for value in children_dict.values())
            else:
                children = ""
                children_description = ""
        
        # Add row dynamically based on column presence
        table += f"| `:{subtag_name}` | {description}"
        if has_children:
            table += f" | {children} | {children_description}"
        table += " |\n"
    
    return table

def load_template(filepath):
    """Load the README_TEMPLATE.md template."""
    with open(filepath, 'r') as file:
        return file.read()

def generate_readme(tags_data, template_path, output_path):
    """Generate the README.md file using the README_TEMPLATE.md template."""
    template = load_template(template_path)
    generated_content = ""

    # Generate tables for each category
    for category_name, category_data in tags_data.items():
        if category_name == "tag_structure":  # Skip special keys
            continue
        description = category_data.get('description', 'No description available')
        # Wrap the entire section in a collapsible part
        generated_content += "<details>\n"
        generated_content += f"<summary><strong>#{category_name}</strong> - {description}</summary>\n\n"
        if 'subtag' in category_data:
            table_content = generate_table_for_category(category_data)
            generated_content += table_content
        generated_content += "\n</details>\n\n"

    # Insert the generated content into the template
    final_content = template.replace("<!-- INSERT GENERATED TABLES HERE -->", generated_content)

    # Write the final README.md
    with open(output_path, 'w') as readme:
        readme.write(final_content)

    print(f"README.md has been generated at {output_path}")

def main():
    script_dir = os.path.dirname(os.path.abspath(__file__))
    root_dir = os.path.dirname(script_dir)
    tags_path = os.path.join(root_dir, 'tags.yml')
    template_path = os.path.join(root_dir, 'scripts', 'README_TEMPLATE.md')  # Updated template path
    readme_path = os.path.join(root_dir, 'README.md')
    
    tags_data = load_tags_yaml(tags_path)
    generate_readme(tags_data, template_path, readme_path)

if __name__ == "__main__":
    main()
