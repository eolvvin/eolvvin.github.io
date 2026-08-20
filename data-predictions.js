// data-predictions.js
// Predictions page content — current programme state
// Audit 176 baseline + Post-Binder Closure Addendum

const derivedResults = [
    // Finite Recurrence Geometry
    { name: "CRT factorization of Z₂₁₀", predicted: "Z₂₁₀ ≅ Z₂ × Z₃ × Z₅ × Z₇", observed: "Number-theoretic identity", dependencies: "Coprime periods 2,3,5,7", type: "Derived" },
    { name: "Weyl algebra on prime factors", predicted: "Z_p X_p = ω_p X_p Z_p", observed: "Standard finite Weyl relations", dependencies: "Finite cyclic factors", type: "Derived" },
    { name: "Matrix algebra factorization", predicted: "M₂₁₀ ≅ M₂ ⊗ M₃ ⊗ M₅ ⊗ M₇", observed: "Standard tensor algebra", dependencies: "CRT + finite Weyl basis", type: "Derived" },
    { name: "Weyl twirl identity", predicted: "T_p(A) = τ_p(A)I", observed: "Verified numerically (≤10⁻¹⁵)", dependencies: "Finite Weyl algebra", type: "Derived" },
    { name: "Discrete exterior calculus", predicted: "d² = 0 for commuting shifts", observed: "Standard DGA result", dependencies: "Primitive commuting translations", type: "Derived" },
    { name: "Gauge covariance and Bianchi identity", predicted: "DF = 0, F → gFg⁻¹", observed: "Standard finite gauge geometry", dependencies: "Connection A, curvature F = dA + A∧A", type: "Derived" },
    { name: "Exact-order decomposition", predicted: "Σ_{q|210} φ(q) = 210", observed: "Euler totient identity", dependencies: "Cyclic group structure", type: "Derived" },
    { name: "Dirichlet pullback metric", predicted: "h_pq = 2C δ_pq", observed: "Isotropic within pullback class", dependencies: "Normalized trace + regular shifts", type: "Derived (with constitutive metric rule)" },

    // Matter Architecture
    { name: "One-family representation package", predicted: "16 → 1 ⊕ 10 ⊕ 5̄", observed: "Standard SU(5) branching", dependencies: "Λ⁎C⁵ via CAR", type: "Derived (given C⁵)" },
    { name: "Hypercharge ratios from anomalies", predicted: "(q,u,d,ℓ,e) = q(1,−4,2,−3,6)", observed: "SM hypercharges up to overall scale", dependencies: "Five-multiplet ansatz + anomaly equations", type: "Derived within ansatz" },
    { name: "Z₆ center compatibility", predicted: "t₃/3 + ε₂/2 + Y ∈ Z", observed: "SM multiplets satisfy condition", dependencies: "S(U(3)×U(2)) global quotient", type: "Derived" },
    { name: "S(U(3)×U(2)) stabilizer", predicted: "Stab(Y₃₊₂) = S(U(3)×U(2))", observed: "SM global gauge structure", dependencies: "3+2 vacuum eigenvalues", type: "Derived (given V₅)" },
    { name: "Relative hypercharge from tracelessness", predicted: "Y ∝ diag(−1/3,−1/3,−1/3,1/2,1/2)", observed: "SM hypercharge ratio", dependencies: "Tr Y = 0 with 3+2 multiplicities", type: "Derived (given V₅)" },
    { name: "Minimal closure dimension", predicted: "N = 5", observed: "Unique minimal module satisfying closure criteria", dependencies: "Gauge blocks + one-family CAR capacity", type: "Closure theorem (physical criterion input)" },

    // Spacetime Bridge
    { name: "Stone generator from unitary evolution", predicted: "i∂ₜψ = Hψ", observed: "Standard quantum evolution", dependencies: "Strongly continuous unitary group", type: "Derived (given unbounded Order)" },
    { name: "Infrared dimension criterion", predicted: "d_IR = rank A", observed: "Standard spectral geometry", dependencies: "Quadratic propagation Hessian", type: "Derived" },
    { name: "Spectral dimension from heat kernel", predicted: "d_s = −2 d log P / d log s", observed: "Standard diffusion metric", dependencies: "Nonnegative graph Laplacian", type: "Derived" },
    { name: "Dirac factorization of Lorentzian symbol", predicted: "{γμ,γν} = 2ημν", observed: "Standard Clifford algebra", dependencies: "Hyperbolic quadratic form + first-order factorization", type: "Derived (conditional on Lorentz cone)" },
    { name: "Relativistic collective-coordinate mass", predicted: "M_i = E₀/c²", observed: "Standard relativistic soliton result", dependencies: "Lorentz-invariant localized solution", type: "Derived" },
    { name: "Conditional equivalence principle", predicted: "M_g = M_i = E₀/c²", observed: "Standard weak-field result", dependencies: "Universal metric coupling", type: "Derived (conditional)" },
    { name: "Lorentzian inertia from tracelessness", predicted: "Inertia(Q₃₊₁) = (3,1)", observed: "Sign structure forced by Tr Q = 0", dependencies: "3+1 vacuum multiplicity", type: "Derived (post-binder)" },

    // Localization and Stability
    { name: "Contact dilation instability", predicted: "E″(1) < 0", observed: "Exact scaling no-go", dependencies: "Massless contact nonlinear Dirac", type: "Derived (no-go)" },
    { name: "Massless exterior tail obstruction", predicted: "Oscillatory tails for ω ≠ 0", observed: "Nonnormalizable exterior modes", dependencies: "m∞ = 0 stationary Dirac equation", type: "Derived (no-go)" },
    { name: "Propagating mediator positive curvature", predicted: "E″(1) = 2B > 0", observed: "Exact scaling result", dependencies: "Massive mediator mass term", type: "Derived" },
    { name: "Broken-vacuum asymptotic gap", predicted: "m∞ = yv ≠ 0", observed: "Standard Higgs-like mechanism", dependencies: "X → v ≠ 0, Yukawa coupling y", type: "Derived (conditional on model)" },
    { name: "Stable localized composite branch", predicted: "E/(Nm∞) < 1 for N ≥ 9", observed: "Numerical bound-state branch", dependencies: "v=1, y=2, λ=1/2 benchmark", type: "Computed (conditional on benchmark)" },
    { name: "Thermodynamic identity", predicted: "dE/dN = ω", observed: "Holds at 10⁻³ level", dependencies: "Stationary branch envelope theorem", type: "Derived + Computed" },
    { name: "Spectral stability through L=6", predicted: "No growing localized physical mode", observed: "Signed-energy RPA includes negative-energy states", dependencies: "N=10, N=14 backgrounds", type: "Computed (conditional on benchmark)" },
    { name: "Translation zero mode", predicted: "Exact L=1 zero eigenvalue", observed: "Symmetry mode identified numerically", dependencies: "Translation invariance", type: "Derived + Computed" },

    // Cosmology
    { name: "Minkowski vacuum at φ = 0", predicted: "H = 0 for V(0) = 0, F(0) = M²_∗", observed: "No bare cosmological constant", dependencies: "Frozen scalar–tensor action", type: "Derived" },
    { name: "de Sitter fixed-point cubic", predicted: "1 − (1+u/2)s + (3κ/4)s² + (uκ/8)s³ = 0", observed: "Exact phase equation", dependencies: "Constant-field vacuum condition", type: "Derived" },
    { name: "Minimal-coupling phase boundary", predicted: "1/4 < κ < 1/3", observed: "Nonzero maximum–minimum pair exists", dependencies: "u = 0 discriminant condition", type: "Derived" },
    { name: "Einstein-frame stability conditions", predicted: "F > 0, K_E > 0, c_T² = 1", observed: "Healthy tensor kinetic term", dependencies: "Two-derivative scalar–tensor action", type: "Derived" },
    { name: "Canvas–GR raw likelihood", predicted: "Δχ² = −0.077", observed: "Essentially exact tie", dependencies: "Planck + DESI DR2 + Pantheon+, best restricted audited point", type: "Computed (calibrated)" },
    { name: "AIC/BIC preference", predicted: "GR/ΛCDM favored", observed: "ΔAIC ≈ +1.92, ΔBIC ≈ +8.22 (1 extra param)", dependencies: "Complexity penalty from (κ,u,δ,ξ)", type: "Computed (calibrated)" },
    { name: "Growth amplitude", predicted: "S₈ ≈ 0.838", observed: "GR control S₈ ≈ 0.838", dependencies: "Linear matter spectrum from exact pipeline", type: "Computed (calibrated)" },

    // Post-Binder Common-Vacuum
    { name: "Common 3+1 / 3+2 vacuum phase", predicted: "Open region in (r,s) supports both patterns", observed: "Nonempty overlapping stability region", dependencies: "Generic quartic invariant potential", type: "Computed (post-binder)" },
    { name: "Goldstone sector of 3+1 vacuum", predicted: "Three vector Goldstones, not a spin-2 multiplet", observed: "Coset O(4)/O(3)×O(1) has dimension 3", dependencies: "Conjugation-invariant vacuum potential", type: "Derived (post-binder)" },
    { name: "Spin-2 candidate has positive curvature", predicted: "C₂ > 0 at representative point", observed: "Spatial traceless tensor is not a flat direction", dependencies: "Vacuum Hessian at benchmark", type: "Computed (post-binder)" }
];

