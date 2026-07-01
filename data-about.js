// data-about.js
// About page content

// Global book navigation function
// Global book navigation function
window.navigateBook = function(direction) {
    const state = window.bookState;
    if (!state) return;
    
    state.currentPage += direction;
    if (state.currentPage < 0) state.currentPage = state.totalPages - 1;
    if (state.currentPage >= state.totalPages) state.currentPage = 0;
    
    const spread = document.getElementById('bookSpread');
    const indicator = document.getElementById('bookIndicator');
    if (!spread || !indicator) return;
    
    // Save current scroll position
    const scrollY = window.scrollY;
    
    const crt = document.body.classList.contains('crt-mode');
    const pageNum = String(state.currentPage).padStart(2, '0');
    
    // Pre-load the image to get its dimensions
    const img = new Image();
    img.onload = function() {
        if (state.currentPage === 0) {
            spread.innerHTML = '<img src="book/00.png" alt="Front Cover" class="book-page" style="width:100%;height:auto;display:block;object-fit:contain;background:#000;">';
            indicator.textContent = crt ? 'FRONT COVER' : 'Front Cover';
        } else if (state.currentPage === 38) {
            spread.innerHTML = '<img src="book/38.png" alt="Back Cover" class="book-page" style="width:100%;height:auto;display:block;object-fit:contain;background:#000;">';
            indicator.textContent = crt ? 'BACK COVER' : 'Back Cover';
        } else {
            spread.innerHTML = '<img src="book/' + pageNum + '.png" alt="Page ' + state.currentPage + '" class="book-page" style="width:100%;height:auto;display:block;object-fit:contain;background:#000;">';
            indicator.textContent = crt ? 'PAGE ' + pageNum : 'Page ' + state.currentPage;
        }
        
        // Restore scroll position
        window.scrollTo({ top: scrollY, behavior: 'instant' });
    };
    
    // Set the image source to start loading
    if (state.currentPage === 0) {
        img.src = 'book/00.png';
    } else if (state.currentPage === 38) {
        img.src = 'book/38.png';
    } else {
        img.src = 'book/' + pageNum + '.png';
    }
};

// Handle click on book spread
window.handleBookClick = function(event) {
    event.preventDefault();
    event.stopPropagation();
    
    const spread = document.getElementById('bookSpread');
    if (!spread) return;
    
    const rect = spread.getBoundingClientRect();
    const clickX = event.clientX - rect.left;
    const spreadWidth = rect.width;
    
    // Left half = go back, right half = go forward
    if (clickX < spreadWidth / 2) {
        window.navigateBook(-1);
    } else {
        window.navigateBook(1);
    }
    
    return false;
};

