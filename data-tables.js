// data-tables.js
// Periodic Tables page content

const tethersData = [
    { subfield: "Number Theory", spatial: "PNT bounds (π(x) ~ x/log x)", parameter: "Li coefficients (λ_n)", symmetry: "Functional equation (ξ(s)=ξ(1-s))", intersection: "Threshold trace formula" },
    { subfield: "Chaos Theory", spatial: "Bounded phase space ([0,1])", parameter: "Logistic map parameter (r)", symmetry: "Renormalization symmetry (δ ≈ 4.669)", intersection: "Bifurcation threshold (period-doubling)" },
    { subfield: "Topology", spatial: "Manifold boundary (∂M)", parameter: "Euler characteristic (χ(M))", symmetry: "Homeomorphism invariance", intersection: "Surgery threshold" },
    { subfield: "Algebra", spatial: "Field characteristic (char(F))", parameter: "Group order (|G|)", symmetry: "Automorphism symmetry", intersection: "Normal subgroup threshold" },
    { subfield: "Analysis", spatial: "Domain boundary (maximum modulus)", parameter: "Radius of convergence (R)", symmetry: "Analytic continuation", intersection: "Convergence at boundary" },
    { subfield: "PDE Theory", spatial: "Boundary conditions (Dirichlet/Neumann)", parameter: "Diffusion constant (D), viscosity (ν)", symmetry: "Scale invariance", intersection: "Blow-up time (T*)" },
    { subfield: "Graph Theory", spatial: "Cheeger constant (h(G))", parameter: "Number of vertices (n), edges (m)", symmetry: "Graph automorphisms", intersection: "Random graph threshold (p_c = log n/n)" },
    { subfield: "Combinatorics", spatial: "Extremal bound (R(3,3)=6)", parameter: "Ramsey numbers (R(s,t))", symmetry: "Pigeonhole principle", intersection: "Extremal threshold (perfect matching)" },
    { subfield: "Probability", spatial: "Unit interval ([0,1])", parameter: "Mean (μ), variance (σ²)", symmetry: "Exchangeability (De Finetti)", intersection: "Giant component threshold (p=1/n)" },
    { subfield: "Classical Mechanics", spatial: "Tautochrone (cycloid shape)", parameter: "Mass (m), gravity (g)", symmetry: "Rolling circle symmetry", intersection: "Escape threshold" },
    { subfield: "Set Theory", spatial: "Universe bounds (cumulative hierarchy V_α)", parameter: "Cardinality (|X|)", symmetry: "Extensionality", intersection: "Forcing threshold (generic filter)" },
    { subfield: "Category Theory", spatial: "Limits and colimits", parameter: "Universal properties", symmetry: "Natural transformations", intersection: "Adjunction threshold" },
    { subfield: "Logic", spatial: "Syntax bounds (finite alphabet)", parameter: "Proof length (|π|)", symmetry: "Completeness theorem (syntax/semantics)", intersection: "Cut-elimination threshold" },
    { subfield: "Numerical Analysis", spatial: "Discretization bounds (grid size h)", parameter: "Step size (h)", symmetry: "Stability symmetry", intersection: "Convergence threshold (Lax equivalence)" },
    { subfield: "Optimization", spatial: "Feasible region (F)", parameter: "Objective coefficients (c_i)", symmetry: "Duality symmetry", intersection: "Optimality threshold (KKT)" },
    { subfield: "Control Theory", spatial: "State space bounds (X)", parameter: "Control gains (K)", symmetry: "Symmetry of dynamics", intersection: "Stability threshold" },
    { subfield: "Dynamical Systems", spatial: "Invariant manifolds", parameter: "Lyapunov exponents (λ_i)", symmetry: "Time-reversal symmetry", intersection: "Bifurcation threshold" },
    { subfield: "Ergodic Theory", spatial: "Measure space bounds (μ(X)=1)", parameter: "Entropy (h(T))", symmetry: "Time-translation symmetry", intersection: "Mixing threshold" },
    { subfield: "Measure Theory", spatial: "Domain bounds (σ-algebra)", parameter: "Total measure (μ(X))", symmetry: "Translation invariance", intersection: "Integrability threshold" },
    { subfield: "Functional Analysis", spatial: "Norm bounds (||f||)", parameter: "Eigenvalues (λ_n)", symmetry: "Self-adjoint symmetry", intersection: "Spectral gap threshold (λ₁ ≥ h²/2)" },
    { subfield: "Operator Theory", spatial: "Domain bounds (D(A))", parameter: "Spectral radius (r(A))", symmetry: "Commutator symmetry ([A,B]=0)", intersection: "Fredholm threshold" },
    { subfield: "Algebraic Geometry", spatial: "Projective bounds (Pⁿ)", parameter: "Degree (d)", symmetry: "Birational symmetry", intersection: "Transversality threshold" },
    { subfield: "Algebraic Topology", spatial: "Cell bounds (CW complex)", parameter: "Betti numbers (β_i)", symmetry: "Homotopy invariance", intersection: "Spectral sequence collapse" },
    { subfield: "Differential Geometry", spatial: "Curvature bounds", parameter: "Metric coefficients (g_ij)", symmetry: "Isometry symmetry", intersection: "Geodesic completeness" },
    { subfield: "Representation Theory", spatial: "Dimension bounds (dim V)", parameter: "Character values (χ(g))", symmetry: "Schur symmetry", intersection: "Irreducibility threshold" },
    { subfield: "Lie Theory", spatial: "Rank bounds (rank g)", parameter: "Structure constants (c_ij^k)", symmetry: "Weyl symmetry", intersection: "Root system threshold" },
    { subfield: "K-Theory", spatial: "Dimension bounds (bundle rank)", parameter: "Topological index (ind_t)", symmetry: "Bott periodicity", intersection: "Excision threshold" },
    { subfield: "Homological Algebra", spatial: "Resolution bounds (projective dimension)", parameter: "Homology groups (H_n)", symmetry: "Duality symmetry", intersection: "Exactness threshold" },
    { subfield: "Model Theory", spatial: "Saturation bounds (κ)", parameter: "Cardinality (|M|)", symmetry: "Elementary equivalence", intersection: "Type isolation threshold" },
    { subfield: "Computability Theory", spatial: "Time/space bounds (P, NP, PSPACE)", parameter: "Oracle parameters", symmetry: "Rice symmetry", intersection: "Halting threshold" },
    { subfield: "Complexity Theory", spatial: "Resource bounds (polynomial, exponential)", parameter: "Problem parameters (size, treewidth)", symmetry: "Self-reducibility symmetry", intersection: "Phase transition threshold (α ≈ 4.267)" }
];

