// script.js
// Main controller - navigation, rendering, and canvas animation

const unifiedWaveLatex = "\\Phi(v) = a v + b \\Phi_0 + c \\frac{d^2\\Phi}{dv^2} + d \\pi(v)";
const thresholdEq = "|\\Phi_i \\Phi_j| > T_{ij}";
const eigenvalueEq = "\\hat{T}_{ij} c^j = \\lambda c_i";
const steeringEq = "\\frac{d\\mathcal{E}_\\tau}{d\\tau} = -\\kappa \\nabla_{\\mathcal{E}} \\mathbb{E}[\\mathcal{E}_\\tau]";
const drivingEq = "\\frac{d\\mathcal{E}_\\tau}{d\\tau} = +\\kappa \\nabla_{\\mathcal{E}} \\mathbb{E}[\\mathcal{E}_\\tau]";

function renderLatexInElement(el, latex, display = true) {
    if (window.katex) {
        el.innerHTML = '';
        window.katex.render(latex, el, { displayMode: display, throwOnError: false });
    } else {
        el.innerText = latex;
    }
}

// Build pages object from all data files
const pages = {
    home: generateHome(),
    millennium: generateMillenniumPage(),
    derivations: generateDerivationsPage(),
    predictions: generatePredictionsPage(),
    physics: generatePhysicsPage(),
    series: generateSeriesPage(),
    framework: generateFrameworkPage(),
    about: generateAboutPage()
};

function renderLatexOnPage() {
    const fw = document.getElementById('framework-equation');
    if (fw) renderLatexInElement(fw, unifiedWaveLatex, true);
    const th = document.getElementById('threshold-equation');
    if (th) renderLatexInElement(th, thresholdEq, true);
    const eig = document.getElementById('eigenvalue-equation');
    if (eig) renderLatexInElement(eig, eigenvalueEq, true);
    const st = document.getElementById('steering-equation');
    if (st) renderLatexInElement(st, steeringEq, true);
    const dr = document.getElementById('driving-equation');
    if (dr) renderLatexInElement(dr, drivingEq, true);
    
    // Re-render any KaTeX in the page content
    if (window.renderMathInElement) {
        const app = document.getElementById('app');
        if (app) {
            window.renderMathInElement(app, {
                delimiters: [
                    {left: '$$', right: '$$', display: true},
                    {left: '$', right: '$', display: false},
                    {left: '\\(', right: '\\)', display: false}
                ]
            });
        }
    }
}

let current = 'home';
function render(pageId) {
    if (pages[pageId]) {
        document.getElementById('app').innerHTML = pages[pageId];
        current = pageId;
        renderLatexOnPage();
        document.querySelectorAll('nav a').forEach(link => {
            if (link.getAttribute('data-page') === pageId) link.classList.add('active');
            else link.classList.remove('active');
        });
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
}

// Canvas animation
const canvas = document.getElementById('latticeCanvas');
let ctx = canvas.getContext('2d'), t = 0;

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

function animate() {
    if (!ctx) return;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    const w = canvas.width, h = canvas.height, step = 38, off = t * 0.002;
    for (let x = 0; x < w + step; x += step) {
        ctx.beginPath();
        for (let y = 0; y < h; y += 6) {
            let dx = Math.sin(y * 0.012 + off) * 8 + Math.cos(x * 0.008 + off * 1.3) * 5;
            let dy = Math.cos(x * 0.007 + off * 1.7) * 5;
            if (y === 0) ctx.moveTo(x + dx, y + dy);
            else ctx.lineTo(x + dx, y + dy);
        }
        ctx.strokeStyle = "rgba(120,160,240,0.2)";
        ctx.stroke();
    }
    for (let y = 0; y < h + step; y += step) {
        ctx.beginPath();
        for (let x = 0; x < w; x += 6) {
            let dx = Math.sin(y * 0.01 + off * 0.9) * 6;
            let dy = Math.cos(x * 0.009 + off) * 6;
            if (x === 0) ctx.moveTo(x + dx, y + dy);
            else ctx.lineTo(x + dx, y + dy);
        }
        ctx.strokeStyle = "rgba(100,140,210,0.2)";
        ctx.stroke();
    }
    t += 1;
    requestAnimationFrame(animate);
}

// Initialize
window.addEventListener('resize', resizeCanvas);
resizeCanvas();
animate();

document.querySelectorAll('nav a').forEach(link => link.addEventListener('click', (e) => {
    e.preventDefault();
    const pg = link.getAttribute('data-page');
    if (pg && pages[pg]) render(pg);
}));

document.getElementById('backToTop').addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

render('home');