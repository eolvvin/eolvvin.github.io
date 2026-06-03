// data-framework.js
// Framework page content

const featureComparisonData = [
    { feature: "Derives other frameworks", canvas: "✓", qft: "✗", qm: "✗", gr: "✗", string: "✗", lqg: "✗", causal: "✗" },
    { feature: "50 phenomena compatible with", canvas: "50/50", qft: "50/50", qm: "30/50", gr: "25/50", string: "15/50", lqg: "10/50", causal: "8/50" },
    { feature: "50 phenomena derived", canvas: "50/50", qft: "2/50", qm: "5/50", gr: "5/50", string: "1/50", lqg: "2/50", causal: "1/50" },
    { feature: "Solves century-scale open problems", canvas: "✓", qft: "✗", qm: "✗", gr: "✗", string: "✗", lqg: "✗", causal: "✗" },
    { feature: "Discrete spacetime", canvas: "✓", qft: "✗", qm: "✗", gr: "✗", string: "✗", lqg: "✓", causal: "✓" },
    { feature: "Background independence", canvas: "✓", qft: "✗", qm: "✗", gr: "✓", string: "✗", lqg: "✓", causal: "✓" },
    { feature: "Testable predictions", canvas: "✓", qft: "✓", qm: "✓", gr: "✓", string: "✗", lqg: "✗", causal: "✗" },
    { feature: "Resolves singularities", canvas: "✓", qft: "✗", qm: "✗", gr: "✗", string: "?", lqg: "?", causal: "?" },
    { feature: "Resolves information paradox", canvas: "✓", qft: "✗", qm: "✗", gr: "✗", string: "?", lqg: "?", causal: "?" },
    { feature: "Unifies all forces", canvas: "✓", qft: "✗", qm: "✗", gr: "✗", string: "✓", lqg: "✗", causal: "✗" },
    { feature: "Quantum + Gravity unified", canvas: "✓", qft: "✗", qm: "✗", gr: "✗", string: "✓", lqg: "✓", causal: "✗" },
    { feature: "Dark matter candidate", canvas: "✓", qft: "✗", qm: "✗", gr: "✗", string: "✓", lqg: "✗", causal: "✗" },
    { feature: "Derives dimensionality of space", canvas: "✓", qft: "✗", qm: "✗", gr: "✗", string: "✗", lqg: "✗", causal: "✗" },
    { feature: "Derives number of generations", canvas: "✓", qft: "✗", qm: "✗", gr: "✗", string: "✗", lqg: "✗", causal: "✗" },
    { feature: "Derives spin-statistics", canvas: "✓", qft: "✗", qm: "✗", gr: "✗", string: "✗", lqg: "✗", causal: "✗" },
    { feature: "Derives spectral classification", canvas: "✓", qft: "✗", qm: "✗", gr: "✗", string: "✗", lqg: "✗", causal: "✗" },
    { feature: "Derives cosmological constant", canvas: "✓", qft: "✗", qm: "✗", gr: "✗", string: "✗", lqg: "✗", causal: "✗" },
    { feature: "Derives fine-structure constant", canvas: "✓", qft: "✗", qm: "✗", gr: "✗", string: "✗", lqg: "✗", causal: "✗" },
    { feature: "Derives Born rule", canvas: "✓", qft: "✗", qm: "✗", gr: "✗", string: "✗", lqg: "✗", causal: "✗" },
    { feature: "Derives gauge group", canvas: "✓", qft: "✗", qm: "✗", gr: "✗", string: "✗", lqg: "✗", causal: "✗" },
    { feature: "Derives left-handed weak force", canvas: "✓", qft: "✗", qm: "✗", gr: "✗", string: "✗", lqg: "✗", causal: "✗" },
    { feature: "Derives neutrino masses", canvas: "✓", qft: "✗", qm: "✗", gr: "✗", string: "✗", lqg: "✗", causal: "✗" },
    { feature: "Derives baryon asymmetry", canvas: "✓", qft: "✗", qm: "✗", gr: "✗", string: "✗", lqg: "✗", causal: "✗" },
    { feature: "Resolves measurement problem", canvas: "✓", qft: "✗", qm: "✗", gr: "✗", string: "✗", lqg: "✗", causal: "✗" },
    { feature: "Explains dark energy", canvas: "✓", qft: "✗", qm: "✗", gr: "✗", string: "✗", lqg: "✗", causal: "✗" },
    { feature: "Explains inflation mechanism", canvas: "✓", qft: "✗", qm: "✗", gr: "✗", string: "✗", lqg: "✗", causal: "✗" },
    { feature: "Resolves hierarchy problem", canvas: "✓", qft: "✗", qm: "✗", gr: "✗", string: "✗", lqg: "✗", causal: "✗" },
    { feature: "Resolves strong CP problem", canvas: "✓", qft: "✗", qm: "✗", gr: "✗", string: "✗", lqg: "✗", causal: "✗" },
    { feature: "Finite, well-posed classical dynamics", canvas: "✓", qft: "✗", qm: "✗", gr: "✗", string: "✗", lqg: "✗", causal: "✗" }
];