const transformsData = [
    // Classical Continuous
    { id: "T1", name: "Fourier", lattice: "ℝ", operator: "Laplacian", amplitude: "Uniform", polarity: "Periodic", status: "Known" },
    { id: "T2", name: "Laplace", lattice: "ℝ⁺", operator: "Diffusion", amplitude: "Uniform", polarity: "Dirichlet", status: "Known" },
    { id: "T3", name: "Mellin", lattice: "ℝ⁺, log", operator: "Scale", amplitude: "Uniform", polarity: "Dirichlet", status: "Known" },
    { id: "T4", name: "Hilbert", lattice: "ℝ", operator: "Laplacian", amplitude: "Uniform", polarity: "Chiral", status: "Known" },
    { id: "T5", name: "Wavelet", lattice: "ℝ, scaled", operator: "Laplacian", amplitude: "Uniform", polarity: "Dirichlet", status: "Known" },
    { id: "T6", name: "Cosine (DCT)", lattice: "[0,L]", operator: "Laplacian", amplitude: "Uniform", polarity: "Neumann", status: "Known" },
    { id: "T7", name: "Sine (DST)", lattice: "[0,L]", operator: "Laplacian", amplitude: "Uniform", polarity: "Dirichlet", status: "Known" },
    // Classical Discrete
    { id: "T8", name: "DFT", lattice: "ℤ_N", operator: "Jacobi", amplitude: "Uniform", polarity: "Periodic", status: "Known" },
    { id: "T9", name: "Z-transform", lattice: "ℕ₀", operator: "Cumulative sum", amplitude: "Uniform", polarity: "Dirichlet", status: "Known" },
    // Irregular Lattice
    { id: "T10", name: "Spectral Fourier", lattice: "Irregular", operator: "Jacobi", amplitude: "Uniform", polarity: "Dirichlet", status: "Known" },
    { id: "T11", name: "Weighted Spectral", lattice: "Irregular", operator: "Weighted Jacobi", amplitude: "Weighted", polarity: "Dirichlet", status: "Known" },
    { id: "T12", name: "Order-Adaptive", lattice: "Warped", operator: "Laplacian", amplitude: "Info density", polarity: "Dirichlet", status: "Known" },
    // Tensor (Prime Lattice)
    { id: "T13", name: "Tensor Laplace", lattice: "Prime ℕ₀", operator: "Cumulative sum", amplitude: "von Mangoldt", polarity: "Dirichlet", status: "Known" },
    { id: "T14", name: "Tensor Fourier", lattice: "Prime S¹", operator: "Circle derivative", amplitude: "Uniform", polarity: "Periodic", status: "Known" },
    { id: "T15", name: "Tensor Mellin", lattice: "Prime ℤ", operator: "Shift", amplitude: "Uniform", polarity: "Periodic", status: "Known" },
    { id: "T16", name: "TAC Spectral", lattice: "Adele quotient", operator: "Tensor sum", amplitude: "von Mangoldt", polarity: "Dirichlet", status: "Known" },
    // Graph and Network
    { id: "T17", name: "Graph Fourier", lattice: "Graph vertices", operator: "Graph Laplacian", amplitude: "Uniform", polarity: "Dirichlet", status: "Known" },
    // Amplitude-Gated and Polarity-Enhanced
    { id: "T18", name: "Threshold-Gated", lattice: "ℝ", operator: "Laplacian", amplitude: "Threshold", polarity: "Dirichlet", status: "Known" },
    { id: "T19", name: "Compressive", lattice: "Irregular", operator: "Jacobi", amplitude: "Compressive", polarity: "Dirichlet", status: "Known" },
    { id: "T20", name: "Polarity-Aligned", lattice: "ℝ", operator: "Laplacian", amplitude: "Uniform", polarity: "Zero-crossing", status: "Known" },
    { id: "T21", name: "Möbius-Weighted", lattice: "ℤ_N", operator: "Jacobi", amplitude: "Uniform", polarity: "Möbius", status: "New" },
    // Advanced Operator
    { id: "T22", name: "Biharmonic", lattice: "Uniform discrete", operator: "Δ²", amplitude: "Uniform", polarity: "Dirichlet", status: "Known" },
    { id: "T23", name: "Fractional", lattice: "ℝ", operator: "(-Δ)^s", amplitude: "Uniform", polarity: "Dirichlet", status: "Known" },
    { id: "T24", name: "Berry-Keating", lattice: "ℝ⁺", operator: "xp+px", amplitude: "Uniform", polarity: "Dirichlet", status: "Known" },
    // Predicted (Undiscovered)
    { id: "T25", name: "Spectral Laplace", lattice: "Irregular", operator: "Diffusion", amplitude: "Uniform", polarity: "Dirichlet", status: "New" },
    { id: "T26", name: "Fractional Tensor", lattice: "Prime", operator: "Fractional sum", amplitude: "von Mangoldt", polarity: "Dirichlet", status: "New" },
    { id: "T27", name: "Chiral Spectral", lattice: "Irregular", operator: "Dirac-type", amplitude: "Uniform", polarity: "Chiral", status: "New" },
    { id: "T28", name: "Prime-Polarity", lattice: "Prime ℕ₀", operator: "Cumulative sum", amplitude: "von Mangoldt", polarity: "Möbius", status: "New" }
];

