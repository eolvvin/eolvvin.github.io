// data-home.js
// Home page content

function isCrtMode() {
    return document.body.classList.contains('crt-mode');
}

const corePapers = [
    {
        num: "I",
        title: "Finite Recurrence Geometry",
        desc: "Coprime periodic structure, CRT factorization, Weyl algebra, discrete calculus and Dirichlet metric.",
        href: "https://doi.org/10.5281/zenodo.22015747",
        external: true
    },
    {
        num: "II",
        title: "Chiral Matter Capacity",
        desc: "Spin(10) from C5 via CAR quantization, anomaly equations, one-family representation package.",
        href: "https://doi.org/10.5281/zenodo.22015844",
        external: true
    },
    {
        num: "III",
        title: "Spacetime Bridge",
        desc: "Order, event propagation, spectral dimension, hyperbolicity and Dirac structure.",
        href: "https://doi.org/10.5281/zenodo.22016014",
        external: true
    },
    {
        num: "IV",
        title: "Relativistic Localization",
        desc: "Broken-vacuum Dirac-scalar bound states, collective-coordinate mass, spectral stability.",
        href: "https://doi.org/10.5281/zenodo.22016165",
        external: true
    },
    {
        num: "V",
        title: "Covariant Cosmology",
        desc: "Scalar-tensor action, de Sitter phase structure, Einstein-Boltzmann evolution, likelihoods.",
        href: "https://doi.org/10.5281/zenodo.22016432",
        external: true
    }
];

function renderCorePapers(crt = false) {
    return corePapers.map(p => `
        <a href="${p.href}" ${p.external ? 'target="_blank" rel="noopener noreferrer"' : ''} style="
            flex:1 1 180px;
            min-width:170px;
            max-width:220px;
            text-align:center;
            padding:1.5rem 1rem;
            text-decoration:none;
            border:${crt ? '1px solid #00cc33' : '1px solid rgba(136,204,255,0.3)'};
            background:${crt ? '#020602' : 'rgba(8,8,22,0.5)'};
            border-radius:${crt ? '0' : '16px'};
            transition:all 0.2s ease;
            cursor:pointer;
            display:block;
        " onmouseover="this.style.borderColor='${crt ? '#00ff41' : 'var(--accent-cyan)'}';this.style.transform='translateY(-4px)';"
            onmouseout="this.style.borderColor='${crt ? '#00cc33' : 'rgba(136,204,255,0.3)'}';this.style.transform='translateY(0)';">
            <div style="
                font-family:${crt ? "'VT323',monospace" : "'Manrope',sans-serif"};
                font-size:${crt ? '2.5rem' : '2.2rem'};
                font-weight:700;
                color:${crt ? '#ffaa00' : 'var(--accent-cyan)'};
                margin-bottom:0.5rem;
            ">
                ${p.num}
            </div>
            <div style="
                font-family:${crt ? "'Share Tech Mono',monospace" : "'Manrope',sans-serif"};
                font-size:${crt ? '0.8rem' : '0.95rem'};
                font-weight:600;
                color:${crt ? '#00ff41' : 'var(--accent-cyan)'};
                margin-bottom:0.4rem;
                line-height:1.4;
                text-decoration:underline;
                text-underline-offset:3px;
                text-decoration-color:${crt ? 'rgba(0,255,65,0.3)' : 'rgba(136,204,255,0.35)'};
            ">
                ${crt ? p.title.toUpperCase() : p.title}
            </div>
            <div style="
                font-size:${crt ? '0.68rem' : '0.8rem'};
                line-height:1.6;
                color:${crt ? '#00cc33' : 'var(--text-dim)'};
            ">
                ${crt ? p.desc.toUpperCase() : p.desc}
            </div>
        </a>
    `).join('');
}

