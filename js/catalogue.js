/**
 * catalogue.js
 * Handles dynamic rendering, filtering, and searching for the catalogue.
 */

// Dummy data object structure
// Add your actual image filenames here to reflect your folder structure
window.catalogueData = {
    "Ac Milan kits": ["assets/Ac Milan kits/milan_home_24.jpg", "assets/Ac Milan kits/milan_away_retro.jpg"],
    "Anime kits": ["assets/Anime kits/blue_lock.png", "assets/Anime kits/naruto_fc.jpg"],
    "Argentina kits": ["assets/Argentina kits/arg_home_3_stars.webp", "assets/Argentina kits/arg_away_purple.jpg"],
    "Barca kits": ["assets/Barca kits/barca_home_24.jpg", "assets/Barca kits/messi_10_retro.png"],
    "Beckham kits": ["assets/Beckham kits/united_beckham_7.jpg", "assets/Beckham kits/real_madrid_23.jpg"],
    "Brazil kits": ["assets/Brazil kits/brazil_home_22.jpg", "assets/Brazil kits/neymar_10.jpg"],
    "CR7 Kits": ["assets/CR7 Kits/cr7_madrid.jpg", "assets/CR7 Kits/cr7_united.jpg", "assets/CR7 Kits/cr7_portugal.jpg"],
    "Cricket Kits": ["assets/Cricket Kits/india_wc_23.jpg"],
    "Full sleeve kits": ["assets/Full sleeve kits/arsenal_fullsleeve.jpg", "assets/Full sleeve kits/city_fullsleeve.jpg"],
    "Half sleeves kits": ["assets/Half sleeves kits/generic_half.jpg"],
    "Kaka kits": ["assets/Kaka kits/kaka_milan_22.jpg"],
    "Maldini kits": ["assets/Maldini kits/maldini_milan.jpg"],
    "Man united kits": ["assets/Man united kits/united_home.jpg", "assets/Man united kits/united_retro.jpg"],
    "Messi Kits": ["assets/Messi Kits/messi_psg.jpg", "assets/Messi Kits/messi_miami.jpg", "assets/Messi Kits/messi_arg.jpg"],
    "National team kits": ["assets/National team kits/france_home.jpg", "assets/National team kits/italy_home.jpg"],
    "Neymar Kits": ["assets/Neymar Kits/neymar_psg.jpg", "assets/Neymar Kits/neymar_brazil.jpg"],
    "Oversized kits": ["assets/Oversized kits/oversize_black.webp"],
    "Polo collar kits": ["assets/Polo collar kits/polo_madrid.jpg"],
    "Real Madrid kits": ["assets/Real Madrid kits/madrid_home_24.jpg", "assets/Real Madrid kits/madrid_away.jpg"],
    "Shorts": ["assets/Shorts/black_shorts.jpg", "assets/Shorts/white_shorts.jpg"],
    "Sleeveless kits": ["assets/Sleeveless kits/training_sleeveless.jpg"],
    "Special editions": ["assets/Special editions/dragon_retro.jpg", "assets/Special editions/golden_anniversary.webp"],
    "Zidane kits": ["assets/Zidane kits/zidane_france.jpg", "assets/Zidane kits/zidane_madrid.jpg"]
};

