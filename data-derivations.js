// data-derivations.js
// Derivations page content

const derivationCategories = [
    {
        category: "Spacetime and Gravity",
        items: [
            { name: "General Relativity (Einstein field equations)", status: "Derived" },
            { name: "Regge Calculus (Discrete GR, O(L²) convergence)", status: "Derived" },
            { name: "Newton's law of gravitation (inverse-square)", status: "Derived" },
            { name: "Friedmann equations", status: "Derived" },
            { name: "de Sitter space (asymptotic attractor)", status: "Derived" },
            { name: "Number of spatial dimensions (d=3)", status: "Derived" },
            { name: "Axis orthogonality (θ = π/2)", status: "Derived" },
            { name: "Spacetime threshold (R_ST = 4)", status: "Derived" },
            { name: "Horizon information bound (I_max = A_horizon/ℓ_P²)", status: "Derived" },
            { name: "Spatial flatness (Ω_k = 0, information-theoretic)", status: "Derived" },
            { name: "Initial entropy (S_max(t_P) ∼ 10 k_B)", status: "Derived" },
            { name: "Arrow of time (from waveform asymmetry)", status: "Derived" },
            { name: "Loop Quantum Gravity (discrete spacetime)", status: "Derived" },
            { name: "String Theory (emergent)", status: "Derived" },
            { name: "Causal Set Theory (discrete structure)", status: "Derived" }
        ]
    },
    {
        category: "Quantum Mechanics",
        items: [
            { name: "Quantum Mechanics (full framework)", status: "Derived" },
            { name: "Schrödinger equation", status: "Derived" },
            { name: "Klein-Gordon equation", status: "Derived" },
            { name: "Dirac equation", status: "Derived" },
            { name: "Uncertainty principle", status: "Derived" },
            { name: "Born rule (origin of probability)", status: "Derived" },
            { name: "Quantum tunneling", status: "Derived" },
            { name: "Quantum decoherence", status: "Derived" },
            { name: "Quantum Zeno effect", status: "Derived" },
            { name: "Quantum teleportation", status: "Derived" },
            { name: "Bell inequality violation", status: "Derived" },
            { name: "EPR paradox resolution", status: "Derived" },
            { name: "Wigner's Friend resolution", status: "Derived" },
            { name: "Two-slit problem", status: "Derived" },
            { name: "Which-way problem", status: "Derived" },
            { name: "Entanglement", status: "Derived" },
            { name: "Hong-Ou-Mandel effect", status: "Derived" },
            { name: "Spontaneous parametric down-conversion", status: "Derived" },
            { name: "Bell state measurement", status: "Derived" },
            { name: "Hardy paradox", status: "Derived" },
            { name: "GHZ paradox", status: "Derived" },
            { name: "Elitzur-Vaidman bomb tester", status: "Derived" },
            { name: "Quantum eraser", status: "Derived" },
            { name: "Delayed choice quantum eraser", status: "Derived" },
            { name: "Qubit", status: "Derived" }
        ]
    },
    {
        category: "Quantum Field Theory and Particle Physics",
        items: [
            { name: "Quantum Field Theory", status: "Derived" },
            { name: "Quantum Electrodynamics", status: "Derived" },
            { name: "Quantum Chromodynamics", status: "Derived" },
            { name: "Electroweak Theory", status: "Derived" },
            { name: "The Standard Model (full gauge group)", status: "Derived" },
            { name: "Gauge group U(1)×SU(2)×SU(3)", status: "Derived" },
            { name: "Yang-Mills equations", status: "Derived" },
            { name: "Gauge coupling unification", status: "Derived" },
            { name: "Gauge threshold hierarchy", status: "Derived" },
            { name: "Three fermion generations", status: "Derived" },
            { name: "CKM matrix", status: "Derived" },
            { name: "CKM Wolfenstein parameter (λ = 1/5)", status: "Derived" },
            { name: "CKM geometric modulation (λ_eff ≈ α)", status: "Derived" },
            { name: "CKM Wolfenstein hierarchy (λ:λ²:λ³)", status: "Derived" },
            { name: "Jarlskog invariant (J ∼ α⁷)", status: "Derived" },
            { name: "CP violation (CKM and PMNS)", status: "Derived" },
            { name: "PMNS matrix", status: "Derived" },
            { name: "PMNS θ₁₂ = 1/√3 ≈ 33.1°", status: "Derived" },
            { name: "PMNS θ₂₃ = π/4 = 45°", status: "Derived" },
            { name: "PMNS θ₁₃ = 1/6 ≈ 9.5°", status: "Derived" },
            { name: "Neutrino oscillations", status: "Derived" },
            { name: "Neutrino mass hierarchy", status: "Derived" },
            { name: "Fundamental coupling (α₀ = 1/ln(R_H/ℓ_P) ≈ 1/140)", status: "Derived" },
            { name: "Fine-structure constant (α_EM⁻¹ ≈ 137)", status: "Derived" },
            { name: "Strong CP resolution (θ_QCD = 0, discrete topology)", status: "Derived" },
            { name: "Proton stability", status: "Derived" },
            { name: "No magnetic monopoles", status: "Derived" },
            { name: "No fourth generation", status: "Derived" },
            { name: "Automatic anomaly cancellation", status: "Derived" },
            { name: "Exact CKM unitarity", status: "Derived" },
            { name: "Flavor encoding (minimal, 13 from 7)", status: "Derived" },
            { name: "Right-handed neutrinos (completely sterile)", status: "Derived" },
            { name: "Feynman diagrams", status: "Derived" },
            { name: "Fermi's golden rule", status: "Derived" },
            { name: "Casimir effect", status: "Derived" },
            { name: "Unruh effect", status: "Derived" },
            { name: "Aharonov-Bohm effect", status: "Derived" },
            { name: "Berry phase", status: "Derived" },
            { name: "Lamb shift", status: "Derived" },
            { name: "Zeeman effect", status: "Derived" },
            { name: "Stark effect", status: "Derived" },
            { name: "Einstein A and B coefficients", status: "Derived" },
            { name: "Rabi oscillations", status: "Derived" }
        ]
    },
    {
        category: "Cosmology",
        items: [
            { name: "Cosmological constant (Λ = 3Ω_Λ/R_H²)", status: "Derived" },
            { name: "Cosmological constant coefficient (Ω_Λ = 3/(3+√2)(1+α₀))", status: "Derived" },
            { name: "Inflation duration (N = e⁴ ≈ 55 e-folds)", status: "Derived" },
            { name: "Baryon asymmetry (η ∼ 10⁻⁹)", status: "Derived" },
            { name: "Baryogenesis threshold ratio (T₀/T_rh = 12)", status: "Derived" },
            { name: "Dark matter candidate (Planck-mass black hole remnants)", status: "Derived" },
            { name: "Dark matter abundance (Ω_DM ∼ 0.26)", status: "Derived" },
            { name: "Primordial black hole formation fraction (β ∼ 0.085)", status: "Derived" },
            { name: "Black hole remnant mass (M_rem ≈ M_P)", status: "Derived" },
            { name: "Scalar spectral index (n_s ≈ 0.964)", status: "Derived" },
            { name: "Spectral index running (α_s ≈ -6.6 × 10⁻⁴)", status: "Derived" },
            { name: "Tensor-to-scalar ratio (r ≪ 0.01)", status: "Derived" },
            { name: "Non-Gaussianity (f_NL^local ∼ 0.02)", status: "Derived" },
            { name: "Dark energy equation of state (w(z))", status: "Derived" },
            { name: "Time evolution of Λ (dΛ/dt ∝ -3H)", status: "Derived" },
            { name: "Time variation of α (α̇/α ∼ 10⁻¹⁷ yr⁻¹)", status: "Derived" },
            { name: "Reheating temperature (T_reh ∼ T_P)", status: "Derived" },
            { name: "Baryon acoustic oscillations", status: "Derived" },
            { name: "Primordial gravitational waves", status: "Derived" },
            { name: "Stochastic GW background (h²Ω_GW ∼ α₀)", status: "Derived" },
            { name: "CMB power spectrum", status: "Derived" },
            { name: "Hawking radiation", status: "Derived" },
            { name: "Black hole entropy (Bekenstein-Hawking)", status: "Derived" },
            { name: "Page curve", status: "Derived" },
            { name: "Hubble tension (partial resolution)", status: "Derived" }
        ]
    },
    {
        category: "Wave Dynamics (Canvas-Specific)",
        items: [
            { name: "Unified Wave Equation (UWE)", status: "Postulated" },
            { name: "UWE weights (a=1, b=1/3, c=d=1/[137(1+π/2)])", status: "Derived" },
            { name: "Waveform asymmetry (T_rise/T_fall = π/2)", status: "Derived" },
            { name: "Asymmetry parameter (α = (π-2)/(π+2))", status: "Derived" },
            { name: "First harmonic phase shift (φ₁ = απ)", status: "Derived" },
            { name: "Second harmonic suppression (|ψ̂₂|/|ψ̂₁|)", status: "Derived" },
            { name: "Direct weight ratio (c_eff/d_eff = π/2)", status: "Derived" },
            { name: "Internal lattice parameter (β ≈ 1.868)", status: "Derived" },
            { name: "Threshold tensor (T̂_ij)", status: "Derived" },
            { name: "Feed equation (Pillar IV attractor dynamics)", status: "Postulated" }
        ]
    },
    {
        category: "Classical Physics",
        items: [
            { name: "Classical Mechanics", status: "Derived" },
            { name: "Newton's laws of motion", status: "Derived" },
            { name: "Hooke's law", status: "Derived" },
            { name: "Work-energy theorem", status: "Derived" },
            { name: "Principle of least action", status: "Derived" },
            { name: "Fluid Dynamics (Navier-Stokes)", status: "Derived" },
            { name: "Electromagnetism (Maxwell's equations)", status: "Derived" },
            { name: "Coulomb's law", status: "Derived" },
            { name: "Ohm's law", status: "Derived" },
            { name: "Kirchhoff's laws", status: "Derived" },
            { name: "Optics (Snell's law, etc.)", status: "Derived" },
            { name: "Speed of sound", status: "Derived" },
            { name: "E = mc²", status: "Derived" },
            { name: "Sagnac effect", status: "Derived" },
            { name: "Faraday effect", status: "Derived" },
            { name: "Larmor precession", status: "Derived" }
        ]
    },
    {
        category: "Thermodynamics and Statistical Mechanics",
        items: [
            { name: "Thermodynamics (laws)", status: "Derived" },
            { name: "Second law of thermodynamics", status: "Derived" },
            { name: "Boltzmann entropy formula", status: "Derived" },
            { name: "Boltzmann distribution", status: "Derived" },
            { name: "Statistical Mechanics", status: "Derived" },
            { name: "Ideal gas law", status: "Derived" },
            { name: "Bernoulli's principle", status: "Derived" },
            { name: "Gibbs paradox resolution", status: "Derived" },
            { name: "Loschmidt paradox resolution", status: "Derived" },
            { name: "Maxwell demon resolution", status: "Derived" }
        ]
    },
    {
        category: "Condensed Matter and Nuclear Physics",
        items: [
            { name: "BCS gap equation", status: "Derived" },
            { name: "London equations", status: "Derived" },
            { name: "Meissner effect", status: "Derived" },
            { name: "Josephson effect", status: "Derived" },
            { name: "Landau critical velocity", status: "Derived" },
            { name: "Gross-Pitaevskii equation", status: "Derived" },
            { name: "BEC critical temperature", status: "Derived" },
            { name: "Kondo effect", status: "Derived" },
            { name: "Thouless formula (Anderson localization)", status: "Derived" },
            { name: "Nuclear shell model", status: "Derived" },
            { name: "Nuclear magic numbers", status: "Derived" },
            { name: "Alpha decay (Geiger-Nuttall law)", status: "Derived" },
            { name: "Beta decay", status: "Derived" },
            { name: "Gamma decay", status: "Derived" },
            { name: "Nuclear fission", status: "Derived" },
            { name: "Nuclear fusion (Gamow peak)", status: "Derived" },
            { name: "Nuclear magnetic resonance", status: "Derived" },
            { name: "Fermi contact interaction", status: "Derived" },
            { name: "Landé g-factor", status: "Derived" },
            { name: "WKB approximation", status: "Derived" },
            { name: "Weisskopf estimates", status: "Derived" }
        ]
    },
    {
        category: "Atomic and Optical Physics",
        items: [
            { name: "Hydrogen energy levels", status: "Derived" },
            { name: "Rydberg constant", status: "Derived" },
            { name: "Bohr radius", status: "Derived" },
            { name: "Compton wavelength", status: "Derived" },
            { name: "Thomson cross section", status: "Derived" },
            { name: "Lamb shift (Bethe formula)", status: "Derived" },
            { name: "Hyperfine splitting (21 cm line)", status: "Derived" },
            { name: "Rabi oscillations", status: "Derived" },
            { name: "Optical coherence", status: "Derived" }
        ]
    },
    {
        category: "Mathematics (CTM)",
        items: [
            { name: "Riemann Hypothesis (resolved in CTM)", status: "Derived" },
            { name: "Prime Wave Operator", status: "Derived" },
            { name: "Spectral gap of prime lattice (λ₁ ≥ 1/8)", status: "Derived" },
            { name: "Cheeger constant of prime lattice (h = 1/2)", status: "Derived" },
            { name: "Plank threshold equals Cheeger constant", status: "Derived" },
            { name: "Threshold Trace Formula", status: "Derived" },
            { name: "Threshold Index Theorem", status: "Derived" },
            { name: "Primitive Spectral Transform", status: "Derived" },
            { name: "Tensor Adele Class", status: "Derived" },
            { name: "Harmonicity of the algebraicity field", status: "Derived" },
            { name: "Three-body problem (escape time, critical exponents)", status: "Derived" },
            { name: "Sitnikov problem", status: "Derived" },
            { name: "Cycloid ratio (γ/(h²/2) ≈ 50)", status: "Derived" },
            { name: "Lyapunov exponent scaling (λ ∝ √(e-e_c))", status: "Derived" },
            { name: "Critical exponent for three-body escape (ν = 1/2)", status: "Derived" },
            { name: "Cheeger constant of three-body phase space", status: "Derived" },
            { name: "Spectral gap closing at chaos threshold", status: "Derived" },
            { name: "1/ln universality (physics and number theory)", status: "Derived" },
            { name: "Impossibility of actual infinity", status: "Derived" },
            { name: "Instantaneous vs. infinite speed (distinguished)", status: "Derived" }
        ]
    }
];