const noGoResults = [
    { name: "Finite recurrence as physical time", status: "Ruled out — Z_N is torsion; physical time is unbounded", dependencies: "Group isomorphism no-go" },
    { name: "Voxel support ⇒ Lorentzian geometry", status: "Ruled out — discreteness alone lacks spin structure, vierbein, and continuum Clifford bundle", dependencies: "Voxel ontology no-go" },
    { name: "Naive lattice fermions", status: "Obstructed — Nielsen–Ninomiya doubling; Ginsparg–Wilson needs non-polynomial sign operator", dependencies: "Lattice fermion obstruction" },
    { name: "Band-curvature mass as fundamental", status: "Ruled out — dispersion curvature not tied to rest energy", dependencies: "Band-curvature no-go" },
    { name: "Massless exterior Dirac localization", status: "Ruled out generically — real-ω tails oscillate", dependencies: "Tail obstruction no-go" },
    { name: "Contact nonlinear Dirac stabilization", status: "Ruled out — E″(1) < 0 under fixed-charge dilation", dependencies: "Dilation instability no-go" },
    { name: "Anomalies determine generation number", status: "Ruled out — anomaly of N copies = N × anomaly of one copy = 0 for any N", dependencies: "Multiplicity no-go" },
    { name: "Single common Yukawa tensor", status: "Ruled out — all sectors commute, V_CKM = I generically", dependencies: "Simultaneous diagonalization no-go" },
    { name: "Full M₃(C) flavor algebra predicts mixing", status: "Ruled out — can fit arbitrary data; nonpredictive without coefficient rules", dependencies: "Capacity–predictivity tradeoff" },
    { name: "Universal metric coupling ⇒ pure GR", status: "Ruled out — scalar–tensor theories can couple universally while propagating extra modes", dependencies: "Universal coupling no-go" },
    { name: "Graph relabeling ⇒ diffeomorphism invariance", status: "Ruled out — permutation symmetry ≠ dynamical first-class constraint algebra", dependencies: "Constraint algebra no-go" },
    { name: "Finite voxels ⇒ finite Hilbert capacity", status: "Ruled out — each site can carry an infinite-dimensional oscillator space", dependencies: "Information-capacity no-go" },
    { name: "Direct order-parameter fluctuation ⇒ graviton", status: "Ruled out — Goldstones form a vector triplet; spin-2 candidate has positive curvature", dependencies: "Post-binder spin-2 no-go" },
    { name: "C² ⊗ C³ ⇒ C² ⊕ C³", status: "Ruled out — native CRT composition is tensorial", dependencies: "Post-binder direct-sum no-go" },
    { name: "Shared functional form ⇒ single master object", status: "Not yet established — projecting onto H₄ ⊕ H₅ inserted by hand does not qualify", dependencies: "Post-binder master-object gate" }
];

