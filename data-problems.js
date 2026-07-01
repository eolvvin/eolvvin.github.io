// data-problems.js
// Physics Problems page content

const physicsProblemsList = [
    { name: "The Measurement Problem", since: "1920s", yearsOpen: "100+", status: "resolved" },
    { name: "The Cosmological Constant Problem", since: "1920s", yearsOpen: "100+", status: "derived" },
    { name: "The Cosmological Constant Coefficient (Ω_Λ)", since: "1920s", yearsOpen: "100+", status: "derived" },
    { name: "The Hierarchy Problem", since: "1970s", yearsOpen: "50+", status: "solved" },
    { name: "The Strong CP Problem", since: "1970s", yearsOpen: "50+", status: "dissolved" },
    { name: "The Singularity Problem", since: "1960s", yearsOpen: "60+", status: "dissolved" },
    { name: "The Black Hole Information Paradox", since: "1970s", yearsOpen: "50+", status: "resolved" },
    { name: "The Origin of the Born Rule", since: "1920s", yearsOpen: "100+", status: "derived" },
    { name: "The Flatness Problem", since: "1970s", yearsOpen: "50+", status: "solved" },
    { name: "The Low-Entropy Initial Condition Problem", since: "1880s", yearsOpen: "140+", status: "resolved" },
    { name: "The Arrow of Time Problem", since: "1880s", yearsOpen: "140+", status: "explained" },
    { name: "The Initial Entropy Problem (Penrose)", since: "1980s", yearsOpen: "40+", status: "resolved" },
    { name: "The Hubble Tension", since: "1990s", yearsOpen: "25+", status: "resolved" },
    { name: "The Fine-Structure Constant Problem", since: "1910s", yearsOpen: "100+", status: "derived" },
    { name: "The Fundamental Coupling Problem (α₀)", since: "1910s", yearsOpen: "100+", status: "derived" },
    { name: "Number of Spacetime Dimensions (Why 3+1)", since: "1910s", yearsOpen: "100+", status: "derived" },
    { name: "Why Spatial Axes Are Perpendicular", since: "1910s", yearsOpen: "100+", status: "derived" },
    { name: "Number of Fermion Generations (Why 3)", since: "1970s", yearsOpen: "50+", status: "derived" },
    { name: "Gauge Group Problem (Why SU(3)×SU(2)×U(1))", since: "1970s", yearsOpen: "50+", status: "derived" },
    { name: "CKM Mixing Angle Problem (Why λ ≈ 0.22)", since: "1960s", yearsOpen: "60+", status: "derived" },
    { name: "CKM Wolfenstein Parameter (λ = 1/5)", since: "1980s", yearsOpen: "40+", status: "derived" },
    { name: "Jarlskog Invariant (J ∼ α⁷)", since: "1980s", yearsOpen: "40+", status: "derived" },
    { name: "PMNS Mixing Angle Problem (θ₁₂, θ₂₃, θ₁₃)", since: "1990s", yearsOpen: "30+", status: "derived" },
    { name: "Neutrino Mass Hierarchy Problem (Inverted: m₁ > m₃ > m₂)", since: "1990s", yearsOpen: "30+", status: "predicted" },
    { name: "Baryon Asymmetry Problem", since: "1960s", yearsOpen: "60+", status: "derived" },
    { name: "Baryogenesis Threshold Ratio (T₀/T_rh = 12)", since: "1960s", yearsOpen: "60+", status: "derived" },
    { name: "Dark Matter Problem", since: "1930s", yearsOpen: "90+", status: "solved" },
    { name: "Dark Matter Candidate (Planck remnants)", since: "1930s", yearsOpen: "90+", status: "predicted" },
    { name: "Axion Problem (Why no axion needed)", since: "1970s", yearsOpen: "50+", status: "dissolved" },
    { name: "Supersymmetry Problem (Why no SUSY at LHC)", since: "1980s", yearsOpen: "40+", status: "dissolved" },
    { name: "Extra Dimensions Problem (Why none observed)", since: "1920s", yearsOpen: "100+", status: "dissolved" },
    { name: "Proton Decay Problem (Why stable)", since: "1970s", yearsOpen: "50+", status: "solved" },
    { name: "Magnetic Monopole Problem (Why none observed)", since: "1970s", yearsOpen: "50+", status: "resolved" },
    { name: "Horizon Problem", since: "1970s", yearsOpen: "50+", status: "solved" },
    { name: "Monopole Problem (Inflation)", since: "1970s", yearsOpen: "50+", status: "resolved" },
    { name: "Curvature Problem", since: "1970s", yearsOpen: "50+", status: "solved" },
    { name: "Initial Singularity Problem", since: "1920s", yearsOpen: "100+", status: "dissolved" },
    { name: "EPR Paradox", since: "1930s", yearsOpen: "90+", status: "resolved" },
    { name: "Bell Inequality Violation", since: "1960s", yearsOpen: "60+", status: "resolved" },
    { name: "Gibbs Paradox", since: "1870s", yearsOpen: "150+", status: "resolved" },
    { name: "Loschmidt Paradox", since: "1870s", yearsOpen: "150+", status: "explained" },
    { name: "Maxwell Demon Paradox", since: "1860s", yearsOpen: "160+", status: "resolved" },
    { name: "Ultraviolet Catastrophe", since: "1900", yearsOpen: "120+", status: "dissolved" },
    { name: "Landau Pole Problem", since: "1950s", yearsOpen: "70+", status: "dissolved" },
    { name: "Vacuum Catastrophe", since: "1920s", yearsOpen: "100+", status: "resolved" },
    { name: "Coincidence Problem (Why Λ ∼ ρ_m today)", since: "1990s", yearsOpen: "30+", status: "explained" },
    { name: "Why Now Problem", since: "1990s", yearsOpen: "30+", status: "explained" },
    { name: "Boltzmann Brain Problem", since: "1890s", yearsOpen: "130+", status: "dissolved" },
    { name: "Fermi Paradox", since: "1950s", yearsOpen: "70+", status: "explained" },
    { name: "Fine-Tuning Problem", since: "1970s", yearsOpen: "50+", status: "explained" },
    { name: "Naturalness Problem", since: "1970s", yearsOpen: "50+", status: "resolved" },
    { name: "Infinity Problem (Actual infinity impossible)", since: "Antiquity", yearsOpen: "2300+", status: "dissolved" },
    { name: "Set Theory Paradox Problem (Russell, etc.)", since: "1900s", yearsOpen: "120+", status: "dissolved" },
    { name: "Continuum Hypothesis Problem", since: "1870s", yearsOpen: "150+", status: "dissolved" },
    { name: "Axiom of Choice Problem", since: "1900s", yearsOpen: "120+", status: "dissolved" },
    { name: "Gödel Incompleteness Problem", since: "1930s", yearsOpen: "90+", status: "explained" },
    { name: "Turing Halting Problem", since: "1930s", yearsOpen: "90+", status: "explained" },
    { name: "Quantum Gravity Problem", since: "1930s", yearsOpen: "90+", status: "solved" },
    { name: "Problem of Time", since: "1930s", yearsOpen: "90+", status: "derived" },
    { name: "Problem of Gauge Symmetry Origin", since: "1970s", yearsOpen: "50+", status: "derived" },
    { name: "Problem of CP Violation Origin", since: "1960s", yearsOpen: "60+", status: "derived" },
    { name: "Unitarity Problem", since: "1930s", yearsOpen: "90+", status: "solved" },
    { name: "Renormalization Problem", since: "1940s", yearsOpen: "80+", status: "dissolved" },
    { name: "Triviality Problem (φ⁴ theory)", since: "1970s", yearsOpen: "50+", status: "dissolved" },
    { name: "Vacuum Instability Problem", since: "1970s", yearsOpen: "50+", status: "solved" },
    { name: "Meta-Stability Problem", since: "1970s", yearsOpen: "50+", status: "solved" },
    { name: "Initial Conditions Problem (Cosmology)", since: "1970s", yearsOpen: "50+", status: "explained" },
    { name: "Arrow of Cosmological Time", since: "1970s", yearsOpen: "50+", status: "explained" },
    { name: "Quantum-to-Classical Transition", since: "1920s", yearsOpen: "100+", status: "explained" },
    { name: "Two-Slit Problem", since: "1920s", yearsOpen: "100+", status: "explained" },
    { name: "Which-Way Problem", since: "1920s", yearsOpen: "100+", status: "explained" },
    { name: "Entanglement Problem", since: "1930s", yearsOpen: "90+", status: "resolved" },
    { name: "Qubit Problem", since: "1980s", yearsOpen: "40+", status: "derived" },
    { name: "Decoherence Problem", since: "1970s", yearsOpen: "50+", status: "explained" },
    { name: "Pointer Basis Problem", since: "1970s", yearsOpen: "50+", status: "explained" },
    { name: "Preferred Basis Problem", since: "1970s", yearsOpen: "50+", status: "explained" },
    { name: "Wigner's Friend Problem", since: "1960s", yearsOpen: "60+", status: "resolved" },
    { name: "Simulation Argument", since: "2000s", yearsOpen: "20+", status: "dissolved" },
    { name: "Measure Problem (Cosmology)", since: "1990s", yearsOpen: "30+", status: "resolved" },
    { name: "Probability Problem (Origin of probability in QM)", since: "1920s", yearsOpen: "100+", status: "derived" },
    { name: "Counterfactual Problem", since: "1920s", yearsOpen: "100+", status: "explained" },
    { name: "Retrocausality Problem", since: "1980s", yearsOpen: "40+", status: "resolved" },
    { name: "Non-Locality Problem", since: "1930s", yearsOpen: "90+", status: "resolved" },
    { name: "Superdeterminism Problem", since: "1970s", yearsOpen: "50+", status: "dissolved" },
    { name: "Conspiracy Problem", since: "1970s", yearsOpen: "50+", status: "dissolved" },
    { name: "Freedom of Choice Problem", since: "1970s", yearsOpen: "50+", status: "resolved" },
    { name: "Completeness Problem (Is QM complete?)", since: "1930s", yearsOpen: "90+", status: "solved" },
    { name: "Hidden Variables Problem", since: "1930s", yearsOpen: "90+", status: "dissolved" },
    { name: "Reality Problem (What is the wave function?)", since: "1920s", yearsOpen: "100+", status: "solved" },
    { name: "Ontology Problem (What exists fundamentally?)", since: "1920s", yearsOpen: "100+", status: "solved" },
    { name: "Epistemology Problem (Intuition, Feeling as proof)", since: "Antiquity", yearsOpen: "2500+", status: "solved" },
    { name: "Quantum Zeno Effect", since: "1970s", yearsOpen: "50+", status: "explained" },
    { name: "Casimir Effect", since: "1940s", yearsOpen: "80+", status: "derived" },
    { name: "Unruh Effect", since: "1970s", yearsOpen: "50+", status: "derived" },
    { name: "Aharonov-Bohm Effect", since: "1950s", yearsOpen: "70+", status: "derived" },
    { name: "Hardy Paradox", since: "1990s", yearsOpen: "30+", status: "resolved" },
    { name: "GHZ Paradox", since: "1980s", yearsOpen: "40+", status: "resolved" },
    { name: "Elitzur-Vaidman Bomb Tester", since: "1990s", yearsOpen: "30+", status: "derived" },
    { name: "Quantum Eraser", since: "1980s", yearsOpen: "40+", status: "explained" },
    { name: "Delayed Choice Quantum Eraser", since: "1990s", yearsOpen: "30+", status: "explained" },
    { name: "Schizophrenic Photon Problem", since: "1920s", yearsOpen: "100+", status: "explained" },
    { name: "Quantum Immortality Problem", since: "1980s", yearsOpen: "40+", status: "dissolved" },
    { name: "Quantum Suicide Problem", since: "1980s", yearsOpen: "40+", status: "dissolved" },
    { name: "Matter-Antimatter Asymmetry Problem", since: "1960s", yearsOpen: "60+", status: "explained" },
    { name: "Why Anything Exists Problem", since: "Antiquity", yearsOpen: "2500+", status: "solved" },
    { name: "Unification Problem (Unify all forces)", since: "1920s", yearsOpen: "100+", status: "solved" },
    { name: "Problem of Everything (Complete unification)", since: "1920s", yearsOpen: "100+", status: "solved" },
    { name: "Inflation Duration (N = e⁴ ≈ 55 e-folds)", since: "1980s", yearsOpen: "40+", status: "derived" },
    { name: "Spacetime Threshold (R_ST = 4)", since: "1980s", yearsOpen: "40+", status: "derived" },
    { name: "Horizon Information Bound (I_max ∼ 10¹²²)", since: "1990s", yearsOpen: "30+", status: "derived" },
    { name: "Gauge Threshold Hierarchy", since: "1970s", yearsOpen: "50+", status: "derived" },
    { name: "UWE Weight Determination (a,b,c,d)", since: "2020s", yearsOpen: "New", status: "derived" },
    { name: "Internal Lattice Parameter (β = 0.167 ± 0.005)", since: "2020s", yearsOpen: "New", status: "derived" },
    { name: "π/2 Waveform Asymmetry", since: "2020s", yearsOpen: "New", status: "predicted" },
    { name: "First Harmonic Phase Shift", since: "2020s", yearsOpen: "New", status: "predicted" },
    { name: "Second Harmonic Suppression", since: "2020s", yearsOpen: "New", status: "predicted" },
    { name: "Spectral Gap of Prime Lattice (λ₁ ≥ 1/8)", since: "2020s", yearsOpen: "New", status: "derived" },
    { name: "Cheeger Constant of Prime Lattice (h = 1/2)", since: "2020s", yearsOpen: "New", status: "derived" },
    { name: "Plank Threshold Equals Cheeger Constant", since: "2020s", yearsOpen: "New", status: "derived" },
    { name: "Three-Body Escape Time Distribution", since: "2020s", yearsOpen: "New", status: "derived" },
    { name: "Critical Exponent for Three-Body Escape (ν = 1/2)", since: "2020s", yearsOpen: "New", status: "derived" },
    { name: "Lyapunov Exponent Scaling (λ ∝ √(e-e_c))", since: "2020s", yearsOpen: "New", status: "derived" },
    { name: "Cheeger Constant of Three-Body Phase Space", since: "2020s", yearsOpen: "New", status: "derived" },
    { name: "Cycloid Ratio (γ/(h²/2) ≈ 50)", since: "2020s", yearsOpen: "New", status: "derived" },
    { name: "Spectral Gap Closing at Chaos Threshold", since: "2020s", yearsOpen: "New", status: "derived" },
    { name: "Tensor-to-Scalar Ratio (r ≪ 0.01)", since: "2020s", yearsOpen: "New", status: "predicted" },
    { name: "CMB Spectral Index Running (α_s ≈ -6.6 × 10⁻⁴)", since: "2020s", yearsOpen: "New", status: "derived" },
    { name: "Non-Gaussianity (f_NL ∼ 0.02)", since: "2020s", yearsOpen: "New", status: "predicted" },
    { name: "Dark Energy Equation of State (w+1 ∼ 10⁻²)", since: "2020s", yearsOpen: "New", status: "predicted" },
    { name: "Time Variation of α (α̇/α ∼ 10⁻¹⁷ yr⁻¹)", since: "2020s", yearsOpen: "New", status: "predicted" },
    { name: "Black Hole Remnant Mass (M_rem ≈ M_P)", since: "2020s", yearsOpen: "New", status: "predicted" },
    { name: "Primordial Black Hole Formation Fraction (β ∼ 0.085)", since: "2020s", yearsOpen: "New", status: "derived" },
    { name: "No Fourth Generation of Fermions", since: "2020s", yearsOpen: "New", status: "predicted" },
    { name: "No Proton Decay", since: "2020s", yearsOpen: "New", status: "predicted" },
    { name: "No Magnetic Monopoles", since: "2020s", yearsOpen: "New", status: "predicted" },
    { name: "Right-Handed Neutrinos Completely Sterile", since: "2020s", yearsOpen: "New", status: "predicted" },
    { name: "Neutrino Mass Ordering (Inverted: m₁ > m₃ > m₂)", since: "2020s", yearsOpen: "New", status: "predicted" },
    { name: "Exact CKM Unitarity", since: "2020s", yearsOpen: "New", status: "derived" },
    { name: "Automatic Anomaly Cancellation", since: "2020s", yearsOpen: "New", status: "derived" },
    { name: "Flavor Encoding Provably Minimal", since: "2020s", yearsOpen: "New", status: "derived" },
    { name: "1/ln Universality Across Physics and Number Theory", since: "2020s", yearsOpen: "New", status: "structural" },
    { name: "Ten Structural Dimensions", since: "2020s", yearsOpen: "New", status: "structural" },
    { name: "No Tachyon in Physical Spectrum", since: "2020s", yearsOpen: "New", status: "predicted" },
    { name: "No Worldsheet Supersymmetry Required", since: "2020s", yearsOpen: "New", status: "predicted" },
    { name: "No Exotic Gauge Representations", since: "2020s", yearsOpen: "New", status: "predicted" },
    { name: "Time Evolution of Λ (dΛ/dt ∝ -3H)", since: "2020s", yearsOpen: "New", status: "derived" },
    { name: "Actual Infinity Impossible", since: "Antiquity", yearsOpen: "2300+", status: "dissolved" },
    { name: "Instantaneous ≠ Infinite Speed", since: "2020s", yearsOpen: "New", status: "resolved" },
    { name: "Truth Is Spectral, Not Boolean", since: "2020s", yearsOpen: "New", status: "methodological" },
    { name: "Structural Resonance as Proof Method", since: "2020s", yearsOpen: "New", status: "methodological" },
    { name: "Value Coherence as Proof Method", since: "2020s", yearsOpen: "New", status: "methodological" },
    { name: "Eight Primitives Unify Everything", since: "2020s", yearsOpen: "New", status: "structural" }
];