function generateTablesPage() {
    const crt = document.body.classList.contains('crt-mode');
    
    let html = `<h2>${crt ? 'PERIODIC TABLES' : 'Periodic Tables'}</h2>
    <p>${crt ? 'Two periodic tables organize all mathematical structures by their primitive configurations. One principle. Eight primitives. Every structure is a configuration.' : 'Two periodic tables organize all mathematical structures by their primitive configurations. One principle. Eight primitives. Every structure is a configuration.'}</p>
    
    <h3>${crt ? 'THE FOUR PRIMITIVES' : 'The Four Primitives'}</h3>
    <p>${crt ? 'Every entry in both tables is a configuration of the same eight primitives.' : 'Every entry in both tables is a configuration of the same eight primitives.'}</p>
    <table class="data-table">
        <thead><tr><th style="text-align:left;">${crt ? 'PRIMITIVE' : 'Primitive'}</th><th style="text-align:left;">${crt ? 'ROLE IN TETHERS' : 'Role in Tethers'}</th><th style="text-align:left;">${crt ? 'ROLE IN TRANSFORMS' : 'Role in Transforms'}</th></tr></thead>
        <tbody>
            <tr><td style="text-align:left;"><strong>${crt ? 'ORDER' : 'Order'}</strong></td><td style="text-align:left;">${crt ? 'BOUNDS, DOMAINS, EXTENTS' : 'Bounds, domains, extents'}</td><td style="text-align:left;">${crt ? 'LATTICE (SAMPLING POINTS)' : 'Lattice (sampling points)'}</td></tr>
            <tr><td style="text-align:left;"><strong>${crt ? 'AMPLITUDE' : 'Amplitude'}</strong></td><td style="text-align:left;">${crt ? 'FIXED PARAMETERS, MAGNITUDES' : 'Fixed parameters, magnitudes'}</td><td style="text-align:left;">${crt ? 'WEIGHTING, MEASURES' : 'Weighting, measures'}</td></tr>
            <tr><td style="text-align:left;"><strong>${crt ? 'ACCELERATION' : 'Acceleration'}</strong></td><td style="text-align:left;">${crt ? 'SYMMETRIES, INVARIANCES' : 'Symmetries, invariances'}</td><td style="text-align:left;">${crt ? 'OPERATOR TYPE' : 'Operator type'}</td></tr>
            <tr><td style="text-align:left;"><strong>${crt ? 'POLARITY' : 'Polarity'}</strong></td><td style="text-align:left;">${crt ? 'THRESHOLDS, BOUNDARIES' : 'Thresholds, boundaries'}</td><td style="text-align:left;">${crt ? 'BOUNDARY CONDITIONS, PHASE' : 'Boundary conditions, phase'}</td></tr>
        </tbody>
    </table>
    
    <h3>${crt ? 'THE PERIODIC TABLE OF SPECTRAL TRANSFORMS' : 'The Periodic Table of Spectral Transforms'}</h3>
    <p>${crt ? 'All integral transforms are configurations of four primitive choices: Lattice (Order), Operator (Acceleration), Amplitude, and Polarity. 28 transforms, one classification. 23 known. 5 predicted.' : 'All integral transforms are configurations of four primitive choices: Lattice (Order), Operator (Acceleration), Amplitude, and Polarity. 28 transforms, one classification. 23 known. 5 predicted.'}</p>
    <div class="comparison-scroll">
    <table class="data-table">
        <thead><tr><th>${crt ? 'ID' : 'ID'}</th><th style="text-align:left;">${crt ? 'TRANSFORM' : 'Transform'}</th><th style="text-align:left;">${crt ? 'LATTICE' : 'Lattice'}</th><th style="text-align:left;">${crt ? 'OPERATOR' : 'Operator'}</th><th style="text-align:left;">${crt ? 'AMPLITUDE' : 'Amplitude'}</th><th style="text-align:left;">${crt ? 'POLARITY' : 'Polarity'}</th><th>${crt ? 'STATUS' : 'Status'}</th></tr></thead>
        <tbody>`;
    
    transformsData.forEach(row => {
        const statusClass = row.status === 'New' ? 'prediction-highlight' : 'status-solved';
        const statusText = crt ? (row.status === 'New' ? '[NEW]' : '[KNOWN]') : (row.status === 'New' ? '🔮 New' : '✅ Known');
        html += `<tr>
            <td>${row.id}</td>
            <td style="text-align:left;">${row.name}</td>
            <td style="text-align:left;">${row.lattice}</td>
            <td style="text-align:left;">${row.operator}</td>
            <td style="text-align:left;">${row.amplitude}</td>
            <td style="text-align:left;">${row.polarity}</td>
            <td class="${statusClass}">${statusText}</td>
        </tr>`;
    });
    
    html += `</tbody></table></div>
    
    <h3>${crt ? 'THE PERIODIC TABLE OF TETHERS: MATHEMATICS' : 'The Periodic Table of Tethers: Mathematics'}</h3>
    <p>${crt ? 'Every subfield of mathematics exhibits four types of constraints — spatial tethers (boundaries), parameter tethers (fixed values), symmetry tethers (invariance), and intersection tethers (thresholds). 31 subfields, four tether types, one principle.' : 'Every subfield of mathematics exhibits four types of constraints — spatial tethers (boundaries), parameter tethers (fixed values), symmetry tethers (invariance), and intersection tethers (thresholds). 31 subfields, four tether types, one principle.'}</p>
    <div class="comparison-scroll">
    <table class="data-table">
        <thead><tr><th style="text-align:left;">${crt ? 'SUBFIELD' : 'Subfield'}</th><th style="text-align:left;">${crt ? 'SPATIAL TETHER' : 'Spatial Tether'}</th><th style="text-align:left;">${crt ? 'PARAMETER TETHER' : 'Parameter Tether'}</th><th style="text-align:left;">${crt ? 'SYMMETRY TETHER' : 'Symmetry Tether'}</th><th style="text-align:left;">${crt ? 'INTERSECTION TETHER' : 'Intersection Tether'}</th></tr></thead>
        <tbody>`;
    
    tethersData.forEach(row => {
        html += `<tr>
            <td style="text-align:left;">${crt ? row.subfield.toUpperCase() : row.subfield}</td>
            <td style="text-align:left;">${row.spatial}</td>
            <td style="text-align:left;">${row.parameter}</td>
            <td style="text-align:left;">${row.symmetry}</td>
            <td style="text-align:left;">${row.intersection}</td>
        </tr>`;
    });
    
    html += `</tbody></table></div>
    <p><em>${crt ? 'NO TETHER, NO THEOREM.' : 'No tether, no theorem.'}</em></p>
    
    <h3>${crt ? 'KEY INSIGHTS' : 'Key Insights'}</h3>
    <p><strong>1.</strong> ${crt ? 'SAME PRIMITIVES, DIFFERENT DOMAINS. THE FOUR TETHER TYPES AND THE FOUR TRANSFORM CHOICES ARE THE SAME PRIMITIVES APPLIED TO DIFFERENT PROBLEMS.' : 'Same primitives, different domains. The four tether types and the four transform choices are the same primitives applied to different problems.'}</p>
    <p><strong>2.</strong> ${crt ? 'MATHEMATICS IS THE SCIENCE OF CONSTRAINTS. EVERY THEOREM REQUIRES A TETHER. EVERY TRANSFORM REQUIRES A PRIMITIVE CONFIGURATION.' : 'Mathematics is the science of constraints. Every theorem requires a tether. Every transform requires a primitive configuration.'}</p>
    <p><strong>3.</strong> ${crt ? 'THE BOUNDARIES BETWEEN SUBFIELDS ARE ARTIFICIAL. NUMBER THEORY AND CHAOS THEORY SHARE THE SAME TETHER TYPES. FOURIER ANALYSIS AND THE RIEMANN ZETA FUNCTION ARE ENTRIES IN THE SAME TRANSFORM TABLE.' : 'The boundaries between subfields are artificial. Number theory and chaos theory share the same tether types. Fourier analysis and the Riemann zeta function are entries in the same transform table.'}</p>
    <p><strong>4.</strong> ${crt ? 'NEW MATHEMATICS IS PREDICTABLE. THE "NEW" ROWS IN THE TRANSFORM TABLE ARE TRANSFORMS THAT MUST EXIST BASED ON THE PRIMITIVE CLASSIFICATION BUT HAVE NOT YET BEEN DISCOVERED.' : 'New mathematics is predictable. The "New" rows in the transform table are transforms that must exist based on the primitive classification but have not yet been discovered.'}</p>
    
    <div class="quote">${crt ? 'NO TETHER, NO THEOREM. NO PRIMITIVES, NO TRANSFORM.' : 'No tether, no theorem. No primitives, no transform.'}</div>`;
    
    return html;
}

window.generateTablesPage = generateTablesPage;