document.addEventListener("DOMContentLoaded", () => {
    
    // Config
    const whatsappBaseUrl = "https://wa.me/918891065870";

    const allJerseysGrid = document.getElementById("allJerseysGrid");
    const categorySectionsContainer = document.getElementById("categorySectionsContainer");
    const categoryFilters = document.getElementById("categoryFilters");
    const searchInput = document.getElementById("searchInput");
    
    // Flatten data for "All Jerseys" grid
    let allJerseys = [];

    // Helpers
    function getPriceForCategory(category) {
        const c = category.toLowerCase();
        if (["ac milan kits", "barca kits", "real madrid kits", "man united kits"].includes(c)) return "₹350";
        if (["cr7 kits", "messi kits", "neymar kits", "zidane kits", "kaka kits", "beckham kits", "maldini kits"].includes(c)) return "₹400";
        if (["national team kits"].includes(c)) return "₹320";
        if (["shorts", "sleeveless kits"].includes(c)) return "₹290";
        if (["special editions"].includes(c)) return "₹380";
        if (["oversized kits", "polo collar kits", "full sleeve kits", "half sleeves kits"].includes(c)) return "₹310";
        if (["anime kits", "cricket kits"].includes(c)) return "₹299";
        return "₹270"; // default
    }

    function generateJerseyName(path) {
        const filename = path.split('/').pop().split('.')[0];
        return filename.replace(/[_-]/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
    }

    function createSlug(str) {
        return str.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');
    }

    function getWhatsappLink(jerseyName) {
        const msg = encodeURIComponent(`Hi Footiq! I'm interested in ordering a jersey - ${jerseyName}`);
        return `${whatsappBaseUrl}?text=${msg}`;
    }

    // Build Data
    for (const [category, paths] of Object.entries(window.catalogueData)) {
        const slug = createSlug(category);
        const price = getPriceForCategory(category);
        
        // Add Filter Pill
        const pill = document.createElement("button");
        pill.className = "filter-pill";
        pill.dataset.category = slug;
        pill.innerText = category;
        categoryFilters.appendChild(pill);
        
        // Build Section for this category
        const section = document.createElement("div");
        section.className = "category-section";
        section.id = slug;
        section.dataset.category = slug;
        section.innerHTML = `
            <h2 class="category-section-title reveal">${category}</h2>
            <div class="jersey-grid" id="grid-${slug}"></div>
        `;
        categorySectionsContainer.appendChild(section);
        
        const sectionGrid = section.querySelector(".jersey-grid");
        
        paths.forEach(path => {
            const name = generateJerseyName(path);
            const jerseyObj = { category, slug, price, name, path };
            allJerseys.push(jerseyObj);
            
            // Render card in category section
            sectionGrid.appendChild(createJerseyCard(jerseyObj));
        });
    }

    // Render "All Jerseys" initial grid
    allJerseys.forEach(jersey => {
        allJerseysGrid.appendChild(createJerseyCard(jersey));
    });

    // Render Function
    function createJerseyCard({category, slug, price, name, path}) {
        const card = document.createElement("div");
        card.className = "jersey-card reveal";
        card.dataset.name = name.toLowerCase();
        card.dataset.category = slug;
        
        card.innerHTML = `
            <div class="jersey-img-wrap">
                <span class="jersey-badge">${category}</span>
                <img src="${path}" alt="${name}" loading="lazy" onerror="this.src='https://via.placeholder.com/400x500/111/1aff4e?text=No+Image'">
            </div>
            <div class="jersey-info">
                <h3 class="jersey-name">${name}</h3>
                <div class="jersey-price">${price}</div>
                <a href="${getWhatsappLink(name)}" target="_blank" class="btn btn-outline jersey-order-btn">
                    Order Now <i class="fa-brands fa-whatsapp" style="margin-left:5px;"></i>
                </a>
            </div>
        `;
        return card;
    }

    // Initialize Reveals for dynamically added elements
    const newReveals = document.querySelectorAll('.reveal');
    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });
    newReveals.forEach(el => revealObserver.observe(el));


    // Filtering Logic
    const pills = document.querySelectorAll(".filter-pill");
    const allJerseysSection = document.getElementById("allJerseysSection");
    
    pills.forEach(pill => {
        pill.addEventListener("click", () => {
            // Update active state
            pills.forEach(p => p.classList.remove("active"));
            pill.classList.add("active");
            
            const selectedCat = pill.dataset.category;
            
            // If "all", show top grid and hide section grids (or show everything)
            // The prompt says: "Clicking filters the grid by category"
            // For best UX: if "all", show the main allJerseysSection, and maybe show category sections as well?
            // "Show ALL jerseys from ALL subfolders in one masonry/grid layout first (this is the default view)"
            
            if (selectedCat === "all") {
                allJerseysSection.style.display = "block";
                document.querySelectorAll(".category-section").forEach(sec => sec.style.display = "block");
                
                // Show all cards in top grid
                document.querySelectorAll("#allJerseysGrid .jersey-card").forEach(card => card.style.display = "flex");
            } else {
                // Option A: Hide the top grid, scroll to the specific section
                allJerseysSection.style.display = "none";
                document.querySelectorAll(".category-section").forEach(sec => {
                    if (sec.dataset.category === selectedCat) {
                        sec.style.display = "block";
                    } else {
                        sec.style.display = "none";
                    }
                });
            }
        });
    });

    // Search Logic (filters the allJerseysGrid and specific sections)
    searchInput.addEventListener("input", (e) => {
        const term = e.target.value.toLowerCase();
        
        // Force "All" view when searching
        const allPill = document.querySelector('.filter-pill[data-category="all"]');
        if (term !== "" && !allPill.classList.contains("active")) {
            allPill.click(); 
        }

        // Filter the UI
        document.querySelectorAll(".jersey-card").forEach(card => {
            if (card.dataset.name.includes(term) || card.dataset.category.includes(term.replace(' ', '-'))) {
                card.style.display = "flex";
            } else {
                card.style.display = "none";
            }
        });
    });

    // Check hash for linking from home page (e.g. catalogue.html#messi-kits)
    if (window.location.hash) {
        const targetSlug = window.location.hash.substring(1);
        const targetPill = document.querySelector(`.filter-pill[data-category="${targetSlug}"]`);
        if (targetPill) {
            // Need a slight timeout for rendering
            setTimeout(() => {
                targetPill.click();
            }, 100);
        }
    }
});
