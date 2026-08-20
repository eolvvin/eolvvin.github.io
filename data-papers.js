// data-papers.js
// Papers page content — current programme publications

const papersMainPaper = [
    { title: "Emergence Canvas Model Synthesis Paper", doi: "10.5281/zenodo.22032586", desc: "The integrated mathematical architecture of the full programme." }
];

const papersCorePapers = [
    { title: "Paper I: Finite Recurrence Geometry from Coprime Periodic Structure", doi: "10.5281/zenodo.22015747", desc: "CRT factorization, Weyl algebra, discrete calculus and Dirichlet metric." },
    { title: "Paper II: From a Five-Dimensional Internal Module to Chiral Matter Capacity", doi: "10.5281/zenodo.22015844", desc: "Spin(10) from C5 via CAR quantization, anomaly equations, one-family representation package." },
    { title: "Paper III: Order, Event Propagation, and the Conditional Relativistic Spacetime Bridge", doi: "10.5281/zenodo.22016014", desc: "Order, spectral dimension, hyperbolicity and Dirac structure." },
    { title: "Paper IV: Relativistic Localization and Stable Particle-Like States", doi: "10.5281/zenodo.22016165", desc: "Broken-vacuum Dirac-scalar bound states, collective-coordinate mass, spectral stability." },
    { title: "Paper V: A Covariant Canvas Cosmology", doi: "10.5281/zenodo.22016432", desc: "Scalar-tensor action, de Sitter phase structure, Einstein-Boltzmann evolution, likelihoods." }
];

const papersPostBinder = [
    { title: "Post-Binder Mathematical Progress", doi: "10.5281/zenodo.22032586", desc: "Common-vacuum tests, emergent signature, gauge-matter closure, gravity and generation no-go results, revised research frontier." }
];

const papersCompanion = [
    { title: "A Discrete Wilson Line Origin for a Least-Common-Multiple Mass Spectrum", doi: "10.5281/zenodo.21969024", desc: "Companion paper on discrete Wilson lines and mass spectrum structure." }
];

function renderPaperGroup(title, papers) {
    const crt = document.body.classList.contains('crt-mode');
    if (!papers.length) return '';
    let html = '<h3 style="margin: 1.8rem 0 0.6rem 0; font-size: 1.6rem;">' + (crt ? title.toUpperCase() : title) + '</h3>';
    html += '<div class="volume-block"><div class="paper-list">';
    papers.forEach(function(p) {
        var doiUrl = 'https://doi.org/' + p.doi;
        var checkMark = crt ? '' : '✅ ';
        html += '<div>';
        html += '<a href="' + doiUrl + '" class="paper-link" target="_blank" rel="noopener noreferrer">' + checkMark + (crt ? '> ' + p.title.toUpperCase() : p.title) + '</a>';
        html += '<span style="display:block;font-size:0.78rem;color:' + (crt ? '#008822' : 'var(--text-dim)') + ';margin-top:0.2rem;font-style:italic;">' + (crt ? p.desc.toUpperCase() : p.desc) + '</span>';
        html += '</div>';
    });
    html += '</div></div>';
    return html;
}

function generatePapersPage() {
    const crt = document.body.classList.contains('crt-mode');
    var html = '';
    html += '<h2>' + (crt ? 'PAPERS' : 'Papers') + '</h2>';
    html += '<p>' + (crt ? 'The publications of the Emergence Canvas Framework, organized by current status.' : 'The publications of the Emergence Canvas Framework, organized by current status.') + '</p>';
    html += renderPaperGroup("Main Paper", papersMainPaper);
    html += renderPaperGroup("Core Mathematical Papers", papersCorePapers);
    html += renderPaperGroup("Companion Papers", papersCompanion);
    html += renderPaperGroup("Post-Binder Addendum", papersPostBinder);
    return html;
}

window.generatePapersPage = generatePapersPage;