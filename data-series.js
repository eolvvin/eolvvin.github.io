// data-series.js
// Emergence Series page content with all paper data

const physicsBranch = {
    core: [
        { title: "A Unified Framework of Fundamental Physics", doi: "10.5281/zenodo.20392265" },
        { title: "Position Paper: A Unified Framework for Fundamental Physics", doi: "10.5281/zenodo.19928415" },
        { title: "Constructive Frameworks in Fundamental Physics", doi: "10.5281/zenodo.20096985" }
    ],
    quantumMechanics: [
        { title: "Lattice Quantum Canvas", doi: "10.5281/zenodo.20349965" },
        { title: "The Measurement Problem: A Threshold Resolution", doi: "10.5281/zenodo.20546695" }
    ],
    quantumFieldTheory: [
        { title: "Quantum Field Theory from the Canvas Model", doi: "10.5281/zenodo.20546554" },
        { title: "Renormalization from Discrete Spacetime", doi: "10.5281/zenodo.20546746" },
        { title: "Spin and Statistics from Thresholds", doi: "10.5281/zenodo.20546621" },
        { title: "The Feynman Path Integral as Threshold Histories", doi: "10.5281/zenodo.20546407" },
        { title: "Confinement from Voxel Lattice Topology", doi: "10.5281/zenodo.20546311" },
        { title: "Emergence X: The Derivation of String Theory", doi: "10.5281/zenodo.20021515" }
    ],
    cosmology: [
        { title: "Why the Higgs is Light", doi: "10.5281/zenodo.20546782" },
        { title: "Observational Signatures of Planck-Mass Dark Matter", doi: "10.5281/zenodo.20546355" },
        { title: "Why r << 0.01: The Tensor-to-Scalar Ratio", doi: "10.5281/zenodo.20546653" },
        { title: "Time Evolution of Constants", doi: "10.5281/zenodo.20047271" },
        { title: "Gravitational Wave Signatures of the Discrete Lattice", doi: "10.5281/zenodo.20546468" }
    ],
    historical: [
        { title: "The Cosmological Constant Correction", doi: "10.5281/zenodo.20438505" },
        { title: "The Weight of Reality", doi: "10.5281/zenodo.20512848" },
        { title: "From Mismatch to Milestone", doi: "10.5281/zenodo.20513047" }
    ]
};

const mathematicsBranch = {
    foundations: [
        { title: "Canvas Temporal Mathematics", doi: "10.5281/zenodo.20176016" },
        { title: "A Formal Model for CTM", doi: "10.5281/zenodo.20513257" },
		{ title: "CTM Position Paper", doi: "10.5281/zenodo.20396049" }
    ],
    classification: [
        { title: "The Complete Periodic Table of Mathematical Concepts", doi: "10.5281/zenodo.20182331" },
        { title: "The Periodic Table of Tethers: Mathematics", doi: "10.5281/zenodo.20323576" },
        { title: "The Periodic Table of Spectral Transforms", doi: "10.5281/zenodo.20396049" },
        { title: "The Canvas Periodic Table of Tethers", doi: "10.5281/zenodo.20313716" }
    ],
    numberTheory: [
        { title: "The Primitive Spectral Transform", doi: "10.5281/zenodo.20308627" },
        { title: "The Tensor Adele Class", doi: "10.5281/zenodo.20222359" },
        { title: "The Tensor Toolkit", doi: "10.5281/zenodo.20308851" },
        { title: "The Energy Separation Theorem", doi: "10.5281/zenodo.20546849" },
        { title: "The S-Invariant Attractor", doi: "10.5281/zenodo.20546889" },
        { title: "The Riemann Hypothesis as a Dynamical Attractor", doi: "10.5281/zenodo.20136786" }
    ],
    bridge: [
        { title: "The Prime Wave Bridge", doi: "10.5281/zenodo.20526620" },
        { title: "The Geometry of the CKM Parameter", doi: "10.5281/zenodo.20546200" }
    ],
    mathematicalPhysics: [
        { title: "The Cheeger-Plank Mechanism", doi: "10.5281/zenodo.20313135" },
        { title: "The Threshold Trace Formula", doi: "10.5281/zenodo.20237266" },
        { title: "The Threshold Index Theorem", doi: "10.5281/zenodo.20236909" }
    ]
};

