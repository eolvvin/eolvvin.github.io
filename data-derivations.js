// data-derivations.js
// Derivations page content — current programme state

const derivationCategories = [
    {
        category: "Finite Recurrence Geometry",
        items: [
            { name: "CRT factorization of Z₂₁₀", status: "Derived" },
            { name: "Canonical CRT idempotents", status: "Derived" },
            { name: "Exact order and CRT support", status: "Derived" },
            { name: "Atomicity of singleton recurrence updates", status: "Derived" },
            { name: "Hilbert space factorization C²¹⁰ ≅ C² ⊗ C³ ⊗ C⁵ ⊗ C⁷", status: "Derived" },
            { name: "Matrix algebra factorization M₂₁₀ ≅ M₂ ⊗ M₃ ⊗ M₅ ⊗ M₇", status: "Derived" },
            { name: "Weyl pairs generate full matrix algebra on each prime factor", status: "Derived" },
            { name: "Weyl basis orthonormality", status: "Derived" },
            { name: "Weyl quantization as Dirichlet intertwiner", status: "Derived" },
            { name: "Weyl twirl as conditional expectation", status: "Derived" },
            { name: "Traceless projector from Weyl twirl", status: "Derived" },
            { name: "Weyl–Dirichlet energy identity", status: "Derived" },
            { name: "Directional uniqueness of Weyl weights under SL(2,p)", status: "Derived" },
            { name: "Global twirl versus factor-local geometry separation", status: "Derived" },
            { name: "Atomic first-order differential calculus", status: "Derived" },
            { name: "Exterior algebra and nilpotency d² = 0", status: "Derived" },
            { name: "Gauge connection and discrete curvature", status: "Derived" },
            { name: "Discrete Bianchi identity DF = 0", status: "Derived" },
            { name: "Positive Yang–Mills-type action", status: "Derived" },
            { name: "Dirichlet pullback metric isotropy within class", status: "Derived (with constitutive metric rule)" },
            { name: "Hodge star on four-direction internal calculus", status: "Derived" },
            { name: "Exact-order decomposition with Euler totient multiplicities", status: "Derived" },
            { name: "Synchronous versus coordinatewise dynamics separation", status: "No-Go" }
        ]
    },
    {
        category: "Chiral Matter Capacity",
        items: [
            { name: "Exterior/Fock space from C⁵ via CAR", status: "Derived" },
            { name: "CAR realization of Clifford algebra Cl₁₀", status: "Derived" },
            { name: "Spin(10) representation from ten Clifford generators", status: "Derived" },
            { name: "Fermion parity as internal chirality", status: "Derived" },
            { name: "Chiral spinor split 32 → 16 + 16", status: "Derived" },
            { name: "SU(5) exterior-power branching 1 ⊕ 10 ⊕ 5̄", status: "Derived" },
            { name: "Standard Model quantum-number slots from one family", status: "Derived (given V₅ and hypercharge embedding)" },
            { name: "Z₆ gauge-center compatibility condition", status: "Derived" },
            { name: "Minimal faithful nonabelian representations", status: "Conditional (minimality principle input)" },
            { name: "Analytic solution of anomaly hypercharge ratios", status: "Derived within five-multiplet ansatz" },
            { name: "Standard Model hypercharges from anomalies + center", status: "Conditional (low-charge selection input)" },
            { name: "S(U(3)×U(2)) stabilizer of 3+2 vacuum", status: "Derived (given V₅)" },
            { name: "Relative hypercharge from tracelessness", status: "Derived (given V₅)" },
            { name: "Minimal closure dimension N = 5", status: "Closure theorem (physical criterion input)" },
            { name: "Anomaly safety does not select physical chirality", status: "No-Go" },
            { name: "Singlet-scalar localizer is vectorlike", status: "No-Go" },
            { name: "One family does not imply three generations", status: "No-Go" },
            { name: "Single common tensor cannot produce realistic mixing", status: "No-Go" },
            { name: "Full M₃(C) flavor algebra is nonpredictive without coefficient rules", status: "No-Go" }
        ]
    },
    {
        category: "Spacetime Bridge",
        items: [
            { name: "Finite recurrence is not unbounded physical time", status: "No-Go" },
            { name: "Stone generator from strongly continuous unitary evolution", status: "Derived (given unbounded Order)" },
            { name: "First-order Schrödinger evolution i∂ₜψ = Hψ", status: "Derived" },
            { name: "Infrared dimension criterion d_IR = rank A", status: "Derived" },
            { name: "Spectral dimension from heat-kernel return probability", status: "Derived" },
            { name: "Nearest-neighbour Laplacian continuum limit illustration", status: "Derived (illustrative)" },
            { name: "Hyperbolicity and Lorentz cone from universal limiting speed", status: "Conditional (requires rank-3 quadratic symbol)" },
            { name: "Dirac factorization forces Clifford algebra", status: "Derived (conditional on Lorentz cone)" },
            { name: "Lorentz generators from Clifford algebra", status: "Derived" },
            { name: "γ₅ chirality operator from Lorentzian Clifford algebra", status: "Derived" },
            { name: "Voxel support does not imply spin geometry", status: "No-Go" },
            { name: "Naive lattice fermion doubling obstruction", status: "No-Go" },
            { name: "Nielsen–Ninomiya obstruction for chiral lattice fermions", status: "No-Go" },
            { name: "Relativistic collective-coordinate mass M_i = E₀/c²", status: "Derived" },
            { name: "Band-curvature mass is insufficient for equivalence principle", status: "No-Go" },
            { name: "Universal metric coupling gives M_g = M_i", status: "Derived (conditional on universal coupling)" },
            { name: "Universal coupling does not imply pure GR", status: "No-Go" },
            { name: "Graph relabeling is not diffeomorphism invariance", status: "No-Go" },
            { name: "Finite voxels do not imply finite information capacity", status: "No-Go" },
            { name: "Fierz–Pauli gauge redundancy not implied by event-network locality", status: "No-Go" },
            { name: "Lorentzian inertia from traceless 3+1 vacuum", status: "Derived (post-binder)" },
            { name: "Lorentzian propagation from vacuum order parameter", status: "Conditional (propagation rule input)" }
        ]
    },
    {
        category: "Relativistic Localization and Stability",
        items: [
            { name: "Physical mass definition M = E_rest/c²", status: "Derived" },
            { name: "Band-curvature mass obstruction", status: "No-Go" },
            { name: "Collective-coordinate relativistic mass theorem", status: "Derived" },
            { name: "Massless exterior tail obstruction", status: "No-Go" },
            { name: "Contact nonlinear-Dirac dilation instability E″(1) < 0", status: "Derived (no-go)" },
            { name: "Propagating mediator positive dilation curvature", status: "Derived" },
            { name: "Broken-vacuum Dirac–scalar asymptotic gap m∞ = yv", status: "Derived (conditional on model)" },
            { name: "Spherical Dirac–scalar boundary-value system", status: "Derived" },
            { name: "Bound-state gap condition |ω| < m∞", status: "Derived" },
            { name: "Energy functional and RMS radius", status: "Derived" },
            { name: "Numerical bound-state branch N = 8–15", status: "Computed" },
            { name: "Energetic binding E/(Nm∞) < 1 for N ≥ 9", status: "Computed" },
            { name: "Thermodynamic identity dE/dN = ω", status: "Derived + Computed" },
            { name: "Turning-point diagnostic dN/dω < 0", status: "Computed" },
            { name: "Radial L=0 stability", status: "Computed" },
            { name: "Translation zero mode in L=1", status: "Derived + Computed" },
            { name: "Static nonradial shape spectra positive through L=6", status: "Computed" },
            { name: "Antiparticle-inclusive signed-energy RPA", status: "Computed" },
            { name: "Spectral pollution discrimination for continuum-edge quartets", status: "Computed" },
            { name: "Localized stability through L=6 for N=10, N=14", status: "Computed" },
            { name: "Mass-sign-inverted core for high N", status: "Computed (not claimed as topological mode)" },
            { name: "Literal loop closure required", status: "Superseded — nonlinear localization suffices" },
            { name: "Vectorlike localization mass = chiral SM Yukawa mass", status: "No-Go — distinct mechanisms required" }
        ]
    },
    {
        category: "Covariant Cosmology",
        items: [
            { name: "Frozen covariant scalar–tensor action", status: "Constitutive (action input)" },
            { name: "Jordan-frame FLRW equations", status: "Derived" },
            { name: "Einstein-frame transformation and ghost conditions", status: "Derived" },
            { name: "Tensor speed c_T² = 1", status: "Derived" },
            { name: "Minkowski vacuum at φ = 0", status: "Derived" },
            { name: "Constant-field de Sitter condition d(V/F²)/dφ = 0", status: "Derived" },
            { name: "Exact parameter compression to (κ,u,δ)", status: "Derived" },
            { name: "de Sitter fixed-point cubic polynomial", status: "Derived" },
            { name: "Minimal-coupling phase boundary 1/4 < κ < 1/3", status: "Derived" },
            { name: "Cosmological curvature scale relation H²/m² = δv/(3f)", status: "Derived" },
            { name: "Cross-domain scale tension", status: "Conditional (same scalar normalization assumed)" },
            { name: "Einstein-frame local gravitational coupling", status: "Derived" },
            { name: "Planck-mass running parameter α_M", status: "Derived" },
            { name: "Exact Horndeski representation", status: "Derived" },
            { name: "Cross-code validation at sub-percent level", status: "Computed" },
            { name: "Stable cosmological islands", status: "Computed" },
            { name: "Planck + DESI DR2 + Pantheon+ likelihood evaluation", status: "Computed (calibrated)" },
            { name: "Best raw likelihood tie Δχ² = −0.077", status: "Computed (calibrated)" },
            { name: "AIC/BIC favor GR/ΛCDM", status: "Computed" },
            { name: "Growth amplitude S₈ nearly unchanged", status: "Computed" },
            { name: "Bayesian evidence with stable-manifold prior", status: "Open" },
            { name: "Primitive derivation of cosmological parameters", status: "Open" },
            { name: "Phenomenological EFT extrapolation represents exact cosmology", status: "No-Go" }
        ]
    },
    {
        category: "Post-Binder Common-Vacuum Architecture",
        items: [
            { name: "Generic quartic invariant potential for traceless Hermitian order parameter", status: "Derived (invariant theory)" },
            { name: "Dimensionless reduction to two shape parameters (r,s)", status: "Derived" },
            { name: "Two-block stationary vacuum equations", status: "Derived" },
            { name: "Stable 4 → 3+1 vacuum phase", status: "Computed (post-binder)" },
            { name: "Stable 5 → 3+2 vacuum phase", status: "Computed (post-binder)" },
            { name: "Common open region supporting both vacuum patterns", status: "Computed (post-binder)" },
            { name: "Lorentzian inertia from tracelessness", status: "Derived (post-binder)" },
            { name: "Propagation identification G_phys ∝ Q₃₊₁", status: "Constitutive (propagation rule input)" },
            { name: "Rank-three isotropic spatial kernel from propagation rule", status: "Conditional derived" },
            { name: "Spectral dimension three from propagation rule", status: "Conditional derived" },
            { name: "S(U(3)×U(2)) gauge stabilizer from 3+2 vacuum", status: "Derived (given V₅)" },
            { name: "Relative hypercharge from tracelessness of 3+2 vacuum", status: "Derived (given V₅)" },
            { name: "CAR exterior algebra on C⁵", status: "Derived" },
            { name: "One-family 16 from even Fock-parity sector", status: "Derived (given V₅)" },
            { name: "Independent anomaly check of derived hypercharges", status: "Derived" },
            { name: "Direct order-parameter fluctuation gives graviton", status: "No-Go — Goldstones are vector triplet, spin-2 has positive curvature" },
            { name: "Event-network locality gives Fierz–Pauli gauge redundancy", status: "No-Go" },
            { name: "Spatial triplet or color triplet derives generation number", status: "No-Go" },
            { name: "Native CRT gives C² ⊕ C³", status: "No-Go — native composition is tensorial" },
            { name: "Shared functional form equals single master object", status: "Not yet established — master-object gate open" },
            { name: "Minimal closure dimension N = 5", status: "Closure theorem (physical criterion input)" },
            { name: "Primitive derivation of C⁵", status: "Open" }
        ]
    },
    {
        category: "No-Go Results Compilation",
        items: [
            { name: "Finite recurrence as physical time", status: "No-Go" },
            { name: "Voxel support implies spin geometry", status: "No-Go" },
            { name: "Naive lattice fermions without doubling", status: "No-Go" },
            { name: "Band curvature as fundamental mass", status: "No-Go" },
            { name: "Massless exterior Dirac localization", status: "No-Go" },
            { name: "Contact nonlinear Dirac stabilization", status: "No-Go" },
            { name: "Anomalies determine generation number", status: "No-Go" },
            { name: "One common Yukawa tensor gives realistic mixing", status: "No-Go" },
            { name: "Finite square operator gives nonzero chiral index", status: "No-Go" },
            { name: "Voxel thresholding implies finite information capacity", status: "No-Go" },
            { name: "Universal coupling implies pure GR", status: "No-Go" },
            { name: "Graph relabeling implies diffeomorphism invariance", status: "No-Go" },
            { name: "Finite voxels imply finite local Hilbert dimension", status: "No-Go" },
            { name: "Direct order-parameter fluctuation gives graviton", status: "No-Go" },
            { name: "C² ⊗ C³ implies C² ⊕ C³", status: "No-Go" },
            { name: "Shared functional form implies single master object", status: "No-Go" },
            { name: "Present-day EFT extrapolation represents exact cosmology", status: "No-Go" },
            { name: "Matched-GR spectral closeness implies observational fit", status: "No-Go" }
        ]
    }
];

