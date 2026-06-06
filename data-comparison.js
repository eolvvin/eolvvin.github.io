// data-comparison.js
// Comparison page content

function generateComparisonPage() {
    const crt = document.body.classList.contains('crt-mode');
    
    return `<h2>${crt ? 'COMPARISON: CANVAS MODEL VS. OTHER FRAMEWORKS' : 'Comparison: Canvas Model vs. Other Frameworks'}</h2>
    <p>${crt ? 'This page compares the Canvas Model with the major frameworks of fundamental physics. The comparison is structured in three sections: structural features, framework reproduction, and explanatory power.' : 'This page compares the Canvas Model with the major frameworks of fundamental physics. The comparison is structured in three sections: structural features, framework reproduction, and explanatory power.'}</p>

    <h3>${crt ? 'TABLE 1: STRUCTURAL FEATURES' : 'Table 1: Structural Features'}</h3>
    <p>${crt ? 'What the framework IS. Binary yes/no comparison of fundamental structural properties.' : 'What the framework is. Binary yes/no comparison of fundamental structural properties.'}</p>
    <div class="comparison-scroll">
    <table class="comparison-table">
        <thead><tr><th>${crt ? 'FEATURE' : 'Feature'}</th><th>Canvas</th><th>QFT</th><th>QM</th><th>GR</th><th>String</th><th>LQG</th><th>Causal</th></tr></thead>
        <tbody>
            <tr><td>${crt ? 'STATES EXPLICIT AXIOMS' : 'States explicit axioms'}</td><td class="check-mark">✓</td><td class="cross-mark">✗</td><td class="cross-mark">✗</td><td class="cross-mark">✗</td><td class="cross-mark">✗</td><td class="cross-mark">✗</td><td class="cross-mark">✗</td></tr>
            <tr><td>${crt ? 'ZERO FREE PARAMETERS' : 'Zero free parameters'}</td><td class="check-mark">✓</td><td class="cross-mark">✗</td><td class="cross-mark">✗</td><td class="cross-mark">✗</td><td class="cross-mark">✗</td><td class="cross-mark">✗</td><td class="cross-mark">✗</td></tr>
            <tr><td>${crt ? 'SINGLE UNDERLYING MECHANISM' : 'Single underlying mechanism'}</td><td class="check-mark">✓</td><td class="cross-mark">✗</td><td class="cross-mark">✗</td><td class="cross-mark">✗</td><td class="cross-mark">✗</td><td class="cross-mark">✗</td><td class="cross-mark">✗</td></tr>
            <tr><td>${crt ? 'DISCRETE SPACETIME' : 'Discrete spacetime'}</td><td class="check-mark">✓</td><td class="cross-mark">✗</td><td class="cross-mark">✗</td><td class="cross-mark">✗</td><td class="cross-mark">✗</td><td class="check-mark">✓</td><td class="check-mark">✓</td></tr>
            <tr><td>${crt ? 'BACKGROUND INDEPENDENT' : 'Background independent'}</td><td class="check-mark">✓</td><td class="cross-mark">✗</td><td class="cross-mark">✗</td><td class="check-mark">✓</td><td class="cross-mark">✗</td><td class="check-mark">✓</td><td class="check-mark">✓</td></tr>
            <tr><td>${crt ? 'EMERGENT SPACETIME' : 'Emergent spacetime'}</td><td class="check-mark">✓</td><td class="cross-mark">✗</td><td class="cross-mark">✗</td><td class="cross-mark">✗</td><td class="check-mark">✓</td><td class="check-mark">✓</td><td class="check-mark">✓</td></tr>
            <tr><td>${crt ? 'UNIFIES ALL FORCES' : 'Unifies all forces'}</td><td class="check-mark">✓</td><td class="cross-mark">✗</td><td class="cross-mark">✗</td><td class="cross-mark">✗</td><td class="check-mark">✓</td><td class="cross-mark">✗</td><td class="cross-mark">✗</td></tr>
            <tr><td>${crt ? 'QUANTUM + GRAVITY UNIFIED' : 'Quantum + Gravity unified'}</td><td class="check-mark">✓</td><td class="cross-mark">✗</td><td class="cross-mark">✗</td><td class="cross-mark">✗</td><td class="check-mark">✓</td><td class="check-mark">✓</td><td class="cross-mark">✗</td></tr>
            <tr><td>${crt ? 'DARK MATTER CANDIDATE INCLUDED' : 'Dark matter candidate included'}</td><td class="check-mark">✓</td><td class="cross-mark">✗</td><td class="cross-mark">✗</td><td class="cross-mark">✗</td><td class="check-mark">✓</td><td class="cross-mark">✗</td><td class="cross-mark">✗</td></tr>
            <tr><td>${crt ? 'FALSIFIABLE PREDICTION AT ACCESSIBLE ENERGY' : 'Falsifiable prediction at accessible energy'}</td><td class="check-mark">✓</td><td class="check-mark">✓</td><td class="check-mark">✓</td><td class="check-mark">✓</td><td class="cross-mark">✗</td><td class="cross-mark">✗</td><td class="cross-mark">✗</td></tr>
            <tr><td>${crt ? 'NUMERICAL VERIFICATION OF PREDICTIONS' : 'Numerical verification of predictions'}</td><td class="check-mark">✓</td><td class="check-mark">✓</td><td class="check-mark">✓</td><td class="check-mark">✓</td><td class="cross-mark">✗</td><td class="cross-mark">✗</td><td class="cross-mark">✗</td></tr>
            <tr><td>${crt ? 'FINITE INFORMATION BOUND' : 'Finite information bound'}</td><td class="check-mark">✓</td><td class="cross-mark">✗</td><td class="cross-mark">✗</td><td class="cross-mark">✗</td><td class="cross-mark">✗</td><td class="cross-mark">✗</td><td class="cross-mark">✗</td></tr>
            <tr><td>${crt ? 'META-TIME DYNAMICS (ATTRACTOR)' : 'Meta-time dynamics (attractor)'}</td><td class="check-mark">✓</td><td class="cross-mark">✗</td><td class="cross-mark">✗</td><td class="cross-mark">✗</td><td class="cross-mark">✗</td><td class="cross-mark">✗</td><td class="cross-mark">✗</td></tr>
            <tr><td>${crt ? 'DETERMINISTIC MEASUREMENT RESOLUTION' : 'Deterministic measurement resolution'}</td><td class="check-mark">✓</td><td class="cross-mark">✗</td><td class="cross-mark">✗</td><td class="cross-mark">✗</td><td class="cross-mark">✗</td><td class="cross-mark">✗</td><td class="cross-mark">✗</td></tr>
            <tr><td>${crt ? 'NO NEW PARTICLES REQUIRED' : 'No new particles required'}</td><td class="check-mark">✓</td><td class="check-mark">✓</td><td class="check-mark">✓</td><td class="check-mark">✓</td><td class="cross-mark">✗</td><td class="cross-mark">✗</td><td class="cross-mark">✗</td></tr>
            <tr><td>${crt ? 'DEPENDENCY NOTATION FOR AUDITING' : 'Dependency notation for auditing'}</td><td class="check-mark">✓</td><td class="cross-mark">✗</td><td class="cross-mark">✗</td><td class="cross-mark">✗</td><td class="cross-mark">✗</td><td class="cross-mark">✗</td><td class="cross-mark">✗</td></tr>
            <tr><td>${crt ? 'COMPLETE SPECTRAL CLASSIFICATION (PST)' : 'Complete spectral classification (PST)'}</td><td class="check-mark">✓</td><td class="cross-mark">✗</td><td class="cross-mark">✗</td><td class="cross-mark">✗</td><td class="cross-mark">✗</td><td class="cross-mark">✗</td><td class="cross-mark">✗</td></tr>
            <tr><td>${crt ? 'BRIDGES PHYSICS AND NUMBER THEORY' : 'Bridges physics and number theory'}</td><td class="check-mark">✓</td><td class="cross-mark">✗</td><td class="cross-mark">✗</td><td class="cross-mark">✗</td><td class="cross-mark">✗</td><td class="cross-mark">✗</td><td class="cross-mark">✗</td></tr>
            <tr><td>${crt ? 'SOLVES CENTURY-SCALE OPEN PROBLEMS' : 'Solves century-scale open problems'}</td><td class="check-mark">✓</td><td class="cross-mark">✗</td><td class="cross-mark">✗</td><td class="cross-mark">✗</td><td class="cross-mark">✗</td><td class="cross-mark">✗</td><td class="cross-mark">✗</td></tr>
            <tr style="font-weight:bold;background:rgba(100, 140, 255, 0.15);"><td>${crt ? 'TOTAL' : 'Total'}</td><td>19</td><td>3</td><td>2</td><td>3</td><td>4</td><td>4</td><td>3</td></tr>
        </tbody>
    </table>
    </div>

    <h3>${crt ? 'TABLE 2: FRAMEWORK REPRODUCTION' : 'Table 2: Framework Reproduction'}</h3>
    <p>${crt ? 'Does the framework recover established physics? A fundamental theory must reproduce the successful frameworks it aims to replace.' : 'Does the framework recover established physics? A fundamental theory must reproduce the successful frameworks it aims to replace.'}</p>
    <div class="comparison-scroll">
    <table class="comparison-table">
        <thead><tr><th>${crt ? 'FRAMEWORK' : 'Framework'}</th><th>Canvas</th><th>QFT</th><th>QM</th><th>GR</th><th>String</th><th>LQG</th><th>Causal</th></tr></thead>
        <tbody>
            <tr><td>${crt ? 'GENERAL RELATIVITY' : 'General Relativity'}</td><td>✓</td><td>✗</td><td>✗</td><td>✓</td><td>✓</td><td>✓</td><td>✓</td></tr>
            <tr><td>${crt ? 'QUANTUM MECHANICS' : 'Quantum Mechanics'}</td><td>✓</td><td>✗</td><td>✓</td><td>✗</td><td>✓</td><td>✗</td><td>✗</td></tr>
            <tr><td>${crt ? 'QUANTUM FIELD THEORY' : 'Quantum Field Theory'}</td><td>✓</td><td>✓</td><td>✗</td><td>✗</td><td>✓</td><td>✗</td><td>✗</td></tr>
            <tr><td>${crt ? 'STANDARD MODEL' : 'Standard Model'}</td><td>✓</td><td>✓</td><td>✗</td><td>✗</td><td>✓</td><td>✗</td><td>✗</td></tr>
            <tr><td>${crt ? 'THERMODYNAMICS' : 'Thermodynamics'}</td><td>✓</td><td>✓</td><td>✓</td><td>✓</td><td>✓</td><td>✓</td><td>✗</td></tr>
            <tr><td>${crt ? 'CLASSICAL MECHANICS' : 'Classical Mechanics'}</td><td>✓</td><td>✓</td><td>✓</td><td>✓</td><td>✓</td><td>✓</td><td>✓</td></tr>
            <tr><td>${crt ? 'ELECTROMAGNETISM' : 'Electromagnetism'}</td><td>✓</td><td>✓</td><td>✓</td><td>✗</td><td>✓</td><td>✗</td><td>✗</td></tr>
            <tr><td>${crt ? 'REGGE CALCULUS' : 'Regge Calculus'}</td><td>✓</td><td>✗</td><td>✗</td><td>✗</td><td>✗</td><td>✓</td><td>✗</td></tr>
            <tr><td>${crt ? 'SPECTRAL ANALYSIS (PST)' : 'Spectral Analysis (PST)'}</td><td>✓</td><td>✗</td><td>✗</td><td>✗</td><td>✗</td><td>✗</td><td>✗</td></tr>
            <tr><td>${crt ? 'NUMBER THEORY (RIEMANN)' : 'Number Theory (Riemann)'}</td><td>✓</td><td>✗</td><td>✗</td><td>✗</td><td>✗</td><td>✗</td><td>✗</td></tr>
			<tr style="font-weight:bold;background:rgba(100, 140, 255, 0.15);"><td>${crt ? 'TOTAL' : 'Total'}</td><td>10</td><td>4</td><td>2</td><td>2</td><td>6</td><td>3</td><td>2</td></tr>
        </tbody>
    </table>
    </div>

    <h3>${crt ? 'SCORING METHODOLOGY (TABLE 3)' : 'Scoring Methodology (Table 3)'}</h3>
    <table class="data-table">
        <thead><tr><th>${crt ? 'SCORE' : 'Score'}</th><th>${crt ? 'MEANING' : 'Meaning'}</th></tr></thead>
        <tbody>
            <tr><td>4</td><td>${crt ? 'DERIVED FROM AXIOMS: FOLLOWS MATHEMATICALLY FROM THE FRAMEWORK\'S STATED PRIMITIVES WITH NO ADDITIONAL INPUTS.' : 'Derived from axioms: Follows mathematically from the framework\'s stated primitives with no additional inputs.'}</td></tr>
            <tr><td>3</td><td>${crt ? 'FROM FIRST PRINCIPLES: FOLLOWS FROM GENERAL PRINCIPLES THE FRAMEWORK EXPLAINS, BUT NOT DIRECTLY FROM AXIOMS.' : 'From first principles: Follows from general principles the framework explains, but not directly from axioms.'}</td></tr>
            <tr><td>2</td><td>${crt ? 'MECHANISM EXPLAINED: FRAMEWORK PROVIDES A QUALITATIVE OR SEMI-QUANTITATIVE MECHANISM.' : 'Mechanism explained: Framework provides a qualitative or semi-quantitative mechanism.'}</td></tr>
            <tr><td>1</td><td>${crt ? 'CONSISTENT WITH: FRAMEWORK\'S RESULTS AGREE WITH OBSERVATION, BUT THE PHENOMENON IS AN INPUT OR EMERGES FROM STANDARD PHYSICS.' : 'Consistent with: Framework\'s results agree with observation, but the phenomenon is an input or emerges from standard physics.'}</td></tr>
            <tr><td>0</td><td>${crt ? 'NOT ADDRESSED: FRAMEWORK DOES NOT ADDRESS THIS PHENOMENON.' : 'Not addressed: Framework does not address this phenomenon.'}</td></tr>
        </tbody>
    </table>

    <h3>${crt ? 'TABLE 3: EXPLANATORY POWER (WEIGHTED)' : 'Table 3: Explanatory Power (Weighted)'}</h3>
    <p>${crt ? 'How deeply does each framework derive phenomena? Scoring: 4 = From axioms, 3 = First principles, 2 = Mechanism, 1 = Consistent, 0 = Not addressed.' : 'How deeply does each framework derive phenomena? Scoring: 4 = From axioms, 3 = First principles, 2 = Mechanism, 1 = Consistent, 0 = Not addressed.'}</p>
    <div class="comparison-scroll">
    <table class="comparison-table">
        <thead><tr><th>${crt ? 'PHENOMENON' : 'Phenomenon'}</th><th>Canvas</th><th>QFT</th><th>QM</th><th>GR</th><th>String</th><th>LQG</th><th>Causal</th></tr></thead>
        <tbody>
            <tr><td>${crt ? 'DIMENSIONALITY OF SPACE' : 'Dimensionality of space'}</td><td>4</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>1</td></tr>
            <tr><td>${crt ? 'GAUGE GROUP U(1)×SU(2)×SU(3)' : 'Gauge group U(1)×SU(2)×SU(3)'}</td><td>4</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td></tr>
            <tr><td>${crt ? 'THREE FERMION GENERATIONS' : 'Three fermion generations'}</td><td>4</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td></tr>
            <tr><td>${crt ? 'FINE-STRUCTURE CONSTANT' : 'Fine-structure constant'}</td><td>4</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td></tr>
            <tr><td>${crt ? 'COSMOLOGICAL CONSTANT' : 'Cosmological constant'}</td><td>4</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td></tr>
            <tr><td>${crt ? 'CKM AND PMNS PARAMETERS' : 'CKM and PMNS parameters'}</td><td>4</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td></tr>
            <tr><td>${crt ? 'JARLSKOG INVARIANT' : 'Jarlskog invariant'}</td><td>4</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td></tr>
            <tr><td>${crt ? 'BARYON ASYMMETRY' : 'Baryon asymmetry'}</td><td>4</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td></tr>
            <tr><td>${crt ? 'WAVEFORM ASYMMETRY (π/2)' : 'Waveform asymmetry (π/2)'}</td><td>4</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td></tr>
            <tr><td>${crt ? 'UWE WEIGHTS (A,B,C,D)' : 'UWE weights (a,b,c,d)'}</td><td>4</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td></tr>
            <tr><td>${crt ? 'HORIZON INFORMATION BOUND' : 'Horizon information bound'}</td><td>4</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td></tr>
            <tr><td>${crt ? 'FUNDAMENTAL COUPLING α₀' : 'Fundamental coupling α₀'}</td><td>4</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td></tr>
            <tr><td>${crt ? 'FLATNESS OF THE UNIVERSE' : 'Flatness of the universe'}</td><td>4</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td></tr>
            <tr><td>${crt ? 'GAUGE THRESHOLD HIERARCHY' : 'Gauge threshold hierarchy'}</td><td>4</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td></tr>
            <tr><td>${crt ? 'EINSTEIN FIELD EQUATIONS' : 'Einstein field equations'}</td><td>3</td><td>0</td><td>0</td><td>4</td><td>0</td><td>3</td><td>3</td></tr>
            <tr><td>${crt ? 'SCHRÖDINGER EQUATION' : 'Schrödinger equation'}</td><td>3</td><td>0</td><td>4</td><td>0</td><td>0</td><td>0</td><td>0</td></tr>
            <tr><td>${crt ? 'SPIN-STATISTICS THEOREM' : 'Spin-statistics theorem'}</td><td>3</td><td>4</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td></tr>
            <tr><td>${crt ? 'QUARK CONFINEMENT' : 'Quark confinement'}</td><td>3</td><td>1</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td></tr>
            <tr><td>${crt ? 'FEYNMAN PATH INTEGRAL' : 'Feynman path integral'}</td><td>3</td><td>4</td><td>3</td><td>0</td><td>0</td><td>0</td><td>0</td></tr>
            <tr><td>${crt ? 'BORN RULE' : 'Born rule'}</td><td>3</td><td>0</td><td>1</td><td>0</td><td>0</td><td>0</td><td>0</td></tr>
            <tr><td>${crt ? 'INFLATION MECHANISM' : 'Inflation mechanism'}</td><td>2</td><td>0</td><td>0</td><td>0</td><td>1</td><td>0</td><td>0</td></tr>
            <tr><td>${crt ? 'DARK MATTER CANDIDATE' : 'Dark matter candidate'}</td><td>2</td><td>0</td><td>0</td><td>0</td><td>2</td><td>0</td><td>0</td></tr>
            <tr><td>${crt ? 'HIERARCHY PROBLEM' : 'Hierarchy problem'}</td><td>2</td><td>0</td><td>0</td><td>0</td><td>1</td><td>0</td><td>0</td></tr>
            <tr><td>${crt ? 'STRONG CP PROBLEM' : 'Strong CP problem'}</td><td>2</td><td>0</td><td>0</td><td>0</td><td>1</td><td>0</td><td>0</td></tr>
            <tr><td>${crt ? 'MEASUREMENT PROBLEM' : 'Measurement problem'}</td><td>2</td><td>0</td><td>1</td><td>0</td><td>0</td><td>0</td><td>0</td></tr>
            <tr><td>${crt ? 'ARROW OF TIME' : 'Arrow of time'}</td><td>2</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td></tr>
            <tr><td>${crt ? 'INITIAL ENTROPY PROBLEM' : 'Initial entropy problem'}</td><td>2</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td></tr>
            <tr><td>${crt ? 'NEUTRINO MASSES' : 'Neutrino masses'}</td><td>2</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td></tr>
            <tr><td>${crt ? 'HYDROGEN SPECTRUM' : 'Hydrogen spectrum'}</td><td>1</td><td>4</td><td>4</td><td>0</td><td>1</td><td>1</td><td>0</td></tr>
            <tr><td>${crt ? 'LAMB SHIFT' : 'Lamb shift'}</td><td>1</td><td>4</td><td>4</td><td>0</td><td>1</td><td>1</td><td>0</td></tr>
            <tr><td>${crt ? 'CASIMIR EFFECT' : 'Casimir effect'}</td><td>1</td><td>4</td><td>4</td><td>0</td><td>1</td><td>1</td><td>0</td></tr>
            <tr><td>${crt ? 'BLACK HOLE THERMODYNAMICS' : 'Black hole thermodynamics'}</td><td>1</td><td>2</td><td>1</td><td>4</td><td>2</td><td>2</td><td>1</td></tr>
            <tr><td>${crt ? 'CMB POWER SPECTRUM' : 'CMB power spectrum'}</td><td>1</td><td>2</td><td>0</td><td>2</td><td>2</td><td>2</td><td>2</td></tr>
            <tr><td>${crt ? 'BIG BANG NUCLEOSYNTHESIS' : 'Big Bang nucleosynthesis'}</td><td>1</td><td>4</td><td>0</td><td>2</td><td>1</td><td>1</td><td>1</td></tr>
            <tr><td>${crt ? 'LARGE-SCALE STRUCTURE' : 'Large-scale structure'}</td><td>1</td><td>2</td><td>0</td><td>2</td><td>2</td><td>2</td><td>2</td></tr>
            <tr><td>${crt ? 'GALAXY ROTATION CURVES' : 'Galaxy rotation curves'}</td><td>1</td><td>1</td><td>0</td><td>2</td><td>1</td><td>1</td><td>1</td></tr>
            <tr><td>${crt ? 'NEUTRINO OSCILLATIONS' : 'Neutrino oscillations'}</td><td>1</td><td>4</td><td>2</td><td>0</td><td>1</td><td>1</td><td>0</td></tr>
			<tr style="font-weight:bold;background:rgba(100, 140, 255, 0.15);"><td>${crt ? 'WEIGHTED TOTAL' : 'Weighted Total'}</td><td>100</td><td>36</td><td>24</td><td>16</td><td>18</td><td>18</td><td>11</td></tr>
        </tbody>
    </table>
    </div>

    <h3>${crt ? 'SUMMARY' : 'Summary'}</h3>
    <div class="comparison-scroll">
    <table class="comparison-table">
        <thead><tr><th>${crt ? 'FRAMEWORK' : 'Framework'}</th><th>${crt ? 'STRUCTURAL' : 'Structural'}</th><th>${crt ? 'REPRODUCED' : 'Reproduced'}</th><th>${crt ? 'EXPLANATORY' : 'Explanatory'}</th></tr></thead>
        <tbody>
            <tr><td><strong>Canvas Model</strong></td><td><strong>19/19</strong></td><td><strong>10/10</strong></td><td><strong>100/148 (68%)</strong></td></tr>
            <tr><td>Quantum Field Theory</td><td>3/19</td><td>4/10</td><td>36/148 (24%)</td></tr>
            <tr><td>Quantum Mechanics</td><td>2/19</td><td>2/10</td><td>24/148 (16%)</td></tr>
            <tr><td>General Relativity</td><td>3/19</td><td>2/10</td><td>16/148 (11%)</td></tr>
            <tr><td>String Theory</td><td>4/19</td><td>6/10</td><td>18/148 (12%)</td></tr>
            <tr><td>Loop Quantum Gravity</td><td>4/19</td><td>3/10</td><td>18/148 (12%)</td></tr>
            <tr><td>Causal Set Theory</td><td>3/19</td><td>2/10</td><td>11/148 (7%)</td></tr>
        </tbody>
    </table>
    </div>
    <p>${crt ? 'The Canvas Model leads in all three categories. It has more structural features, reproduces more established frameworks, and derives more phenomena from fewer assumptions than any competing framework.' : 'The Canvas Model leads in all three categories. It has more structural features, reproduces more established frameworks, and derives more phenomena from fewer assumptions than any competing framework.'}</p>

    <h3>${crt ? 'METHODOLOGY AND UPDATES' : 'Methodology and Updates'}</h3>
    <p>${crt ? 'This comparison is based on the published literature for each framework as of 2026. Scoring for the Canvas Model is based on the Unified Framework paper and its appendices, which contain complete step-by-step derivations for every result claimed.' : 'This comparison is based on the published literature for each framework as of 2026. Scoring for the Canvas Model is based on the Unified Framework paper and its appendices, which contain complete step-by-step derivations for every result claimed.'}</p>
    <p>${crt ? 'The comparison is a living document. Corrections, updates, and challenges to specific scores are welcome. Submit them with references to the relevant literature.' : 'The comparison is a living document. Corrections, updates, and challenges to specific scores are welcome. Submit them with references to the relevant literature.'}</p>`;
}

window.generateComparisonPage = generateComparisonPage;