// data-comparison.js
// Comparison page content — current programme state

function generateComparisonPage() {
    const crt = document.body.classList.contains('crt-mode');
    
    const check = '<span class="check-mark">✓</span>';
    const cross = '<span class="cross-mark">✗</span>';
    const partial = '<span class="question-mark">◐</span>';
    
    return `<h2>${crt ? 'COMPARISON: CANVAS VS. OTHER FRAMEWORKS' : 'Comparison: Canvas vs. Other Frameworks'}</h2>
    <p>${crt ? 'This page compares the Emergence Canvas Framework with established frameworks. The Canvas framework is a mathematical-physics research programme, not an empirically established theory of Nature. Scores reflect what has been derived, what is conditional, and what remains open. The comparison is structural, not empirical equivalence.' : 'This page compares the Emergence Canvas Framework with established frameworks. The Canvas framework is a mathematical-physics research programme, not an empirically established theory of Nature. Scores reflect what has been derived, what is conditional, and what remains open. The comparison is structural, not empirical equivalence.'}</p>

    <h3>${crt ? 'TABLE 1: STRUCTURAL FEATURES' : 'Table 1: Structural Features'}</h3>
    <p>${crt ? 'What the framework IS. Binary comparison of structural properties. ◐ means partially satisfied or conditional.' : 'What the framework is. Binary comparison of structural properties. ◐ means partially satisfied or conditional.'}</p>
    <div class="comparison-scroll">
    <table class="comparison-table">
        <thead><tr><th>${crt ? 'FEATURE' : 'Feature'}</th><th>Canvas</th><th>SM</th><th>GR</th><th>String</th><th>LQG</th><th>Causal</th></tr></thead>
        <tbody>
            <tr><td>${crt ? 'STATES EXPLICIT AXIOMS' : 'States explicit axioms'}</td><td class="check-mark">✓</td><td class="check-mark">✓</td><td class="cross-mark">✗</td><td class="cross-mark">✗</td><td class="cross-mark">✗</td><td class="check-mark">✓</td></tr>
            <tr><td>${crt ? 'ZERO FREE PARAMETERS (MACHINE)' : 'Zero free parameters (Machine)'}</td><td>${partial}</td><td class="cross-mark">✗</td><td class="cross-mark">✗</td><td class="cross-mark">✗</td><td class="cross-mark">✗</td><td class="cross-mark">✗</td></tr>
            <tr><td>${crt ? 'SINGLE UNDERLYING MECHANISM' : 'Single underlying mechanism'}</td><td>${partial}</td><td class="cross-mark">✗</td><td class="cross-mark">✗</td><td class="check-mark">✓</td><td class="check-mark">✓</td><td class="check-mark">✓</td></tr>
            <tr><td>${crt ? 'DISCRETE SPACETIME' : 'Discrete spacetime'}</td><td class="check-mark">✓</td><td class="cross-mark">✗</td><td class="cross-mark">✗</td><td class="cross-mark">✗</td><td class="check-mark">✓</td><td class="check-mark">✓</td></tr>
            <tr><td>${crt ? 'BACKGROUND INDEPENDENT' : 'Background independent'}</td><td class="check-mark">✓</td><td class="cross-mark">✗</td><td class="check-mark">✓</td><td class="check-mark">✓</td><td class="check-mark">✓</td><td class="check-mark">✓</td></tr>
            <tr><td>${crt ? 'EMERGENT SPACETIME' : 'Emergent spacetime'}</td><td>${partial}</td><td class="cross-mark">✗</td><td class="cross-mark">✗</td><td>${partial}</td><td class="check-mark">✓</td><td class="check-mark">✓</td></tr>
            <tr><td>${crt ? 'UNIFIES ALL FORCES' : 'Unifies all forces'}</td><td>${partial}</td><td class="cross-mark">✗</td><td class="cross-mark">✗</td><td class="check-mark">✓</td><td class="cross-mark">✗</td><td class="cross-mark">✗</td></tr>
            <tr><td>${crt ? 'QUANTUM + GRAVITY UNIFIED' : 'Quantum + Gravity unified'}</td><td>${partial}</td><td class="cross-mark">✗</td><td class="cross-mark">✗</td><td class="check-mark">✓</td><td class="check-mark">✓</td><td class="cross-mark">✗</td></tr>
            <tr><td>${crt ? 'FALSIFIABLE PREDICTIONS' : 'Falsifiable predictions'}</td><td class="check-mark">✓</td><td class="check-mark">✓</td><td class="check-mark">✓</td><td class="cross-mark">✗</td><td class="cross-mark">✗</td><td class="check-mark">✓</td></tr>
            <tr><td>${crt ? 'ANALYTIC DERIVATIONS (NO SIMULATIONS)' : 'Analytic derivations (no simulations)'}</td><td class="check-mark">✓</td><td class="check-mark">✓</td><td class="check-mark">✓</td><td class="check-mark">✓</td><td class="check-mark">✓</td><td class="check-mark">✓</td></tr>
            <tr><td>${crt ? 'FINITE INFORMATION BOUND DERIVED' : 'Finite information bound derived'}</td><td class="cross-mark">✗</td><td class="cross-mark">✗</td><td class="cross-mark">✗</td><td class="cross-mark">✗</td><td class="cross-mark">✗</td><td class="cross-mark">✗</td></tr>
            <tr><td>${crt ? 'PROVENANCE / DEPENDENCY NOTATION' : 'Provenance / dependency notation'}</td><td class="check-mark">✓</td><td class="cross-mark">✗</td><td class="cross-mark">✗</td><td class="cross-mark">✗</td><td class="cross-mark">✗</td><td class="cross-mark">✗</td></tr>
            <tr><td>${crt ? 'NO-GO RESULTS DOCUMENTED' : 'No-go results documented'}</td><td class="check-mark">✓</td><td class="cross-mark">✗</td><td class="cross-mark">✗</td><td class="cross-mark">✗</td><td class="cross-mark">✗</td><td class="cross-mark">✗</td></tr>
            <tr><td>${crt ? 'HONEST PARAMETER ACCOUNTING' : 'Honest parameter accounting'}</td><td class="check-mark">✓</td><td class="check-mark">✓</td><td class="cross-mark">✗</td><td class="cross-mark">✗</td><td class="cross-mark">✗</td><td class="cross-mark">✗</td></tr>
            <tr><td>${crt ? 'EMPIRICALLY ESTABLISHED' : 'Empirically established'}</td><td class="cross-mark">✗</td><td class="check-mark">✓</td><td class="check-mark">✓</td><td class="cross-mark">✗</td><td class="cross-mark">✗</td><td class="cross-mark">✗</td></tr>
            <tr><td>${crt ? 'HELD-OUT DISCRIMINATING PREDICTION' : 'Held-out discriminating prediction'}</td><td class="cross-mark">✗</td><td class="check-mark">✓</td><td class="check-mark">✓</td><td class="cross-mark">✗</td><td class="cross-mark">✗</td><td class="cross-mark">✗</td></tr>
            <tr style="font-weight:bold;background:rgba(100, 140, 255, 0.15);"><td>${crt ? 'TOTAL' : 'Total'}</td><td>10+3◐</td><td>6</td><td>4</td><td>6</td><td>5</td><td>6</td></tr>
        </tbody>
    </table>
    </div>

    <h3>${crt ? 'TABLE 2: FRAMEWORK REPRODUCTION' : 'Table 2: Framework Reproduction'}</h3>
    <p>${crt ? 'Does the framework recover established physics? ✓ = reproduced, ◐ = structurally reproduced or conditionally derived, ✗ = not addressed or withdrawn.' : 'Does the framework recover established physics? ✓ = reproduced, ◐ = structurally reproduced or conditionally derived, ✗ = not addressed or withdrawn.'}</p>
    <div class="comparison-scroll">
    <table class="comparison-table">
        <thead><tr><th>${crt ? 'FRAMEWORK' : 'Framework'}</th><th>Canvas</th><th>SM</th><th>GR</th><th>String</th><th>LQG</th><th>Causal</th></tr></thead>
        <tbody>
            <tr><td>${crt ? 'GENERAL RELATIVITY' : 'General Relativity'}</td><td>${partial}</td><td class="cross-mark">✗</td><td class="check-mark">✓</td><td class="check-mark">✓</td><td class="check-mark">✓</td><td class="check-mark">✓</td></tr>
            <tr><td>${crt ? 'QUANTUM MECHANICS' : 'Quantum Mechanics'}</td><td class="check-mark">✓</td><td class="check-mark">✓</td><td class="cross-mark">✗</td><td class="check-mark">✓</td><td class="cross-mark">✗</td><td class="cross-mark">✗</td></tr>
            <tr><td>${crt ? 'QUANTUM FIELD THEORY' : 'Quantum Field Theory'}</td><td>${partial}</td><td class="check-mark">✓</td><td class="cross-mark">✗</td><td class="check-mark">✓</td><td class="cross-mark">✗</td><td class="cross-mark">✗</td></tr>
            <tr><td>${crt ? 'STANDARD MODEL GAUGE GROUP' : 'Standard Model gauge group'}</td><td>${partial}</td><td class="check-mark">✓</td><td class="cross-mark">✗</td><td>${partial}</td><td class="cross-mark">✗</td><td class="cross-mark">✗</td></tr>
            <tr><td>${crt ? 'STANDARD MODEL FERMION CONTENT' : 'Standard Model fermion content'}</td><td>${partial}</td><td class="check-mark">✓</td><td class="cross-mark">✗</td><td>${partial}</td><td class="cross-mark">✗</td><td class="cross-mark">✗</td></tr>
            <tr><td>${crt ? 'ANOMALY CANCELLATION' : 'Anomaly cancellation'}</td><td class="check-mark">✓</td><td class="check-mark">✓</td><td class="cross-mark">✗</td><td class="check-mark">✓</td><td class="cross-mark">✗</td><td class="cross-mark">✗</td></tr>
            <tr><td>${crt ? 'THERMODYNAMICS' : 'Thermodynamics'}</td><td class="check-mark">✓</td><td class="check-mark">✓</td><td class="check-mark">✓</td><td class="check-mark">✓</td><td class="check-mark">✓</td><td class="cross-mark">✗</td></tr>
            <tr><td>${crt ? 'CLASSICAL MECHANICS' : 'Classical Mechanics'}</td><td class="check-mark">✓</td><td class="check-mark">✓</td><td class="check-mark">✓</td><td class="check-mark">✓</td><td class="check-mark">✓</td><td class="check-mark">✓</td></tr>
            <tr><td>${crt ? 'ELECTROMAGNETISM' : 'Electromagnetism'}</td><td class="check-mark">✓</td><td class="check-mark">✓</td><td class="cross-mark">✗</td><td class="check-mark">✓</td><td class="cross-mark">✗</td><td class="cross-mark">✗</td></tr>
            <tr><td>${crt ? 'REGGE CALCULUS' : 'Regge Calculus'}</td><td class="check-mark">✓</td><td class="cross-mark">✗</td><td class="cross-mark">✗</td><td class="cross-mark">✗</td><td class="check-mark">✓</td><td class="cross-mark">✗</td></tr>
            <tr><td>${crt ? 'COSMOLOGY (ΛCDM-COMPATIBLE)' : 'Cosmology (ΛCDM-compatible)'}</td><td>${partial}</td><td class="check-mark">✓</td><td class="check-mark">✓</td><td class="check-mark">✓</td><td class="check-mark">✓</td><td class="check-mark">✓</td></tr>
            <tr style="font-weight:bold;background:rgba(100, 140, 255, 0.15);"><td>${crt ? 'TOTAL' : 'Total'}</td><td>5+5◐</td><td>9</td><td>4</td><td>8+2◐</td><td>6</td><td>4</td></tr>
        </tbody>
    </table>
    </div>

    <h3>${crt ? 'SCORING METHODOLOGY' : 'Scoring Methodology'}</h3>
    <table class="data-table">
        <thead><tr><th style="text-align:left;">${crt ? 'SYMBOL' : 'Symbol'}</th><th style="text-align:left;">${crt ? 'MEANING' : 'Meaning'}</th></tr></thead>
        <tbody>
            <tr><td style="text-align:left;"><span class="check-mark">✓</span></td><td style="text-align:left;">${crt ? 'DERIVED FROM AXIOMS OR REPRODUCED MATHEMATICALLY. FOR CANVAS: FOLLOWS FROM STATED ASSUMPTIONS.' : 'Derived from axioms or reproduced mathematically. For Canvas: follows from stated assumptions.'}</td></tr>
            <tr><td style="text-align:left;"><span class="question-mark">◐</span></td><td style="text-align:left;">${crt ? 'PARTIAL, CONDITIONAL, OR STRUCTURALLY REPRODUCED BUT NOT NUMERICALLY DERIVED. FOR CANVAS: FOLLOWS AFTER AN EXPLICIT STRUCTURAL BRIDGE.' : 'Partial, conditional, or structurally reproduced but not numerically derived. For Canvas: follows after an explicit structural bridge.'}</td></tr>
            <tr><td style="text-align:left;"><span class="cross-mark">✗</span></td><td style="text-align:left;">${crt ? 'NOT ADDRESSED, WITHDRAWN, OR RULED OUT. FOR CANVAS: A PROPOSED DERIVATION THAT HAS BEEN SHOWN NOT TO FOLLOW.' : 'Not addressed, withdrawn, or ruled out. For Canvas: a proposed derivation that has been shown not to follow.'}</td></tr>
        </tbody>
    </table>

    <h3>${crt ? 'WHAT THIS COMPARISON DOES AND DOES NOT SHOW' : 'What This Comparison Does and Does Not Show'}</h3>
    <p>${crt ? 'THIS COMPARISON SHOWS STRUCTURAL FEATURES AND REPRODUCTION CAPACITY. IT DOES NOT SHOW EMPIRICAL EQUIVALENCE OR OBSERVATIONAL PREFERENCE.' : 'This comparison shows structural features and reproduction capacity. It does not show empirical equivalence or observational preference.'}</p>
    
    <table class="data-table">
        <thead><tr><th style="text-align:left;">${crt ? 'QUESTION' : 'Question'}</th><th>${crt ? 'ANSWER' : 'Answer'}</th></tr></thead>
        <tbody>
            <tr><td style="text-align:left;">${crt ? 'IS CANVAS EMPIRICALLY ESTABLISHED?' : 'Is Canvas empirically established?'}</td><td class="cross-mark">${crt ? '[NO] NOT YET — IT HAS NOT PRODUCED A HELD-OUT DISCRIMINATING PREDICTION' : 'No, not yet. It has not produced a held-out discriminating prediction.'}</td></tr>
            <tr><td style="text-align:left;">${crt ? 'IS CANVAS A COMPLETED TOE?' : 'Is Canvas a completed TOE?'}</td><td class="cross-mark">${crt ? '[NO] SEVERAL INDISPENSABLE SELECTORS REMAIN UNDERIVED' : 'No. Several indispensable selectors remain underived.'}</td></tr>
            <tr><td style="text-align:left;">${crt ? 'HAS CANVAS PRODUCED GENUINE MATHEMATICS?' : 'Has Canvas produced genuine mathematics?'}</td><td class="check-mark">${crt ? '[YES] CRT, WEYL ALGEBRAS, DGA, ANOMALY RATIOS, SPIN(10) BRANCHING, STABILITY THEOREMS' : 'Yes. CRT, Weyl algebras, DGA, anomaly ratios, Spin(10) branching, stability theorems.'}</td></tr>
            <tr><td style="text-align:left;">${crt ? 'HAS CANVAS IDENTIFIED WHAT REMAINS OPEN?' : 'Has Canvas identified what remains open?'}</td><td class="check-mark">${crt ? '[YES] MASTER-OBJECT GATE, PROPAGATION RULE, CHIRALITY, GENERATIONS, UV STABILIZATION, ABSOLUTE SCALE' : 'Yes. Master-object gate, propagation rule, chirality, generations, UV stabilization, absolute scale.'}</td></tr>
            <tr><td style="text-align:left;">${crt ? 'IS CANVAS CURRENTLY PREFERRED OVER ΛCDM?' : 'Is Canvas currently preferred over ΛCDM?'}</td><td class="cross-mark">${crt ? '[NO] RAW LIKELIHOOD IS TIED; COMPLEXITY PENALTIES FAVOR GR/ΛCDM' : 'No. Raw likelihood is tied; complexity penalties favor GR/ΛCDM.'}</td></tr>
        </tbody>
    </table>

    <h3>${crt ? 'THE HONEST POSITION' : 'The Honest Position'}</h3>
    <p>${crt ? 'THE EMERGENCE CANVAS FRAMEWORK IS A MATHEMATICAL-PHYSICS PROGRAMME INVESTIGATING FUNDAMENTAL UNIFICATION. IT CONTAINS GENUINE DERIVED STRUCTURE, EXPLICIT NO-GO RESULTS, AND PRECISELY STATED OPEN SELECTORS. IT IS NOT A COMPLETED THEORY OF EVERYTHING, AND IT IS NOT AN EMPIRICALLY ESTABLISHED CANDIDATE THEORY OF NATURE.' : 'The Emergence Canvas Framework is a mathematical-physics programme investigating fundamental unification. It contains genuine derived structure, explicit no-go results, and precisely stated open selectors. It is not a completed theory of everything, and it is not an empirically established candidate theory of Nature.'}</p>`;
}

window.generateComparisonPage = generateComparisonPage;