const openProblems = [
    { name: "Single master object", desc: "Can one target-blind object dynamically generate both H₄ and H₅ without hand-inserted projectors?", status: "Open" },
    { name: "Physical propagation rule", desc: "Can G_phys ∝ Q₃₊₁ be derived rather than stipulated?", status: "Open" },
    { name: "Massless spin-2 / GR sector", desc: "Can a pure massless spin-2 mode and its gauge redundancy emerge from event-network dynamics?", status: "Open" },
    { name: "Origin of C⁵", desc: "Why is the physical fermionic one-particle module five-dimensional?", status: "Open" },
    { name: "Physical chirality selector", desc: "What selects one eigenspace of Γtot = γ5 ⊗ Γ10?", status: "Open" },
    { name: "Three generations", desc: "Can N_g = 3 be produced by a protected index or zero-mode count?", status: "Open" },
    { name: "Vacuum parameters (r,s)", desc: "Can the reduced common-vacuum parameters be derived from microscopic Canvas dynamics?", status: "Open" },
    { name: "UV stabilization", desc: "Can the recurrence quartic coefficient Q and stabilizer c_R (with c_R > Q) be derived?", status: "Open" },
    { name: "Absolute mass scale", desc: "Can the dimensional carrier scale Λ_car be derived?", status: "Open" },
    { name: "Flavor coefficients", desc: "Can Yukawa matrices be generated noncommutatively with derived coefficients, avoiding both single-tensor rigidity and free M₃(C) arbitrariness?", status: "Open" },
    { name: "Stable-manifold prior for cosmology", desc: "Can a coordinate-invariant prior measure over the disconnected stability islands be defined for a valid Bayesian evidence calculation?", status: "Open" },
    { name: "Primitive cosmological parameters", desc: "Can κ, u, δ, h, ω_b, ω_cdm, A_s, n_s, τ be derived from Canvas primitives rather than calibrated?", status: "Open" },
    { name: "Held-out discriminating prediction", desc: "Can a frozen Canvas construction make a genuinely blind prediction that differs from the Standard Model before data unblinding?", status: "Open" }
];

