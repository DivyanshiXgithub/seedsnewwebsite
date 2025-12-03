// Category to Products Mapping
const categoryProducts = {
    'vegetable': [
        { id: 'kayoki', name: 'Kayoki', category: 'Cucumber Seeds, Vegetable Seeds', image: 'images/celenacucumber2.jpg' },
        { id: 'celena', name: 'Celena', category: 'Cucumber Seeds, Vegetable Seeds', image: 'images/celenacucumber2.jpg' },
        { id: 'sonakshi-lxq-1033', name: 'Sonakshi LXQ-1033', category: 'Okra Seeds, Vegetable Seeds', image: 'images/sonakshinew.jpg' },
        { id: 'sonakshi-lxq-859', name: 'Sonakshi (LXQ-859)', category: 'Okra Seeds, Vegetable Seeds', image: 'images/sonakshinew.jpg' },
        { id: 'monalias-smt-1953', name: 'Monalias (SMT-1953)', category: 'Brinjal Seeds, Vegetable Seeds', image: 'images/brinjalseeds.webp' },
        { id: 'udhav', name: 'Udhav', category: 'Brinjal Seeds, Vegetable Seeds', image: 'images/brinjal.webp' },
        { id: 'jolly', name: 'Jolly', category: 'Tomato Seeds, Vegetable Seeds', image: 'images/tomatoseedsimage.jpg' },
        { id: 'blash-blaze-lq-116', name: 'Blash / Blaze (LQ-116)', category: 'Tomato Seeds, Vegetable Seeds', image: 'images/blashblaze.jpg' },
        { id: 'remi-lx-958', name: 'Remi LX–958', category: 'Chilly Seeds, Vegetable Seeds', image: 'images/chilli.jpg' },
        { id: 'camry-lx-344', name: 'Camry (LX-344)', category: 'Chilly Seeds, Vegetable Seeds', image: 'images/chilli2.jpeg' },
        { id: 'maya', name: 'Maya', category: 'Chilly Seeds, Vegetable Seeds', image: 'images/chilli3.webp' }
    ],
    'field': [
        { id: 'balraj-mustard', name: 'Balraj Mustard Seeds', category: 'Field Crop Seeds', image: 'images/balrajmustard.jpg' },
        { id: 'hd-3041-mustard', name: 'HD-3041 Mustard Seeds', category: 'Field Crop Seeds', image: 'images/HD-3041new.jpg' },
        { id: 'hd-3031-mustard', name: 'HD-3031 Mustard Seeds', category: 'Field Crop Seeds', image: 'images/3031new.jpg' },
        { id: 'gs-662-maize', name: 'GS-662 Hybrid Maize Seeds', category: 'Field Crop Seeds', image: 'images/hybridmaize662newnew.jpg' },
        { id: 'gs-808-maize', name: 'GS-808 Hybrid Maize Seeds', category: 'Field Crop Seeds', image: 'images/maizeseedsnew.jpg' },
        { id: 'gs-999-maize', name: 'GS-999 Hybrid Maize Seeds', category: 'Field Crop Seeds', image: 'images/maizeseedsnew.jpg' },
        { id: 'gs-335-maize', name: 'GS-335 Hybrid Maize Seeds', category: 'Field Crop Seeds', image: 'images/maizeseedsnew.jpg' },
        { id: 'g-888-plus-maize', name: 'G-888+ Hybrid Maize Seeds', category: 'Field Crop Seeds', image: 'images/maizeseedsnew.jpg' },
        { id: 'g-888-maize', name: 'G-888 Hybrid Maize Seeds', category: 'Field Crop Seeds', image: 'images/maizeseedsnew.jpg' },
        { id: 'g-555-maize', name: 'G-555 Hybrid Maize Seeds', category: 'Field Crop Seeds', image: 'images/maizeseedsnew.jpg' }
    ],
    'fodder': [
        { id: 'california-grass', name: 'California Grass (Annual Rye Grass)', category: 'Fodder Seeds', image: 'images/californiagrassnew.jpg' },
        { id: 'missile-bajra', name: 'Missile Hybrid Bajra', category: 'Fodder Seeds', image: 'images/Poshan-Wonder-Hybrid-Bajra.webp' },
        { id: 'poshan-wonder-bajra', name: 'Poshan Wonder Hybrid Bajra', category: 'Fodder Seeds', image: 'images/Poshan-Wonder-Hybrid-Bajra.webp' },
        { id: 'elephanta-grass', name: 'Elephanta Grass – High Protein Grass', category: 'Fodder Seeds', image: 'images/elephantagrassnew.jpg' },
        { id: 'godhan-sorghum', name: 'Godhan Sorghum Sudan Grass', category: 'Fodder Seeds', image: 'images/sorghumsudangrass.jpg' },
        { id: 'nandi-white-sorghum', name: 'Nandi (White) Sorghum Sudan Grass', category: 'Fodder Seeds', image: 'images/sorghumsudangrass.jpg' },
        { id: 'nandi-red-sorghum', name: 'Nandi (Red) Sorghum Sudan Grass', category: 'Fodder Seeds', image: 'images/sorghumsudangrass.jpg' },
        { id: 'gs-501-sorghum', name: 'GS-501 (Red) Sorghum Sudan Grass', category: 'Fodder Seeds', image: 'images/sorghumsudangrass.jpg' },
        { id: 'gentex-32-sorghum', name: 'Gentex-32 Hybrid Sorghum Grass', category: 'Fodder Seeds', image: 'images/sorghumgrass.jpg' },
        { id: 'dairy-don-sorghum', name: 'Dairy Don Hybrid Sorghum Grass', category: 'Fodder Seeds', image: 'images/sorghumgrass.jpg' }
    ],
    'tomato': [
        { id: 'jolly', name: 'Jolly', category: 'Tomato Seeds, Vegetable Seeds', image: 'images/tomatoseedsimage.jpg' },
        { id: 'blash-blaze-lq-116', name: 'Blash / Blaze (LQ-116)', category: 'Tomato Seeds, Vegetable Seeds', image: 'images/tomatoseedsimage.jpg' }
    ],
    'cucumber': [
        { id: 'kayoki', name: 'Kayoki', category: 'Cucumber Seeds, Vegetable Seeds', image: 'images/kayokicucumber.webp' },
        { id: 'celena', name: 'Celena', category: 'Cucumber Seeds, Vegetable Seeds', image: 'images/kayokicucumber.webp' }
    ],
    'chilli': [
        { id: 'remi-lx-958', name: 'Remi LX–958', category: 'Chilly Seeds, Vegetable Seeds', image: 'images/chilliseeds.jpg' },
        { id: 'camry-lx-344', name: 'Camry (LX-344)', category: 'Chilly Seeds, Vegetable Seeds', image: 'images/chilliseeds.jpg' },
        { id: 'maya', name: 'Maya', category: 'Chilly Seeds, Vegetable Seeds', image: 'images/chilliseeds.jpg' }
    ],
    'okra': [
        { id: 'sonakshi-lxq-1033', name: 'Sonakshi LXQ-1033', category: 'Okra Seeds, Vegetable Seeds', image: 'images/Sonakshi-LXQ-1033.jpeg' },
        { id: 'sonakshi-lxq-859', name: 'Sonakshi (LXQ-859)', category: 'Okra Seeds, Vegetable Seeds', image: 'images/Sonakshi-LXQ-1033.jpeg' }
    ],
    'brinjal': [
        { id: 'monalias-smt-1953', name: 'Monalias (SMT-1953)', category: 'Brinjal Seeds, Vegetable Seeds', image: 'images/brinjalnew.jpg' },
        { id: 'udhav', name: 'Udhav', category: 'Brinjal Seeds, Vegetable Seeds', image: 'images/brinjalnew.jpg' }
    ]
};

