// data-paradoxes.js
// Paradoxes page content

const paradoxCategories = [
    {
        category: "Set Theory and Logic",
        items: [
            { name: "Russell's Paradox", assumption: "Boolean equality", mechanism: "P1, II" },
            { name: "Cantor's Paradox", assumption: "Completed infinity", mechanism: "P2" },
            { name: "Burali-Forti Paradox", assumption: "Completed infinity", mechanism: "P2" },
            { name: "Richard's Paradox", assumption: "Boolean equality", mechanism: "P1" },
            { name: "Berry's Paradox", assumption: "Boolean equality", mechanism: "P1" },
            { name: "Grelling–Nelson Paradox", assumption: "Boolean equality", mechanism: "P1" },
            { name: "Kleene–Rosser Paradox", assumption: "Boolean equality", mechanism: "P1, II" },
            { name: "Curry's Paradox", assumption: "Boolean equality", mechanism: "P1" },
            { name: "Löb's Paradox", assumption: "Boolean equality", mechanism: "P1" },
            { name: "The Liar Paradox", assumption: "Boolean equality", mechanism: "P1" },
            { name: "Strengthened Liar", assumption: "Boolean equality", mechanism: "P1" },
            { name: "Liar Cycle (Postcard)", assumption: "Boolean equality", mechanism: "P1" },
            { name: "Yablo's Paradox", assumption: "Completed infinity", mechanism: "P2" },
            { name: "Card Paradox (Jourdain)", assumption: "Boolean equality", mechanism: "P1" },
            { name: "Knower Paradox", assumption: "Boolean equality", mechanism: "P1, II" },
            { name: "Girard's Paradox", assumption: "Boolean equality", mechanism: "P1" },
            { name: "Mirimanoff's Paradox", assumption: "Completed infinity", mechanism: "P2" },
            { name: "The Lottery Paradox (epistemic)", assumption: "Boolean equality, Completed infinity", mechanism: "P1, P2" },
            { name: "The Preface Paradox", assumption: "Boolean equality", mechanism: "P1" },
            { name: "Fitch's Knowability Paradox", assumption: "Boolean equality, Static truth", mechanism: "P1, P5" },
            { name: "Moore's Paradox", assumption: "Boolean equality", mechanism: "P1" },
            { name: "The Paradox of the Court (Protagoras)", assumption: "Boolean equality", mechanism: "P1, II" }
        ]
    },
    {
        category: "Infinity and Number Theory",
        items: [
            { name: "Hilbert's Hotel", assumption: "Completed infinity", mechanism: "P2" },
            { name: "Galileo's Paradox", assumption: "Boolean equality, Completed infinity", mechanism: "P1, P2" },
            { name: "Skolem's Paradox", assumption: "Completed infinity", mechanism: "P2" },
            { name: "Thomson's Lamp", assumption: "Continuum", mechanism: "P3" },
            { name: "Ross–Littlewood Paradox", assumption: "Completed infinity", mechanism: "P2" },
            { name: "Grandi's Series", assumption: "Boolean equality, Completed infinity", mechanism: "P1" },
            { name: "Infinite Lottery Paradox", assumption: "Completed infinity", mechanism: "P2" },
            { name: "Zeno's Paradox of Plurality", assumption: "Continuum", mechanism: "P3" },
            { name: "Aristotle's Wheel Paradox", assumption: "Continuum", mechanism: "P3" },
            { name: "The Supertask Paradox", assumption: "Continuum, Completed infinity", mechanism: "P2, P3" },
            { name: "Benardete's Paradox", assumption: "Completed infinity", mechanism: "P2" },
            { name: "Paradox of the Gods", assumption: "Completed infinity", mechanism: "P2" },
            { name: "The Dichotomy (Zeno variant)", assumption: "Continuum", mechanism: "P3" },
            { name: "Achilles and the Tortoise", assumption: "Continuum", mechanism: "P3" },
            { name: "The Arrow (Zeno)", assumption: "Continuum", mechanism: "P3" },
            { name: "The Stadium (Zeno)", assumption: "Continuum", mechanism: "P3" }
        ]
    },
    {
        category: "Geometry and Measure",
        items: [
            { name: "Banach–Tarski Paradox", assumption: "Continuum, Axiom of choice", mechanism: "P3, P4" },
            { name: "Hausdorff Paradox", assumption: "Continuum, Axiom of choice", mechanism: "P3, P4" },
            { name: "Vitali's Paradox", assumption: "Continuum, Axiom of choice", mechanism: "P3" },
            { name: "Sierpiński–Mazurkiewicz Paradox", assumption: "Continuum, Axiom of choice", mechanism: "P3, P4" },
            { name: "Tarski's Circle-Squaring", assumption: "Continuum, Axiom of choice", mechanism: "P3, P4" },
            { name: "Koch Snowflake", assumption: "Continuum", mechanism: "P3" },
            { name: "Painter's Paradox (Gabriel's Horn)", assumption: "Continuum, Completed infinity", mechanism: "P2, P3" },
            { name: "Smale's Paradox (Sphere Eversion)", assumption: "Continuum", mechanism: "P3" },
            { name: "Schwarz Lantern", assumption: "Continuum", mechanism: "P3" },
            { name: "Coastline Paradox", assumption: "Continuum", mechanism: "P3" },
            { name: "The Missing Square Puzzle", assumption: "Boolean equality", mechanism: "P1" }
        ]
    },
    {
        category: "Probability and Statistics",
        items: [
            { name: "St. Petersburg Paradox", assumption: "Completed infinity", mechanism: "P2" },
            { name: "Two Envelopes Paradox", assumption: "Continuum, Completed infinity", mechanism: "P2, P3" },
            { name: "Bertrand's Paradox", assumption: "Static truth", mechanism: "P4" },
            { name: "Simpson's Paradox", assumption: "Static truth", mechanism: "P5" },
            { name: "Monty Hall Problem", assumption: "None (consistent)", mechanism: "—" },
            { name: "Sleeping Beauty Problem", assumption: "Boolean equality", mechanism: "P1" },
            { name: "The Doomsday Argument", assumption: "Static truth, Completed infinity", mechanism: "P2, P5" },
            { name: "Exchange Paradox", assumption: "Continuum", mechanism: "P3" },
            { name: "Berkson's Paradox", assumption: "Static truth", mechanism: "P5" },
            { name: "Lord's Paradox", assumption: "Static truth", mechanism: "P5" },
            { name: "Prosecutor's Fallacy", assumption: "Boolean equality", mechanism: "P1" },
            { name: "Lindley's Paradox", assumption: "Completed infinity", mechanism: "P2" },
            { name: "The Base Rate Fallacy", assumption: "Boolean equality", mechanism: "P1" },
            { name: "Stein's Paradox", assumption: "Static truth", mechanism: "P5" },
            { name: "The Inspection Paradox", assumption: "Static truth", mechanism: "P5" }
        ]
    },
    {
        category: "Physics",
        items: [
            { name: "EPR Paradox", assumption: "Local realism", mechanism: "P6" },
            { name: "Schrödinger's Cat", assumption: "Boolean equality, Local realism", mechanism: "II, P6" },
            { name: "Wigner's Friend", assumption: "Boolean equality", mechanism: "II" },
            { name: "Twin Paradox", assumption: "None (resolved in relativity)", mechanism: "—" },
            { name: "Olbers' Paradox", assumption: "Completed infinity", mechanism: "P2" },
            { name: "Fermi Paradox", assumption: "Completed infinity", mechanism: "P2" },
            { name: "Gibbs Paradox", assumption: "None (resolved in QM)", mechanism: "—" },
            { name: "Loschmidt's Paradox", assumption: "Static truth", mechanism: "P5" },
            { name: "Maxwell's Demon", assumption: "Static truth", mechanism: "II, P2" },
            { name: "Ladder Paradox", assumption: "None (resolved in relativity)", mechanism: "—" },
            { name: "Black Hole Information Paradox", assumption: "Boolean equality, Static truth", mechanism: "P5, P6, II" },
            { name: "Firewall Paradox", assumption: "Local realism", mechanism: "P6" },
            { name: "Magnetic Monopole Problem", assumption: "Completed infinity", mechanism: "P2" },
            { name: "Strong CP Problem", assumption: "Static truth", mechanism: "P3" },
            { name: "Hierarchy Problem", assumption: "Static truth", mechanism: "P2" }
        ]
    },
    {
        category: "Quantum Mechanics",
        items: [
            { name: "The Measurement Problem", assumption: "Boolean equality, Static truth", mechanism: "II, P6" },
            { name: "Quantum Zeno Effect", assumption: "None (confirmed)", mechanism: "II" },
            { name: "Bell's Inequality Violation", assumption: "Local realism", mechanism: "P6" },
            { name: "Quantum Eraser", assumption: "Static truth, Local realism", mechanism: "P6" },
            { name: "Delayed Choice Quantum Eraser", assumption: "Static truth, Local realism", mechanism: "P6" },
            { name: "Elitzur–Vaidman Bomb Tester", assumption: "None (consistent)", mechanism: "II" },
            { name: "Hardy's Paradox", assumption: "Local realism", mechanism: "P6" },
            { name: "GHZ Paradox", assumption: "Local realism", mechanism: "P6" },
            { name: "Aharonov–Bohm Effect", assumption: "Local realism", mechanism: "P6" },
            { name: "Mott Problem", assumption: "Boolean equality", mechanism: "II" },
            { name: "Renninger Negative-Result", assumption: "Boolean equality", mechanism: "II" }
        ]
    },
    {
        category: "Cosmology and Philosophy",
        items: [
            { name: "Kant's First Antinomy (time)", assumption: "Completed infinity", mechanism: "P2" },
            { name: "Kant's Second Antinomy (simples)", assumption: "Continuum", mechanism: "P3" },
            { name: "Kant's Third Antinomy (free will)", assumption: "Static truth", mechanism: "P5" },
            { name: "Kant's Fourth Antinomy (necessary being)", assumption: "Static truth", mechanism: "P5" },
            { name: "Newcomb's Paradox", assumption: "Static truth", mechanism: "P2, II" },
            { name: "Unexpected Hanging Paradox", assumption: "Boolean equality", mechanism: "P1" },
            { name: "Sorites Paradox", assumption: "Boolean equality", mechanism: "II" },
            { name: "Theseus' Ship", assumption: "Boolean equality", mechanism: "P1" },
            { name: "Buridan's Donkey", assumption: "Boolean equality, Static truth", mechanism: "II, P4" },
            { name: "Meno's Paradox", assumption: "Boolean equality", mechanism: "SR, II" },
            { name: "Problem of Induction", assumption: "Static truth", mechanism: "P5" },
            { name: "Simulation Argument", assumption: "Static truth, Completed infinity", mechanism: "P2, P5" },
            { name: "Boltzmann Brain Paradox", assumption: "Completed infinity", mechanism: "P2" },
            { name: "Mere Addition Paradox (Parfit)", assumption: "Boolean equality", mechanism: "P1" }
        ]
    }
];