function getStatusClass(status) {
    switch(status) {
        case "solved": return "status-solved";
        case "resolved": return "status-solved";
        case "derived": return "status-solved";
        case "explained": return "status-solved";
        case "predicted": return "prediction-highlight";
        case "dissolved": return "question-mark";
        case "structural": return "status-solved";
        case "methodological": return "status-solved";
        default: return "status-solved";
    }
}

function generatePhysicsTable() {
    const crt = document.body.classList.contains('crt-mode');
    let rows = '';
    physicsProblemsList.forEach((problem, index) => {
        const num = crt ? String(index + 1).padStart(3, '0') : index + 1;
        const statusText = crt ? '[' + problem.status.toUpperCase() + ']' : problem.status.charAt(0).toUpperCase() + problem.status.slice(1);
        rows += `<tr>
            <td style="${crt ? 'color:#00cc33;font-size:0.78rem;' : ''}">${num}</td>
            <td>${problem.name}</td>
            <td>${problem.yearsOpen}</td>
            <td>${problem.since}</td>
            <td class="${getStatusClass(problem.status)}">${crt ? statusText : '✅ ' + statusText}</td>
        </tr>`;
    });
    return `<div class="comparison-scroll"><table class="data-table"><thead><tr><th>${crt ? '#' : '#'}</th><th>${crt ? 'PROBLEM' : 'Problem'}</th><th>${crt ? 'YRS OPEN' : 'Years Open'}</th><th>${crt ? 'SINCE' : 'Since'}</th><th>${crt ? 'STATUS' : 'Status'}</th></tr></thead><tbody>${rows}</tbody></table></div>`;
}