// Category Information
const categoryInfo = {
    'vegetable': {
        name: 'Vegetable Seeds',
        image: 'images/vegetable-seeds.jpg',
        description: 'Explore our premium quality vegetable seeds – carefully selected to help farmers and gardeners grow healthier, stronger, and more productive vegetables. From cucumbers to tomatoes, we offer a diverse range of high-yield varieties.',
        tag: '🥕 Vegetable Seeds',
        icon: '🥕'
    },
    'field': {
        name: 'Field Crop Seeds',
        image: 'images/categories/fieldcropseeds.jpg',
        description: 'Boost your harvest with our certified field crop seeds for wheat, maize, rice, and more – trusted by farmers for quality and performance. High-yield varieties designed for commercial farming.',
        tag: '🌾 Field Crop Seeds',
        icon: '🌾'
    },
    'fodder': {
        name: 'Fodder Seeds',
        image: 'images/fodderseeds.jpg',
        description: 'High-quality fodder seeds for livestock nutrition. Our varieties provide excellent biomass production and nutritional value, ensuring healthy and productive livestock.',
        tag: '🌿 Fodder Seeds',
        icon: '🌿'
    },
    'tomato': {
        name: 'Tomato Seeds',
        image: 'images/tomatoseedsimage.jpg',
        description: 'Premium tomato seeds that deliver exceptional yield and quality. Our varieties are disease-resistant and produce firm, flavorful fruits perfect for fresh market and processing.',
        tag: '🍅 Tomato Seeds',
        icon: '🍅'
    },
    'cucumber': {
        name: 'Cucumber Seeds',
        image: 'images/celenacucumber2.jpg',
        description: 'High-yielding cucumber varieties with excellent disease resistance and uniform fruit size. Perfect for both commercial farming and home gardening.',
        tag: '🥒 Cucumber Seeds',
        icon: '🥒'
    },
    'chilli': {
        name: 'Chilli Seeds',
        image: 'images/chilliseeds.jpg',
        description: 'Premium chilli seeds that produce vibrant, uniform fruits with excellent pungency. Our varieties are known for high yield and strong disease resistance.',
        tag: '🌶️ Chilli Seeds',
        icon: '🌶️'
    },
    'okra': {
        name: 'Okra Seeds',
        image: 'images/sonakshinew.jpg',
        description: 'High-quality okra seeds that produce tender, uniform pods with excellent market appeal. Strong disease resistance and consistent performance across diverse growing conditions.',
        tag: '🥬 Okra Seeds',
        icon: '🥬'
    },
    'brinjal': {
        name: 'Brinjal Seeds',
        image: 'images/brinjalnew.jpg',
        description: 'Premium brinjal varieties that produce high-quality, uniform fruits with excellent market value. Strong disease resistance and high yield potential.',
        tag: '🍆 Brinjal Seeds',
        icon: '🍆'
    }
};