const referenceDocuments = [
    { title: "Paradoxes Dissolved: A CTM Compendium", doi: "10.5281/zenodo.20275662" },
    { title: "Catalog of Canvas Model Predictions", doi: "10.5281/zenodo.20364753" },
    { title: "Compilation: Solved Problems", doi: "10.5281/zenodo.20366043" },
    { title: "Compilation: Derived Frameworks", doi: "10.5281/zenodo.20366151" },
    { title: "Dependency Map of Predictions", doi: "10.5281/zenodo.20513157" }
];

// Keep original volumes for backward compatibility
const volume1 = [
    { num: "1", title: "A Unified Field Theory", doi: "10.5281/zenodo.19639452" },
    { num: "2", title: "Quantum Foundations", doi: "10.5281/zenodo.19951901" },
    { num: "3", title: "Black Holes and Cosmology", doi: "10.5281/zenodo.19952123" },
    { num: "4", title: "Particle Physics", doi: "10.5281/zenodo.19953721" },
    { num: "5", title: "Condensed Matter Physics", doi: "10.5281/zenodo.19954369" },
    { num: "6", title: "Atomic and Optical Physics", doi: "10.5281/zenodo.19957655" },
    { num: "7", title: "Nuclear Physics", doi: "10.5281/zenodo.19957751" },
    { num: "8", title: "Classical Physics", doi: "10.5281/zenodo.19957869" },
    { num: "9", title: "Property Fields", doi: "10.5281/zenodo.20021043" },
    { num: "10", title: "The Derivation of String Theory", doi: "10.5281/zenodo.20021515" }
];

const volume2 = [
    { num: "11", title: "Acceleration as Primitive", doi: "10.5281/zenodo.19810849" },
    { num: "12", title: "Order as Primitive", doi: "10.5281/zenodo.19910866" },
    { num: "13", title: "Amplitude as Primitive", doi: "10.5281/zenodo.19911493" },
    { num: "14", title: "Polarity as Primitive", doi: "10.5281/zenodo.19912555" },
    { num: "15", title: "A Primitive Ontology for Wave Dynamics", doi: "10.5281/zenodo.19912939" },
    { num: "16", title: "Mass from Amplitude and Acceleration", doi: "10.5281/zenodo.19862861" },
    { num: "17", title: "Exponential Growth and Decay", doi: "10.5281/zenodo.19864284" },
    { num: "18", title: "Spacetime from Order and Amplitude", doi: "10.5281/zenodo.19872674" },
    { num: "19", title: "The Discrete Clock", doi: "10.5281/zenodo.19872794" },
    { num: "20", title: "Waveforms from Primitives Pairs", doi: "10.5281/zenodo.19876201" }
];

const volume3 = [
    { num: "21", title: "The Structural Fields", doi: "10.5281/zenodo.20045262" },
    { num: "22", title: "The Inhibitor", doi: "10.5281/zenodo.20046607" },
    { num: "23", title: "The Threshold Tensor", doi: "10.5281/zenodo.20046630" },
    { num: "24", title: "The Full Fermion Sector", doi: "10.5281/zenodo.20046645" },
    { num: "25", title: "The Quark Mixing Matrix", doi: "10.5281/zenodo.20046668" },
    { num: "26", title: "The Flavor Structure", doi: "10.5281/zenodo.20046680" },
    { num: "27", title: "Dynamic and Property Primitives", doi: "10.5281/zenodo.20096899" },
    { num: "28", title: "Tensor Properties from Primitives", doi: "10.5281/zenodo.20096957" },
    { num: "29", title: "The Three Simplified Equations of the Canvas Model", doi: "10.5281/zenodo.20046841" },
    { num: "30", title: "The Three Equations Across All Domains", doi: "10.5281/zenodo.20046700" }
];

