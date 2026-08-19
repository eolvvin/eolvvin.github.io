// data-home.js
// Emergence Canvas Framework — Showcase Homepage

const paperUrl = "https://doi.org/10.5281/zenodo.22002713";
const paperTitle = "The Emergence Canvas Framework — Master Technical Paper, Audit 176";

const bigIdea = {
    seed: "Four simplest periods: 2, 3, 5, 7",
    world: "One finite quantum world: 210 states",
    symmetry: "Our gauge symmetries: SU(3) × SU(2) × U(1)",
    particles: "Localized particles from stable relativistic composites",
    universe: "Spacetime, gravity, and the universe itself"
};

const coreMechanisms = [
    {
        title: "Recurrence",
        crtTitle: "RECURRENCE",
        description: "Everything starts with four prime periods — 2, 3, 5, 7. Their least common multiple, 210, defines a finite quantum world of 210 states. This is the seed.",
        crtDescription: "EVERYTHING STARTS WITH FOUR PRIME PERIODS — 2, 3, 5, 7. THEIR LEAST COMMON MULTIPLE, 210, DEFINES A FINITE QUANTUM WORLD OF 210 STATES. THIS IS THE SEED."
    },
    {
        title: "Localization",
        crtTitle: "LOCALIZATION",
        description: "Waves on this internal stage can bump and stay together. A stable localized configuration has rest energy E₀, and Einstein's relation gives its mass: M = E₀/c². This is how particles emerge.",
        crtDescription: "WAVES ON THIS INTERNAL STAGE CAN BUMP AND STAY TOGETHER. A STABLE LOCALIZED CONFIGURATION HAS REST ENERGY E₀, AND EINSTEIN'S RELATION GIVES ITS MASS: M = E₀/C². THIS IS HOW PARTICLES EMERGE."
    },
    {
        title: "Stability",
        crtTitle: "STABILITY",
        description: "A particle must persist. The framework's localized composites are spectrally stable through angular momentum L=6, including negative-energy Dirac perturbations. Persistence is a dynamical property, not an assumption.",
        crtDescription: "A PARTICLE MUST PERSIST. THE FRAMEWORK'S LOCALIZED COMPOSITES ARE SPECTRALLY STABLE THROUGH ANGULAR MOMENTUM L=6, INCLUDING NEGATIVE-ENERGY DIRAC PERTURBATIONS. PERSISTENCE IS A DYNAMICAL PROPERTY, NOT AN ASSUMPTION."
    }
];

const primitives = [
    { label: "P1", name: "Order", type: "Dynamic", role: "Period 5" },
    { label: "P2", name: "Amplitude", type: "Dynamic", role: "Period 3" },
    { label: "P3", name: "Acceleration", type: "Dynamic", role: "Period 2" },
    { label: "P4", name: "Polarity", type: "Dynamic", role: "Period 7" },
    { label: "P5", name: "Chirality", type: "Property", role: "Orientation / handedness, h = +1 convention" },
    { label: "P6", name: "Dimension", type: "Property", role: "n = 3 working spatial dimension" },
    { label: "P7", name: "Angle", type: "Property", role: "θ = π/2 working primitive angle" },
    { label: "P8", name: "Charge", type: "Property", role: "q_s = 1, 2, 3 charge-sector structure" }
];

const pillars = [
    { name: "Unified Wave Equation", role: "Continuous propagation / carrier dynamics; the relativistic continuum completion must respect Lorentz covariance where mass mechanics is derived." },
    { name: "Threshold Condition", role: "Converts continuous overlap/recurrence into discrete sector activation. In the post-Wilson exact-order description T_q = 1/q." },
    { name: "Eigenvalue / Spectral Equation", role: "Organizes modes, susceptibilities, Hessians, poles and generation-like sectors. Eigenvalues are not automatically physical masses." },
    { name: "Feed Equation", role: "Attractor / parameter-flow layer. Useful as global parameter dynamics, but cannot be silently promoted to a local carrier stiffness or UV stabilizer." }
];

const achievements = [
    { title: "Finite recurrence group Z₂₁₀", subtitle: "From the four coprime periods 5, 3, 2, 7" },
    { title: "Sixteen exact-order sectors", subtitle: "Charges q|210 with dimensions φ(q)" },
    { title: "Threshold reciprocity T_q = 1/q", subtitle: "A canonical reciprocal spectrum" },
    { title: "Reciprocal cycle invariant", subtitle: "P_cycle = 1/210 under the operational interpretation" },
    { title: "Relativistic mass theorem", subtitle: "M_i = E_rest/c² for any localized Lorentz-invariant state" },
    { title: "Stable composite sector", subtitle: "Tested through L=6, including negative-energy modes" },
    { title: "Gauge-center bridge", subtitle: "Z₆ compatibility from the Standard Model itself" },
    { title: "One SM generation", subtitle: "Unique up to charge conjugation, conditional on minimal faithfulness" }
];