// Get category from URL
function getCategory() {
    const params = new URLSearchParams(window.location.search);
    return params.get('cat') || '';
}

// Load category page
function loadCategory() {
    const category = getCategory();
    const info = categoryInfo[category];
    const products = categoryProducts[category];

    if (!info || !products) {
        showError();
        return;
    }

    // Update page title
    document.getElementById('page-title').textContent = `${info.name} | Gentex Seeds`;

    // Update breadcrumb
    document.getElementById('category-name').textContent = info.name;

    // Update header
    document.getElementById('category-tag').textContent = info.tag;
    document.getElementById('category-title').textContent = info.name;
    document.getElementById('category-title-products').textContent = info.name;
    document.getElementById('category-description').textContent = info.description;
    document.getElementById('category-image').src = info.image;
    document.getElementById('category-image').alt = info.name;
    document.getElementById('product-count').textContent = products.length;

    // Render products
    renderProducts(products);
}

// Render products grid
function renderProducts(products) {
    const grid = document.getElementById('category-products-grid');
    
    if (!grid) return;

    if (products.length === 0) {
        grid.innerHTML = `
            <div class="category-empty">
                <div class="category-empty__icon">🌱</div>
                <h3 class="category-empty__title">No Products Found</h3>
                <p class="category-empty__text">There are no products in this category at the moment.</p>
                <a href="index.html#products" class="btn btn--primary">View All Products</a>
            </div>
        `;
        return;
    }

    grid.innerHTML = products.map(product => {
        const isTomato = product.category.toLowerCase().includes('tomato') || product.image.includes('tomatoseedsimage') || product.image.includes('blashblaze');
        const tomatoClass = isTomato ? ' product-card--tomato' : '';
        
        return `
        <article class="product-card${tomatoClass}">
            <div class="product-card__image">
                <img src="${product.image}" alt="${product.name}">
            </div>
            <div class="product-card__content">
                <p class="product-card__category">${product.category}</p>
                <h3 class="product-card__title">${product.name}</h3>
                <a href="product-detail.html?id=${product.id}" class="product-card__link">Read more</a>
            </div>
        </article>
    `;
    }).join('');
}

// Show error state
function showError() {
    const grid = document.getElementById('category-products-grid');
    if (grid) {
        grid.innerHTML = `
            <div class="category-empty">
                <div class="category-empty__icon">⚠️</div>
                <h3 class="category-empty__title">Category Not Found</h3>
                <p class="category-empty__text">The category you're looking for doesn't exist.</p>
                <a href="index.html#categories" class="btn btn--primary">Back to Categories</a>
            </div>
        `;
    }
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', loadCategory);

