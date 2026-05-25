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
        <h1>EMERGENCE<br>UNIFIED FRAMEWORK<br>— CANVAS MODEL —</h1>
        <div class="hero-sub">&gt;&gt; UNIFYING ALL OF PHYSICS &amp; MATHEMATICS &lt;&lt;</div>
        <div style="font-family:'Share Tech Mono',monospace;font-size:0.75rem;color:#003310;text-align:center;letter-spacing:0.1em;margin:1rem 0;overflow:hidden;white-space:nowrap;">
            ══════════════════════════════════════════════════════════════════════════════
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
            <div class="stat-card"><span class="stat-number">100+</span><div>PHYSICS PROBLEMS RESOLVED</div></div>
            <div class="stat-card"><span class="stat-number">100+</span><div>PHENOMENA DERIVED</div></div>
            <div class="stat-card"><span class="stat-number">100+</span><div>PAPERS WRITTEN</div></div>
            <div class="stat-card"><span class="stat-number">100+</span><div>MATH CONCEPTS CATEGORIZED</div></div>
            <div class="stat-card"><span class="stat-number">100+</span><div>NEW MATH DISCOVERED</div></div>
            <div class="stat-card"><span class="stat-number">100+</span><div>PARADOXES DISSOLVED</div></div>
            <div class="stat-card"><span class="stat-number">100+</span><div>PREDICTIONS MADE</div></div>
        </div>

        <div style="font-family:'Share Tech Mono',monospace;font-size:0.75rem;color:#003310;text-align:center;letter-spacing:0.1em;margin:1rem 0;overflow:hidden;white-space:nowrap;">
            ──────────────────────────────────────────────────────────────────────────────
        </div>
        <div class="quote">FROM WAVE TO WORLD — A PRE-GEOMETRIC CANVAS,<br>EIGHT PRIMITIVES, ONE UNIFIED THEORY.</div>
        </div>`;
    }

    // CONTINUUM (ORIGINAL) HOME PAGE
    return `<div class="hero"><h1>Emergence Unified Framework<br>— Canvas Model —</h1><div class="hero-sub">Unifies Everything</div>
    <div class="flex-grid">${frameworksList.map(f => `<div class="unif-card"><strong>${f.name}</strong><div class="check-green"> ✓ Unified</div></div>`).join('')}</div>
    <h2 style="font-size:1.9rem; text-align:center; border:none;">🏆 Millennium Prize Problems Proven in CTM</h2>
    <div class="flex-grid">${millenniumShort.map(p => `<div class="prize-card"><strong>${p.name}</strong><div class="check-green"> ✓ Proven</div></div>`).join('')}</div>
    <h2 style="font-size:1.9rem; text-align:center; border:none;">Century-Old Problems Solved</h2>
    <div style="display: flex; flex-wrap: wrap; gap: 0.7rem; justify-content: center; padding: 1rem; background: rgba(0,0,0,0.25); border-radius: 48px; margin: 1rem 0;">
        ${centuryProblems.map(prob => `<div class="problem-mini-card"><span>${prob}</span> <span class="check-green" style="margin-top:0;">✓</span></div>`).join('')}
    </div>
    <div class="stat-row">
        <div class="stat-card"><div class="stat-number">100+</div><div>Physics Problems Resolved</div></div>
        <div class="stat-card"><div class="stat-number">100+</div><div>Phenomena Derived</div></div>
        <div class="stat-card"><div class="stat-number">100+</div><div>Papers Written</div></div>
        <div class="stat-card"><div class="stat-number">100+</div><div>Math Concepts Categorized</div></div>
        <div class="stat-card"><div class="stat-number">100+</div><div>New Math Discovered</div></div>
        <div class="stat-card"><div class="stat-number">100+</div><div>Paradoxes Dissolved</div></div>
        <div class="stat-card"><div class="stat-number">100+</div><div>Predictions Made</div></div>
    </div>
    <div class="quote">"From wave to world — a pre‑geometric canvas, eight primitives, one unified theory."</div></div>`;
}

window.generateHome = generateHome;