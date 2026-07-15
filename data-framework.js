// data-framework.js
// Framework page content

function generateFrameworkPage() {
    const crt = document.body.classList.contains('crt-mode');
    
    const sectionStyle = `margin-top: 3.5rem; margin-bottom: 0.75rem;`;
    const subsectionStyle = `margin-top: 2.5rem; margin-bottom: 0.5rem; font-size: 1.4rem;`;
    const paraStyle = `margin-bottom: 1.3rem; line-height: 1.85; font-size: 1rem;`;
    
    return `<div style="text-align: center; margin: 2rem 0 1rem;"><h2 class="framework-title" style="border-left: none; font-size: 4rem; background: linear-gradient(135deg,#fff,#b8b0ff); -webkit-background-clip:text; background-clip:text; color:transparent;">${crt ? 'EIGHT PRIMITIVES. FOUR PILLARS.<br>ONE FRAMEWORK.' : 'Eight Primitives. Four Pillars.<br>One Framework.'}</h2></div>

    <div style="max-width:800px;margin:0 auto 2rem;padding:1.2rem 1.5rem;background:${crt ? '#030803' : 'rgba(8,8,22,0.65)'};border:1px solid ${crt ? '#00cc33' : 'rgba(136,204,255,0.4)'};border-radius:${crt ? '0' : '18px'};text-align:center;">
        <p style="margin:0;font-size:0.95rem;color:${crt ? '#00cc33' : 'var(--text-dim)'};">
            ${crt ? '> FOR THE COMPLETE DERIVATION, READ THE' : 'For the complete derivation, read the'} <a href="https://doi.org/10.5281/zenodo.21327996" target="_blank" rel="noopener noreferrer" style="color:${crt ? '#00ff41' : 'var(--accent-cyan)'};font-weight:600;">${crt ? 'THEORY OF EVERYTHING' : 'Theory of Everything'}</a> ${crt ? 'PAPER (ALL SEVEN PARTS).' : 'paper (all seven parts).'}
        </p>
    </div>

    <h3 style="${sectionStyle}">${crt ? 'THE FOUR CORE EQUATIONS' : '✦ The Four Core Equations'}</h3>
    <p style="${paraStyle}">${crt ? 'The Canvas Model reduces all of physics to four equations operating on a pre-geometric canvas.' : 'The Canvas Model reduces all of physics to four equations operating on a pre-geometric canvas.'}</p>

    <h4 style="${subsectionStyle}">${crt ? 'PILLAR I: UNIFIED WAVE EQUATION' : 'Pillar I: Unified Wave Equation'}</h4>
    <div id="framework-equation" class="equation-fullwidth"></div>
    <p style="${paraStyle}">${crt ? 'The master wave equation evolves field amplitude Φ across the order parameter v. All four dynamic primitives — Order, Amplitude, Acceleration, and Polarity — contribute through dimensionless weights (a,b,c,d). Under attractor dynamics (Pillar IV), the linear terms vanish and the equation reduces to a nonlinear wave equation.' : 'The master wave equation evolves field amplitude Φ across the order parameter v. All four dynamic primitives — Order, Amplitude, Acceleration, and Polarity — contribute through dimensionless weights (a,b,c,d). Under attractor dynamics, the linear terms vanish and the equation reduces to a nonlinear wave equation.'}</p>

    <h4 style="${subsectionStyle}">${crt ? 'PILLAR II: THRESHOLD CONDITION' : 'Pillar II: Threshold Condition'}</h4>
    <div id="threshold-equation" class="core-equation"></div>
    <p style="${paraStyle}">${crt ? 'Discrete structure — particles, spacetime voxels, and all of matter — emerges when the normalized product of intersecting wave amplitudes exceeds a critical threshold. For spacetime itself, three spatial waves and one temporal wave must intersect with combined intensity above R_ST = 4. For particle production, thresholds are determined by gauge subspace dimensions. This single mechanism creates everything from quarks to galactic superclusters.' : 'Discrete structure — particles, spacetime voxels, and all of matter — emerges when the normalized product of intersecting wave amplitudes exceeds a critical threshold. For spacetime itself, three spatial waves and one temporal wave must intersect with combined intensity above R_ST = 4. This single mechanism creates everything from quarks to galactic superclusters.'}</p>

    <h4 style="${subsectionStyle}">${crt ? 'PILLAR III: EIGENVALUE EQUATION' : 'Pillar III: Eigenvalue Equation'}</h4>
    <div id="eigenvalue-equation" class="core-equation"></div>
    <p style="${paraStyle}">${crt ? 'The spectrum of possible particles is organized by a 3×3 threshold tensor on the internal space of the spatial axes. Its three eigenvectors correspond to the three fermion generations. Its eigenvalues determine masses and coupling strengths. The tensor is derived from the structural field couplings of the gauge symmetry fields.' : 'The spectrum of possible particles is organized by a 3×3 threshold tensor on the internal space of the spatial axes. Its three eigenvectors correspond to the three fermion generations. Its eigenvalues determine masses and coupling strengths. The tensor is derived from the structural field couplings of the gauge symmetry fields.'}</p>

    <h4 style="${subsectionStyle}">${crt ? 'PILLAR IV: FEED EQUATION' : 'Pillar IV: Feed Equation'}</h4>
    <div id="steering-equation" class="core-equation"></div>
    <p style="${paraStyle}">${crt ? 'Thresholds evolve in meta-time τ according to the gradient of the spectral energy functional. This drives the system toward attractor configurations. Parameters appear constant over cosmic history while having relaxed to their attractor values over deep meta-time. This is the mechanism that eliminates free parameters from the framework.' : 'Thresholds evolve in meta-time τ according to the gradient of the spectral energy functional. This drives the system toward attractor configurations. Parameters appear constant over cosmic history while having relaxed to their attractor values over deep meta-time.'}</p>

    <h3 style="${sectionStyle}">${crt ? 'THE EIGHT PRIMITIVES (POSTULATES P1–P8)' : '✦ The Eight Primitives (Postulates P1–P8)'}</h3>
    <p style="${paraStyle}">${crt ? 'All physical law emerges from eight irreducible primitives. Four dynamic primitives govern wave behavior; four property primitives select the structure of our universe.' : 'All physical law emerges from eight irreducible primitives. Four dynamic primitives govern wave behavior; four property primitives select the structure of our universe.'}</p>

    <table class="data-table">
        <thead><tr><th>#</th><th>${crt ? 'PRIMITIVE' : 'Primitive'}</th><th>${crt ? 'SYMBOL' : 'Symbol'}</th><th>${crt ? 'TYPE' : 'Type'}</th><th>${crt ? 'ROLE IN THE FRAMEWORK' : 'Role in the Framework'}</th></tr></thead>
        <tbody>
            <tr><td>P1</td><td>${crt ? 'ORDER' : 'Order'}</td><td>v</td><td>${crt ? 'DYNAMIC' : 'Dynamic'}</td><td>${crt ? 'Before/after sequence. Becomes time t in physical contexts. The canvas clock.' : 'Before/after sequence. Becomes time t in physical contexts. The canvas clock.'}</td></tr>
            <tr><td>P2</td><td>${crt ? 'AMPLITUDE' : 'Amplitude'}</td><td>Φ₀</td><td>${crt ? 'DYNAMIC' : 'Dynamic'}</td><td>${crt ? 'Sets the fundamental field magnitude scale. All amplitudes are multiples of Φ₀.' : 'Sets the fundamental field magnitude scale. All amplitudes are multiples of Φ₀.'}</td></tr>
            <tr><td>P3</td><td>${crt ? 'ACCELERATION' : 'Acceleration'}</td><td>∂²Φ/∂v²</td><td>${crt ? 'DYNAMIC' : 'Dynamic'}</td><td>${crt ? 'Change of change. Minimal derivative order enabling oscillatory solutions.' : 'Change of change. Minimal derivative order enabling oscillatory solutions.'}</td></tr>
            <tr><td>P4</td><td>${crt ? 'POLARITY' : 'Polarity'}</td><td>sgn(Φ)</td><td>${crt ? 'DYNAMIC' : 'Dynamic'}</td><td>${crt ? 'Sign reversal. The engine of oscillation. Without polarity, waves cannot reverse direction.' : 'Sign reversal. The engine of oscillation. Without polarity, waves cannot reverse direction.'}</td></tr>
            <tr><td>P5</td><td>${crt ? 'CHIRALITY' : 'Chirality'}</td><td>h = +1</td><td>${crt ? 'PROPERTY' : 'Property'}</td><td>${crt ? 'Primitive handedness. Selects matter over antimatter.' : 'Primitive handedness. Selects matter over antimatter.'}</td></tr>
            <tr><td>P6</td><td>${crt ? 'DIMENSION' : 'Dimension'}</td><td>n = 3</td><td>${crt ? 'PROPERTY' : 'Property'}</td><td>${crt ? 'Number of spatial axes. Three dimensions are forced by wave intersection consistency.' : 'Number of spatial axes. Three dimensions are forced by wave intersection consistency.'}</td></tr>
            <tr><td>P7</td><td>${crt ? 'ANGLE' : 'Angle'}</td><td>θ = π/2</td><td>${crt ? 'PROPERTY' : 'Property'}</td><td>${crt ? 'Axis orthogonality. Forced by lattice isotropy.' : 'Axis orthogonality. Forced by lattice isotropy.'}</td></tr>
            <tr><td>P8</td><td>${crt ? 'CHARGE' : 'Charge'}</td><td>q_s ∈ {1,2,3}</td><td>${crt ? 'PROPERTY' : 'Property'}</td><td>${crt ? 'Coupling to spatial axes. Generates U(1), SU(2), SU(3). The integers {1,2,3} determine all gauge parameters.' : 'Coupling to spatial axes. Generates U(1), SU(2), SU(3). The integers {1,2,3} determine all gauge parameters.'}</td></tr>
        </tbody>
    </table>

    <h3 style="${sectionStyle}">${crt ? 'THE FOUR PILLARS' : '✦ The Four Pillars'}</h3>
    <p style="${paraStyle}">${crt ? 'The framework is organized into four pillars. Each pillar corresponds to one core equation and the physical domain it governs.' : 'The framework is organized into four pillars. Each pillar corresponds to one core equation and the physical domain it governs.'}</p>

    <table class="data-table">
        <thead><tr><th>${crt ? 'PILLAR' : 'Pillar'}</th><th>${crt ? 'EQUATION' : 'Equation'}</th><th>${crt ? 'DOMAIN' : 'Domain'}</th><th>${crt ? 'KEY RESULT' : 'Key Result'}</th></tr></thead>
        <tbody>
            <tr><td>I</td><td>${crt ? 'UNIFIED WAVE EQUATION' : 'Unified Wave Equation'}</td><td>${crt ? 'WAVE DYNAMICS' : 'Wave Dynamics'}</td><td>${crt ? 'All fields evolve under one equation.' : 'All fields evolve under one equation.'}</td></tr>
            <tr><td>II</td><td>${crt ? 'THRESHOLD CONDITION' : 'Threshold Condition'}</td><td>${crt ? 'EMERGENCE & COSMOLOGY' : 'Emergence & Cosmology'}</td><td>${crt ? 'Spacetime and particles emerge from wave intersections. Sets Λ, flatness, inflation, entropy.' : 'Spacetime and particles emerge from wave intersections. Sets Λ, flatness, inflation, entropy.'}</td></tr>
            <tr><td>III</td><td>${crt ? 'EIGENVALUE EQUATION' : 'Eigenvalue Equation'}</td><td>${crt ? 'PARTICLE PHYSICS' : 'Particle Physics'}</td><td>${crt ? 'Three generations, CKM and PMNS mixing, gauge couplings from the 3×3 threshold tensor.' : 'Three generations, CKM and PMNS mixing, gauge couplings from the 3×3 threshold tensor.'}</td></tr>
            <tr><td>IV</td><td>${crt ? 'FEED EQUATION' : 'Feed Equation'}</td><td>${crt ? 'META-DYNAMICS' : 'Meta-Dynamics'}</td><td>${crt ? 'Parameters evolve to attractor values. Eliminates free parameters.' : 'Parameters evolve to attractor values. Eliminates free parameters.'}</td></tr>
        </tbody>
    </table>

    <h3 style="${sectionStyle}">${crt ? 'DEPENDENCIES NOTATION' : '✦ Dependencies Notation'}</h3>
    <p style="${paraStyle}">${crt ? 'Every result in the framework is tagged with the specific primitives and pillars required for its derivation. This notation makes the logical structure of the framework transparent and auditable.' : 'Every result in the framework is tagged with the specific primitives and pillars required for its derivation.'}</p>
    <p style="${paraStyle}"><strong>P1–P8</strong> — ${crt ? 'The eight primitives (postulates)' : 'The eight primitives (postulates)'}<br>
    <strong>I, II, III, IV</strong> — ${crt ? 'The four pillars (core equations)' : 'The four pillars (core equations)'}<br>
    <strong>${crt ? 'Example: "P5, P7, I, IV" means the result depends on Primitives P5 and P7, and Pillars I and IV.' : 'Example: "P5, P7, I, IV" means depends on Primitives P5 and P7, and Pillars I and IV.'}</strong></p>

    <h3 style="${sectionStyle}">${crt ? 'THE FUNDAMENTAL NUMBERS' : '✦ The Fundamental Numbers'}</h3>
    <p style="${paraStyle}">${crt ? 'All fundamental parameters of the Standard Model and cosmology are generated by five numbers: α₀, the gauge subspace dimensions {1,2,3}, and π. The gauge couplings, the CKM and PMNS mixing angles, the cosmological constant — all trace back to these five numbers.' : 'All fundamental parameters of the Standard Model and cosmology are generated by five numbers: α₀, the gauge subspace dimensions {1,2,3}, and π. The gauge couplings, the CKM and PMNS mixing angles, the cosmological constant — all trace back to these five numbers.'}</p>

    <h3 style="${sectionStyle}">${crt ? 'SCOPE OF THE FRAMEWORK' : '✦ Scope of the Framework'}</h3>
    <p style="${paraStyle}">${crt ? 'The Canvas Model derives the Standard Model, general relativity, and cosmology from twelve postulates. It reproduces known physical constants and phenomena, makes novel testable predictions, and resolves long-standing problems in physics and mathematics.' : 'The Canvas Model derives the Standard Model, general relativity, and cosmology from twelve postulates. It reproduces known physical constants and phenomena, makes novel testable predictions, and resolves long-standing problems in physics and mathematics.'}</p>
    
    <div style="max-width:800px;margin:3rem auto 1rem;padding:1.2rem 1.5rem;background:${crt ? '#030803' : 'rgba(8,8,22,0.65)'};border:1px solid ${crt ? '#00cc33' : 'rgba(136,204,255,0.4)'};border-radius:${crt ? '0' : '18px'};text-align:center;">
        <p style="margin:0;font-size:0.95rem;color:${crt ? '#00cc33' : 'var(--text-dim)'};">
            ${crt ? '> READ THE FULL DERIVATION IN THE' : 'Read the full derivation in the'} <a href="https://doi.org/10.5281/zenodo.21327996" target="_blank" rel="noopener noreferrer" style="color:${crt ? '#00ff41' : 'var(--accent-cyan)'};font-weight:600;">${crt ? 'THEORY OF EVERYTHING' : 'Theory of Everything'}</a> ${crt ? 'PAPER (ALL SEVEN PARTS).' : 'paper (all seven parts).'}
        </p>
    </div>`;
}

window.generateFrameworkPage = generateFrameworkPage;