const volume4 = [
    { num: "31", title: "Canvas Temporal Mathematics", doi: "10.5281/zenodo.20176016" },
    { num: "32", title: "The Riemann Hypothesis Solved in CTM", doi: "10.5281/zenodo.20136786" },
    { isCompanion: true, title: "Tensor Toolkit", doi: "10.5281/zenodo.20308851" },
    { isCompanion: true, title: "Primitive Spectral Analysis", doi: "10.5281/zenodo.20308627" },
    { isCompanion: true, title: "Tensor Adele Class", doi: "10.5281/zenodo.20222359" },
    { isCompanion: true, title: "Prime Wave Operator", doi: "10.5281/zenodo.20102262" },
    { isCompanion: true, title: "Why Mathematics is not Static", doi: "10.5281/zenodo.20228618" },
    { isCompanion: true, title: "Why ZFC Cannot Decide What It Cannot Express", doi: "10.5281/zenodo.20236035" },
    { isCompanion: true, title: "Can an untethered guitar string play a note?", doi: "10.5281/zenodo.20313313" },
    { isCompanion: true, title: "The Impossibility of Infinity", doi: "10.5281/zenodo.20312907" },
    { isCompanion: true, title: "Instantaneously Fast vs. Infinitely Fast", doi: "10.5281/zenodo.20319650" },
    { isCompanion: true, title: "Paradoxes Dissolved", doi: "10.5281/zenodo.20275662" },
    { num: "33", title: "The Complete Periodic Table of Mathematical Concepts", doi: "10.5281/zenodo.20182331" },
    { num: "34", title: "How CTM Unify Chemistry and Biology", doi: "10.5281/zenodo.20233919" },
    { num: "35", title: "The Steering Primitive", doi: "10.5281/zenodo.20148152" },
    { num: "36", title: "The Negative Primitives", doi: "10.5281/zenodo.20148951" },
    { num: "37", title: "The Periodic Table of Tethers", doi: "10.5281/zenodo.20323576" },
    { num: "38", title: "How Physical Constants Tie to Music", doi: "10.5281/zenodo.20313716" },
    { num: "39", title: "Canvas Model Unites All", doi: "10.5281/zenodo.20182528" }
];

const volume5 = [
    { num: "40", title: "The New Epistemology and Emergent Psychology", doi: "10.5281/zenodo.20181039" },
    { num: "41", title: "Free Will, Consciousness, Cognition, Cybernetics, and Creation", doi: "10.5281/zenodo.20181123" },
    { num: "42", title: "The Answer to Life, the Universe, and Everything", doi: "10.5281/zenodo.20181196" }
];

const standalonePhysics = [
    { title: "The Primitives of the Canvas Model (Compilation)", doi: "10.5281/zenodo.20061105" },
    { title: "The Great Generator", doi: "10.5281/zenodo.20065279" },
    { title: "A Deterministic Resolution of the Measurement Problem", doi: "10.5281/zenodo.20055624" },
    { title: "Inflation from First Principles", doi: "10.5281/zenodo.20047393" },
    { title: "Baryogenesis at Reheating", doi: "10.5281/zenodo.20047373" },
    { title: "The Complete Parameter Spectrum", doi: "10.5281/zenodo.20047334" },
    { title: "CMB Predictions of the Discrete Lattice", doi: "10.5281/zenodo.20047314" },
    { title: "Gravitational Wave Signatures of the Discrete Lattice", doi: "10.5281/zenodo.20047292" },
    { title: "Why Lepton Mixing Is Large", doi: "10.5281/zenodo.20047258" },
    { title: "The Fine-Structure Constant", doi: "10.5281/zenodo.20047112" },
    { title: "How 1/140 Generates All of Physics", doi: "10.5281/zenodo.20046994" },
    { title: "The Fundamental Coupling", doi: "10.5281/zenodo.20046942" },
    { title: "Why Quark Mixing Is Hierarchical", doi: "10.5281/zenodo.20046929" },
    { title: "Information-Theoretic Origins", doi: "10.5281/zenodo.20046915" },
    { title: "Why the Universe Began with Low Entropy", doi: "10.5281/zenodo.20020736" },
    { title: "Why is the Universe Flat?", doi: "10.5281/zenodo.20020854" },
    { title: "Dark Matter from Planck-Scale Black Hole Remnants", doi: "10.5281/zenodo.20020898" },
    { title: "Why Three Generations?", doi: "10.5281/zenodo.20031954" },
    { title: "The Fine-Structure Constant Is a Threshold", doi: "10.5281/zenodo.20020978" },
    { title: "Resolution of the Hubble Tension", doi: "10.5281/zenodo.20020702" },
    { title: "Why Spatial Axes Are Perpendicular", doi: "10.5281/zenodo.20020180" },
    { title: "Why Space Has Three Dimensions", doi: "10.5281/zenodo.20011680" },
    { title: "Resolution of the Strong CP Problem", doi: "10.5281/zenodo.20012618" },
    { title: "The Cosmological Constant", doi: "10.5281/zenodo.20010872" },
    { title: "Failure of the Singularity Theorems", doi: "10.5281/zenodo.19972062" },
    { title: "Completion of the Classical Self-Force Problem", doi: "10.5281/zenodo.19971657" },
    { title: "A Proof of Convergence of Regge Calculus", doi: "10.5281/zenodo.19958212" },
    { title: "Origin of Born Rule", doi: "10.5281/zenodo.19958089" }
];

