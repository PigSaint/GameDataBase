function safeGetValue(obj, key, defaultValue = null) {
    try {
        key = String(key);
        return obj && typeof obj === 'object' && key in obj ? obj[key] : defaultValue;
    } catch {
        return defaultValue;
    }
}

function getRandomColor() {
    // Generar colores pastel suaves
    const hue = Math.floor(Math.random() * 360);
    return `hsl(${hue}, 70%, 90%)`;
}

function updateCategoryStyle(select) {
    const category = select.closest('.main-category');
    if (select.value) {
        const color = getRandomColor();
        category.style.setProperty('--selected-color', color);
        category.classList.add('has-value');
    } else {
        category.classList.remove('has-value');
    }
}

function safeUpdateTags(select) {
    try {
        const categoryTags = new Map();
        const selects = document.querySelectorAll('select');
        
        selects.forEach(select => {
            if (!select || !select.value || !select.value.trim()) return;
            
            const categoryId = String(select.id);
            const selectedValue = String(select.value);
            const parts = categoryId.split('_');
            const category = parts[0];
            
            if (parts.length > 1) {
                const subcategory = parts[1];
                categoryTags.set(category, `#${category}:${subcategory}>${selectedValue}`);
            } else {
                categoryTags.set(category, `#${category}>${selectedValue}`);
            }
        });
        
        const tagOutput = document.getElementById('tagOutput');
        if (tagOutput) {
            tagOutput.value = Array.from(categoryTags.values()).join(' ');
        }
        
        updateCategoryStyle(select);
        
    } catch (error) {
        console.error('Error updating tags:', error);
    }
}

function safeUpdateSubcategory(select) {
    try {
        if (!select || !select.id || !select.value) {
            clearSubcategory(select.id);
            return;
        }
        
        const category = select.id;
        const subcategory = select.value;
        const subContainer = document.getElementById(`${category}_sub`);
        
        if (!subContainer) return;
        
        const categoryData = safeGetValue(tagsData, category, {});
        const subcategories = safeGetValue(categoryData, 'subcategories', {});
        const subcategoryData = safeGetValue(subcategories, subcategory, {});
        const values = safeGetValue(subcategoryData, 'values', {});
        
        if (Object.keys(values).length > 0) {
            const subSelect = createSubcategorySelect(category, subcategory, values);
            subContainer.innerHTML = '';
            subContainer.appendChild(subSelect);
            subContainer.style.display = 'block';
        } else {
            clearSubcategory(category);
        }
        
        safeUpdateTags(select);
        updateCategoryStyle(select);
        
    } catch (error) {
        console.error('Error updating subcategory:', error);
        clearSubcategory(select.id);
    }
}

function createSubcategorySelect(category, subcategory, values) {
    const subSelect = document.createElement('select');
    subSelect.id = `${category}_${subcategory}`;
    subSelect.name = `${category}_${subcategory}`;
    subSelect.onchange = () => safeUpdateTags(subSelect);
    
    const defaultOption = document.createElement('option');
    defaultOption.value = '';
    defaultOption.textContent = `Select ${subcategory}`;
    subSelect.appendChild(defaultOption);
    
    Object.entries(values).forEach(([key, value]) => {
        const option = document.createElement('option');
        option.value = key;
        option.textContent = typeof value === 'object' ? value.name || key : value;
        subSelect.appendChild(option);
    });
    
    return subSelect;
}

function clearSubcategory(categoryId) {
    const subContainer = document.getElementById(`${categoryId}_sub`);
    if (subContainer) {
        subContainer.innerHTML = '';
        subContainer.style.display = 'none';
    }
}

function copyTags() {
    try {
        const tagOutput = document.getElementById('tagOutput');
        if (!tagOutput) return;
        
        tagOutput.select();
        document.execCommand('copy');
        
        // Visual feedback
        const originalBg = tagOutput.style.backgroundColor;
        tagOutput.style.backgroundColor = '#e8f5e9';
        setTimeout(() => {
            tagOutput.style.backgroundColor = originalBg;
        }, 200);
        
    } catch (error) {
        console.error('Error copying tags:', error);
    }
}

function toggleLegend(button) {
    const legend = button.parentElement;
    const tagPreview = legend.parentElement;
    
    legend.classList.toggle('collapsed');
    tagPreview.classList.toggle('legend-collapsed');
    
    // Save user preference
    localStorage.setItem('legendCollapsed', legend.classList.contains('collapsed'));
}

// Event Listeners
document.addEventListener('DOMContentLoaded', function() {
    // Initialize main selectors
    const mainSelects = document.querySelectorAll('select[id]:not([id*="_"])');
    mainSelects.forEach(select => {
        select.addEventListener('change', function() {
            if (this.value === '') {
                clearSubcategory(this.id);
            }
            safeUpdateTags(this);
        });
    });
    
    // Prepare preview area
    const tagOutput = document.getElementById('tagOutput');
    if (tagOutput) {
        tagOutput.addEventListener('click', function() {
            this.select();
        });
    }
    
    // Restore legend state
    const legend = document.querySelector('.tag-legend');
    const tagPreview = document.querySelector('.tag-preview');
    if (legend && tagPreview) {
        const wasCollapsed = localStorage.getItem('legendCollapsed') === 'true';
        if (wasCollapsed) {
            legend.classList.add('collapsed');
            tagPreview.classList.add('legend-collapsed');
        }
    }
    
    // Añadir listener para todos los selects
    document.querySelectorAll('select').forEach(select => {
        select.addEventListener('change', function() {
            updateCategoryStyle(this);
        });
    });
});