const constitutiveInputs = [
    { name: "Unbounded Order parameter", desc: "Supplies dynamical evolution beyond finite recurrence", status: "Constitutive" },
    { name: "Exterior/Fock quantization rule for matter", desc: "Λ⁎C⁵ via CAR is an explicit structural bridge", status: "Constitutive" },
    { name: "Propagation identification G_phys ∝ Q₃₊₁", desc: "Physical propagation rule not yet derived from pillars", status: "Constitutive" },
    { name: "Minimal-faithful representation principle", desc: "Selects smallest center-sensitive nonabelian irreps", status: "Constitutive" },
    { name: "Reduced vacuum parameters (r,s)", desc: "Open phase supports desired vacua but coefficients are not microscopically calculated", status: "Constitutive" },
    { name: "Localization benchmark (v=1, y=2, λ=1/2)", desc: "Mechanism demonstration values, not Standard Model predictions", status: "Constitutive" },
    { name: "Cosmological parameters (κ,u,δ,h,standard)", desc: "Successful values are calibrated/selected, not primitive-derived", status: "Calibrated" }
];

function generateDerivedTable() {
    const crt = document.body.classList.contains('crt-mode');
    let rows = '';
    derivedResults.forEach((item, index) => {
        const num = crt ? String(index + 1).padStart(3, '0') : index + 1;
        rows += `<tr>
            <td style="${crt ? 'color:#00cc33;font-size:0.78rem;' : ''}">${num}</td>
            <td>${item.name}</td>
            <td class="prediction-highlight">${item.predicted}</td>
            <td style="color:${crt ? '#00ff41' : 'var(--text-dim)'};">${item.observed}</td>
            <td style="font-size:0.78rem;color:${crt ? '#00cc33' : 'var(--text-dim)'};">${item.dependencies}</td>
            <td class="status-solved">${crt ? '[' + item.type.toUpperCase() + ']' : item.type}</td>
        </tr>`;
    });
    return rows;
}