const statusColors = {
    "Derived": "status-solved",
    "Computed": "status-solved",
    "Conditional": "question-mark",
    "Constitutive": "question-mark",
    "Open": "question-mark",
    "No-Go": "cross-mark",
    "Not yet established": "question-mark",
    "Superseded": "question-mark",
    "Derived (given V₅)": "status-solved",
    "Derived (given V₅ and hypercharge embedding)": "status-solved",
    "Derived (given unbounded Order)": "status-solved",
    "Derived (conditional on Lorentz cone)": "status-solved",
    "Derived (conditional on universal coupling)": "status-solved",
    "Derived (conditional on model)": "status-solved",
    "Derived (invariant theory)": "status-solved",
    "Derived (post-binder)": "status-solved",
    "Computed (post-binder)": "status-solved",
    "Computed (calibrated)": "status-solved",
    "Conditional (minimality principle input)": "question-mark",
    "Conditional (low-charge selection input)": "question-mark",
    "Conditional (requires rank-3 quadratic symbol)": "question-mark",
    "Conditional (propagation rule input)": "question-mark",
    "Conditional (same scalar normalization assumed)": "question-mark",
    "Closure theorem (physical criterion input)": "status-solved",
    "Constitutive (action input)": "question-mark",
    "Constitutive (propagation rule input)": "question-mark",
    "Derived + Computed": "status-solved",
    "Derived (illustrative)": "status-solved",
    "Derived (with constitutive metric rule)": "status-solved",
    "Derived within five-multiplet ansatz": "status-solved",
    "Derived (no-go)": "cross-mark"
};

