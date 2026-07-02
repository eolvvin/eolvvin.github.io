// data-home.js
// Home page content

const frameworksList = [
    { name: "General Relativity", crtName: "GENERAL RELATIVITY" },
    { name: "Quantum Mechanics", crtName: "QUANTUM MECHANICS" },
    { name: "String Theory", crtName: "STRING THEORY" },
    { name: "QFT", crtName: "QFT" },
    { name: "LQG", crtName: "LQG" },
    { name: "Causal Sets", crtName: "CAUSAL SETS" }
];

const millenniumShort = [
    { name: "Riemann", crtName: "RIEMANN" },
    { name: "Yang-Mills", crtName: "YANG-MILLS" },
    { name: "Birch SD", crtName: "BIRCH SD" },
    { name: "Navier-Stokes", crtName: "NAVIER-STOKES" },
    { name: "P vs NP", crtName: "P VS NP" },
    { name: "Hodge", crtName: "HODGE" },
    { name: "Poincaré", crtName: "POINCARÉ" }
];

const centuryProblems = [
    "The Measurement", "The Cosmological Constant", "The Origin of the Born Rule",
    "The Low-Entropy Initial Condition", "The Fine-Structure Constant",
    "Number of Spacetime Dimensions", "Extra Dimensions", "Initial Singularity",
    "Arrow of Time", "Gibbs Paradox", "Loschmidt Paradox", "Ultraviolet Catastrophe",
    "Vacuum Catastrophe", "Infinity", "Set Theory Paradox", "Continuum Hypothesis",
    "Axiom of Choice", "Quantum-to-Classical Transition", "Two-Slit", "Which-Way",
    "Probability", "Counterfactual", "Reality", "Ontology", "Epistemology",
    "Schizophrenic Photon", "Why Anything Exists", "Unification", "Everything"
];

function isCrtMode() {
    return document.body.classList.contains('crt-mode');
}

