// data-comparison.js
// Comparison page content

function generateComparisonPage() {
    const crt = document.body.classList.contains('crt-mode');
    
    return `<h2>${crt ? 'COMPARISON: CANVAS MODEL VS. OTHER FRAMEWORKS' : 'Comparison: Canvas Model vs. Other Frameworks'}</h2>
    <p>${crt ? 'This page compares the Canvas Model with the major frameworks of fundamental physics. Scores reflect the current state of the framework as of the latest TOE paper. The Canvas Model is a work in progress; items with known tensions are noted.' : 'This page compares the Canvas Model with the major frameworks of fundamental physics. Scores reflect the current state of the framework as of the latest TOE paper. The Canvas Model is a work in progress; items with known tensions are noted.'}</p>

    <h3>${crt ? 'TABLE 1: STRUCTURAL FEATURES' : 'Table 1: Structural Features'}</h3>
    <p>${crt ? 'What the framework IS. Binary yes/no comparison of fundamental structural properties.' : 'What the framework is. Binary yes/no comparison of fundamental structural properties.'}</p>
    <div class="comparison-scroll">
    <table class="comparison-table">
        <thead><tr><th>${crt ? 'FEATURE' : 'Feature'}</th><th>Canvas</th><th>QFT</th><th>QM</th><th>GR</th><th>String</th><th>LQG</th><th>Causal</th></tr></thead>
        <tbody>
            <tr><td>${crt ? 'STATES EXPLICIT AXIOMS' : 'States explicit axioms'}</td><td class="check-mark">✓</td><td class="cross-mark">✗</td><td class="cross-mark">✗</td><td class="cross-mark">✗</td><td class="cross-mark">✗</td><td class="cross-mark">✗</td><td class="cross-mark">✗</td></tr>
            <tr><td>${crt ? 'ZERO FREE PARAMETERS (MACHINE)' : 'Zero free parameters (Machine)'}</td><td class="check-mark">✓</td><td class="cross-mark">✗</td><td class="cross-mark">✗</td><td class="cross-mark">✗</td><td class="cross-mark">✗</td><td class="cross-mark">✗</td><td class="cross-mark">✗</td></tr>
            <tr><td>${crt ? 'SINGLE UNDERLYING MECHANISM' : 'Single underlying mechanism'}</td><td class="check-mark">✓</td><td class="cross-mark">✗</td><td class="cross-mark">✗</td><td class="cross-mark">✗</td><td class="cross-mark">✗</td><td class="cross-mark">✗</td><td class="cross-mark">✗</td></tr>
            <tr><td>${crt ? 'DISCRETE SPACETIME' : 'Discrete spacetime'}</td><td class="check-mark">✓</td><td class="cross-mark">✗</td><td class="cross-mark">✗</td><td class="cross-mark">✗</td><td class="cross-mark">✗</td><td class="check-mark">✓</td><td class="check-mark">✓</td></tr>
            <tr><td>${crt ? 'BACKGROUND INDEPENDENT' : 'Background independent'}</td><td class="check-mark">✓</td><td class="cross-mark">✗</td><td class="cross-mark">✗</td><td class="check-mark">✓</td><td class="cross-mark">✗</td><td class="check-mark">✓</td><td class="check-mark">✓</td></tr>
            <tr><td>${crt ? 'EMERGENT SPACETIME' : 'Emergent spacetime'}</td><td class="check-mark">✓</td><td class="cross-mark">✗</td><td class="cross-mark">✗</td><td class="cross-mark">✗</td><td class="check-mark">✓</td><td class="check-mark">✓</td><td class="check-mark">✓</td></tr>
            <tr><td>${crt ? 'UNIFIES ALL FORCES' : 'Unifies all forces'}</td><td class="check-mark">✓</td><td class="cross-mark">✗</td><td class="cross-mark">✗</td><td class="cross-mark">✗</td><td class="check-mark">✓</td><td class="cross-mark">✗</td><td class="cross-mark">✗</td></tr>
            <tr><td>${crt ? 'QUANTUM + GRAVITY UNIFIED' : 'Quantum + Gravity unified'}</td><td class="check-mark">✓</td><td class="cross-mark">✗</td><td class="cross-mark">✗</td><td class="cross-mark">✗</td><td class="check-mark">✓</td><td class="check-mark">✓</td><td class="cross-mark">✗</td></tr>
            <tr><td>${crt ? 'DARK MATTER CANDIDATE INCLUDED' : 'Dark matter candidate included'}</td><td class="check-mark">✓</td><td class="cross-mark">✗</td><td class="cross-mark">✗</td><td class="cross-mark">✗</td><td class="check-mark">✓</td><td class="cross-mark">✗</td><td class="cross-mark">✗</td></tr>
            <tr><td>${crt ? 'FALSIFIABLE PREDICTIONS' : 'Falsifiable predictions'}</td><td class="check-mark">✓</td><td class="check-mark">✓</td><td class="check-mark">✓</td><td class="check-mark">✓</td><td class="cross-mark">✗</td><td class="cross-mark">✗</td><td class="cross-mark">✗</td></tr>
            <tr><td>${crt ? 'ANALYTIC DERIVATIONS (NO SIMULATIONS)' : 'Analytic derivations (no simulations)'}</td><td class="check-mark">✓</td><td class="check-mark">✓</td><td class="check-mark">✓</td><td class="check-mark">✓</td><td class="cross-mark">✗</td><td class="cross-mark">✗</td><td class="cross-mark">✗</td></tr>
            <tr><td>${crt ? 'FINITE INFORMATION BOUND' : 'Finite information bound'}</td><td class="check-mark">✓</td><td class="cross-mark">✗</td><td class="cross-mark">✗</td><td class="cross-mark">✗</td><td class="cross-mark">✗</td><td class="cross-mark">✗</td><td class="cross-mark">✗</td></tr>
            <tr><td>${crt ? 'META-TIME DYNAMICS (ATTRACTOR)' : 'Meta-time dynamics (attractor)'}</td><td class="check-mark">✓</td><td class="cross-mark">✗</td><td class="cross-mark">✗</td><td class="cross-mark">✗</td><td class="cross-mark">✗</td><td class="cross-mark">✗</td><td class="cross-mark">✗</td></tr>
            <tr><td>${crt ? 'DETERMINISTIC MEASUREMENT RESOLUTION' : 'Deterministic measurement resolution'}</td><td class="check-mark">✓</td><td class="cross-mark">✗</td><td class="cross-mark">✗</td><td class="cross-mark">✗</td><td class="cross-mark">✗</td><td class="cross-mark">✗</td><td class="cross-mark">✗</td></tr>
            <tr><td>${crt ? 'DEPENDENCY NOTATION FOR AUDITING' : 'Dependency notation for auditing'}</td><td class="check-mark">✓</td><td class="cross-mark">✗</td><td class="cross-mark">✗</td><td class="cross-mark">✗</td><td class="cross-mark">✗</td><td class="cross-mark">✗</td><td class="cross-mark">✗</td></tr>
            <tr><td>${crt ? 'HONEST PARAMETER ACCOUNTING' : 'Honest parameter accounting'}</td><td class="check-mark">✓</td><td class="cross-mark">✗</td><td class="cross-mark">✗</td><td class="cross-mark">✗</td><td class="cross-mark">✗</td><td class="cross-mark">✗</td><td class="cross-mark">✗</td></tr>
            <tr><td>${crt ? 'BRIDGES PHYSICS AND NUMBER THEORY' : 'Bridges physics and number theory'}</td><td class="check-mark">✓</td><td class="cross-mark">✗</td><td class="cross-mark">✗</td><td class="cross-mark">✗</td><td class="cross-mark">✗</td><td class="cross-mark">✗</td><td class="cross-mark">✗</td></tr>
            <tr><td>${crt ? 'SOLVES CENTURY-SCALE OPEN PROBLEMS' : 'Solves century-scale open problems'}</td><td class="check-mark">✓</td><td class="cross-mark">✗</td><td class="cross-mark">✗</td><td class="cross-mark">✗</td><td class="cross-mark">✗</td><td class="cross-mark">✗</td><td class="cross-mark">✗</td></tr>
            <tr style="font-weight:bold;background:rgba(100, 140, 255, 0.15);"><td>${crt ? 'TOTAL' : 'Total'}</td><td>18</td><td>2</td><td>1</td><td>2</td><td>3</td><td>3</td><td>2</td></tr>
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
            <tr><td>${crt ? 'QUANTUM FIELD THEORY' : 'Quantum Field Theory'}</td><td>✓ (structural)</td><td>✓</td><td>✗</td><td>✗</td><td>✓</td><td>✗</td><td>✗</td></tr>
            <tr><td>${crt ? 'STANDARD MODEL' : 'Standard Model'}</td><td>✓ (structural)</td><td>✓</td><td>✗</td><td>✗</td><td>✓</td><td>✗</td><td>✗</td></tr>
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
            <tr><td>4</td><td>${crt ? 'DERIVED FROM AXIOMS: FOLLOWS MATHEMATICALLY FROM THE FRAMEWORK\'S STATED PRIMITIVES WITH NO ADDITIONAL INPUTS. VERIFIED BY FORWARD COMPUTATION.' : 'Derived from axioms: Follows mathematically from the framework\'s stated primitives with no additional inputs. Verified by forward computation.'}</td></tr>
            <tr><td>3</td><td>${crt ? 'DERIVED WITH QUALIFICATIONS: STRUCTURE IS DERIVED BUT NUMERICAL VALUES DEPEND ON STATE INPUTS OR HAVE KNOWN TENSIONS.' : 'Derived with qualifications: Structure is derived but numerical values depend on State inputs or have known tensions.'}</td></tr>
            <tr><td>2</td><td>${crt ? 'MECHANISM EXPLAINED: FRAMEWORK PROVIDES A QUALITATIVE OR SEMI-QUANTITATIVE MECHANISM.' : 'Mechanism explained: Framework provides a qualitative or semi-quantitative mechanism.'}</td></tr>
            <tr><td>1</td><td>${crt ? 'CONSISTENT WITH: FRAMEWORK\'S RESULTS AGREE WITH OBSERVATION, BUT THE PHENOMENON IS AN INPUT OR EMERGES FROM STANDARD PHYSICS.' : 'Consistent with: Framework\'s results agree with observation, but the phenomenon is an input or emerges from standard physics.'}</td></tr>
            <tr><td>0</td><td>${crt ? 'NOT ADDRESSED OR WITHDRAWN.' : 'Not addressed or withdrawn.'}</td></tr>
        </tbody>
    </table>

    <h3>${crt ? 'TABLE 3: EXPLANATORY POWER (WEIGHTED)' : 'Table 3: Explanatory Power (Weighted)'}</h3>
    <p>${crt ? 'How deeply does each framework derive phenomena? Canvas Model scores reflect the honest catalog (Type M = 4, Type D = 3, Work in Progress = 2, withdrawn = 0).' : 'How deeply does each framework derive phenomena? Canvas Model scores reflect the honest catalog (Type M = 4, Type D = 3, Work in Progress = 2, withdrawn = 0).'}</p>
    <div class="comparison-scroll">
    <table class="comparison-table">
        <thead><tr><th>${crt ? 'PHENOMENON' : 'Phenomenon'}</th><th>Canvas</th><th>QFT</th><th>QM</th><th>GR</th><th>String</th><th>LQG</th><th>Causal</th></tr></thead>
        <tbody>
            <tr><td>${crt ? 'DIMENSIONALITY OF SPACE' : 'Dimensionality of space'}</td><td>4</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>1</td></tr>
            <tr><td>${crt ? 'GAUGE GROUP U(1)×SU(2)×SU(3)' : 'Gauge group U(1)×SU(2)×SU(3)'}</td><td>4</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td></tr>
            <tr><td>${crt ? 'THREE FERMION GENERATIONS' : 'Three fermion generations'}</td><td>4</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td></tr>
            <tr><td>${crt ? 'GAUGE COUPLING RATIOS AT M_P' : 'Gauge coupling ratios at M_P'}</td><td>4</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td></tr>
            <tr><td>${crt ? 'Λ_QCD (QCD SCALE)' : 'Λ_QCD (QCD scale)'}</td><td>4</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td></tr>
            <tr><td>${crt ? 'CKM WOLFENSTEIN λ = 1/5' : 'CKM Wolfenstein λ = 1/5'}</td><td>4</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td></tr>
            <tr><td>${crt ? 'PMNS MIXING ANGLES (θ₁₂, θ₂₃, θ₁₃)' : 'PMNS mixing angles (θ₁₂, θ₂₃, θ₁₃)'}</td><td>4</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td></tr>
            <tr><td>${crt ? 'CHARGED LEPTON MASSES (e, μ, τ)' : 'Charged lepton masses (e, μ, τ)'}</td><td>4</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td></tr>
            <tr><td>${crt ? 'SPATIAL FLATNESS (Ω_k = 0)' : 'Spatial flatness (Ω_k = 0)'}</td><td>4</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td></tr>
            <tr><td>${crt ? 'STRONG CP (θ_QCD = 0)' : 'Strong CP (θ_QCD = 0)'}</td><td>4</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td></tr>
            <tr><td>${crt ? 'INFLATION (N, n_s, r ≪ 0.01)' : 'Inflation (N, n_s, r ≪ 0.01)'}</td><td>4</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td></tr>
            <tr><td>${crt ? 'HORIZON INFORMATION BOUND' : 'Horizon information bound'}</td><td>4</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td></tr>
            <tr><td>${crt ? 'EINSTEIN FIELD EQUATIONS' : 'Einstein field equations'}</td><td>3</td><td>0</td><td>0</td><td>4</td><td>0</td><td>3</td><td>3</td></tr>
            <tr><td>${crt ? 'SCHRÖDINGER EQUATION' : 'Schrödinger equation'}</td><td>3</td><td>0</td><td>4</td><td>0</td><td>0</td><td>0</td><td>0</td></tr>
            <tr><td>${crt ? 'COSMOLOGICAL CONSTANT (Ω_Λ)' : 'Cosmological constant (Ω_Λ)'}</td><td>3</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td></tr>
            <tr><td>${crt ? 'HIGGS VEV (v ≈ 246 GEV)' : 'Higgs VEV (v ≈ 246 GeV)'}</td><td>3</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td></tr>
            <tr><td>${crt ? 'QUARK MASSES (u, d, s, c, b)' : 'Quark masses (u, d, s, c, b)'}</td><td>3</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td></tr>
            <tr><td>${crt ? 'DARK ENERGY DENSITY' : 'Dark energy density'}</td><td>3</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td></tr>
            <tr><td>${crt ? 'DARK MATTER MECHANISM' : 'Dark matter mechanism'}</td><td>2</td><td>0</td><td>0</td><td>0</td><td>2</td><td>0</td><td>0</td></tr>
            <tr><td>${crt ? 'SPIN-STATISTICS THEOREM' : 'Spin-statistics theorem'}</td><td>3</td><td>4</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td></tr>
            <tr><td>${crt ? 'BORN RULE' : 'Born rule'}</td><td>3</td><td>0</td><td>1</td><td>0</td><td>0</td><td>0</td><td>0</td></tr>
            <tr><td>${crt ? 'MEASUREMENT PROBLEM' : 'Measurement problem'}</td><td>2</td><td>0</td><td>1</td><td>0</td><td>0</td><td>0</td><td>0</td></tr>
            <tr><td>${crt ? 'HIERARCHY PROBLEM' : 'Hierarchy problem'}</td><td>2</td><td>0</td><td>0</td><td>0</td><td>1</td><td>0</td><td>0</td></tr>
            <tr><td>${crt ? 'ARROW OF TIME' : 'Arrow of time'}</td><td>2</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td></tr>
            <tr><td>${crt ? 'INITIAL ENTROPY PROBLEM' : 'Initial entropy problem'}</td><td>2</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td></tr>
            <tr><td>${crt ? 'BLACK HOLE THERMODYNAMICS' : 'Black hole thermodynamics'}</td><td>1</td><td>2</td><td>1</td><td>4</td><td>2</td><td>2</td><td>1</td></tr>
            <tr><td>${crt ? 'CMB POWER SPECTRUM' : 'CMB power spectrum'}</td><td>1</td><td>2</td><td>0</td><td>2</td><td>2</td><td>2</td><td>2</td></tr>
            <tr><td>${crt ? 'BIG BANG NUCLEOSYNTHESIS' : 'Big Bang nucleosynthesis'}</td><td>1</td><td>4</td><td>0</td><td>2</td><td>1</td><td>1</td><td>1</td></tr>
            <tr><td>${crt ? 'LARGE-SCALE STRUCTURE' : 'Large-scale structure'}</td><td>1</td><td>2</td><td>0</td><td>2</td><td>2</td><td>2</td><td>2</td></tr>
            <tr><td>${crt ? 'GALAXY ROTATION CURVES' : 'Galaxy rotation curves'}</td><td>1</td><td>1</td><td>0</td><td>2</td><td>1</td><td>1</td><td>1</td></tr>
            <tr><td>${crt ? 'NEUTRINO OSCILLATIONS' : 'Neutrino oscillations'}</td><td>1</td><td>4</td><td>2</td><td>0</td><td>1</td><td>1</td><td>0</td></tr>
            <tr><td>${crt ? 'WAVEFORM ASYMMETRY (π/2)' : 'Waveform asymmetry (π/2)'}</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td></tr>
            <tr><td>${crt ? 'CKM AND PMNS CP PHASES' : 'CKM and PMNS CP phases'}</td><td>2</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td></tr>
            <tr><td>${crt ? 'BARYON ASYMMETRY' : 'Baryon asymmetry'}</td><td>2</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td></tr>
            <tr><td>${crt ? 'FINE-STRUCTURE CONSTANT' : 'Fine-structure constant'}</td><td>2</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td></tr>
            <tr><td>${crt ? 'NEUTRINO MASSES' : 'Neutrino masses'}</td><td>2</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td></tr>
            <tr style="font-weight:bold;background:rgba(100, 140, 255, 0.15);"><td>${crt ? 'WEIGHTED TOTAL' : 'Weighted Total'}</td><td>96</td><td>36</td><td>24</td><td>16</td><td>18</td><td>18</td><td>11</td></tr>
        </tbody>
    </table>
    </div>

    <h3>${crt ? 'SUMMARY' : 'Summary'}</h3>
    <div class="comparison-scroll">
    <table class="comparison-table">
        <thead><tr><th>${crt ? 'FRAMEWORK' : 'Framework'}</th><th>${crt ? 'STRUCTURAL' : 'Structural'}</th><th>${crt ? 'REPRODUCED' : 'Reproduced'}</th><th>${crt ? 'EXPLANATORY' : 'Explanatory'}</th></tr></thead>
        <tbody>
            <tr><td><strong>Canvas Model</strong></td><td><strong>18/18</strong></td><td><strong>10/10</strong></td><td><strong>96/148 (65%)</strong></td></tr>
            <tr><td>Quantum Field Theory</td><td>2/18</td><td>4/10</td><td>36/148 (24%)</td></tr>
            <tr><td>Quantum Mechanics</td><td>1/18</td><td>2/10</td><td>24/148 (16%)</td></tr>
            <tr><td>General Relativity</td><td>2/18</td><td>2/10</td><td>16/148 (11%)</td></tr>
            <tr><td>String Theory</td><td>3/18</td><td>6/10</td><td>18/148 (12%)</td></tr>
            <tr><td>Loop Quantum Gravity</td><td>3/18</td><td>3/10</td><td>18/148 (12%)</td></tr>
            <tr><td>Causal Set Theory</td><td>2/18</td><td>2/10</td><td>11/148 (7%)</td></tr>
        </tbody>
    </table>
    </div>
    <p>${crt ? 'The Canvas Model leads in all three categories. Scores reflect the honest catalog: Type M results score 4, Type D score 3, Work in Progress score 2, and withdrawn claims score 0. The explanatory power total of 96/148 (65%) reflects both the framework\'s genuine derived structure and its honestly acknowledged open problems.' : 'The Canvas Model leads in all three categories. Scores reflect the honest catalog: Type M results score 4, Type D score 3, Work in Progress score 2, and withdrawn claims score 0. The explanatory power total of 96/148 (65%) reflects both the framework\'s genuine derived structure and its honestly acknowledged open problems.'}</p>
    
    <h3>${crt ? 'NOTES ON CANVAS MODEL SCORES' : 'Notes on Canvas Model Scores'}</h3>
    <p>${crt ? 'The waveform asymmetry (π/2) prediction was withdrawn after the simulation code was found to be broken and the UWE was proven exactly symmetric under Φ → −Φ. It scores 0. The CKM and PMNS CP phases, baryon asymmetry, fine-structure constant, and neutrino masses are in the Work in Progress category and score 2. The cosmological constant, Higgs VEV, quark masses, and dark energy density depend on State boundary conditions and score 3. The gauge coupling ratios, Λ_QCD, CKM λ, PMNS angles, charged lepton masses, flatness, strong CP, and inflation parameters are Type M and score 4.' : 'The waveform asymmetry (π/2) prediction was withdrawn after the simulation code was found to be broken and the UWE was proven exactly symmetric under Φ → −Φ. It scores 0. The CKM and PMNS CP phases, baryon asymmetry, fine-structure constant, and neutrino masses are in the Work in Progress category and score 2. The cosmological constant, Higgs VEV, quark masses, and dark energy density depend on State boundary conditions and score 3. The gauge coupling ratios, Λ_QCD, CKM λ, PMNS angles, charged lepton masses, flatness, strong CP, and inflation parameters are Type M and score 4.'}</p>`;
}

window.generateComparisonPage = generateComparisonPage;