function generateHome() {
    const crt = isCrtMode();

    if (crt) {
        // DISCREET (CRT) HOME PAGE
        return `<div style="padding:3rem 0 2rem;">
        <div style="font-family:'Share Tech Mono',monospace;font-size:0.7rem;color:#00cc33;letter-spacing:0.1em;text-align:center;margin-bottom:1rem;font-weight:400;">
            SYSTEM BOOT v4.3.0 :: CURRENT PROGRAMME STATE :: AUDIT 176 + POST-BINDER
        </div>
        <h1>Emergence Canvas Model<br>Unified Framework</h1>
        <div class="hero-sub">&gt;&gt; FUNDAMENTAL-UNIFICATION RESEARCH FRAMEWORK &lt;&lt;</div>
        <div style="font-family:'Share Tech Mono',monospace;font-size:0.75rem;color:#003310;text-align:center;letter-spacing:0.1em;margin:1rem 0;overflow:hidden;white-space:nowrap;">
            ══════════════════════════════════════════════════════════════════════════════
        </div>
        
        <div style="max-width:800px;margin:1.5rem auto 1.5rem;padding:1.2rem 1.5rem;background:#030803;border:1px solid #00cc33;text-align:center;">
            <div style="font-family:'VT323',monospace;font-size:1.2rem;color:#ffaa00;text-shadow:0 0 8px rgba(255,170,0,0.7);margin-bottom:0.5rem;">NEW TO THE FRAMEWORK?</div>
            <div style="font-family:'Share Tech Mono',monospace;font-size:0.82rem;color:#00cc33;line-height:1.8;">
                &gt; <a href="https://doi.org/10.5281/zenodo.22032586" target="_blank" rel="noopener noreferrer" style="color:#00ff41;text-decoration:none;border-bottom:1px solid rgba(0,255,65,0.3);">SYNTHESIS PAPER</a> — THE CURRENT STATE OF THE PROGRAMME
            </div>
            <div style="font-family:'Share Tech Mono',monospace;font-size:0.65rem;color:#003310;margin-top:0.75rem;">[ CLICK TO OPEN THE PAPER ON ZENODO ]</div>
        </div>

        <div style="
            max-width:950px;
            margin:1rem auto 2.5rem;
            text-align:center;
        ">
            <img src="our-program.png" alt="Emergence Canvas dependency architecture" style="
                max-width:100%;
                height:auto;
                border:1px solid #00cc33;
                background:#000;
            ">
        </div>

        <h2 class="centered">[ THE FIVE CORE PAPERS ]</h2>
        <div style="
            display:flex;
            flex-wrap:wrap;
            gap:0.9rem;
            justify-content:center;
            max-width:1150px;
            margin:1rem auto 2rem;
        ">
            ${renderCorePapers(true)}
        </div>
        </div>`;
    }

    // CONTINUUM (ORIGINAL) HOME PAGE
    return `<div class="hero"><h1>Emergence Canvas Model<br>Unified Framework</h1><div class="hero-sub">A Mathematical-Physics Programme for Fundamental Unification</div>
    
    <div style="max-width:800px;margin:1.5rem auto 1.5rem;padding:1.5rem 2rem;background:rgba(8,8,22,0.65);border-radius:18px;border:1px solid rgba(136,204,255,0.4);text-align:center;backdrop-filter:blur(8px);">
        <div style="font-family:'Manrope',sans-serif;font-size:1.3rem;font-weight:700;color:var(--accent-cyan);margin-bottom:0.6rem;">New to the framework?</div>
        <div style="font-size:0.95rem;color:var(--text-dim);line-height:2;">
            <a href="https://doi.org/10.5281/zenodo.22032586" target="_blank" rel="noopener noreferrer" style="color:var(--accent-cyan);text-decoration:none;border-bottom:1px dotted rgba(136,204,255,0.4);">Synthesis Paper</a> — The current state of the programme
        </div>
        <div style="font-size:0.8rem;color:var(--text-dim);margin-top:0.75rem;opacity:0.7;">Click to open the paper on Zenodo</div>
    </div>

    <div style="
        max-width:950px;
        margin:1rem auto 2.5rem;
        text-align:center;
    ">
        <img src="our-program.png" alt="Emergence Canvas dependency architecture" style="
            max-width:100%;
            height:auto;
            border:1px solid rgba(136,204,255,0.3);
            border-radius:16px;
            background:#000;
        ">
    </div>

    <h2 style="font-size:1.9rem; text-align:center; border:none; margin-top:2.5rem;">The Five Core Papers</h2>

    <div style="
        display:flex;
        flex-wrap:wrap;
        gap:1rem;
        justify-content:center;
        max-width:1150px;
        margin:1rem auto 2rem;
    ">
        ${renderCorePapers(false)}
    </div>
    </div>`;
}

window.generateHome = generateHome;