function generateHome() {
    const crt = isCrtMode();

    if (crt) {
        // DISCREET (CRT) HOME PAGE
        return `<div style="padding:3rem 0 2rem;">
        <div style="font-family:'Share Tech Mono',monospace;font-size:0.7rem;color:#00cc33;letter-spacing:0.1em;text-align:center;margin-bottom:1rem;font-weight:400;">
            SYSTEM BOOT v4.2.0 :: INITIALIZING UNIFIED FIELD ENGINE...
        </div>
        <h1>EMERGENCE CANVAS MODEL<br>UNIFIED FRAMEWORK</h1>
        <div class="hero-sub">&gt;&gt; UNIFYING ALL OF PHYSICS &amp; MATHEMATICS &lt;&lt;</div>
        <div style="font-family:'Share Tech Mono',monospace;font-size:0.75rem;color:#003310;text-align:center;letter-spacing:0.1em;margin:1rem 0;overflow:hidden;white-space:nowrap;">
            ══════════════════════════════════════════════════════════════════════════════
        </div>
        
        <div style="max-width:800px;margin:1.5rem auto 2.5rem;padding:1.2rem 1.5rem;background:#030803;border:1px solid #00cc33;text-align:center;">
            <div style="font-family:'VT323',monospace;font-size:1.2rem;color:#ffaa00;text-shadow:0 0 8px rgba(255,170,0,0.7);margin-bottom:0.5rem;">NEW TO THE FRAMEWORK?</div>
            <div style="font-family:'Share Tech Mono',monospace;font-size:0.82rem;color:#00cc33;line-height:1.8;">
                &gt; <a href="https://doi.org/10.5281/zenodo.21025040" target="_blank" rel="noopener noreferrer" style="color:#00ff41;text-decoration:none;border-bottom:1px solid rgba(0,255,65,0.3);">① GENESIS</a> — Scientific paper (origin of theory)<br>
                &gt; <a href="https://doi.org/10.5281/zenodo.21061365" target="_blank" rel="noopener noreferrer" style="color:#00ff41;text-decoration:none;border-bottom:1px solid rgba(0,255,65,0.3);">② HEP</a> — Scientific paper (particle physics focus)<br>
                &gt; <a href="https://doi.org/10.5281/zenodo.20392265" target="_blank" rel="noopener noreferrer" style="color:#00ff41;text-decoration:none;border-bottom:1px solid rgba(0,255,65,0.3);">③ COSMO</a> — Scientific paper (cosmology focus)<br>
                &gt; <a href="https://doi.org/10.5281/zenodo.20795774" target="_blank" rel="noopener noreferrer" style="color:#00ff41;text-decoration:none;border-bottom:1px solid rgba(0,255,65,0.3);">④ TECHNICAL MANUAL</a> — Complete reference (The Machine and the State)
            </div>
            <div style="font-family:'Share Tech Mono',monospace;font-size:0.65rem;color:#003310;margin-top:0.75rem;">[ CLICK ANY TO OPEN THE PAPER ON ZENODO ]</div>
        </div>

        <h2 class="centered">[ FRAMEWORKS UNIFIED ]</h2>
        <div class="flex-grid">
            ${frameworksList.map(f => `
                <div class="unif-card">
                    <strong>${f.crtName}</strong>
                    <div class="check-green">[OK] UNIFIED</div>
                </div>
            `).join('')}
        </div>

        <h2 class="centered">[ MILLENNIUM PRIZE PROBLEMS ]</h2>
        <div class="flex-grid">
            ${millenniumShort.map(p => `
                <div class="prize-card">
                    <strong>${p.crtName}</strong>
                    <div class="check-green">[SOLVED]</div>
                </div>
            `).join('')}
        </div>

        <h2 class="centered">[ CENTURY-OLD PROBLEMS :: STATUS = RESOLVED ]</h2>
        <div class="problems-grid">
            ${centuryProblems.map(prob => `
                <div class="problem-mini-card"><span>${prob.toUpperCase()}</span><span class="ok">[✓]</span></div>
            `).join('')}
        </div>

        <div class="stat-row">
            <a href="#problems" class="stat-card-link"><div class="stat-card"><span class="stat-number">100+</span><div>PHYSICS PROBLEMS RESOLVED</div></div></a>
            <a href="#derivations" class="stat-card-link"><div class="stat-card"><span class="stat-number">100+</span><div>PHENOMENA DERIVED</div></div></a>
            <a href="#series" class="stat-card-link"><div class="stat-card"><span class="stat-number">100+</span><div>PAPERS WRITTEN</div></div></a>
            <a href="#tables" class="stat-card-link"><div class="stat-card"><span class="stat-number">100+</span><div>MATH CONCEPTS CATEGORIZED</div></div></a>
            <a href="#tables" class="stat-card-link"><div class="stat-card"><span class="stat-number">100+</span><div>NEW MATH DISCOVERED</div></div></a>
            <a href="#paradoxes" class="stat-card-link"><div class="stat-card"><span class="stat-number">100+</span><div>PARADOXES DISSOLVED</div></div></a>
            <a href="#predictions" class="stat-card-link"><div class="stat-card"><span class="stat-number">100+</span><div>PREDICTIONS MADE</div></div></a>
        </div>

        <div style="font-family:'Share Tech Mono',monospace;font-size:0.75rem;color:#003310;text-align:center;letter-spacing:0.1em;margin:1rem 0;overflow:hidden;white-space:nowrap;">
            ──────────────────────────────────────────────────────────────────────────────
        </div>
        <div class="quote">FROM WAVE TO WORLD — A PRE-GEOMETRIC CANVAS,<br>EIGHT PRIMITIVES, ONE UNIFIED THEORY.</div>
        </div>`;
    }

    // CONTINUUM (ORIGINAL) HOME PAGE
    return `<div class="hero"><h1>Emergence Canvas Model<br>Unified Framework</h1><div class="hero-sub">Unifies Everything</div>
    
    <div style="max-width:800px;margin:1.5rem auto 2.5rem;padding:1.5rem 2rem;background:rgba(8,8,22,0.65);border-radius:18px;border:1px solid rgba(136,204,255,0.4);text-align:center;backdrop-filter:blur(8px);">
        <div style="font-family:'Manrope',sans-serif;font-size:1.3rem;font-weight:700;color:var(--accent-cyan);margin-bottom:0.6rem;">New to the framework?</div>
        <div style="font-size:0.95rem;color:var(--text-dim);line-height:2;">
            <a href="https://doi.org/10.5281/zenodo.21025040" target="_blank" rel="noopener noreferrer" style="color:var(--accent-cyan);text-decoration:none;border-bottom:1px dotted rgba(136,204,255,0.4);">① Genesis</a> — Scientific paper (origin of theory)<br>
            <a href="https://doi.org/10.5281/zenodo.21061365" target="_blank" rel="noopener noreferrer" style="color:var(--accent-cyan);text-decoration:none;border-bottom:1px dotted rgba(136,204,255,0.4);">② HEP</a> — Scientific paper (particle physics focus)<br>
            <a href="https://doi.org/10.5281/zenodo.20392265" target="_blank" rel="noopener noreferrer" style="color:var(--accent-cyan);text-decoration:none;border-bottom:1px dotted rgba(136,204,255,0.4);">③ COSMO</a> — Scientific paper (cosmology focus)<br>
            <a href="https://doi.org/10.5281/zenodo.20795774" target="_blank" rel="noopener noreferrer" style="color:var(--accent-cyan);text-decoration:none;border-bottom:1px dotted rgba(136,204,255,0.4);">④ Technical Manual</a> — Complete reference (The Machine and the State)
        </div>
        <div style="font-size:0.8rem;color:var(--text-dim);margin-top:0.75rem;opacity:0.7;">Click any to open the paper on Zenodo</div>
    </div>
    
    <div class="flex-grid">${frameworksList.map(f => `<div class="unif-card"><strong>${f.name}</strong><div class="check-green"> ✓ Unified</div></div>`).join('')}</div>
    <h2 style="font-size:1.9rem; text-align:center; border:none;">🏆 Millennium Prize Problems Proven in CTM</h2>
    <div class="flex-grid">${millenniumShort.map(p => `<div class="prize-card"><strong>${p.name}</strong><div class="check-green"> ✓ Proven</div></div>`).join('')}</div>
    <h2 style="font-size:1.9rem; text-align:center; border:none;">Century-Old Problems Solved</h2>
    <div style="display: flex; flex-wrap: wrap; gap: 0.7rem; justify-content: center; padding: 1rem; background: rgba(0,0,0,0.25); border-radius: 48px; margin: 1rem 0;">
        ${centuryProblems.map(prob => `<div class="problem-mini-card"><span>${prob}</span> <span class="check-green" style="margin-top:0;">✓</span></div>`).join('')}
    </div>
    <div class="stat-row">
        <a href="#problems" class="stat-card-link"><div class="stat-card"><div class="stat-number">100+</div><div>Physics Problems Resolved</div></div></a>
        <a href="#derivations" class="stat-card-link"><div class="stat-card"><div class="stat-number">100+</div><div>Phenomena Derived</div></div></a>
        <a href="#series" class="stat-card-link"><div class="stat-card"><div class="stat-number">100+</div><div>Papers Written</div></div></a>
        <a href="#tables" class="stat-card-link"><div class="stat-card"><div class="stat-number">100+</div><div>Math Concepts Categorized</div></div></a>
        <a href="#tables" class="stat-card-link"><div class="stat-card"><div class="stat-number">100+</div><div>New Math Discovered</div></div></a>
        <a href="#paradoxes" class="stat-card-link"><div class="stat-card"><div class="stat-number">100+</div><div>Paradoxes Dissolved</div></div></a>
        <a href="#predictions" class="stat-card-link"><div class="stat-card"><div class="stat-number">100+</div><div>Predictions Made</div></div></a>
    </div>
    <div class="quote">"From wave to world — a pre‑geometric canvas, eight primitives, one unified theory."</div></div>`;
}

window.generateHome = generateHome;