function getMarkClass(value) {
    if (value === '✓') return 'check-mark';
    if (value === '✗') return 'cross-mark';
    if (value === '?') return 'question-mark';
    if (value.includes('/')) return 'fraction-text';
    return '';
}

function generateFeatureTable() {
    const crt = document.body.classList.contains('crt-mode');
    let rows = '';
    featureComparisonData.forEach(row => {
        rows += `<tr>
            <td>${crt ? row.feature.toUpperCase() : row.feature}</td>
            <td><span class="${getMarkClass(row.canvas)}">${row.canvas}</span></td>
            <td><span class="${getMarkClass(row.qft)}">${row.qft}</span></td>
            <td><span class="${getMarkClass(row.qm)}">${row.qm}</span></td>
            <td><span class="${getMarkClass(row.gr)}">${row.gr}</span></td>
            <td><span class="${getMarkClass(row.string)}">${row.string}</span></td>
            <td><span class="${getMarkClass(row.lqg)}">${row.lqg}</span></td>
            <td><span class="${getMarkClass(row.causal)}">${row.causal}</span></td>
        </tr>`;
    });
    return `<h2>${crt ? 'FEATURE COMPARISON' : 'Feature Comparison'}</h2>
    <p>${crt ? 'The Canvas Model is the only framework that derives all major frameworks and resolves every major open problem from first principles.' : 'The Canvas Model is the only framework that derives all major frameworks and resolves every major open problem from first principles.'}</p>
    <div class="comparison-scroll">
    <table class="comparison-table">
        <thead>
            <tr>
                <th>${crt ? 'FEATURE' : 'Feature'}</th>
                <th>Canvas</th><th>QFT</th><th>QM</th><th>GR</th><th>String Theory</th><th>LQG</th><th>Causal Sets</th>
            </tr>
        </thead>
        <tbody>${rows}</tbody>
    </table>
    </div>`;
}