function generateNoGoTable() {
    const crt = document.body.classList.contains('crt-mode');
    let rows = '';
    noGoResults.forEach((item, index) => {
        const num = crt ? String(index + 1).padStart(2, '0') : index + 1;
        rows += `<tr>
            <td style="${crt ? 'color:#00cc33;font-size:0.78rem;' : ''}">${num}</td>
            <td>${item.name}</td>
            <td style="color:${crt ? '#ff4444' : '#ff6b6b'};">${item.status}</td>
            <td style="font-size:0.78rem;color:${crt ? '#00cc33' : 'var(--text-dim)'};">${item.dependencies}</td>
        </tr>`;
    });
    return rows;
}

function generateOpenTable() {
    const crt = document.body.classList.contains('crt-mode');
    let rows = '';
    openProblems.forEach((item, index) => {
        const num = crt ? String(index + 1).padStart(2, '0') : index + 1;
        rows += `<tr>
            <td style="${crt ? 'color:#00cc33;font-size:0.78rem;' : ''}">${num}</td>
            <td>${item.name}</td>
            <td style="color:${crt ? '#00cc33' : 'var(--text-dim)'};">${item.desc}</td>
            <td class="question-mark">${crt ? '[OPEN]' : 'Open'}</td>
        </tr>`;
    });
    return rows;
}

function generateConstitutiveTable() {
    const crt = document.body.classList.contains('crt-mode');
    let rows = '';
    constitutiveInputs.forEach((item, index) => {
        const num = crt ? String(index + 1).padStart(2, '0') : index + 1;
        rows += `<tr>
            <td style="${crt ? 'color:#00cc33;font-size:0.78rem;' : ''}">${num}</td>
            <td>${item.name}</td>
            <td style="color:${crt ? '#00cc33' : 'var(--text-dim)'};">${item.desc}</td>
            <td style="color:#ffaa00;">${crt ? '[' + item.status.toUpperCase() + ']' : item.status}</td>
        </tr>`;
    });
    return rows;
}

