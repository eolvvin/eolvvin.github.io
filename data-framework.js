// data-framework.js
// Framework page content — rebuilt for post-binder architecture

function generateFrameworkPage() {
    const crt = document.body.classList.contains('crt-mode');
    
    const sectionStyle = `margin-top: 3.5rem; margin-bottom: 0.75rem;`;
    const subsectionStyle = `margin-top: 2.5rem; margin-bottom: 0.5rem; font-size: 1.4rem;`;
    const paraStyle = `margin-bottom: 1.3rem; line-height: 1.85; font-size: 1rem;`;
    
    return `<div style="text-align: center; margin: 2rem 0 1rem;"><h2 class="framework-title" style="border-left: none; font-size: 4rem; background: linear-gradient(135deg,#fff,#b8b0ff); -webkit-background-clip:text; background-clip:text; color:transparent;">${crt ? 'THE EMERGENCE CANVAS<br>FRAMEWORK' : 'The Emergence Canvas<br>Framework'}</h2></div>

    <div style="max-width:800px;margin:0 auto 2rem;padding:1.2rem 1.5rem;background:${crt ? '#030803' : 'rgba(8,8,22,0.65)'};border:1px solid ${crt ? '#00cc33' : 'rgba(136,204,255,0.4)'};border-radius:${crt ? '0' : '18px'};text-align:center;">
        <p style="margin:0;font-size:0.95rem;color:${crt ? '#00cc33' : 'var(--text-dim)'};">
            ${crt ? '> A MATHEMATICAL-PHYSICS PROGRAMME INVESTIGATING FUNDAMENTAL UNIFICATION' : 'A mathematical-physics programme investigating fundamental unification.'}
        </p>
    </div>

    <h3 style="${sectionStyle}">${crt ? 'THE FINITE RECURRENCE FOUNDATION' : '✦ The Finite Recurrence Foundation'}</h3>
    <p style="${paraStyle}">${crt ? 'The mathematical spine of the programme is a finite coprime recurrence structure with primitive periods {2,3,5,7}. Their least common multiple is 210. The Chinese remainder theorem gives a canonical factorization.' : 'The mathematical spine of the programme is a finite coprime recurrence structure with primitive periods {2,3,5,7}. Their least common multiple is 210. The Chinese remainder theorem gives a canonical factorization.'}</p>
    
    <div style="
        max-width:950px;
        margin:1rem auto 2rem;
        padding:1.5rem 1.8rem;
        background:${crt ? '#030803' : 'rgba(8,8,22,0.55)'};
        border:1px solid ${crt ? '#00cc33' : 'rgba(136,204,255,0.28)'};
        border-radius:${crt ? '0' : '16px'};
        text-align:center;
        font-family:${crt ? "'Share Tech Mono',monospace" : "'DM Sans',sans-serif"};
        font-size:${crt ? '0.85rem' : '0.92rem'};
        color:${crt ? '#00cc33' : 'var(--text-dim)'};
        line-height:2;
    ">
        ${crt ? 'L = lcm(2,3,5,7) = 210' : 'L = lcm(2,3,5,7) = 210'}<br>
        ${crt ? 'Z₂₁₀ ≅ Z₂ × Z₃ × Z₅ × Z₇' : 'Z₂₁₀ ≅ Z₂ × Z₃ × Z₅ × Z₇'}<br>
        ${crt ? 'H₂₁₀ ≅ C² ⊗ C³ ⊗ C⁵ ⊗ C⁷' : 'H₂₁₀ ≅ C² ⊗ C³ ⊗ C⁵ ⊗ C⁷'}<br>
        ${crt ? 'M₂₁₀ ≅ M₂ ⊗ M₃ ⊗ M₅ ⊗ M₇' : 'M₂₁₀ ≅ M₂ ⊗ M₃ ⊗ M₅ ⊗ M₇'}
    </div>

    <h3 style="${sectionStyle}">${crt ? 'THE WEYL ALGEBRA' : '✦ The Weyl Algebra'}</h3>
    <p style="${paraStyle}">${crt ? 'On each prime factor p, the clock and shift operators generate the full matrix algebra M_p(C). The normalized trace gives the Weyl twirl as an exact conditional expectation, and the traceless projector follows.' : 'On each prime factor p, the clock and shift operators generate the full matrix algebra M_p(C). The normalized trace gives the Weyl twirl as an exact conditional expectation, and the traceless projector follows.'}</p>
    
    <div style="
        max-width:950px;
        margin:1rem auto 2rem;
        padding:1.2rem 1.5rem;
        background:${crt ? '#030803' : 'rgba(8,8,22,0.55)'};
        border:1px solid ${crt ? '#00cc33' : 'rgba(136,204,255,0.28)'};
        border-radius:${crt ? '0' : '16px'};
        font-family:${crt ? "'Share Tech Mono',monospace" : "'DM Sans',sans-serif"};
        font-size:${crt ? '0.82rem' : '0.88rem'};
        color:${crt ? '#00cc33' : 'var(--text-dim)'};
        line-height:2;
    ">
        ${crt ? 'Z_p X_p = ω_p X_p Z_p,  ω_p = e^{2πi/p}' : 'Z_p X_p = ω_p X_p Z_p,  ω_p = e^{2πi/p}'}<br>
        ${crt ? 'Alg(X_p, Z_p) = M_p(C)' : 'Alg(X_p, Z_p) = M_p(C)'}<br>
        ${crt ? 'T_p(A) = τ_p(A)·I  (Weyl twirl)' : 'T_p(A) = τ_p(A)·I  (Weyl twirl)'}<br>
        ${crt ? 'q_p(A) = A − τ_p(A)·I  (traceless projector)' : 'q_p(A) = A − τ_p(A)·I  (traceless projector)'}
    </div>

    <h3 style="${sectionStyle}">${crt ? 'DISCRETE DIFFERENTIAL GEOMETRY' : '✦ Discrete Differential Geometry'}</h3>
    <p style="${paraStyle}">${crt ? 'Primitive commuting translations generate a discrete first-order calculus. The exterior derivative is nilpotent, and the connection-curvature-Bianchi hierarchy is exact.' : 'Primitive commuting translations generate a discrete first-order calculus. The exterior derivative is nilpotent, and the connection-curvature-Bianchi hierarchy is exact.'}</p>
    
    <div style="
        max-width:950px;
        margin:1rem auto 2rem;
        padding:1.2rem 1.5rem;
        background:${crt ? '#030803' : 'rgba(8,8,22,0.55)'};
        border:1px solid ${crt ? '#00cc33' : 'rgba(136,204,255,0.28)'};
        border-radius:${crt ? '0' : '16px'};
        font-family:${crt ? "'Share Tech Mono',monospace" : "'DM Sans',sans-serif"};
        font-size:${crt ? '0.82rem' : '0.88rem'};
        color:${crt ? '#00cc33' : 'var(--text-dim)'};
        line-height:2;
    ">
        ${crt ? 'df = Σᵢ (∇ᵢf) θⁱ' : 'df = Σᵢ (∇ᵢf) θⁱ'}<br>
        ${crt ? 'd² = 0' : 'd² = 0'}<br>
        ${crt ? 'F = dA + A∧A' : 'F = dA + A∧A'}<br>
        ${crt ? 'DF = dF + A∧F − F∧A = 0  (Bianchi)' : 'DF = dF + A∧F − F∧A = 0  (Bianchi)'}
    </div>

    <h3 style="${sectionStyle}">${crt ? 'THE COMMON-VACUUM MECHANISM' : '✦ The Common-Vacuum Mechanism'}</h3>
    <p style="${paraStyle}">${crt ? 'The central post-binder result. One generic quartic invariant potential, with the same two reduced shape parameters (r,s), is applied to traceless Hermitian order parameters in dimensions four and five.' : 'The central post-binder result. One generic quartic invariant potential, with the same two reduced shape parameters (r,s), is applied to traceless Hermitian order parameters in dimensions four and five.'}</p>
    
    <div style="
        max-width:950px;
        margin:1rem auto 2rem;
        padding:1.3rem 1.6rem;
        background:${crt ? '#030803' : 'rgba(8,8,22,0.55)'};
        border:1px solid ${crt ? '#00cc33' : 'rgba(136,204,255,0.28)'};
        border-radius:${crt ? '0' : '16px'};
        font-family:${crt ? "'Share Tech Mono',monospace" : "'DM Sans',sans-serif"};
        font-size:${crt ? '0.8rem' : '0.86rem'};
        color:${crt ? '#00cc33' : 'var(--text-dim)'};
        line-height:2;
    ">
        ${crt ? 'V_N(X) = −μ² Tr X² + κ Tr X³ + a(Tr X²)² + b Tr X⁴' : 'V_N(X) = −μ² Tr X² + κ Tr X³ + a(Tr X²)² + b Tr X⁴'}<br>
        ${crt ? 'Reduced parameters: r = κ/(μ√a),  s = b/a' : 'Reduced parameters: r = κ/(μ√a),  s = b/a'}<br>
        ${crt ? 'Open region in (r,s):  4 → 3+1  and  5 → 3+2  simultaneously' : 'Open region in (r,s):  4 → 3+1  and  5 → 3+2  simultaneously'}
    </div>

    <table class="data-table">
        <thead><tr><th>${crt ? 'STRUCTURE' : 'Structure'}</th><th>${crt ? 'RESULT' : 'Result'}</th><th>${crt ? 'STATUS' : 'Status'}</th></tr></thead>
        <tbody>
            <tr><td>${crt ? '4D VACUUM' : '4D Vacuum'}</td><td>${crt ? '3+1 eigenspace decomposition' : '3+1 eigenspace decomposition'}</td><td class="status-solved">${crt ? '[COMPUTED]' : 'Computed'}</td></tr>
            <tr><td>${crt ? '5D VACUUM' : '5D Vacuum'}</td><td>${crt ? '3+2 eigenspace decomposition' : '3+2 eigenspace decomposition'}</td><td class="status-solved">${crt ? '[COMPUTED]' : 'Computed'}</td></tr>
            <tr><td>${crt ? 'LORENTZIAN INERTIA' : 'Lorentzian Inertia'}</td><td>${crt ? 'Tracelessness forces opposite eigenvalue signs in 3+1' : 'Tracelessness forces opposite eigenvalue signs in 3+1'}</td><td class="status-solved">${crt ? '[DERIVED]' : 'Derived'}</td></tr>
            <tr><td>${crt ? 'LORENTZIAN PROPAGATION' : 'Lorentzian Propagation'}</td><td>${crt ? 'Rank-3 isotropic kernel, d_s = 3, relativistic dispersion' : 'Rank-3 isotropic kernel, d_s = 3, relativistic dispersion'}</td><td class="question-mark">${crt ? '[CONDITIONAL]' : 'Conditional — requires G_phys ∝ Q₃₊₁'}</td></tr>
            <tr><td>${crt ? 'GAUGE STABILIZER' : 'Gauge Stabilizer'}</td><td>${crt ? 'S(U(3)×U(2)) ≅ [SU(3)×SU(2)×U(1)]/Z₆' : 'S(U(3)×U(2)) ≅ [SU(3)×SU(2)×U(1)]/Z₆'}</td><td class="status-solved">${crt ? '[DERIVED GIVEN C⁵]' : 'Derived given C⁵'}</td></tr>
            <tr><td>${crt ? 'RELATIVE HYPERCHARGE' : 'Relative Hypercharge'}</td><td>${crt ? 'Y ∝ diag(−1/3,−1/3,−1/3,1/2,1/2)' : 'Y ∝ diag(−1/3,−1/3,−1/3,1/2,1/2)'}</td><td class="status-solved">${crt ? '[DERIVED GIVEN C⁵]' : 'Derived given C⁵'}</td></tr>
            <tr><td>${crt ? 'ONE-FAMILY PACKAGE' : 'One-Family Package'}</td><td>${crt ? 'Λ•C⁵ → 16+16 → 1 ⊕ 10 ⊕ 5̄' : 'Λ•C⁵ → 16+16 → 1 ⊕ 10 ⊕ 5̄'}</td><td class="status-solved">${crt ? '[DERIVED GIVEN C⁵]' : 'Derived given C⁵'}</td></tr>
            <tr><td>${crt ? 'SPIN-2 / GRAVITON' : 'Spin-2 / Graviton'}</td><td>${crt ? 'Pure massless spin-2 from vacuum fluctuations' : 'Pure massless spin-2 from vacuum fluctuations'}</td><td class="cross-mark">${crt ? '[NO-GO SIMPLEST FORM]' : 'No-Go in simplest form — Goldstones are vector triplet'}</td></tr>
        </tbody>
    </table>

    <h3 style="${sectionStyle}">${crt ? 'THE CONDITIONAL SPACETIME BRIDGE' : '✦ The Conditional Spacetime Bridge'}</h3>
    <p style="${paraStyle}">${crt ? 'Unbounded Order supplies unitary evolution via Stone\'s theorem. Physical space requires an event network whose propagation operator has a low-energy quadratic symbol. The current programme has established the mathematical criteria but not the microscopic kernel.' : 'Unbounded Order supplies unitary evolution via Stone\'s theorem. Physical space requires an event network whose propagation operator has a low-energy quadratic symbol. The current programme has established the mathematical criteria but not the microscopic kernel.'}</p>
    
    <table class="data-table">
        <thead><tr><th>${crt ? 'BRIDGE' : 'Bridge'}</th><th>${crt ? 'CONDITION' : 'Condition'}</th><th>${crt ? 'STATUS' : 'Status'}</th></tr></thead>
        <tbody>
            <tr><td>${crt ? 'UNITARY EVOLUTION' : 'Unitary Evolution'}</td><td>${crt ? 'Strongly continuous unitary group on unbounded Order' : 'Strongly continuous unitary group on unbounded Order'}</td><td class="status-solved">${crt ? '[DERIVED]' : 'Derived — Stone\'s theorem'}</td></tr>
            <tr><td>${crt ? 'THREE SPATIAL DIMENSIONS' : 'Three Spatial Dimensions'}</td><td>${crt ? 'Rank-3 quadratic propagation Hessian and P(s) ∼ s⁻³ᐟ²' : 'Rank-3 quadratic propagation Hessian and P(s) ∼ s⁻³ᐟ²'}</td><td class="question-mark">${crt ? '[CONDITIONAL]' : 'Conditional — kernel not yet derived'}</td></tr>
            <tr><td>${crt ? 'LORENTZ CONE' : 'Lorentz Cone'}</td><td>${crt ? 'Isotropy, hyperbolicity, universal limiting speed' : 'Isotropy, hyperbolicity, universal limiting speed'}</td><td class="question-mark">${crt ? '[CONDITIONAL]' : 'Conditional'}</td></tr>
            <tr><td>${crt ? 'DIRAC STRUCTURE' : 'Dirac Structure'}</td><td>${crt ? 'First-order factorization of Lorentzian symbol' : 'First-order factorization of Lorentzian symbol'}</td><td class="status-solved">${crt ? '[DERIVED CONDITIONALLY]' : 'Derived conditionally — Clifford algebra'}</td></tr>
            <tr><td>${crt ? 'LATTICE FERMIONS' : 'Lattice Fermions'}</td><td>${crt ? 'Chiral fermions without doubling on discrete lattice' : 'Chiral fermions without doubling on discrete lattice'}</td><td class="cross-mark">${crt ? '[OBSTRUCTED]' : 'Obstructed — Nielsen–Ninomiya'}</td></tr>
        </tbody>
    </table>

    <h3 style="${sectionStyle}">${crt ? 'RELATIVISTIC LOCALIZATION' : '✦ Relativistic Localization'}</h3>
    <p style="${paraStyle}">${crt ? 'The particle programme establishes that a broken scalar vacuum coupled to Dirac fermions supports finite-energy localized composites with relativistic mass and substantial spectral stability.' : 'The particle programme establishes that a broken scalar vacuum coupled to Dirac fermions supports finite-energy localized composites with relativistic mass and substantial spectral stability.'}</p>
    
    <div style="
        max-width:950px;
        margin:1rem auto 2rem;
        padding:1.2rem 1.5rem;
        background:${crt ? '#030803' : 'rgba(8,8,22,0.55)'};
        border:1px solid ${crt ? '#00cc33' : 'rgba(136,204,255,0.28)'};
        border-radius:${crt ? '0' : '16px'};
        font-family:${crt ? "'Share Tech Mono',monospace" : "'DM Sans',sans-serif"};
        font-size:${crt ? '0.82rem' : '0.88rem'};
        color:${crt ? '#00cc33' : 'var(--text-dim)'};
        line-height:2;
    ">
        ${crt ? 'BROKEN VACUUM → m∞ = yv ≠ 0 → LOCALIZED COMPOSITE' : 'Broken vacuum → m∞ = yv ≠ 0 → Localized composite'}<br>
        ${crt ? 'S_eff = −E₀ ∫ dt √(1−v²/c²)' : 'S_eff = −E₀ ∫ dt √(1−v²/c²)'}<br>
        ${crt ? 'M_i = E₀/c²   (Lorentz invariance)' : 'M_i = E₀/c²   (Lorentz invariance)'}<br>
        ${crt ? 'M_g = M_i   (universal metric coupling)' : 'M_g = M_i   (universal metric coupling)'}<br>
        ${crt ? 'LINEAR STABILITY THROUGH L=6   (signed-energy RPA)' : 'Linear stability through L=6   (signed-energy RPA)'}
    </div>

    <h3 style="${sectionStyle}">${crt ? 'COVARIANT COSMOLOGY' : '✦ Covariant Cosmology'}</h3>
    <p style="${paraStyle}">${crt ? 'The cosmology sector uses one frozen scalar–tensor action, evolved through exact Einstein–Boltzmann calculations and confronted with Planck, DESI DR2, and Pantheon+.' : 'The cosmology sector uses one frozen scalar–tensor action, evolved through exact Einstein–Boltzmann calculations and confronted with Planck, DESI DR2, and Pantheon+.'}</p>
    
    <div style="
        max-width:950px;
        margin:1rem auto 2rem;
        padding:1.2rem 1.5rem;
        background:${crt ? '#030803' : 'rgba(8,8,22,0.55)'};
        border:1px solid ${crt ? '#00cc33' : 'rgba(136,204,255,0.28)'};
        border-radius:${crt ? '0' : '16px'};
        font-family:${crt ? "'Share Tech Mono',monospace" : "'DM Sans',sans-serif"};
        font-size:${crt ? '0.82rem' : '0.88rem'};
        color:${crt ? '#00cc33' : 'var(--text-dim)'};
        line-height:2;
    ">
        ${crt ? 'F = M²₊ + (ξ/2)φ²' : 'F = M²₊ + (ξ/2)φ²'}<br>
        ${crt ? 'V = (A/2)φ² − (B/4)φ⁴ + (C/8)φ⁶' : 'V = (A/2)φ² − (B/4)φ⁴ + (C/8)φ⁶'}<br>
        ${crt ? 'Δχ²(Canvas−GR) ≈ −0.077   (raw likelihood tie)' : 'Δχ²(Canvas−GR) ≈ −0.077   (raw likelihood tie)'}<br>
        ${crt ? 'AIC/BIC FAVOR GR/ΛCDM   (complexity penalty)' : 'AIC/BIC favor GR/ΛCDM   (complexity penalty)'}
    </div>

    <h3 style="${sectionStyle}">${crt ? 'CURRENT OPEN SELECTORS' : '✦ Current Open Selectors'}</h3>
    <p style="${paraStyle}">${crt ? 'The programme has identified precise mathematical closure conditions that remain unresolved. These are stated as gates, not vague frontiers.' : 'The programme has identified precise mathematical closure conditions that remain unresolved. These are stated as gates, not vague frontiers.'}</p>
    
    <table class="data-table">
        <thead><tr><th>${crt ? 'SELECTOR' : 'Selector'}</th><th>${crt ? 'QUESTION' : 'Question'}</th><th>${crt ? 'STATUS' : 'Status'}</th></tr></thead>
        <tbody>
            <tr><td>${crt ? 'SINGLE MASTER OBJECT' : 'Single Master Object'}</td><td>${crt ? 'Can one target-blind object generate both H₄ and H₅ without hand-inserted projectors?' : 'Can one target-blind object generate both H₄ and H₅ without hand-inserted projectors?'}</td><td class="question-mark">${crt ? '[OPEN]' : 'Open'}</td></tr>
            <tr><td>${crt ? 'PROPAGATION RULE' : 'Propagation Rule'}</td><td>${crt ? 'Can G_phys ∝ Q₃₊₁ be derived rather than stipulated?' : 'Can G_phys ∝ Q₃₊₁ be derived rather than stipulated?'}</td><td class="question-mark">${crt ? '[CONSTITUTIVE]' : 'Constitutive'}</td></tr>
            <tr><td>${crt ? 'SPIN-2 / GR SECTOR' : 'Spin-2 / GR Sector'}</td><td>${crt ? 'Can a pure massless spin-2 mode with Fierz–Pauli redundancy emerge?' : 'Can a pure massless spin-2 mode with Fierz–Pauli redundancy emerge?'}</td><td class="question-mark">${crt ? '[OPEN]' : 'Open'}</td></tr>
            <tr><td>${crt ? 'ORIGIN OF C⁵' : 'Origin of C⁵'}</td><td>${crt ? 'Why is the physical fermionic one-particle module five-dimensional?' : 'Why is the physical fermionic one-particle module five-dimensional?'}</td><td class="question-mark">${crt ? '[OPEN]' : 'Open'}</td></tr>
            <tr><td>${crt ? 'PHYSICAL CHIRALITY' : 'Physical Chirality'}</td><td>${crt ? 'What selects one eigenspace of Γtot = γ5 ⊗ Γ10?' : 'What selects one eigenspace of Γtot = γ5 ⊗ Γ10?'}</td><td class="question-mark">${crt ? '[OPEN]' : 'Open'}</td></tr>
            <tr><td>${crt ? 'THREE GENERATIONS' : 'Three Generations'}</td><td>${crt ? 'Can N_g = 3 be produced by a protected index?' : 'Can N_g = 3 be produced by a protected index?'}</td><td class="question-mark">${crt ? '[OPEN]' : 'Open'}</td></tr>
            <tr><td>${crt ? 'UV STABILIZATION' : 'UV Stabilization'}</td><td>${crt ? 'Can c_R > Q be derived?' : 'Can c_R > Q be derived?'}</td><td class="question-mark">${crt ? '[OPEN]' : 'Open'}</td></tr>
            <tr><td>${crt ? 'ABSOLUTE SCALE' : 'Absolute Scale'}</td><td>${crt ? 'Can the dimensional carrier scale Λ_car be derived?' : 'Can the dimensional carrier scale Λ_car be derived?'}</td><td class="question-mark">${crt ? '[OPEN]' : 'Open'}</td></tr>
            <tr><td>${crt ? 'VACUUM PARAMETERS (r,s)' : 'Vacuum Parameters (r,s)'}</td><td>${crt ? 'Can the reduced coefficients be derived from microscopic dynamics?' : 'Can the reduced coefficients be derived from microscopic dynamics?'}</td><td class="question-mark">${crt ? '[CONSTITUTIVE]' : 'Constitutive'}</td></tr>
        </tbody>
    </table>

    <h3 style="${sectionStyle}">${crt ? 'THE TWO ACTIVE GATES' : '✦ The Two Active Gates'}</h3>
    
    <div style="
        display:flex;
        flex-wrap:wrap;
        gap:1rem;
        justify-content:center;
        max-width:950px;
        margin:1rem auto 2rem;
    ">
        <div style="
            flex:1 1 350px;
            padding:1.4rem 1.6rem;
            background:${crt ? '#030803' : 'rgba(8,8,22,0.55)'};
            border:1px solid ${crt ? '#ffaa00' : 'rgba(255,190,110,0.4)'};
            border-radius:${crt ? '0' : '16px'};
            text-align:center;
        ">
            <div style="
                font-weight:700;
                color:${crt ? '#ffaa00' : '#f0ba72'};
                margin-bottom:0.5rem;
            ">
                ${crt ? 'MASTER-OBJECT GATE' : 'Master-Object Gate'}
            </div>
            <div style="
                font-size:0.85rem;
                color:${crt ? '#00cc33' : 'var(--text-dim)'};
                line-height:1.7;
            ">
                ${crt ? 'DERIVE OR FALSIFY A SINGLE TARGET-BLIND OBJECT WHOSE DYNAMICS PRODUCES BOTH THE 4D AND 5D STRUCTURAL MODULES WITHOUT INSERTING THEIR PROJECTORS BY HAND.' : 'Derive or falsify a single target-blind object whose dynamics produces both the 4D and 5D structural modules without inserting their projectors by hand.'}
            </div>
        </div>
        <div style="
            flex:1 1 350px;
            padding:1.4rem 1.6rem;
            background:${crt ? '#030803' : 'rgba(8,8,22,0.55)'};
            border:1px solid ${crt ? '#ffaa00' : 'rgba(255,190,110,0.4)'};
            border-radius:${crt ? '0' : '16px'};
            text-align:center;
        ">
            <div style="
                font-weight:700;
                color:${crt ? '#ffaa00' : '#f0ba72'};
                margin-bottom:0.5rem;
            ">
                ${crt ? 'PREDICTION GATE 1' : 'Prediction Gate 1'}
            </div>
            <div style="
                font-size:0.85rem;
                color:${crt ? '#00cc33' : 'var(--text-dim)'};
                line-height:1.7;
            ">
                ${crt ? 'FREEZE ONE MATURE CANVAS SECTOR, COMPUTE ONE GENUINELY HELD-OUT OBSERVABLE BEFORE INSPECTING THE DATA, THEN UNBLIND AND COMPARE. NO POST-UNBLINDING MODIFICATION COUNTS AS THE SAME PREDICTION.' : 'Freeze one mature Canvas sector, compute one genuinely held-out observable before inspecting the data, then unblind and compare. No post-unblinding modification counts as the same prediction.'}
            </div>
        </div>
    </div>

    <h3 style="${sectionStyle}">${crt ? 'PROVENANCE CLASSIFICATION' : '✦ Provenance Classification'}</h3>
    <table class="data-table">
        <thead><tr><th>${crt ? 'LABEL' : 'Label'}</th><th>${crt ? 'MEANING' : 'Meaning'}</th></tr></thead>
        <tbody>
            <tr><td class="status-solved">${crt ? '[DERIVED]' : 'Derived'}</td><td>${crt ? 'Follows mathematically from stated assumptions' : 'Follows mathematically from stated assumptions'}</td></tr>
            <tr><td class="status-solved">${crt ? '[COMPUTED]' : 'Computed'}</td><td>${crt ? 'Obtained numerically from frozen equations and parameters' : 'Obtained numerically from frozen equations and parameters'}</td></tr>
            <tr><td class="question-mark">${crt ? '[CONDITIONAL]' : 'Conditional'}</td><td>${crt ? 'Follows only after an explicit structural bridge is assumed' : 'Follows only after an explicit structural bridge is assumed'}</td></tr>
            <tr><td class="question-mark">${crt ? '[CONSTITUTIVE]' : 'Constitutive'}</td><td>${crt ? 'Introduced as part of the current theory definition' : 'Introduced as part of the current theory definition'}</td></tr>
            <tr><td class="cross-mark">${crt ? '[NO-GO]' : 'No-Go'}</td><td>${crt ? 'A stronger claim has been ruled out under current assumptions' : 'A stronger claim has been ruled out under current assumptions'}</td></tr>
            <tr><td class="question-mark">${crt ? '[OPEN]' : 'Open'}</td><td>${crt ? 'No valid derivation or decisive no-go result is known' : 'No valid derivation or decisive no-go result is known'}</td></tr>
        </tbody>
    </table>
    
    <div style="max-width:800px;margin:3rem auto 1rem;padding:1.2rem 1.5rem;background:${crt ? '#030803' : 'rgba(8,8,22,0.65)'};border:1px solid ${crt ? '#00cc33' : 'rgba(136,204,255,0.4)'};border-radius:${crt ? '0' : '18px'};text-align:center;">
        <p style="margin:0;font-size:0.95rem;color:${crt ? '#00cc33' : 'var(--text-dim)'};">
            ${crt ? '> LET THE NEXT STATUS CHANGE BE EARNED BY MATHEMATICS OR EXPERIMENT, NOT TERMINOLOGY.' : 'Let the next status change be earned by mathematics or experiment, not terminology.'}
        </p>
    </div>`;
}

window.generateFrameworkPage = generateFrameworkPage;