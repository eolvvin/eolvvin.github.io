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

// Canvas animation - runs immediately
(function() {
    const canvas = document.getElementById('latticeCanvas');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    let time = 0;
    let frameCount = 0;
    const speed = 0.02;
    const baseGridStep = 40;
    
    let activeDots = [];
    const dotLifetimeFrames = 90;
    const intersectionThreshold = 4;
    const minDotDistance = 25;
    const spawnCooldown = 15;
    let framesSinceLastSpawn = 0;
    
    // Random color palette: greens, blues, purples, reds
    const colorPalettes = [
        // Greens
        { r: 51, g: 255, b: 51 },   // phosphor green
        { r: 0, g: 255, b: 128 },    // spring green
        { r: 100, g: 255, b: 100 },  // light green
        { r: 0, g: 200, b: 100 },    // emerald
        { r: 150, g: 255, b: 150 },  // pale green
        // Blues
        { r: 100, g: 180, b: 255 },  // light blue
        { r: 80, g: 140, b: 255 },   // sky blue
        { r: 0, g: 200, b: 255 },    // cyan blue
        { r: 130, g: 200, b: 255 },  // soft blue
        { r: 70, g: 130, b: 255 },   // royal blue
        // Purples
        { r: 180, g: 130, b: 255 },  // lavender
        { r: 200, g: 150, b: 255 },  // light purple
        { r: 150, g: 100, b: 255 },  // medium purple
        { r: 220, g: 180, b: 255 },  // lilac
        { r: 170, g: 120, b: 255 },  // violet
        // Reds
        { r: 255, g: 100, b: 100 },  // soft red
        { r: 255, g: 130, b: 130 },  // light red
        { r: 255, g: 80, b: 100 },   // rose
        { r: 255, g: 120, b: 140 },  // pink red
        { r: 255, g: 150, b: 150 }   // salmon
    ];
    
    function getRandomColor() {
        return colorPalettes[Math.floor(Math.random() * colorPalettes.length)];
    }
    
    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    
    function getWaveIntersection(x, y) {
        let waveX = x + Math.sin(y * 0.01 + time) * 15 + Math.cos(x * 0.008 + time * 0.7) * 8;
        let waveY = y + Math.cos(y * 0.007 + time * 0.6) * 8 + Math.sin(x * 0.009 + time * 1.3) * 15;
        return { wx: waveX, wy: waveY };
    }
    
    function getGreenGridLineX(xIndex, centerX) {
        const pulseAmount = Math.sin(time * 0.4) * 5;
        const gridStep = baseGridStep + pulseAmount;
        let x = centerX + xIndex * gridStep;
        let offset = Math.sin(xIndex * 0.3 + time * 0.5) * 6;
        return x + offset;
    }
    
    function getGreenGridLineY(yIndex, centerY) {
        const pulseAmount = Math.sin(time * 0.4) * 5;
        const gridStep = baseGridStep + pulseAmount;
        let y = centerY + yIndex * gridStep;
        let offset = Math.cos(yIndex * 0.3 + time * 0.5) * 6;
        return y + offset;
    }
    
    function drawFrame() {
        const w = canvas.width;
        const h = canvas.height;
        
        ctx.clearRect(0, 0, w, h);
        
        const pulseAmount = Math.sin(time * 0.4) * 5;
        const gridStep = baseGridStep + pulseAmount;
        
        const lineOpacity = 0.15 + Math.sin(time * 0.5) * 0.07;
        
        const centerX = w / 2;
        const centerY = h / 2;
        
        let greenLinesX = [];
        let greenLinesY = [];
        
        // Layer 1: CRT green animated square grid (bottom layer)
        ctx.strokeStyle = `rgba(51, 255, 51, ${lineOpacity})`;
        ctx.lineWidth = 1.2;
        
        for (let i = 1; i < 50; i++) {
            let x = getGreenGridLineX(i, centerX);
            if (x <= w && x >= 0) {
                greenLinesX.push(x);
                ctx.beginPath();
                ctx.moveTo(x, 0);
                ctx.lineTo(x, h);
                ctx.stroke();
            }
            
            x = getGreenGridLineX(-i, centerX);
            if (x >= 0 && x <= w) {
                greenLinesX.push(x);
                ctx.beginPath();
                ctx.moveTo(x, 0);
                ctx.lineTo(x, h);
                ctx.stroke();
            }
            
            let y = getGreenGridLineY(i, centerY);
            if (y <= h && y >= 0) {
                greenLinesY.push(y);
                ctx.beginPath();
                ctx.moveTo(0, y);
                ctx.lineTo(w, y);
                ctx.stroke();
            }
            
            y = getGreenGridLineY(-i, centerY);
            if (y >= 0 && y <= h) {
                greenLinesY.push(y);
                ctx.beginPath();
                ctx.moveTo(0, y);
                ctx.lineTo(w, y);
                ctx.stroke();
            }
        }
        
        // Layer 2: Animated wavy grid (top layer)
        framesSinceLastSpawn++;
        
        if (framesSinceLastSpawn >= spawnCooldown) {
            framesSinceLastSpawn = 0;
            
            for (let xi = -20; xi < 20; xi += 3) {
                for (let yi = -20; yi < 20; yi += 3) {
                    let wx = centerX + xi * baseGridStep;
                    let wy = centerY + yi * baseGridStep;
                    
                    if (wx > 0 && wx < w && wy > 0 && wy < h) {
                        let intersection = getWaveIntersection(wx, wy);
                        
                        let nearGreenLine = false;
                        
                        for (let gx of greenLinesX) {
                            if (Math.abs(intersection.wx - gx) < intersectionThreshold) {
                                nearGreenLine = true;
                                break;
                            }
                        }
                        
                        if (!nearGreenLine) {
                            for (let gy of greenLinesY) {
                                if (Math.abs(intersection.wy - gy) < intersectionThreshold) {
                                    nearGreenLine = true;
                                    break;
                                }
                            }
                        }
                        
                        if (nearGreenLine) {
                            let tooClose = false;
                            for (let dot of activeDots) {
                                let dx = intersection.wx - dot.x;
                                let dy = intersection.wy - dot.y;
                                if (Math.sqrt(dx * dx + dy * dy) < minDotDistance) {
                                    tooClose = true;
                                    break;
                                }
                            }
                            
                            if (!tooClose) {
                                activeDots.push({
                                    x: intersection.wx,
                                    y: intersection.wy,
                                    birthFrame: frameCount,
                                    color: getRandomColor()
                                });
                            }
                        }
                    }
                }
            }
        }
        
        // Draw wave grid
        for (let x = 0; x <= w; x += baseGridStep) {
            ctx.beginPath();
            ctx.strokeStyle = 'rgba(120, 160, 240, 0.35)';
            ctx.lineWidth = 1;
            
            for (let y = 0; y <= h; y += 5) {
                let waveX = Math.sin(y * 0.01 + time) * 15;
                let waveY = Math.cos(x * 0.008 + time * 0.7) * 8;
                
                if (y === 0) {
                    ctx.moveTo(x + waveX, y + waveY);
                } else {
                    ctx.lineTo(x + waveX, y + waveY);
                }
            }
            ctx.stroke();
        }
        
        for (let y = 0; y <= h; y += baseGridStep) {
            ctx.beginPath();
            ctx.strokeStyle = 'rgba(100, 140, 210, 0.35)';
            ctx.lineWidth = 1;
            
            for (let x = 0; x <= w; x += 5) {
                let waveX = Math.cos(y * 0.007 + time * 0.6) * 8;
                let waveY = Math.sin(x * 0.009 + time * 1.3) * 15;
                
                if (x === 0) {
                    ctx.moveTo(x + waveX, y + waveY);
                } else {
                    ctx.lineTo(x + waveX, y + waveY);
                }
            }
            ctx.stroke();
        }
        
        // Draw active dots - random colored star-like dots
        for (let i = activeDots.length - 1; i >= 0; i--) {
            let dot = activeDots[i];
            let ageFrames = frameCount - dot.birthFrame;
            let lifeProgress = ageFrames / dotLifetimeFrames;
            
            if (lifeProgress >= 1) {
                activeDots.splice(i, 1);
            } else {
                let fadeAlpha = (1 - lifeProgress) * 0.8;
                let dotSize = 2.5 - lifeProgress * 1;
                let c = dot.color;
                
                // Center dot
                ctx.fillStyle = `rgba(${c.r}, ${c.g}, ${c.b}, ${fadeAlpha})`;
                ctx.beginPath();
                ctx.arc(dot.x, dot.y, dotSize, 0, Math.PI * 2);
                ctx.fill();
                
                // Horizontal sparkle
                ctx.fillStyle = `rgba(${c.r}, ${c.g}, ${c.b}, ${fadeAlpha * 0.6})`;
                ctx.fillRect(dot.x - dotSize * 1.5, dot.y - 0.5, dotSize * 3, 1);
                
                // Vertical sparkle
                ctx.fillRect(dot.x - 0.5, dot.y - dotSize * 1.5, 1, dotSize * 3);
            }
        }
        
        if (activeDots.length > 300) {
            activeDots.splice(0, activeDots.length - 300);
        }
        
        time += speed;
        frameCount++;
        requestAnimationFrame(drawFrame);
    }
    
    resizeCanvas();
    drawFrame();
    window.addEventListener('resize', resizeCanvas);
})();

// Initialize
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