function getStatusDisplay(status, crt) {
    const colorClass = statusColors[status] || 'status-solved';
    const text = crt ? '[' + status.toUpperCase() + ']' : status;
    return `<td class="derivation-status ${colorClass}">${text}</td>`;
}

function generateDerivationsPage() {
    const crt = document.body.classList.contains('crt-mode');
    let totalCount = 0;
    let html = `<h2>${crt ? 'DERIVATIONS :: CURRENT STATUS' : 'Derivations :: Current Status'}</h2>
    <p>${crt ? 'Every result is classified by its logical status. Derived means follows mathematically from stated assumptions. Computed means obtained numerically from frozen equations. Conditional means follows only after an explicit structural bridge is assumed. Constitutive means introduced as part of the theory definition. No-Go means a stronger claim has been ruled out.' : 'Every result is classified by its logical status. Derived means follows mathematically from stated assumptions. Computed means obtained numerically from frozen equations. Conditional means follows only after an explicit structural bridge is assumed. Constitutive means introduced as part of the theory definition. No-Go means a stronger claim has been ruled out.'}</p>
    
    <h3>${crt ? 'STATUS DEFINITIONS' : 'Status Definitions'}</h3>
    <table class="data-table">
        <thead><tr><th style="text-align:left;">${crt ? 'STATUS' : 'Status'}</th><th style="text-align:left;">${crt ? 'MEANING' : 'Meaning'}</th></tr></thead>
        <tbody>
            <tr><td class="status-solved" style="text-align:left;">${crt ? '[DERIVED]' : '✅ Derived'}</td><td style="text-align:left;">${crt ? 'FOLLOWS MATHEMATICALLY FROM STATED ASSUMPTIONS.' : 'Follows mathematically from stated assumptions.'}</td></tr>
            <tr><td class="status-solved" style="text-align:left;">${crt ? '[COMPUTED]' : '✅ Computed'}</td><td style="text-align:left;">${crt ? 'OBTAINED NUMERICALLY FROM FROZEN EQUATIONS AND PARAMETERS.' : 'Obtained numerically from frozen equations and parameters.'}</td></tr>
            <tr><td class="question-mark" style="text-align:left;">${crt ? '[CONDITIONAL]' : '🟡 Conditional'}</td><td style="text-align:left;">${crt ? 'FOLLOWS ONLY AFTER AN EXPLICIT STRUCTURAL BRIDGE IS ASSUMED.' : 'Follows only after an explicit structural bridge is assumed.'}</td></tr>
            <tr><td class="question-mark" style="text-align:left;">${crt ? '[CONSTITUTIVE]' : '🟡 Constitutive'}</td><td style="text-align:left;">${crt ? 'INTRODUCED AS PART OF THE CURRENT THEORY DEFINITION, NOT DERIVED.' : 'Introduced as part of the current theory definition, not derived.'}</td></tr>
            <tr><td class="cross-mark" style="text-align:left;">${crt ? '[NO-GO]' : '🔴 No-Go'}</td><td style="text-align:left;">${crt ? 'A STRONGER CLAIM HAS BEEN RULED OUT UNDER CURRENT ASSUMPTIONS.' : 'A stronger claim has been ruled out under current assumptions.'}</td></tr>
            <tr><td class="question-mark" style="text-align:left;">${crt ? '[OPEN]' : '🟡 Open'}</td><td style="text-align:left;">${crt ? 'NO VALID DERIVATION OR DECISIVE NO-GO RESULT IS CURRENTLY KNOWN.' : 'No valid derivation or decisive no-go result is currently known.'}</td></tr>
            <tr><td class="question-mark" style="text-align:left;">${crt ? '[SUPERSEDED]' : '🟡 Superseded'}</td><td style="text-align:left;">${crt ? 'A PREVIOUS MECHANISM HAS BEEN REPLACED BY A MORE COMPLETE ONE.' : 'A previous mechanism has been replaced by a more complete one.'}</td></tr>
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
            html += `<tr>
                <td style="${crt ? 'color:#00cc33;font-size:0.78rem;' : ''}">${num}</td>
                <td>${item.name}</td>
                ${getStatusDisplay(item.status, crt)}
            </tr>`;
        });
        
        html += `</tbody></table>`;
    });
    
    // Summary by status
    const statusCounts = {};
    derivationCategories.forEach(cat => {
        cat.items.forEach(item => {
            const key = item.status;
            if (!statusCounts[key]) statusCounts[key] = 0;
            statusCounts[key]++;
        });
    });
    
    html += `<h3>${crt ? 'SUMMARY BY STATUS' : 'Summary by Status'}</h3>
    <table class="data-table">
        <thead><tr><th style="text-align:left;">${crt ? 'STATUS' : 'Status'}</th><th>${crt ? 'COUNT' : 'Count'}</th></tr></thead>
        <tbody>`;
    
    Object.keys(statusCounts).sort().forEach(status => {
        const colorClass = statusColors[status] || 'status-solved';
        html += `<tr><td class="${colorClass}" style="text-align:left;">${crt ? '[' + status.toUpperCase() + ']' : status}</td><td>${statusCounts[status]}</td></tr>`;
    });
    
    html += `<tr style="font-weight:bold;border-top:2px solid ${crt ? '#00ff41' : 'var(--accent-cyan)'};"><td style="text-align:left;">${crt ? 'TOTAL' : 'Total'}</td><td>${totalCount}</td></tr></tbody></table>`;
    
    return html;
}

window.generateDerivationsPage = generateDerivationsPage;