const standaloneMath = [
    { title: "The Computational Universe", doi: "10.5281/zenodo.20350129" },
    { title: "Wave Goodbye to PEMDAS in CTM", doi: "10.5281/zenodo.20353362" },
    { title: "Dependencies Notation", doi: "10.5281/zenodo.20512324" },
    { title: "Division by Zero", doi: "10.5281/zenodo.20513225" },
    { title: "PEMDAS and Rocket Science", doi: "10.5281/zenodo.20513364" },
    { title: "Gravitational Sign Reversal", doi: "10.5281/zenodo.20513412" },
    { title: "The Canvas Exploration Program", doi: "10.5281/zenodo.20211209" },
    { title: "Harmonicity of the Algebraicity Field", doi: "10.5281/zenodo.20236712" },
    { title: "The Sitnikov Problem", doi: "10.5281/zenodo.20313223" },
    { title: "The Three Body Problem", doi: "10.5281/zenodo.20312792" }
];

function renderBranchSection(title, papers) {
    if (!papers.length) return '';
    const crt = document.body.classList.contains('crt-mode');
    let html = `<h3 style="margin: 1.5rem 0 0.5rem 0; font-size: 1.7rem;">${crt ? title.toUpperCase() : title}</h3><div class="volume-block"><div class="paper-list">`;
    papers.forEach(p => {
        const doiUrl = `https://doi.org/${p.doi}`;
        html += `<div><a href="${doiUrl}" class="paper-link" target="_blank" rel="noopener noreferrer">${crt ? '> ' + p.title.toUpperCase() : '✅ ' + p.title}</a></div>`;
    });
    html += `</div></div>`;
    return html;
}

function renderSubSection(title, papers) {
    if (!papers.length) return '';
    const crt = document.body.classList.contains('crt-mode');
    let html = `<h4 style="margin: 1.2rem 0 0.3rem 0; font-size: 1.3rem; color: ${crt ? '#ffaa00' : 'var(--accent-cyan)'};">${crt ? title.toUpperCase() : title}</h4><div class="volume-block"><div class="paper-list">`;
    papers.forEach(p => {
        const doiUrl = `https://doi.org/${p.doi}`;
        html += `<div><a href="${doiUrl}" class="paper-link" target="_blank" rel="noopener noreferrer">${crt ? '> ' + p.title.toUpperCase() : '✅ ' + p.title}</a></div>`;
    });
    html += `</div></div>`;
    return html;
}

function renderVolume(title, papers, showNumbers = true) {
    if (!papers.length) return '';
    const crt = document.body.classList.contains('crt-mode');
    let html = `<h3 style="margin: 1.5rem 0 0.5rem 0; font-size: 1.7rem;">${crt ? title.toUpperCase() : title}</h3><div class="volume-block"><div class="paper-list">`;
    papers.forEach(p => {
        let displayTitle;
        if (p.isCompanion) {
            displayTitle = crt ? `COMPANION: ${p.title.toUpperCase()}` : `Companion: ${p.title}`;
        } else if (showNumbers && p.num) {
            const num = crt ? String(p.num).padStart(2, '0') : p.num;
            displayTitle = crt ? `EMERGENCE ${num}: ${p.title.toUpperCase()}` : `Emergence ${p.num}: ${p.title}`;
        } else {
            displayTitle = crt ? p.title.toUpperCase() : p.title;
        }
        const doiUrl = `https://doi.org/${p.doi}`;
        html += `<div><a href="${doiUrl}" class="paper-link" target="_blank" rel="noopener noreferrer">${crt ? '' : '✅ '}${displayTitle}</a></div>`;
    });
    html += `</div></div>`;
    return html;
}