function generatePredictionsPage() {
    const crt = document.body.classList.contains('crt-mode');
    return `<h2>${crt ? 'PREDICTIONS :: CURRENT STATUS' : 'Predictions :: Current Status'}</h2>
    <p>${crt ? 'Every result is classified by its logical status. The framework currently derives structure, demonstrates mechanisms, and identifies open selectors. It does not yet make a held-out discriminating empirical prediction beyond current observational constraints.' : 'Every result is classified by its logical status. The framework currently derives structure, demonstrates mechanisms, and identifies open selectors. It does not yet make a held-out discriminating empirical prediction beyond current observational constraints.'}</p>
    
    <h3 style="margin-top: 2rem;">${crt ? 'DERIVED AND COMPUTED RESULTS' : 'Derived and Computed Results'}</h3>
    <p>${crt ? 'Results that follow mathematically from stated assumptions, or that are computed from frozen equations and parameters.' : 'Results that follow mathematically from stated assumptions, or that are computed from frozen equations and parameters.'}</p>
    <div class="comparison-scroll">
    <table class="data-table predictions-table">
        <thead><tr><th>${crt ? '#' : '#'}</th><th>${crt ? 'RESULT' : 'Result'}</th><th>${crt ? 'PREDICTED' : 'Predicted'}</th><th>${crt ? 'STATUS / OBSERVED' : 'Status / Observed'}</th><th>${crt ? 'DEPENDENCIES' : 'Dependencies'}</th><th>${crt ? 'TYPE' : 'Type'}</th></tr></thead>
        <tbody>${generateDerivedTable()}</tbody>
    </table>
    </div>

    <h3 style="margin-top: 2rem;">${crt ? 'NO-GO RESULTS' : 'No-Go Results'}</h3>
    <p>${crt ? 'Stronger claims that have been ruled out under the current assumptions. These narrow the theory and prevent overinterpretation.' : 'Stronger claims that have been ruled out under the current assumptions. These narrow the theory and prevent overinterpretation.'}</p>
    <div class="comparison-scroll">
    <table class="data-table predictions-table">
        <thead><tr><th>${crt ? '#' : '#'}</th><th>${crt ? 'PROPOSED CLAIM' : 'Proposed Claim'}</th><th>${crt ? 'STATUS' : 'Status'}</th><th>${crt ? 'OBSTRUCTION' : 'Obstruction'}</th></tr></thead>
        <tbody>${generateNoGoTable()}</tbody>
    </table>
    </div>

    <h3 style="margin-top: 2rem;">${crt ? 'CONSTITUTIVE INPUTS' : 'Constitutive Inputs'}</h3>
    <p>${crt ? 'Structural bridges or parameters introduced as part of the current theory definition rather than derived from deeper Canvas structure.' : 'Structural bridges or parameters introduced as part of the current theory definition rather than derived from deeper Canvas structure.'}</p>
    <div class="comparison-scroll">
    <table class="data-table predictions-table">
        <thead><tr><th>${crt ? '#' : '#'}</th><th>${crt ? 'INPUT' : 'Input'}</th><th>${crt ? 'DESCRIPTION' : 'Description'}</th><th>${crt ? 'STATUS' : 'Status'}</th></tr></thead>
        <tbody>${generateConstitutiveTable()}</tbody>
    </table>
    </div>

    <h3 style="margin-top: 2rem;">${crt ? 'OPEN STRUCTURAL PROBLEMS' : 'Open Structural Problems'}</h3>
    <p>${crt ? 'Indispensable selectors that remain underived. Each is stated as a precise mathematical closure condition.' : 'Indispensable selectors that remain underived. Each is stated as a precise mathematical closure condition.'}</p>
    <div class="comparison-scroll">
    <table class="data-table predictions-table">
        <thead><tr><th>${crt ? '#' : '#'}</th><th>${crt ? 'PROBLEM' : 'Problem'}</th><th>${crt ? 'DESCRIPTION' : 'Description'}</th><th>${crt ? 'STATUS' : 'Status'}</th></tr></thead>
        <tbody>${generateOpenTable()}</tbody>
    </table>
    </div>

    <h3 style="margin-top: 2rem;">${crt ? 'PREDICTION GATE 1' : 'Prediction Gate 1'}</h3>
    <div style="
        max-width:800px;
        margin:1rem auto 2rem;
        padding:1.4rem 1.6rem;
        background:${crt ? '#030803' : 'rgba(8,8,22,0.65)'};
        border:1px solid ${crt ? '#00cc33' : 'rgba(136,204,255,0.4)'};
        border-radius:${crt ? '0' : '18px'};
        text-align:center;
    ">
        <p style="
            margin:0;
            font-size:0.95rem;
            color:${crt ? '#00cc33' : 'var(--text-dim)'};
            line-height:1.9;
        ">
            ${crt ? 'THE PROGRAMME\'S NEXT EMPIRICAL MILESTONE IS A BLIND HELD-OUT PREDICTION:' : 'The programme\'s next empirical milestone is a blind held-out prediction:'}<br>
            <strong style="color:${crt ? '#ffaa00' : '#f0ba72'};">${crt ? 'FREEZE THEORY → COMPUTE OBSERVABLE BLIND → UNBLIND DATA → PASS/FAIL.' : 'Freeze theory → Compute observable blind → Unblind data → Pass/Fail.'}</strong><br>
            ${crt ? 'NO POST-UNBLINDING MODIFICATION OF THE MECHANISM SHALL BE COUNTED AS THE SAME PREDICTION.' : 'No post-unblinding modification of the mechanism shall be counted as the same prediction.'}
        </p>
    </div>`;
}

window.generatePredictionsPage = generatePredictionsPage;