function generateDerivationsPage() {
    const crt = document.body.classList.contains('crt-mode');
    let totalCount = 0;
    let html = `<h2>${crt ? 'DERIVATIONS FROM FIRST PRINCIPLES' : 'Derivations from First Principles'}</h2>
    <p>${crt ? 'Status definitions and complete list of derived frameworks.' : 'Status definitions and complete list of derived frameworks.'}</p>
    
    <h3>${crt ? 'STATUS DEFINITIONS' : 'Status Definitions'}</h3>
    <table class="data-table">
        <thead><tr><th style="text-align:left;">${crt ? 'STATUS' : 'Status'}</th><th>${crt ? 'MEANING' : 'Meaning'}</th></tr></thead>
        <tbody>
            <tr><td class="derivation-status" style="text-align:left;">${crt ? '[DERIVED]' : '✅ Derived'}</td><td>${crt ? 'THE THEORY, EQUATION, OR PHENOMENON FOLLOWS DIRECTLY FROM CANVAS MODEL AXIOMS WITH NO FREE PARAMETERS.' : 'The theory, equation, or phenomenon follows directly from Canvas Model axioms with no free parameters.'}</td></tr>
            <tr><td class="derivation-status" style="color:#ffaa00;text-align:left;">${crt ? '[POSTULATED]' : '📌 Postulated'}</td><td>${crt ? 'FOUNDATIONAL EQUATION OF THE CANVAS MODEL — THE STARTING POINT FROM WHICH ALL ELSE IS DERIVED.' : 'Foundational equation of the Canvas Model — the starting point from which all else is derived.'}</td></tr>
        </tbody>
    </table>`;
    
    derivationCategories.forEach(cat => {
        totalCount += cat.items.length;
        html += `<h3>${crt ? cat.category.toUpperCase() : cat.category}</h3>
        <table class="derivations-table">
            <thead><tr><th>${crt ? '#' : '#'}</th><th>${crt ? 'THEORY / EQUATION / PHENOMENON' : 'Theory / Equation / Phenomenon'}</th><th>${crt ? 'STATUS' : 'Status'}</th></tr></thead>
            <tbody>`;
        
        cat.items.forEach((item, index) => {
            const num = crt ? String(index + 1).padStart(2, '0') : index + 1;
            const statusClass = item.status === 'Postulated' ? 'style="color:#ffaa00;"' : '';
            const statusText = crt ? '[' + item.status.toUpperCase() + ']' : (item.status === 'Postulated' ? '📌 ' : '✅ ') + item.status;
            html += `<tr>
                <td style="${crt ? 'color:#00cc33;font-size:0.78rem;' : ''}">${num}</td>
                <td>${item.name}</td>
                <td class="derivation-status" ${statusClass}>${statusText}</td>
            </tr>`;
        });
        
        html += `</tbody></table>`;
    });
    
    html += `<h3>${crt ? 'SUMMARY' : 'Summary'}</h3>
    <table class="data-table">
        <thead><tr><th style="text-align:left;">${crt ? 'CATEGORY' : 'Category'}</th><th>${crt ? 'COUNT' : 'Count'}</th></tr></thead>
        <tbody>`;
    
    derivationCategories.forEach(cat => {
        html += `<tr><td style="text-align:left;">${crt ? cat.category.toUpperCase() : cat.category}</td><td>${cat.items.length}</td></tr>`;
    });
    
    html += `<tr style="font-weight:bold;border-top:2px solid ${crt ? '#00ff41' : 'var(--accent-cyan)'};"><td style="text-align:left;">${crt ? 'TOTAL' : 'Total'}</td><td>${totalCount}</td></tr></tbody></table>`;
    
    return html;
}

window.generateDerivationsPage = generateDerivationsPage;