function generateFrameworkPage() {
    const crt = document.body.classList.contains('crt-mode');
    return `<div style="text-align: center; margin: 2rem 0 1rem;"><h2 class="framework-title" style="border-left: none; font-size: 4rem; background: linear-gradient(135deg,#fff,#b8b0ff); -webkit-background-clip:text; background-clip:text; color:transparent;">${crt ? 'EIGHT PRIMITIVES. FOUR PILLARS.<br>ONE FRAMEWORK.' : 'Eight Primitives. Four Pillars.<br>One Framework.'}</h2></div>

    <h3>${crt ? '✦ THE FOUR CORE EQUATIONS' : '✦ The Four Core Equations'}</h3>
    <p>${crt ? 'The Canvas Model reduces all of physics to four equations operating on a pre-geometric canvas. No free parameters. No external inputs.' : 'The Canvas Model reduces all of physics to four equations operating on a pre-geometric canvas. No free parameters. No external inputs.'}</p>

    <h4 style="margin-top: 1.5rem;">${crt ? 'PILLAR I: UNIFIED WAVE EQUATION' : 'Pillar I: Unified Wave Equation'}</h4>
    <div id="framework-equation" class="equation-fullwidth"></div>
    <p>${crt ? 'The master wave equation evolves field amplitude Φ across the order parameter v. All four dynamic primitives — Order, Amplitude, Acceleration, and Polarity — contribute through dimensionless weights (a,b,c,d). Under attractor dynamics (Pillar IV), the linear terms vanish and the equation reduces to a nonlinear wave equation whose solutions produce bound states with a universal π/2 waveform asymmetry.' : 'The master wave equation evolves field amplitude Φ across the order parameter v. All four dynamic primitives — Order, Amplitude, Acceleration, and Polarity — contribute through dimensionless weights (a,b,c,d). Under attractor dynamics, the linear terms vanish and the equation reduces to a nonlinear wave equation whose solutions produce bound states with a universal π/2 waveform asymmetry.'}</p>

    <h4 style="margin-top: 1.5rem;">${crt ? 'PILLAR II: THRESHOLD CONDITION' : 'Pillar II: Threshold Condition'}</h4>
    <div id="threshold-equation" class="core-equation"></div>
    <p>${crt ? 'Discrete structure — particles, spacetime voxels, and all of matter — emerges when the normalized product of intersecting wave amplitudes exceeds a critical threshold. For spacetime itself, three spatial waves and one temporal wave must intersect with combined intensity above R_ST = 4. For particle production, thresholds are determined by gauge subspace dimensions. This single mechanism creates everything from quarks to galactic superclusters.' : 'Discrete structure — particles, spacetime voxels, and all of matter — emerges when the normalized product of intersecting wave amplitudes exceeds a critical threshold. For spacetime itself, three spatial waves and one temporal wave must intersect with combined intensity above R_ST = 4. This single mechanism creates everything from quarks to galactic superclusters.'}</p>

    <h4 style="margin-top: 1.5rem;">${crt ? 'PILLAR III: EIGENVALUE EQUATION' : 'Pillar III: Eigenvalue Equation'}</h4>
    <div id="eigenvalue-equation" class="core-equation"></div>
    <p>${crt ? 'The spectrum of possible particles is organized by a 3×3 threshold tensor on the internal space of the spatial axes. Its three eigenvectors correspond to the three fermion generations. Its eigenvalues determine masses and coupling strengths. The tensor is not assumed — it is derived from the structural field couplings of the gauge symmetry fields U(1), SU(2), and SU(3).' : 'The spectrum of possible particles is organized by a 3×3 threshold tensor on the internal space of the spatial axes. Its three eigenvectors correspond to the three fermion generations. Its eigenvalues determine masses and coupling strengths. The tensor is derived from the structural field couplings of the gauge symmetry fields.'}</p>

    <h4 style="margin-top: 1.5rem;">${crt ? 'PILLAR IV: FEED EQUATION' : 'Pillar IV: Feed Equation'}</h4>
    <div id="steering-equation" class="core-equation"></div>
    <p>${crt ? 'Thresholds evolve in meta-time τ according to the gradient of the spectral energy functional. This drives the system toward attractor configurations — including the critical equality c_base = d_base that forces the π/2 waveform asymmetry. The meta-time coupling μ is observationally bounded at |μ| ≲ 10⁻³⁰, meaning parameters appear constant over cosmic history while having relaxed to their attractor values over deep meta-time. This is the mechanism that eliminates free parameters from the framework.' : 'Thresholds evolve in meta-time τ according to the gradient of the spectral energy functional. This drives the system toward attractor configurations — including the critical equality that forces the π/2 waveform asymmetry. Parameters appear constant over cosmic history while having relaxed to their attractor values over deep meta-time.'}</p>

    <h3>${crt ? '✦ THE EIGHT PRIMITIVES (POSTULATES P1–P8)' : '✦ The Eight Primitives (Postulates P1–P8)'}</h3>
    <p>${crt ? 'All physical law emerges from eight irreducible primitives. Four dynamic primitives govern wave behavior; four property primitives select the structure of our universe. The specific values of the property primitives (d=3, θ=π/2, h=+1) are not arbitrary — they are selected by the attractor dynamics of Pillar IV from the possible values allowed by P8.' : 'All physical law emerges from eight irreducible primitives. Four dynamic primitives govern wave behavior; four property primitives select the structure of our universe.'}</p>

    <table class="data-table">
        <thead><tr><th>#</th><th>${crt ? 'PRIMITIVE' : 'Primitive'}</th><th>${crt ? 'SYMBOL' : 'Symbol'}</th><th>${crt ? 'TYPE' : 'Type'}</th><th>${crt ? 'ROLE IN THE FRAMEWORK' : 'Role in the Framework'}</th></tr></thead>
        <tbody>
            <tr><td>P1</td><td>${crt ? 'ORDER' : 'Order'}</td><td>v</td><td>${crt ? 'DYNAMIC' : 'Dynamic'}</td><td>${crt ? 'Before/after sequence. Becomes time t in physical contexts. The canvas clock.' : 'Before/after sequence. Becomes time t in physical contexts. The canvas clock.'}</td></tr>
            <tr><td>P2</td><td>${crt ? 'AMPLITUDE' : 'Amplitude'}</td><td>Φ₀</td><td>${crt ? 'DYNAMIC' : 'Dynamic'}</td><td>${crt ? 'Sets the fundamental field magnitude scale. All amplitudes are multiples of Φ₀ ∼ 1/ℓ_P.' : 'Sets the fundamental field magnitude scale. All amplitudes are multiples of Φ₀.'}</td></tr>
            <tr><td>P3</td><td>${crt ? 'ACCELERATION' : 'Acceleration'}</td><td>∂²Φ/∂v²</td><td>${crt ? 'DYNAMIC' : 'Dynamic'}</td><td>${crt ? 'Change of change. Minimal derivative order enabling oscillatory solutions. Generates mass and inertia.' : 'Change of change. Minimal derivative order enabling oscillatory solutions.'}</td></tr>
            <tr><td>P4</td><td>${crt ? 'POLARITY' : 'Polarity'}</td><td>sgn(Φ)</td><td>${crt ? 'DYNAMIC' : 'Dynamic'}</td><td>${crt ? 'Sign reversal. The engine of oscillation. Without polarity, waves cannot reverse direction.' : 'Sign reversal. The engine of oscillation. Without polarity, waves cannot reverse direction.'}</td></tr>
            <tr><td>P5</td><td>${crt ? 'CHIRALITY' : 'Chirality'}</td><td>h = +1</td><td>${crt ? 'PROPERTY' : 'Property'}</td><td>${crt ? 'Primitive handedness. Selects matter over antimatter. Sets the sign of the π/2 asymmetry.' : 'Primitive handedness. Selects matter over antimatter. Sets the sign of the π/2 asymmetry.'}</td></tr>
            <tr><td>P6</td><td>${crt ? 'DIMENSION' : 'Dimension'}</td><td>n = 3</td><td>${crt ? 'PROPERTY' : 'Property'}</td><td>${crt ? 'Number of spatial axes. Three dimensions are forced by wave intersection consistency and stable orbits.' : 'Number of spatial axes. Three dimensions are forced by wave intersection consistency.'}</td></tr>
            <tr><td>P7</td><td>${crt ? 'ANGLE' : 'Angle'}</td><td>θ = π/2</td><td>${crt ? 'PROPERTY' : 'Property'}</td><td>${crt ? 'Axis orthogonality. Forced by lattice isotropy. Sets the magnitude of the π/2 asymmetry.' : 'Axis orthogonality. Forced by lattice isotropy. Sets the magnitude of the π/2 asymmetry.'}</td></tr>
            <tr><td>P8</td><td>${crt ? 'CHARGE' : 'Charge'}</td><td>q_s ∈ {1,2,3}</td><td>${crt ? 'PROPERTY' : 'Property'}</td><td>${crt ? 'Coupling to spatial axes. Generates U(1), SU(2), SU(3). The integers {1,2,3} determine all gauge parameters.' : 'Coupling to spatial axes. Generates U(1), SU(2), SU(3). The integers {1,2,3} determine all gauge parameters.'}</td></tr>
        </tbody>
    </table>

    <h3>${crt ? '✦ THE FOUR PILLARS' : '✦ The Four Pillars'}</h3>
    <p>${crt ? 'The framework is organized into four pillars. Each pillar corresponds to one core equation and the physical domain it governs.' : 'The framework is organized into four pillars. Each pillar corresponds to one core equation and the physical domain it governs.'}</p>

    <table class="data-table">
        <thead><tr><th>${crt ? 'PILLAR' : 'Pillar'}</th><th>${crt ? 'EQUATION' : 'Equation'}</th><th>${crt ? 'DOMAIN' : 'Domain'}</th><th>${crt ? 'KEY RESULT' : 'Key Result'}</th></tr></thead>
        <tbody>
            <tr><td>I</td><td>${crt ? 'UNIFIED WAVE EQUATION' : 'Unified Wave Equation'}</td><td>${crt ? 'WAVE DYNAMICS' : 'Wave Dynamics'}</td><td>${crt ? 'All fields evolve under one equation. Produces the π/2 waveform asymmetry.' : 'All fields evolve under one equation. Produces the π/2 waveform asymmetry.'}</td></tr>
            <tr><td>II</td><td>${crt ? 'THRESHOLD CONDITION' : 'Threshold Condition'}</td><td>${crt ? 'EMERGENCE & COSMOLOGY' : 'Emergence & Cosmology'}</td><td>${crt ? 'Spacetime and particles emerge from wave intersections. Sets Λ, flatness, inflation, entropy.' : 'Spacetime and particles emerge from wave intersections. Sets Λ, flatness, inflation, entropy.'}</td></tr>
            <tr><td>III</td><td>${crt ? 'EIGENVALUE EQUATION' : 'Eigenvalue Equation'}</td><td>${crt ? 'PARTICLE PHYSICS' : 'Particle Physics'}</td><td>${crt ? 'Three generations, CKM and PMNS mixing, gauge couplings all follow from the 3×3 threshold tensor.' : 'Three generations, CKM and PMNS mixing, gauge couplings from the 3×3 threshold tensor.'}</td></tr>
            <tr><td>IV</td><td>${crt ? 'FEED EQUATION' : 'Feed Equation'}</td><td>${crt ? 'META-DYNAMICS' : 'Meta-Dynamics'}</td><td>${crt ? 'Parameters evolve to attractor values. Eliminates free parameters. Drives c_base = d_base.' : 'Parameters evolve to attractor values. Eliminates free parameters.'}</td></tr>
        </tbody>
    </table>

    <h3>${crt ? '✦ DEPENDENCIES NOTATION' : '✦ Dependencies Notation'}</h3>
    <p>${crt ? 'Every result in the framework is tagged with the specific primitives and pillars required for its derivation. This notation makes the logical structure of the framework transparent and auditable.' : 'Every result in the framework is tagged with the specific primitives and pillars required for its derivation.'}</p>
    <p><strong>P1–P8</strong> — ${crt ? 'The eight primitives (postulates)' : 'The eight primitives (postulates)'}<br>
    <strong>I, II, III, IV</strong> — ${crt ? 'The four pillars (core equations)' : 'The four pillars (core equations)'}<br>
    <strong>${crt ? 'Example: "P5, P7, I, IV" means the result depends on Primitives P5 and P7, and Pillars I and IV.' : 'Example: "P5, P7, I, IV" means depends on Primitives P5 and P7, and Pillars I and IV.'}</strong></p>

    <h3>${crt ? '✦ THE FUNDAMENTAL NUMBER' : '✦ The Fundamental Number'}</h3>
    <p>${crt ? 'All 25 fundamental parameters of the Standard Model and cosmology are generated by a single number: α₀ = 1/ln(I_max) ≈ 1/140, combined with the gauge subspace dimensions {1,2,3} and their sums {4,5,6}. The fine-structure constant, the CKM and PMNS mixing angles, the cosmological constant, the baryon asymmetry — all trace back to α₀ and the integers {1,2,3}.' : 'All 25 fundamental parameters of the Standard Model and cosmology are generated by a single number: α₀ = 1/ln(I_max) ≈ 1/140, combined with the gauge subspace dimensions {1,2,3} and their sums {4,5,6}.'}</p>

    <h3>${crt ? '✦ THE FATAL PREDICTION' : '✦ The Fatal Prediction'}</h3>
    <p>${crt ? 'The framework makes one sharp, falsifiable prediction: T_rise/T_fall = π/2 ≈ 1.5708. Every bound state formed by wave intersection must exhibit this specific waveform asymmetry. Verified in 3+1D numerical simulation at 1.568 ± 0.012. Awaiting experimental test. If confirmed, it validates the entire framework. If falsified, the framework is abandoned. That is the standard to which we hold it.' : 'The framework makes one sharp, falsifiable prediction: T_rise/T_fall = π/2 ≈ 1.5708. Every bound state formed by wave intersection must exhibit this specific waveform asymmetry. Verified in simulation at 1.568 ± 0.012. If confirmed experimentally, it validates the entire framework. If falsified, the framework is abandoned.'}</p>

    <h3>${crt ? '✦ SCOPE OF THE FRAMEWORK' : '✦ Scope of the Framework'}</h3>
    <p>${crt ? 'The Canvas Model reproduces 111 known physical constants and phenomena, makes 54 novel testable predictions, and resolves 143 long-standing problems in physics and mathematics. All from eight primitives and four equations. No free parameters. No observational inputs.' : 'The Canvas Model reproduces 111 known physical constants and phenomena, makes 54 novel testable predictions, and resolves 143 long-standing problems in physics and mathematics. All from eight primitives and four equations.'}</p>

    ${generateFeatureTable()}`;
}

window.generateFrameworkPage = generateFrameworkPage;