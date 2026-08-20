// data-about.js
// About page content

function generateAboutPage() {
    const crt = document.body.classList.contains('crt-mode');
    
    const infoHTML = crt ? `
        <h2>ABOUT :: EMERGENCE CANVAS FRAMEWORK</h2>
        <p>The Emergence Canvas Framework is a mathematical-physics programme investigating fundamental unification. The programme derives mathematical structure from finite recurrence geometry, common vacuum dynamics, chiral matter capacity, relativistic localization, and covariant cosmology.</p>
        <p>The current programme state is documented in the Synthesis Paper and the five core mathematical papers. Earlier formulations are archived as historical record. The programme maintains explicit provenance boundaries: every result is classified as Derived, Computed, Conditional, Constitutive, No-Go, or Open.</p>
        <div class="about-card">
            <strong>// CONTACT & RESOURCES</strong>
            <p style="margin:0;font-size:0.82rem;line-height:2;">
                > X/TWITTER: <a href="https://x.com/eolvvin" target="_blank">@EOLVVIN</a><br>
                > ZENODO: <a href="https://zenodo.org/communities/emergence" target="_blank">ZENODO.ORG/COMMUNITIES/EMERGENCE</a><br>
                > ALL PAPERS OPEN ACCESS.
            </p>
        </div>`
        : `
        <h2>About the Emergence Canvas Framework</h2>
        <p>The Emergence Canvas Framework is a mathematical-physics programme investigating fundamental unification. The programme derives mathematical structure from finite recurrence geometry, common vacuum dynamics, chiral matter capacity, relativistic localization, and covariant cosmology.</p>
        <p>The current programme state is documented in the Synthesis Paper and the five core mathematical papers. Earlier formulations are archived as historical record. The programme maintains explicit provenance boundaries: every result is classified as Derived, Computed, Conditional, Constitutive, No-Go, or Open.</p>
        <div class="stat-card" style="margin:2rem 0;">
            <strong>📧 Contact:</strong> <a href="https://x.com/eolvvin" target="_blank" style="color:cyan">@eolvvin</a><br>
            🌌 Zenodo: <a href="https://zenodo.org/communities/emergence" target="_blank" style="color:cyan">community/emergence</a><br>
            📚 All papers open access.
        </div>`;
    
    return infoHTML;
}

window.generateAboutPage = generateAboutPage;