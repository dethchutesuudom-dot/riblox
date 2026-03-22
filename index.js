document.addEventListener('DOMContentLoaded', () => {

    // --- Data: In a real app, this would come from a server/API ---
    const guides = [
        { title: 'Elden Ring', category: 'Action RPG', price: '$19.99', img: 'https://placehold.co/600x400/ff6347/ffffff?text=Elden+Ring' },
        { title: 'Baldur\'s Gate 3', category: 'CRPG', price: '$24.99', img: 'https://placehold.co/600x400/8a2be2/ffffff?text=BG3' },
        { title: 'Cyberpunk 2077', category: 'Action RPG', price: '$14.99', img: 'https://placehold.co/600x400/ffd700/000000?text=Cyberpunk' },
        { title: 'Helldivers 2', category: 'Co-op Shooter', price: '$9.99', img: 'https://placehold.co/600x400/f0e68c/000000?text=Helldivers+2' },
        { title: 'Starfield', category: 'Sci-Fi RPG', price: '$12.99', img: 'https://placehold.co/600x400/4682b4/ffffff?text=Starfield' },
        { title: 'The Witcher 3', category: 'Action RPG', price: '$9.99', img: 'https://placehold.co/600x400/dc143c/ffffff?text=Witcher+3' },
        { title: 'Valorant', category: 'Tactical Shooter', price: 'Free', img: 'https://placehold.co/600x400/fa8072/000000?text=Valorant' },
        { title: 'Lethal Company', category: 'Co-op Horror', price: '$4.99', img: 'https://placehold.co/600x400/ff8c00/000000?text=Lethal+Co' },
    ];

    const guideGrid = document.getElementById('guideGrid');
    const searchInput = document.getElementById('searchInput');

    // --- Function to render guides to the page ---
    function renderGuides(guidesToRender) {
        guideGrid.innerHTML = ''; // Clear existing guides

        if (guidesToRender.length === 0) {
 guideGrid.innerHTML = '<p style="color: #aaa; grid-column: 1 / -1; text-align: center;">No guides found.</p>';
 return;
        }

        guidesToRender.forEach(guide => {
 const card = `
 <div class="guide-card">
 <img src="${guide.img}" alt="${guide.title}">
 <div class="card-content">
 <h3>${guide.title}</h3>
 <p class="game-category">${guide.category}</p>
 <div class="card-footer">
 <span class="guide-price">${guide.price}</span>
 <a href="#" class="view-btn">View Guide</a>
 </div>
 </div>
 </div>
 `;
 guideGrid.innerHTML += card;
        });
    }

    // --- Function to handle search filtering ---
    function filterGuides() {
        const searchTerm = searchInput.value.toLowerCase();
        const filteredGuides = guides.filter(guide => 
 guide.title.toLowerCase().includes(searchTerm)
        );
        renderGuides(filteredGuides);
    }

    // --- Event Listeners ---
    searchInput.addEventListener('input', filterGuides);

    // --- Initial Render ---
    renderGuides(guides);
});