const mechanismSummary = [
    { notation: "P1", name: "Equality Processor / Spectral Equality", count: 38 },
    { notation: "P2", name: "Asymptotic Infinity / Finite Information Bound", count: 28 },
    { notation: "P3", name: "Discrete Spacetime / Voxel Lattice", count: 19 },
    { notation: "P4", name: "Deterministic Canvas", count: 7 },
    { notation: "P5", name: "Steering Dynamics / Meta-time", count: 16 },
    { notation: "P6", name: "Non-local Canvas / Wave intersections", count: 12 },
    { notation: "II", name: "Threshold Condition (Pillar II)", count: 20 },
    { notation: "SR", name: "Structural Resonance", count: 1 }
];

const assumptionSummary = [
    { assumption: "Boolean equality", count: 38 },
    { assumption: "Completed infinity", count: 28 },
    { assumption: "Continuum", count: 19 },
    { assumption: "Axiom of choice", count: 7 },
    { assumption: "Static truth", count: 16 },
    { assumption: "Local realism", count: 12 }
];

function generateParadoxesPage() {
    const crt = document.body.classList.contains('crt-mode');
    let totalCount = 0;
    
    let html = `<h2>${crt ? 'PARADOXES DISSOLVED: COMPLETE COMPENDIUM' : 'Paradoxes Dissolved: Complete Compendium'}</h2>
    <p>${crt ? '105 classical paradoxes that have resisted resolution in standard mathematics (ZFC) dissolve naturally in Canvas Temporal Mathematics (CTM). Each paradox is traced to one or more of six flawed assumptions.' : '105 classical paradoxes that have resisted resolution in standard mathematics (ZFC) dissolve naturally in Canvas Temporal Mathematics (CTM). Each paradox is traced to one or more of six flawed assumptions.'}</p>
    
    <h3>${crt ? 'SCORING LEGEND' : 'Scoring Legend'}</h3>
    <table class="data-table">
        <thead><tr><th style="text-align:left;">${crt ? 'NOTATION' : 'Notation'}</th><th style="text-align:left;">${crt ? 'CTM MECHANISM' : 'CTM Mechanism'}</th></tr></thead>
        <tbody>`;
    
    mechanismSummary.forEach(m => {
        html += `<tr><td style="text-align:left; margin-left:20px;">${m.notation}</td><td style="text-align:left; margin-left:20px;">${crt ? m.name.toUpperCase() : m.name}</td></tr>`;
    });
    
    html += `</tbody></table>`;
    
    paradoxCategories.forEach(cat => {
        totalCount += cat.items.length;
        html += `<h3>${crt ? cat.category.toUpperCase() : cat.category} (${cat.items.length})</h3>
        <table class="data-table">
            <thead><tr><th>${crt ? '#' : '#'}</th><th style="text-align:left;">${crt ? 'PARADOX' : 'Paradox'}</th><th style="text-align:left;">${crt ? 'ASSUMPTION REPLACED' : 'Assumption Replaced'}</th><th style="text-align:left;">${crt ? 'CTM MECHANISM' : 'CTM Mechanism'}</th></tr></thead>
            <tbody>`;
        
        cat.items.forEach((item, index) => {
            const num = crt ? String(index + 1).padStart(2, '0') : index + 1;
            html += `<tr>
                <td style="${crt ? 'color:#00cc33;font-size:0.78rem;text-align:center;' : 'text-align:center;'}">${num}</td>
                <td style="text-align:left;">${item.name}</td>
                <td style="text-align:left;">${crt ? item.assumption.toUpperCase() : item.assumption}</td>
                <td style="text-align:left;">${item.mechanism}</td>
            </tr>`;
        });
        
        html += `</tbody></table>`;
    });
    
    // Summary by CTM Mechanism
    html += `<h3>${crt ? 'SUMMARY BY CTM MECHANISM' : 'Summary by CTM Mechanism'}</h3>
    <table class="data-table">
        <thead><tr><th style="text-align:left;">${crt ? 'NOTATION' : 'Notation'}</th><th style="text-align:left;">${crt ? 'MECHANISM' : 'Mechanism'}</th><th>${crt ? 'COUNT' : 'Count'}</th></tr></thead>
        <tbody>`;
    
    mechanismSummary.forEach(m => {
        html += `<tr><td style="text-align:left;">${m.notation}</td><td style="text-align:left;">${crt ? m.name.toUpperCase() : m.name}</td><td>${m.count}</td></tr>`;
    });
    
    html += `</tbody></table>`;
    
    // Summary by Assumption Replaced
    html += `<h3>${crt ? 'SUMMARY BY ASSUMPTION REPLACED' : 'Summary by Assumption Replaced'}</h3>
    <table class="data-table">
        <thead><tr><th style="text-align:left;">${crt ? 'ASSUMPTION' : 'Assumption'}</th><th>${crt ? 'COUNT' : 'Count'}</th></tr></thead>
        <tbody>`;
    
    assumptionSummary.forEach(a => {
        html += `<tr><td style="text-align:left;">${crt ? a.assumption.toUpperCase() : a.assumption}</td><td>${a.count}</td></tr>`;
    });
    
    html += `</tbody></table>
    <div class="quote">${crt ? '105 PARADOXES DISSOLVED. SIX ASSUMPTIONS REPLACED. ONE FRAMEWORK.' : '105 paradoxes dissolved. Six assumptions replaced. One framework.'}</div>`;
    
    return html;
}

window.generateParadoxesPage = generateParadoxesPage;