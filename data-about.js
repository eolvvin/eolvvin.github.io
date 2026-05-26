// data-about.js
// About page content

function generateAboutPage() {
    const crt = document.body.classList.contains('crt-mode');
    
    if (crt) {
        return `<h2>ABOUT :: CANVAS MODEL</h2>
        <p>EDWIN ONG'S EMERGENCE UNIFIED FRAMEWORK derives all known physics from eight primitives and a steering primitive on a pre-geometric canvas. The Emergence series comprises 100+ papers solving the deepest open problems, including all seven Millennium Prize Problems in Canvas Temporal Mathematics.</p>
        <p>FOUR DYNAMIC PRIMITIVES generate change: Order, Amplitude, Acceleration, Polarity.<br>
        FOUR PROPERTY PRIMITIVES select structure: Dimension, Angle, Chirality, Charge.<br>
        TWO FEED-MODES: Steering and Driving. Everything else emerges.</p>
        <div class="about-card">
            <strong>// CONTACT & RESOURCES</strong>
            <p style="margin:0;font-size:0.82rem;line-height:2;">
                > X/TWITTER: <a href="https://x.com/eolvvin" target="_blank">@EOLVVIN</a><br>
                > ZENODO: <a href="https://zenodo.org/communities/emergence" target="_blank">ZENODO.ORG/COMMUNITIES/EMERGENCE</a><br>
                > ALL PREPRINTS OPEN ACCESS.
            </p>
        </div>`;
    }
    
    return `<h2>About the Canvas Model</h2><p><strong>Edwin Ong's Emergence Unified Framework – The Canvas Model</strong> derives all known physics from eight primitives and a steering primitive on a pre-geometric canvas. The Emergence series comprises 100+ papers solving the deepest open problems, including all seven Millennium Prize Problems in Canvas Temporal Mathematics.</p>
    <p><strong>Key Insight:</strong> Four dynamic primitives generate change (Order, Amplitude, Acceleration, Polarity) and four property primitives select structure (Dimension, Angle, Chirality, Charge), including two feed-modes Steering and Driving. Everything else emerges.</p>
    <div class="stat-card" style="margin:2rem 0;"><strong>📧 Contact:</strong> <a href="https://x.com/eolvvin" target="_blank" style="color:cyan">@eolvvin</a><br>🌌 Zenodo: <a href="https://zenodo.org/communities/emergence" target="_blank" style="color:cyan">community/emergence</a><br>📚 All preprints open access.</div>`;
}

window.generateAboutPage = generateAboutPage;