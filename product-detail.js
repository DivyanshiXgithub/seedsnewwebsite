// Product Data
const products = {
    'kayoki': {
        name: 'Kayoki',
        category: 'Cucumber Seeds, Vegetable Seeds',
        image: 'images/celenacucumber2.jpg',
        description: `
            <p><strong>Kayoki</strong> is a premium hybrid cucumber variety from Gentex Seeds, designed for exceptional yield and quality. This variety is perfect for both commercial farming and home gardening.</p>
            <p>Key features include excellent disease resistance, uniform fruit size, and high productivity. The fruits are crisp, flavorful, and ideal for fresh consumption or processing.</p>
            <p>With <strong>Gentex Seeds'</strong> commitment to quality, Kayoki cucumber seeds ensure high germination rates and consistent performance across diverse growing conditions.</p>
        `
    },
    'celena': {
        name: 'Celena',
        category: 'Cucumber Seeds, Vegetable Seeds',
        image: 'images/celenacucumber2.jpg',
        description: `
            <p><strong>Celena</strong> is a high-performing cucumber hybrid that delivers outstanding results for farmers seeking superior quality and yield.</p>
            <p>This variety features excellent adaptability to various climates, strong disease resistance, and produces uniform, high-quality fruits. Perfect for both fresh market and processing industries.</p>
            <p>Trusted by farmers nationwide, Celena from <strong>Gentex Seeds</strong> represents our commitment to agricultural excellence and farmer success.</p>
        `
    },
    'sonakshi-lxq-1033': {
        name: 'Sonakshi LXQ-1033',
        category: 'Okra Seeds, Vegetable Seeds',
        image: 'images/sonakshinew.jpg',
        description: `
            <p><strong>Sonakshi LXQ-1033</strong> is a premium okra hybrid variety that offers exceptional yield and quality for commercial cultivation.</p>
            <p>This variety produces tender, uniform pods with excellent market appeal. It features strong disease resistance and adapts well to various growing conditions.</p>
            <p>With <strong>Gentex Seeds'</strong> advanced breeding technology, Sonakshi LXQ-1033 ensures consistent performance and profitability for farmers.</p>
        `
    },
    'sonakshi-lxq-859': {
        name: 'Sonakshi (LXQ-859)',
        category: 'Okra Seeds, Vegetable Seeds',
        image: 'images/sonakshinew.jpg',
        description: `
            <p><strong>Sonakshi (LXQ-859)</strong> is a high-yielding okra hybrid that delivers superior quality pods for the market.</p>
            <p>This variety is known for its excellent pod quality, uniform size, and strong plant vigor. It performs exceptionally well in diverse climatic conditions.</p>
            <p>Farmers trust <strong>Gentex Seeds'</strong> Sonakshi (LXQ-859) for its reliability and consistent high yields season after season.</p>
        `
    },
    'monalias-smt-1953': {
        name: 'Monalias (SMT-1953)',
        category: 'Brinjal Seeds, Vegetable Seeds',
        image: 'images/brinjalnew.jpg',
        description: `
            <p><strong>Monalias (SMT-1953)</strong> is a premium brinjal hybrid variety that produces high-quality, uniform fruits with excellent market value.</p>
            <p>This variety features strong disease resistance, high yield potential, and produces glossy, attractive fruits that are perfect for fresh market sales.</p>
            <p>With <strong>Gentex Seeds'</strong> commitment to quality, Monalias (SMT-1953) ensures farmers achieve maximum profitability and success.</p>
        `
    },
    'udhav': {
        name: 'Udhav',
        category: 'Brinjal Seeds, Vegetable Seeds',
        image: 'images/brinjalnew.jpg',
        description: `
            <p><strong>Udhav</strong> is an excellent brinjal variety that combines high yield with superior fruit quality and disease resistance.</p>
            <p>This variety produces uniform, glossy fruits that are highly valued in the market. It adapts well to various growing conditions and delivers consistent results.</p>
            <p>Trusted by farmers across India, <strong>Gentex Seeds'</strong> Udhav represents our dedication to agricultural innovation and farmer prosperity.</p>
        `
    },
    'jolly': {
        name: 'Jolly',
        category: 'Tomato Seeds, Vegetable Seeds',
        image: 'images/tomatoseedsimage.jpg',
        description: `
            <p><strong>Jolly</strong> is a premium tomato hybrid variety that delivers exceptional yield and quality for commercial growers.</p>
            <p>This variety produces firm, uniform fruits with excellent shelf life and market appeal. It features strong disease resistance and adapts to various growing conditions.</p>
            <p>With <strong>Gentex Seeds'</strong> advanced breeding, Jolly ensures farmers achieve maximum productivity and profitability.</p>
        `
    },
    'blash-blaze-lq-116': {
        name: 'Blash / Blaze (LQ-116)',
        category: 'Tomato Seeds, Vegetable Seeds',
        image: 'images/blashblaze.jpg',
        description: `
            <p><strong>Blash / Blaze (LQ-116)</strong> is a high-performing tomato hybrid that offers outstanding yield and quality for farmers.</p>
            <p>This variety produces uniform, firm fruits with excellent color and flavor. It features strong disease resistance and performs well in diverse climates.</p>
            <p>Farmers nationwide trust <strong>Gentex Seeds'</strong> Blash / Blaze (LQ-116) for its reliability and consistent high yields.</p>
        `
    },
    'remi-lx-958': {
        name: 'Remi LX–958',
        category: 'Chilly Seeds, Vegetable Seeds',
        image: 'images/chilliseeds.jpg',
        description: `
            <p><strong>Remi LX–958</strong> is a premium chilli hybrid variety that delivers exceptional yield and quality for commercial cultivation.</p>
            <p>This variety produces uniform, vibrant fruits with excellent pungency and market appeal. It features strong disease resistance and high productivity.</p>
            <p>With <strong>Gentex Seeds'</strong> commitment to excellence, Remi LX–958 ensures farmers achieve maximum profitability and success.</p>
        `
    },
    'camry-lx-344': {
        name: 'Camry (LX-344)',
        category: 'Chilly Seeds, Vegetable Seeds',
        image: 'images/chilliseeds.jpg',
        description: `
            <p><strong>Camry (LX-344)</strong> is a high-yielding chilli hybrid that offers superior quality and performance for farmers.</p>
            <p>This variety produces uniform, glossy fruits with excellent color and pungency. It features strong plant vigor and adapts well to various growing conditions.</p>
            <p>Trusted by farmers across India, <strong>Gentex Seeds'</strong> Camry (LX-344) represents our dedication to agricultural innovation.</p>
        `
    },
    'maya': {
        name: 'Maya',
        category: 'Chilly Seeds, Vegetable Seeds',
        image: 'images/chilliseeds.jpg',
        description: `
            <p><strong>Maya</strong> is an excellent chilli variety that combines high yield with superior fruit quality and disease resistance.</p>
            <p>This variety produces vibrant, uniform fruits that are highly valued in the market. It performs exceptionally well in diverse climatic conditions.</p>
            <p>With <strong>Gentex Seeds'</strong> advanced breeding technology, Maya ensures consistent performance and profitability for farmers.</p>
        `
    },
    'balraj-mustard': {
        name: 'Balraj Mustard Seeds',
        category: 'Field Crop Seeds',
        image: 'images/mustardseeds.webp',
        description: `
            <p><strong>Balraj Mustard Seeds</strong> is a premium variety that delivers exceptional yield and quality for commercial mustard cultivation.</p>
            <p>This variety features excellent oil content, strong disease resistance, and adapts well to various soil and climatic conditions. It produces uniform, high-quality seeds.</p>
            <p>With <strong>Gentex Seeds'</strong> commitment to quality, Balraj Mustard ensures farmers achieve maximum profitability and success.</p>
        `
    },
    'hd-3041-mustard': {
        name: 'HD-3041 Mustard Seeds',
        category: 'Field Crop Seeds',
        image: 'images/mustardseeds.webp',
        description: `
            <p><strong>HD-3041 Mustard Seeds</strong> is a high-yielding variety that offers superior quality and performance for farmers.</p>
            <p>This variety produces excellent oil content and adapts well to diverse growing conditions. It features strong disease resistance and consistent yields.</p>
            <p>Trusted by farmers nationwide, <strong>Gentex Seeds'</strong> HD-3041 represents our dedication to agricultural excellence.</p>
        `
    },
    'hd-3031-mustard': {
        name: 'HD-3031 Mustard Seeds',
        category: 'Field Crop Seeds',
        image: 'images/mustardseeds.webp',
        description: `
            <p><strong>HD-3031 Mustard Seeds</strong> is a premium variety that delivers outstanding results for commercial mustard cultivation.</p>
            <p>This variety features excellent yield potential, high oil content, and strong adaptability. It produces uniform, high-quality seeds with excellent market value.</p>
            <p>With <strong>Gentex Seeds'</strong> advanced breeding, HD-3031 ensures farmers achieve maximum productivity and profitability.</p>
        `
    },
    'gs-662-maize': {
        name: 'GS-662 Hybrid Maize Seeds',
        category: 'Field Crop Seeds',
        image: 'images/maizeseeds.webp',
        description: `
            <p><strong>GS-662 Hybrid Maize Seeds</strong> is a high-performing hybrid variety that delivers exceptional yield and quality.</p>
            <p>This variety features excellent grain quality, strong disease resistance, and adapts well to various growing conditions. It produces uniform, high-yielding plants.</p>
            <p>Farmers trust <strong>Gentex Seeds'</strong> GS-662 for its reliability and consistent high yields season after season.</p>
        `
    },
    'gs-808-maize': {
        name: 'GS-808 Hybrid Maize Seeds',
        category: 'Field Crop Seeds',
        image: 'images/maizeseeds.webp',
        description: `
            <p><strong>GS-808 Hybrid Maize Seeds</strong> is a premium hybrid variety that offers outstanding yield and quality for commercial maize cultivation.</p>
            <p>This variety produces excellent grain quality with strong disease resistance. It adapts well to diverse climates and delivers consistent high yields.</p>
            <p>With <strong>Gentex Seeds'</strong> commitment to excellence, GS-808 ensures farmers achieve maximum profitability and success.</p>
        `
    },
    'gs-999-maize': {
        name: 'GS-999 Hybrid Maize Seeds',
        category: 'Field Crop Seeds',
        image: 'images/maizeseeds.webp',
        description: `
            <p><strong>GS-999 Hybrid Maize Seeds</strong> is a high-yielding hybrid variety that delivers superior quality and performance.</p>
            <p>This variety features excellent grain quality, strong plant vigor, and adapts well to various soil and climatic conditions. It produces uniform, high-quality grains.</p>
            <p>Trusted by farmers across India, <strong>Gentex Seeds'</strong> GS-999 represents our dedication to agricultural innovation.</p>
        `
    },
    'gs-335-maize': {
        name: 'GS-335 Hybrid Maize Seeds',
        category: 'Field Crop Seeds',
        image: 'images/maizeseeds.webp',
        description: `
            <p><strong>GS-335 Hybrid Maize Seeds</strong> is a premium hybrid variety that offers exceptional yield and quality for farmers.</p>
            <p>This variety produces excellent grain quality with strong disease resistance. It performs exceptionally well in diverse growing conditions and delivers consistent results.</p>
            <p>With <strong>Gentex Seeds'</strong> advanced breeding technology, GS-335 ensures farmers achieve maximum productivity and profitability.</p>
        `
    },
    'g-888-plus-maize': {
        name: 'G-888+ Hybrid Maize Seeds',
        category: 'Field Crop Seeds',
        image: 'images/maizeseeds.webp',
        description: `
            <p><strong>G-888+ Hybrid Maize Seeds</strong> is a high-performing hybrid variety that delivers outstanding yield and quality.</p>
            <p>This variety features excellent grain quality, strong plant vigor, and adapts well to various growing conditions. It produces uniform, high-yielding plants.</p>
            <p>Farmers nationwide trust <strong>Gentex Seeds'</strong> G-888+ for its reliability and consistent high yields.</p>
        `
    },
    'g-888-maize': {
        name: 'G-888 Hybrid Maize Seeds',
        category: 'Field Crop Seeds',
        image: 'images/maizeseeds.webp',
        description: `
            <p><strong>G-888 Hybrid Maize Seeds</strong> is a premium hybrid variety that offers exceptional yield and quality for commercial maize cultivation.</p>
            <p>This variety produces excellent grain quality with strong disease resistance. It adapts well to diverse climates and delivers consistent high yields.</p>
            <p>With <strong>Gentex Seeds'</strong> commitment to quality, G-888 ensures farmers achieve maximum profitability and success.</p>
        `
    },
    'g-555-maize': {
        name: 'G-555 Hybrid Maize Seeds',
        category: 'Field Crop Seeds',
        image: 'images/maizeseeds.webp',
        description: `
            <p><strong>G-555 Hybrid Maize Seeds</strong> is a high-yielding hybrid variety that delivers superior quality and performance.</p>
            <p>This variety features excellent grain quality, strong plant vigor, and adapts well to various soil and climatic conditions. It produces uniform, high-quality grains.</p>
            <p>Trusted by farmers across India, <strong>Gentex Seeds'</strong> G-555 represents our dedication to agricultural excellence.</p>
        `
    },
    'california-grass': {
        name: 'California Grass (Annual Rye Grass)',
        category: 'Fodder Seeds',
        image: 'images/californiagrassnew.jpg',
        description: `
            <p><strong>California Grass (Annual Rye Grass)</strong> is an excellent fodder variety that provides high-quality nutrition for livestock.</p>
            <p>This variety features rapid growth, high biomass production, and excellent nutritional value. It adapts well to various soil conditions and delivers consistent yields.</p>
            <p>With <strong>Gentex Seeds'</strong> commitment to quality, California Grass ensures farmers achieve maximum productivity for their livestock.</p>
        `
    },
    'missile-bajra': {
        name: 'Missile Hybrid Bajra',
        category: 'Fodder Seeds',
        image: 'images/bajraseeds.jpg',
        description: `
            <p><strong>Missile Hybrid Bajra</strong> is a premium fodder variety that delivers exceptional yield and quality for livestock feed.</p>
            <p>This variety produces high biomass with excellent nutritional content. It features strong disease resistance and adapts well to diverse growing conditions.</p>
            <p>Farmers trust <strong>Gentex Seeds'</strong> Missile Hybrid Bajra for its reliability and consistent high yields.</p>
        `
    },
    'poshan-wonder-bajra': {
        name: 'Poshan Wonder Hybrid Bajra',
        category: 'Fodder Seeds',
        image: 'images/bajraseeds.jpg',
        description: `
            <p><strong>Poshan Wonder Hybrid Bajra</strong> is a high-yielding fodder variety that offers superior quality and nutrition for livestock.</p>
            <p>This variety features excellent biomass production, high nutritional value, and strong adaptability. It performs exceptionally well in various climatic conditions.</p>
            <p>With <strong>Gentex Seeds'</strong> advanced breeding, Poshan Wonder ensures farmers achieve maximum productivity and livestock health.</p>
        `
    },
    'elephanta-grass': {
        name: 'Elephanta Grass – High Protein Grass',
        category: 'Fodder Seeds',
        image: 'images/elephantagrassnew.jpg',
        description: `
            <p><strong>Elephanta Grass – High Protein Grass</strong> is a premium fodder variety that provides exceptional nutrition for livestock.</p>
            <p>This variety features high protein content, excellent biomass production, and strong disease resistance. It adapts well to various soil conditions and delivers consistent yields.</p>
            <p>With <strong>Gentex Seeds'</strong> commitment to quality, Elephanta Grass ensures farmers achieve maximum productivity and livestock health.</p>
        `
    },
    'godhan-sorghum': {
        name: 'Godhan Sorghum Sudan Grass',
        category: 'Fodder Seeds',
        image: 'images/californiagrass.webp',
        description: `
            <p><strong>Godhan Sorghum Sudan Grass</strong> is a high-yielding fodder variety that offers superior quality and nutrition for livestock.</p>
            <p>This variety produces excellent biomass with high nutritional value. It features strong disease resistance and adapts well to diverse growing conditions.</p>
            <p>Farmers trust <strong>Gentex Seeds'</strong> Godhan Sorghum for its reliability and consistent high yields.</p>
        `
    },
    'nandi-white-sorghum': {
        name: 'Nandi (White) Sorghum Sudan Grass',
        category: 'Fodder Seeds',
        image: 'images/californiagrass.webp',
        description: `
            <p><strong>Nandi (White) Sorghum Sudan Grass</strong> is a premium fodder variety that delivers exceptional yield and quality for livestock feed.</p>
            <p>This variety features excellent biomass production, high nutritional content, and strong adaptability. It performs exceptionally well in various climatic conditions.</p>
            <p>With <strong>Gentex Seeds'</strong> advanced breeding technology, Nandi (White) ensures farmers achieve maximum productivity and livestock health.</p>
        `
    },
    'nandi-red-sorghum': {
        name: 'Nandi (Red) Sorghum Sudan Grass',
        category: 'Fodder Seeds',
        image: 'images/californiagrass.webp',
        description: `
            <p><strong>Nandi (Red) Sorghum Sudan Grass</strong> is a high-yielding fodder variety that offers superior quality and nutrition for livestock.</p>
            <p>This variety produces excellent biomass with high nutritional value. It features strong disease resistance and adapts well to diverse growing conditions.</p>
            <p>Trusted by farmers across India, <strong>Gentex Seeds'</strong> Nandi (Red) represents our dedication to agricultural excellence.</p>
        `
    },
    'gs-501-sorghum': {
        name: 'GS-501 (Red) Sorghum Sudan Grass',
        category: 'Fodder Seeds',
        image: 'images/californiagrass.webp',
        description: `
            <p><strong>GS-501 (Red) Sorghum Sudan Grass</strong> is a premium fodder variety that delivers exceptional yield and quality for livestock feed.</p>
            <p>This variety features excellent biomass production, high nutritional content, and strong adaptability. It performs exceptionally well in various climatic conditions.</p>
            <p>With <strong>Gentex Seeds'</strong> commitment to quality, GS-501 ensures farmers achieve maximum productivity and livestock health.</p>
        `
    },
    'gentex-32-sorghum': {
        name: 'Gentex-32 Hybrid Sorghum Grass',
        category: 'Fodder Seeds',
        image: 'images/californiagrass.webp',
        description: `
            <p><strong>Gentex-32 Hybrid Sorghum Grass</strong> is a high-performing fodder hybrid that delivers outstanding yield and quality.</p>
            <p>This variety produces excellent biomass with high nutritional value. It features strong disease resistance and adapts well to diverse growing conditions.</p>
            <p>Farmers nationwide trust <strong>Gentex Seeds'</strong> Gentex-32 for its reliability and consistent high yields.</p>
        `
    },
    'dairy-don-sorghum': {
        name: 'Dairy Don Hybrid Sorghum Grass',
        category: 'Fodder Seeds',
        image: 'images/californiagrass.webp',
        description: `
            <p><strong>Dairy Don Hybrid Sorghum Grass</strong> is a premium fodder variety specifically designed for dairy farming needs.</p>
            <p>This variety features excellent biomass production, high nutritional value, and strong adaptability. It performs exceptionally well in various climatic conditions.</p>
            <p>With <strong>Gentex Seeds'</strong> advanced breeding, Dairy Don ensures farmers achieve maximum productivity and optimal dairy cow nutrition.</p>
        `
    }
};

// Get product ID from URL
function getProductId() {
    const params = new URLSearchParams(window.location.search);
    return params.get('id') || '';
}

// Load product data
function loadProduct() {
    const productId = getProductId();
    const product = products[productId];

    if (!product) {
        document.querySelector('.product-detail__content').innerHTML = `
            <div class="product-detail__loading"></div>
            <h1>Product Not Found</h1>
            <p>The product you're looking for doesn't exist.</p>
            <a href="index.html#products" class="btn btn--primary">Back to Products</a>
        `;
        return;
    }

    // Update page title
    document.getElementById('page-title').textContent = `${product.name} | Gentex Seeds`;

    // Update breadcrumb
    const categoryParts = product.category.split(',');
    document.getElementById('breadcrumb-category').textContent = categoryParts[0];
    document.getElementById('breadcrumb-name').textContent = product.name;

    // Update product image
    const productImage = document.getElementById('product-image');
    productImage.src = product.image;
    productImage.alt = product.name;

    // Update product details
    document.getElementById('product-category').textContent = product.category;
    document.getElementById('product-title').textContent = product.name;
    document.getElementById('product-description').innerHTML = product.description;
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', loadProduct);