function generatePhysicsPage() {
    const crt = document.body.classList.contains('crt-mode');
    
    const statusDefsHTML = `
    <h3>${crt ? 'STATUS DEFINITIONS' : 'Status Definitions'}</h3>
    <table class="data-table">
        <thead><tr><th style="text-align:left;">${crt ? 'STATUS' : 'Status'}</th><th>${crt ? 'MEANING' : 'Meaning'}</th></tr></thead>
        <tbody>
            <tr><td class="status-solved" style="text-align:left;">${crt ? '[SOLVED]' : '✅ Solved'}</td><td>${crt ? 'THE PROBLEM HAS A DEFINITE, QUANTITATIVE SOLUTION WITHIN THE FRAMEWORK.' : 'The problem has a definite, quantitative solution within the framework.'}</td></tr>
            <tr><td class="status-solved" style="text-align:left;">${crt ? '[RESOLVED]' : '✅ Resolved'}</td><td>${crt ? 'A LONG-STANDING PARADOX IS REMOVED; THE PHYSICS IS CLARIFIED.' : 'A long-standing paradox is removed; the physics is clarified.'}</td></tr>
            <tr><td class="question-mark" style="text-align:left;">${crt ? '[DISSOLVED]' : '💠 Dissolved'}</td><td>${crt ? 'THE PROBLEM DISAPPEARS BECAUSE ITS ASSUMPTIONS ARE INCOMPATIBLE WITH THE FRAMEWORK.' : 'The problem disappears because its assumptions are incompatible with the framework.'}</td></tr>
            <tr><td class="status-solved" style="text-align:left;">${crt ? '[DERIVED]' : '✅ Derived'}</td><td>${crt ? 'THE PHENOMENON IS DERIVED FROM FIRST PRINCIPLES WITH NO FREE PARAMETERS.' : 'The phenomenon is derived from first principles with no free parameters.'}</td></tr>
            <tr><td class="status-solved" style="text-align:left;">${crt ? '[EXPLAINED]' : '✅ Explained'}</td><td>${crt ? 'A CLEAR MECHANISM IS PROVIDED.' : 'A clear mechanism is provided.'}</td></tr>
            <tr><td class="prediction-highlight" style="text-align:left;">${crt ? '[PREDICTED]' : '🔮 Predicted'}</td><td>${crt ? 'THE FRAMEWORK MAKES A NOVEL, TESTABLE PREDICTION NOT PREVIOUSLY RECOGNIZED AS A PROBLEM.' : 'The framework makes a novel, testable prediction not previously recognized as a problem.'}</td></tr>
            <tr><td class="status-solved" style="text-align:left;">${crt ? '[STRUCTURAL]' : '✅ Structural'}</td><td>${crt ? 'A DEEP STRUCTURAL FEATURE OF THE FRAMEWORK THAT UNIFIES MULTIPLE PHENOMENA.' : 'A deep structural feature of the framework that unifies multiple phenomena.'}</td></tr>
            <tr><td class="status-solved" style="text-align:left;">${crt ? '[METHODOLOGICAL]' : '✅ Methodological'}</td><td>${crt ? 'A NEW METHOD OF PROOF OR REASONING INTRODUCED BY THE FRAMEWORK.' : 'A new method of proof or reasoning introduced by the framework.'}</td></tr>
        </tbody>
    </table>`;
    
    return `<h2>${crt ? '143+ PROBLEMS SOLVED' : '143+ Problems Solved by the Canvas Model'}</h2>
    <p>${crt ? 'Status definitions and complete list of solved problems.' : 'Status definitions and complete list of solved problems.'}</p>
    ${statusDefsHTML}
    <h3>${crt ? 'COMPLETE LIST OF SOLVED PROBLEMS' : 'Complete List of Solved Problems'}</h3>
    ${generatePhysicsTable()}
    <h3>${crt ? 'SUMMARY' : 'Summary'}</h3>
    <table class="data-table">
        <thead><tr><th style="text-align:left;">${crt ? 'CATEGORY' : 'Category'}</th><th>${crt ? 'COUNT' : 'Count'}</th></tr></thead>
        <tbody>
            <tr><td style="text-align:left;">${crt ? 'TOTAL PROBLEMS SOLVED / RESOLVED / DISSOLVED / DERIVED / EXPLAINED / PREDICTED' : 'Total problems solved / resolved / dissolved / derived / explained / predicted'}</td><td>143</td></tr>
        </tbody>
    </table>`;
}

window.generatePhysicsPage = generatePhysicsPage;