function generateAboutPage() {
    const crt = document.body.classList.contains('crt-mode');
    
    // Initialize book state
    window.bookState = { currentPage: 0, totalPages: 39 };
    
    const bookHTML = `
    <h2>${crt ? 'PEDAGOGY: THE MAGIC UNIVERSE' : 'Pedagogy: The Magic Universe'}</h2>
    <p>${crt ? 'CANVAS MODEL CHILDREN\'S BOOK' : 'Canvas Model Children\'s Book'}</p>
    
    <div class="book-container">
        <div class="book-spread" id="bookSpread" style="cursor: pointer;">
            <img src="book/00.png" alt="Front Cover" class="book-page" style="width:100%;height:auto;display:block;object-fit:contain;background:#000;">
        </div>
        <div class="book-controls">
            <span class="book-page-indicator" id="bookIndicator">${crt ? 'FRONT COVER' : 'Front Cover'}</span>
            <span class="book-hint">${crt ? ' [ CLICK LEFT/RIGHT TO NAVIGATE ]' : ' — Click left/right to navigate'}</span>
        </div>
    </div>
    
    <style>
        .book-container {
            margin: 2rem 0;
            padding: 0;
            background: ${crt ? '#030803' : 'rgba(8, 8, 22, 0.65)'};
            border: 1px solid ${crt ? '#00cc33' : 'rgba(130, 110, 240, 0.2)'};
            border-radius: ${crt ? '0' : '18px'};
            overflow: hidden;
        }
        .book-spread {
            width: 100%;
            background: #000;
            position: relative;
            user-select: none;
            -webkit-user-select: none;
        }
        .book-spread::after {
            content: '';
            position: absolute;
            top: 0;
            bottom: 0;
            left: 50%;
            width: 1px;
            background: rgba(255,255,255,0.08);
            pointer-events: none;
        }
        .book-controls {
            text-align: center;
            padding: 1rem;
        }
        .book-page-indicator {
            font-family: ${crt ? "'Share Tech Mono', monospace" : 'inherit'};
            font-size: 0.85rem;
            color: ${crt ? '#00ff41' : 'var(--text-light)'};
            text-shadow: ${crt ? '0 0 6px rgba(0,255,65,0.5)' : 'none'};
            letter-spacing: ${crt ? '0.1em' : 'normal'};
            text-transform: ${crt ? 'uppercase' : 'none'};
        }
        .book-hint {
            font-family: ${crt ? "'Share Tech Mono', monospace" : 'inherit'};
            font-size: 0.7rem;
            color: ${crt ? '#00cc33' : 'var(--text-dim)'};
            letter-spacing: ${crt ? '0.08em' : 'normal'};
            text-transform: ${crt ? 'uppercase' : 'none'};
        }
    </style>`;
    
    const infoHTML = crt ? `
        <h2>ABOUT :: CANVAS MODEL</h2>
        <p>EMERGENCE CANVAS MODEL UNIFIED FRAMEWORK derives all known physics from eight primitives and a steering primitive on a pre-geometric canvas. The Emergence series comprises 100+ papers solving the deepest open problems, including all seven Millennium Prize Problems in Canvas Temporal Mathematics.</p>
        <p>FOUR DYNAMIC PRIMITIVES generate change: Order, Amplitude, Acceleration, Polarity.<br>
        FOUR PROPERTY PRIMITIVES select structure: Dimension, Angle, Chirality, Charge.<br>
        TWO FEED-MODES: Steering and Driving. Everything else emerges.</p>
        <div class="about-card">
            <strong>// CONTACT & RESOURCES</strong>
            <p style="margin:0;font-size:0.82rem;line-height:2;">
                > X/TWITTER: <a href="https://x.com/eolvvin" target="_blank">@EOLVVIN</a><br>
                > ZENODO: <a href="https://zenodo.org/search?q=metadata.creators.person_or_org.name%3A%22Ong%2C%20Edwin%22&l=list&p=1&s=20&sort=newest" target="_blank">EOLVVIN</a><br>
                > ALL PREPRINTS OPEN ACCESS.
            </p>
        </div>`
        : `
        <h2>About the Canvas Model</h2>
        <p><strong>Emergence Canvas Model Unified Framework</strong> derives all known physics from eight primitives and a steering primitive on a pre-geometric canvas. The Emergence series comprises 100+ papers solving the deepest open problems, including all seven Millennium Prize Problems in Canvas Temporal Mathematics.</p>
        <p><strong>Key Insight:</strong> Four dynamic primitives generate change (Order, Amplitude, Acceleration, Polarity) and four property primitives select structure (Dimension, Angle, Chirality, Charge), including two feed-modes Steering and Driving. Everything else emerges.</p>
        <div class="stat-card" style="margin:2rem 0;"><strong>📧 Contact:</strong> <a href="https://x.com/eolvvin" target="_blank" style="color:cyan">@eolvvin</a><br>🌌 Zenodo: <a href="https://zenodo.org/search?q=metadata.creators.person_or_org.name%3A%22Ong%2C%20Edwin%22&l=list&p=1&s=20&sort=newest" target="_blank" style="color:cyan">eolvvin</a><br>📚 All preprints open access.</div>`;
    
    // return infoHTML;
	return infoHTML + bookHTML
}

window.generateAboutPage = generateAboutPage;