function generateSeriesPage() {
    const crt = document.body.classList.contains('crt-mode');
    return `<h2>${crt ? 'THE EMERGENCE SERIES' : 'The Emergence Series'}</h2>
    <p>${crt ? 'Complete collection of all published papers, organized by branch.' : 'Complete collection of all published papers, organized by branch.'}</p>
    
    <h3 style="margin: 2rem 0 1rem 0; font-size: 2rem; color: ${crt ? '#00ff41' : 'var(--text-light)'};">${crt ? 'PHYSICS BRANCH' : 'Physics Branch'}</h3>
    <p>${crt ? 'These papers derive, extend, or document physics results that flow from the TOE paper.' : 'These papers derive, extend, or document physics results that flow from the TOE paper.'}</p>
    ${renderBranchSection("Core", physicsBranch.core)}
    ${renderSubSection("Quantum Mechanics", physicsBranch.quantumMechanics)}
    ${renderSubSection("Quantum Field Theory", physicsBranch.quantumFieldTheory)}
    ${renderSubSection("Cosmology and Astrophysics", physicsBranch.cosmology)}
    ${renderSubSection("Historical Records", physicsBranch.historical)}
    
    <h3 style="margin: 2rem 0 1rem 0; font-size: 2rem; color: ${crt ? '#00ff41' : 'var(--text-light)'};">${crt ? 'MATHEMATICS BRANCH' : 'Mathematics Branch'}</h3>
    <p>${crt ? 'These papers build the number theory foundations and establish the connection between physics and mathematics.' : 'These papers build the number theory foundations and establish the connection between physics and mathematics.'}</p>
    ${renderSubSection("Foundations", mathematicsBranch.foundations)}
    ${renderSubSection("Classification Systems", mathematicsBranch.classification)}
    ${renderSubSection("Number Theory and Spectral Theory", mathematicsBranch.numberTheory)}
    ${renderSubSection("The Bridge", mathematicsBranch.bridge)}
    ${renderSubSection("Mathematical Physics", mathematicsBranch.mathematicalPhysics)}
    
    <h3 style="margin: 2rem 0 1rem 0; font-size: 2rem; color: ${crt ? '#00ff41' : 'var(--text-light)'};">${crt ? 'REFERENCE DOCUMENTS' : 'Reference Documents'}</h3>
    <p>${crt ? 'Serving both branches.' : 'Serving both branches.'}</p>
    ${renderBranchSection("", referenceDocuments)}
    
    <h3 style="margin: 2rem 0 1rem 0; font-size: 2rem; color: ${crt ? '#00ff41' : 'var(--text-light)'};">${crt ? 'EMERGENCE VOLUMES' : 'Emergence Volumes'}</h3>
    <p>${crt ? 'Original organization of the Emergence series.' : 'Original organization of the Emergence series.'}</p>
    ${renderVolume("Volume I: Foundations", volume1, true)}
    ${renderVolume("Volume II: Primitives", volume2, true)}
    ${renderVolume("Volume III: Structure", volume3, true)}
    ${renderVolume("Volume IV: Canvas Temporal Mathematics", volume4, true)}
    ${renderVolume("Volume V: Psychology, Free Will, Consciousness, Cognition, Creation, Evolution, and the Future", volume5, true)}
    
    <h3 style="margin: 2rem 0 1rem 0; font-size: 2rem; color: ${crt ? '#00ff41' : 'var(--text-light)'};">${crt ? 'STANDALONE PHYSICS PAPERS' : 'Standalone Physics Papers'}</h3>
    ${renderBranchSection("", standalonePhysics)}
    
    <h3 style="margin: 2rem 0 1rem 0; font-size: 2rem; color: ${crt ? '#00ff41' : 'var(--text-light)'};">${crt ? 'STANDALONE MATHEMATICS PAPERS' : 'Standalone Mathematics Papers'}</h3>
    ${renderBranchSection("", standaloneMath)}`;
}

window.generateSeriesPage = generateSeriesPage;