const honesty = {
    inputs: "Three numerical inputs: Q, c_R, Λ_car",
    issues: "Two structural choices: minimal faithfulness, recurrence propagation",
    status: "A generative framework — not a completed parameter-free TOE"
};

const journey = [
    { step: "1", title: "Recurrence", text: "Four primes. One cycle of 210." },
    { step: "2", title: "Quantum World", text: "Shift and clock operators on a finite space." },
    { step: "3", title: "Gauge Structure", text: "SU(3) × SU(2) × U(1) from center compatibility." },
    { step: "4", title: "Particles", text: "Stable localized composites with rest energy." },
    { step: "5", title: "Spacetime", text: "Emergent from collective balance and universal coupling." }
];

function isCrtMode() {
    return document.body.classList.contains('crt-mode');
}

function generateHome() {
    const crt = isCrtMode();
    
    if (crt) {
        return `<div style="padding:3rem 0 2rem;">
        <div style="font-family:'Share Tech Mono',monospace;font-size:0.7rem;color:#00cc33;letter-spacing:0.1em;text-align:center;margin-bottom:1rem;font-weight:400;">
            SYSTEM BOOT :: CANVAS FRAMEWORK :: SHOWCASE
        </div>
        <h1>EMERGENCE CANVAS<br>FRAMEWORK</h1>
        <div class="hero-sub">FROM RECURRENCE TO THE UNIVERSE</div>
        
        <div style="max-width:800px;margin:1.5rem auto 2.5rem;padding:1.2rem 1.5rem;background:#030803;border:1px solid #00cc33;text-align:center;">
            <div style="font-family:'VT323',monospace;font-size:1.2rem;color:#ffaa00;text-shadow:0 0 8px rgba(255,170,0,0.7);margin-bottom:0.5rem;">THE BIG IDEA</div>
            <div style="font-family:'Share Tech Mono',monospace;font-size:0.82rem;color:#00cc33;line-height:2;">
                ${bigIdea.seed.toUpperCase()}<br>
                → ${bigIdea.world.toUpperCase()}<br>
                → ${bigIdea.symmetry.toUpperCase()}<br>
                → ${bigIdea.particles.toUpperCase()}<br>
                → ${bigIdea.universe.toUpperCase()}
            </div>
        </div>
        
        <div style="max-width:800px;margin:1.5rem auto 2.5rem;padding:1.2rem 1.5rem;background:#030803;border:1px solid #00cc33;text-align:center;">
            <div style="font-family:'VT323',monospace;font-size:1.2rem;color:#ffaa00;text-shadow:0 0 8px rgba(255,170,0,0.7);margin-bottom:0.5rem;">READ THE PAPER</div>
            <div style="font-family:'Share Tech Mono',monospace;font-size:0.82rem;color:#00cc33;line-height:1.8;">
                &gt; <a href="${paperUrl}" target="_blank" rel="noopener noreferrer" style="color:#00ff41;text-decoration:none;border-bottom:1px solid rgba(0,255,65,0.3);">${paperTitle.toUpperCase()}</a>
            </div>
            <div style="font-family:'Share Tech Mono',monospace;font-size:0.65rem;color:#003310;margin-top:0.75rem;">[ CLICK TO OPEN ON ZENODO ]</div>
        </div>

        <div style="max-width:1100px;margin:2.5rem auto;text-align:center;">
            <div style="background:#030803;border:1px solid #00cc33;padding:0.75rem;">
                <img src="our-program.png" 
                     alt="Our Program: From Recurrence to the Universe — an 18-step overview"
                     style="width:100%;height:auto;display:block;filter:grayscale(100%) sepia(100%) hue-rotate(70deg) saturate(120%) brightness(0.85) contrast(0.9);">
            </div>
            <div style="font-family:'Share Tech Mono',monospace;font-size:0.68rem;color:#00cc33;margin-top:0.6rem;letter-spacing:0.04em;">
                [ OUR PROGRAM :: FROM RECURRENCE TO THE UNIVERSE ]
            </div>
        </div>

        <h2 class="centered">[ CORE MECHANISMS ]</h2>
        ${coreMechanisms.map(m => `
            <div class="volume-block">
                <h4 style="margin-top:0;color:#00ff41;">// ${m.crtTitle}</h4>
                <p style="font-family:'Share Tech Mono',monospace;font-size:0.82rem;color:#00cc33;line-height:1.7;margin:0;">${m.crtDescription}</p>
            </div>
        `).join('')}

        <h2 class="centered">[ THE EIGHT PRIMITIVES ]</h2>
        <p style="font-family:'Share Tech Mono',monospace;font-size:0.82rem;color:#00cc33;text-align:center;">
            THE DECLARED STARTING ARCHITECTURE OF THE FRAMEWORK.<br>
            FOUR DYNAMIC PRIMITIVES GOVERN CHANGE. FOUR PROPERTY PRIMITIVES SELECT STRUCTURE.
        </p>
        <div class="comparison-scroll">
        <table class="data-table">
            <thead><tr><th>PRIMITIVE</th><th>TYPE</th><th>FROZEN DATUM / ROLE</th></tr></thead>
            <tbody>
                ${primitives.map(p => `
                    <tr><td>${p.label} ${p.name}</td><td>${p.type}</td><td>${p.role}</td></tr>
                `).join('')}
            </tbody>
        </table>
        </div>
        <div style="max-width:600px;margin:0.8rem auto;padding:0.8rem 1rem;background:#030803;border:1px solid rgba(0,200,50,0.3);text-align:center;">
            <span style="font-family:'Share Tech Mono',monospace;font-size:0.82rem;color:#00ff41;">LCM(5, 3, 2, 7) = 210</span>
        </div>

        <h2 class="centered">[ THE FOUR PILLARS ]</h2>
        <p style="font-family:'Share Tech Mono',monospace;font-size:0.82rem;color:#00cc33;text-align:center;">
            THE LAWS THAT GOVERN HOW PRIMITIVES INTERACT.<br>
            MODERN ROLES ARE SHARPENED BY THE AUDITS.
        </p>
        <div class="comparison-scroll">
        <table class="data-table">
            <thead><tr><th>PILLAR</th><th>MODERN ROLE</th></tr></thead>
            <tbody>
                ${pillars.map(p => `
                    <tr><td>${p.name}</td><td>${p.role}</td></tr>
                `).join('')}
            </tbody>
        </table>
        </div>

        <h2 class="centered">[ THE JOURNEY ]</h2>
        <div style="display:flex;flex-wrap:wrap;gap:0.5rem;justify-content:center;margin:1rem 0;">
            ${journey.map(j => `
                <div class="problem-mini-card" style="flex:1;min-width:140px;max-width:200px;">
                    <span style="font-family:'VT323',monospace;font-size:1rem;color:#00ff41;">${j.step}. ${j.title.toUpperCase()}</span><br>
                    <span style="font-family:'Share Tech Mono',monospace;font-size:0.65rem;color:#00cc33;">${j.text.toUpperCase()}</span>
                </div>
            `).join('')}
        </div>

        <h2 class="centered">[ KEY RESULTS ]</h2>
        <div class="flex-grid">
            ${achievements.map(a => `
                <div class="unif-card">
                    <strong>${a.title}</strong>
                    <div class="check-green">${a.subtitle}</div>
                </div>
            `).join('')}
        </div>

        <h2 class="centered">[ HONEST STATUS ]</h2>
        <div style="max-width:800px;margin:0 auto;padding:1.2rem 1.5rem;background:#030803;border:1px solid #00cc33;text-align:center;">
            <p style="font-family:'Share Tech Mono',monospace;font-size:0.78rem;color:#00cc33;line-height:1.7;margin:0;">
                ${honesty.inputs.toUpperCase()}<br>
                ${honesty.issues.toUpperCase()}<br>
                ${honesty.status.toUpperCase()}
            </p>
        </div>

        <div class="quote">ONE TINY SEED OF RECURRENCE...<br>GROWS INTO EVERYTHING.</div>
        </div>`;
    }
    
    // CONTINUUM MODE
    return `<div class="hero"><h1>Emergence Canvas<br>Framework</h1>
    <div class="hero-sub">From Recurrence to the Universe</div>
    
    <div style="max-width:800px;margin:1.5rem auto 2.5rem;padding:1.5rem 2rem;background:rgba(8,8,22,0.65);border-radius:18px;border:1px solid rgba(136,204,255,0.4);text-align:center;backdrop-filter:blur(8px);">
        <div style="font-family:'Manrope',sans-serif;font-size:1.3rem;font-weight:700;color:var(--accent-cyan);margin-bottom:0.6rem;">The Big Idea</div>
        <div style="font-size:0.95rem;color:var(--text-dim);line-height:2.2;">
            ${bigIdea.seed}<br>
            → ${bigIdea.world}<br>
            → ${bigIdea.symmetry}<br>
            → ${bigIdea.particles}<br>
            → ${bigIdea.universe}
        </div>
    </div>
    
    <div style="max-width:800px;margin:1.5rem auto 2.5rem;padding:1.5rem 2rem;background:rgba(8,8,22,0.65);border-radius:18px;border:1px solid rgba(136,204,255,0.4);text-align:center;backdrop-filter:blur(8px);">
        <div style="font-family:'Manrope',sans-serif;font-size:1.3rem;font-weight:700;color:var(--accent-cyan);margin-bottom:0.6rem;">Read the Paper</div>
        <div style="font-size:0.95rem;color:var(--text-dim);line-height:2;">
            <a href="${paperUrl}" target="_blank" rel="noopener noreferrer" style="color:var(--accent-cyan);text-decoration:none;border-bottom:1px dotted rgba(136,204,255,0.4);">${paperTitle}</a>
        </div>
        <div style="font-size:0.8rem;color:var(--text-dim);margin-top:0.75rem;opacity:0.7;">Click to open on Zenodo</div>
    </div>

    <div style="max-width:1100px;margin:2.5rem auto;text-align:center;">
        <div style="background:rgba(8,8,22,0.45);border-radius:18px;border:1px solid rgba(136,204,255,0.25);padding:0.75rem;backdrop-filter:blur(6px);">
            <img src="our-program.png" 
                 alt="Our Program: From Recurrence to the Universe — an 18-step overview"
                 style="width:100%;height:auto;border-radius:12px;display:block;">
        </div>
        <div style="font-size:0.8rem;color:var(--text-dim);margin-top:0.6rem;opacity:0.75;">
            Our program: from recurrence to the universe.
        </div>
    </div>

    <h2>Core Mechanisms</h2>
    ${coreMechanisms.map(m => `
        <div class="volume-block">
            <h4 style="margin-top:0;color:var(--accent-cyan);">${m.title}</h4>
            <p style="margin:0;color:var(--text-dim);line-height:1.7;">${m.description}</p>
        </div>
    `).join('')}

    <h2>The Eight Primitives</h2>
    <p style="text-align:center;color:var(--text-dim);font-size:0.95rem;">
        The declared starting architecture of the framework.<br>
        Four dynamic primitives govern change. Four property primitives select structure.
    </p>
    <div class="comparison-scroll">
    <table class="data-table">
        <thead><tr><th>Primitive</th><th>Type</th><th>Frozen datum / role</th></tr></thead>
        <tbody>
            ${primitives.map(p => `
                <tr><td>${p.label} ${p.name}</td><td>${p.type}</td><td>${p.role}</td></tr>
            `).join('')}
        </tbody>
    </table>
    </div>
    <div style="max-width:600px;margin:0.8rem auto;padding:0.8rem 1rem;background:rgba(8,8,22,0.65);border:1px solid rgba(136,204,255,0.3);border-radius:18px;text-align:center;">
        <span style="font-size:1.1rem;font-weight:700;color:var(--accent-cyan);">LCM(5, 3, 2, 7) = 210</span>
    </div>

    <h2>The Four Pillars</h2>
    <p style="text-align:center;color:var(--text-dim);font-size:0.95rem;">
        The laws that govern how primitives interact.<br>
        Modern roles are sharpened by the audits.
    </p>
    <div class="comparison-scroll">
    <table class="data-table">
        <thead><tr><th>Pillar</th><th>Modern role</th></tr></thead>
        <tbody>
            ${pillars.map(p => `
                <tr><td>${p.name}</td><td>${p.role}</td></tr>
            `).join('')}
        </tbody>
    </table>
    </div>

    <h2>The Journey</h2>
    <div style="display:flex;flex-wrap:wrap;gap:0.8rem;justify-content:center;margin:1rem 0;">
        ${journey.map(j => `
            <div style="flex:1;min-width:150px;max-width:220px;background:rgba(8,8,22,0.65);border-radius:18px;padding:1.2rem 1rem;text-align:center;border:1px solid rgba(130,110,240,0.2);backdrop-filter:blur(6px);">
                <div style="font-size:2rem;font-weight:800;color:var(--accent-cyan);">${j.step}</div>
                <div style="font-weight:700;color:var(--text-light);margin-top:0.3rem;">${j.title}</div>
                <div style="font-size:0.8rem;color:var(--text-dim);margin-top:0.3rem;">${j.text}</div>
            </div>
        `).join('')}
    </div>

    <h2>Key Results</h2>
    <div class="flex-grid">
        ${achievements.map(a => `
            <div class="unif-card">
                <strong>${a.title}</strong>
                <div class="check-green">${a.subtitle}</div>
            </div>
        `).join('')}
    </div>

    <h2>Honest Status</h2>
    <div style="max-width:800px;margin:0 auto;padding:1.5rem 2rem;background:rgba(8,8,22,0.65);border-radius:18px;border:1px solid rgba(136,204,255,0.4);text-align:center;backdrop-filter:blur(8px);">
        <p style="font-size:0.9rem;color:var(--text-dim);line-height:1.8;margin:0;">
            ${honesty.inputs}<br>
            ${honesty.issues}<br>
            <em>${honesty.status}</em>
        </p>
    </div>

    <div class="quote">"One tiny seed of recurrence...<br>grows into everything."</div></div>`;
}

window.generateHome = generateHome;