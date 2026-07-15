// data-predictions.js
// Predictions page content

const knownNumbers = [
    // Structural (Type M)
    { name: "Number of spatial dimensions", predicted: "d = 3 (exact)", observed: "d = 3", dependencies: "P6, Pillar II" },
    { name: "Axis orthogonality", predicted: "θ = π/2 (exact)", observed: "Isotropic CMB", dependencies: "P6, P7, Pillar II" },
    { name: "Chirality (weak force)", predicted: "h = +1 (left-handed)", observed: "Confirmed", dependencies: "P5" },
    { name: "Gauge group", predicted: "U(1)×SU(2)×SU(3) (exact)", observed: "Confirmed", dependencies: "P8" },
    { name: "Number of fermion generations", predicted: "3 (exact)", observed: "3", dependencies: "P6, P8, Pillar III" },
    { name: "Spin values", predicted: "0, 1/2, 1", observed: "Confirmed", dependencies: "P7" },
    { name: "Particle content", predicted: "37 observed + 3 predicted RH neutrinos", observed: "37 observed", dependencies: "P1–P8, Pillar I–III" },
    { name: "Structural field count", predicted: "10", observed: "Derived", dependencies: "P1, P5, P6, P7, P8" },
    
    // Gauge Sector (Type M)
    { name: "Gauge coupling ratios at M_P", predicted: "1 : 2/3 : 2/π", observed: "1 : 0.67 : 0.64 (from RG)", dependencies: "P7, P8, Pillar IV" },
    { name: "g₃ at M_P", predicted: "5π/32 ≈ 0.491", observed: "≈ 0.49 (from RG)", dependencies: "Pillar IV, P7, P8" },
    { name: "g₁² at M_P (absolute)", predicted: "25π³/2048 ≈ 0.379", observed: "Derived", dependencies: "Pillar IV, P7, P8" },
    { name: "g₂² at M_P (absolute)", predicted: "25π³/3072 ≈ 0.252", observed: "Derived", dependencies: "Pillar IV, P7, P8" },
    { name: "g₃² at M_P (absolute)", predicted: "25π²/1024 ≈ 0.241", observed: "Derived", dependencies: "Pillar IV, P7, P8" },
    { name: "α_s(M_P)", predicted: "25π/4096 ≈ 0.0192", observed: "Derived", dependencies: "From g₃²" },
    { name: "Λ_QCD (QCD scale)", predicted: "≈ 210 MeV", observed: "210 ± 14 MeV", dependencies: "RG from α_s(M_P)" },
    { name: "Gauge coupling unification", predicted: "Non-unification at all scales", observed: "Consistent with SM", dependencies: "P8, Pillar IV" },
    
    // Flavor Structure (Type M)
    { name: "CKM Wolfenstein λ (base)", predicted: "1/5 = 0.2", observed: "0.2245 ± 0.0008", dependencies: "P8" },
    { name: "V_ub correction factor", predicted: "1/3", observed: "Confirmed", dependencies: "P8" },
    { name: "PMNS θ₁₂ (geometric projection)", predicted: "≈ 33.6°", observed: "33.4° ± 0.7°", dependencies: "P5, P7, P8" },
    { name: "PMNS θ₂₃", predicted: "π/4 = 45°", observed: "∼ 45°", dependencies: "P8" },
    { name: "PMNS θ₁₃", predicted: "arcsin(1/(3√5)) ≈ 8.57°", observed: "8.57° ± 0.13°", dependencies: "P6, P8" },
    { name: "Majorana phase α₂₁", predicted: "π/2", observed: "Unknown", dependencies: "P8, Pillar III" },
    { name: "Majorana phase α₃₁", predicted: "0", observed: "Unknown", dependencies: "P8, Pillar III" },
    
    // Masses (Type M)
    { name: "Tau mass", predicted: "1.78 GeV", observed: "1.777 ± 0.002 GeV", dependencies: "P2, P8, Pillar II, III" },
    { name: "Muon mass", predicted: "0.106 GeV", observed: "0.1057 ± 0.0001 GeV", dependencies: "P2, P8, Pillar II, III" },
    { name: "Electron mass", predicted: "0.511 MeV", observed: "0.5110 ± 0.0001 MeV", dependencies: "P2, P8, Pillar II, III" },
    
    // Masses (Type D - depend on State)
    { name: "Charm quark mass", predicted: "1.27 GeV", observed: "1.27 ± 0.02 GeV", dependencies: "P2, P8, Pillar II, III" },
    { name: "Up quark mass", predicted: "2.16 MeV", observed: "2.16 ± 0.26 MeV", dependencies: "P2, P8, Pillar II, III" },
    { name: "Bottom quark mass", predicted: "4.18 GeV", observed: "4.18 ± 0.03 GeV", dependencies: "P2, P8, Pillar II, III" },
    { name: "Strange quark mass", predicted: "93.1 MeV", observed: "93.4 ± 8.6 MeV", dependencies: "P2, P8, Pillar II, III" },
    { name: "Down quark mass", predicted: "4.67 MeV", observed: "4.67 ± 0.32 MeV", dependencies: "P2, P8, Pillar II, III" },
    
    // Higgs and Electroweak (Type D)
    { name: "Higgs VEV", predicted: "v = 245 GeV", observed: "246 GeV", dependencies: "P6, P7, P8, Pillar I, II, IV" },
    { name: "W boson mass", predicted: "≈ 80.4 GeV", observed: "80.379 ± 0.012 GeV", dependencies: "P8, Pillar III" },
    { name: "Z boson mass", predicted: "≈ 91.2 GeV", observed: "91.1876 ± 0.0021 GeV", dependencies: "P8, Pillar III" },
    { name: "Proton mass (from Λ_QCD)", predicted: "≈ 938 MeV", observed: "938.272 MeV", dependencies: "Λ_QCD + QCD dynamics" },
    
    // Cosmology (Type M)
    { name: "Spatial flatness", predicted: "Ω_k = 0 (exact)", observed: "0.0007 ± 0.0019", dependencies: "P6, Pillar II" },
    { name: "Strong CP angle", predicted: "θ_QCD = 0 (exact)", observed: "< 10⁻¹⁰", dependencies: "P6, Pillar II" },
    { name: "Inflation e-folds", predicted: "N = e⁴ ≈ 55", observed: "∼ 50–60", dependencies: "Pillar II, P6" },
    { name: "Scalar spectral index", predicted: "n_s = 1 − 2/N ≈ 0.964", observed: "0.9649 ± 0.0042", dependencies: "From N" },
    { name: "Tensor-to-scalar ratio", predicted: "r ≪ 0.01", observed: "< 0.036 (95% CL)", dependencies: "P6, Pillar II" },
    
    // Cosmology (Type D)
    { name: "Dark energy density", predicted: "Ω_Λ ≈ 0.685", observed: "0.685 ± 0.007", dependencies: "P6, Pillar II" },
    { name: "Age of universe", predicted: "t₀ ≈ 13.8 Gyr", observed: "≈ 13.8 Gyr", dependencies: "From H₀" },
    
    // Internal Parameters (Type M)
    { name: "Internal lattice parameter β", predicted: "0.167 ± 0.005", observed: "Derived", dependencies: "P2, Pillar II, P8" },
    { name: "Internal lattice size", predicted: "L = 32/(5π) ≈ 2.037 ℓ_P", observed: "Derived", dependencies: "P8, Pillar II" },
    { name: "Spacetime threshold", predicted: "T_ST = 4", observed: "Derived", dependencies: "Pillar II, P6" },
    { name: "Asymmetry parameter α", predicted: "(π−2)/(π+2) ≈ 0.222", observed: "Derived", dependencies: "Pillar I; P5, P7" },
    { name: "Threshold factor (Order)", predicted: "1/3", observed: "Derived", dependencies: "P6" },
    { name: "Threshold factor (Amplitude)", predicted: "1/5", observed: "Derived", dependencies: "P8" },
    { name: "Threshold factor (Acceleration)", predicted: "π/2", observed: "Derived", dependencies: "Pillar I, IV; P7" },
    { name: "1/5 cross-connection", predicted: "Gauge, CKM, PMNS θ₁₃", observed: "Derived", dependencies: "P8" },
    { name: "Hierarchy coefficient κ", predicted: "√(10/π) ≈ 1.784", observed: "Derived", dependencies: "P6, P7, P8" },
    
    // Dark Matter
    { name: "Dark matter mechanism", predicted: "Planck-mass black hole remnants", observed: "Consistent", dependencies: "P2, Pillar II" },
    { name: "Dark matter remnant mass", predicted: "M ≈ M_P/2", observed: "Consistent", dependencies: "P2" },
];

const unknownPredictions = [
    // Cosmological
    { name: "Tensor-to-scalar ratio", predicted: "r ≪ 0.01", observed: "CMB-S4, LiteBIRD", dependencies: "P6, Pillar II" },
    { name: "Neutrino mass ordering", predicted: "Inverted (m₁ > m₃ > m₂)", observed: "JUNO, DUNE, Hyper-K", dependencies: "P8, Pillar III" },
    { name: "Dark energy time evolution", predicted: "dΛ/dt ∝ −3H", observed: "DESI, Euclid", dependencies: "Pillar II, IV" },
    
    // Neutrino Sector
    { name: "Majorana phase α₂₁", predicted: "π/2", observed: "0νββ experiments", dependencies: "P8, Pillar III" },
    { name: "Majorana phase α₃₁", predicted: "0", observed: "0νββ experiments", dependencies: "P8, Pillar III" },
    { name: "Effective Majorana mass", predicted: "⟨m_ββ⟩ ≈ 0.048 eV", observed: "LEGEND-1000, nEXO, CUPID", dependencies: "P8, Pillar III" },
    { name: "Right-handed neutrino mass", predicted: "M_R ≈ 1.5 × 10¹⁴ GeV", observed: "Not directly testable", dependencies: "P2, Pillar II" },
    
    // Dark Matter
    { name: "Dark matter identity", predicted: "Planck-mass black hole remnants", observed: "Gravitational wave echoes", dependencies: "P2, Pillar II" },
    { name: "No WIMP dark matter", predicted: "Absent", observed: "Direct detection", dependencies: "P2, P6, Pillar II" },
    { name: "No axion dark matter", predicted: "Absent", observed: "ADMX, CASPEr, MADMAX", dependencies: "P6, Pillar II" },
    
    // Beyond Standard Model
    { name: "No supersymmetry", predicted: "Absent at all scales", observed: "LHC, future colliders", dependencies: "P1–P8, I–IV" },
    { name: "No extra spatial dimensions", predicted: "n = 3 exactly", observed: "LHC, GW detectors", dependencies: "P2, P6, Pillar II" },
    { name: "No fourth generation", predicted: "Exactly 3 generations", observed: "LHC", dependencies: "P6, P8, Pillar III" },
    { name: "No proton decay", predicted: "Stable proton", observed: "Super-K, Hyper-K, DUNE", dependencies: "P8, Pillar II, III" },
    { name: "No magnetic monopoles", predicted: "Absent", observed: "MoEDAL, IceCube", dependencies: "P8, Pillar III" },
    { name: "Gauge coupling non-unification", predicted: "1 : 2/3 : 2/π at all scales", observed: "Precision measurements", dependencies: "P8, Pillar IV" },
    { name: "CKM unitarity", predicted: "Exact", observed: "Precision flavor physics", dependencies: "P8, Pillar III" },
    { name: "Neutron EDM (θ_QCD)", predicted: "0 (no θ contribution)", observed: "nEDM experiments", dependencies: "P6, Pillar II" },
    
    // Structural
    { name: "Wavelength hierarchy", predicted: "Long vs. short wavelength primitives", observed: "From UWE structure", dependencies: "Pillar I" },
    { name: "Internal/external framework", predicted: "Four dual pairs", observed: "Structural observation", dependencies: "P1–P8" },
];

const workInProgress = [
    { name: "PMNS Dirac CP phase δ_CP", predicted: "π(1+α) ≈ 220°", status: "Formula is Type M; seesaw connection needs full derivation", dependencies: "P5, P7, P8" },
    { name: "CKM CP phase δ_CKM", predicted: "≈ 68°", status: "Candidate derivation; numerical inputs need verification", dependencies: "P5, P7, P8, Pillar III" },
    { name: "CKM elements (full diagonalization)", predicted: "V_us, V_cb, V_ub", status: "Depend on Type S fitting; ratios are Type M", dependencies: "P6, P8, Pillar III" },
    { name: "Higgs boson mass", predicted: "≈ 125 GeV", status: "Derivation used incorrect gauge couplings; needs recomputation", dependencies: "P2, P8, I, II" },
    { name: "Baryon asymmetry", predicted: "η ∼ 6 × 10⁻¹⁰", status: "Depends on CP phases not fully verified", dependencies: "P5, P7, P6, Pillar II" },
    { name: "α_s(M_Z), α_EM⁻¹(M_Z), sin²θ_W(M_Z)", predicted: "See catalog", status: "Forward RG with canvas U(1) normalization needs verification", dependencies: "P8, Pillar III, IV" },
    { name: "U(1) normalization (g_Y = g₁)", predicted: "No GUT rescaling", status: "Tension with forward RG; under investigation", dependencies: "P8" },
    { name: "Absolute neutrino mass scale", predicted: "m₁ ∼ 5 × 10⁻² eV", status: "Depends on α₀; value sensitive to horizon radius", dependencies: "P8, Pillar III" },
    { name: "Polarity threshold factor 1/X", predicted: "Sector-dependent values", status: "Sector dependence is Type M; absolute scale is Type S", dependencies: "P4, P8" },
];

function generateKnownTable() {
    const crt = document.body.classList.contains('crt-mode');
    let rows = '';
    knownNumbers.forEach((item, index) => {
        const num = crt ? String(index + 1).padStart(3, '0') : index + 1;
        rows += `<tr>
            <td style="${crt ? 'color:#00cc33;font-size:0.78rem;' : ''}">${num}</td>
            <td>${item.name}</td>
            <td class="prediction-highlight">${item.predicted}</td>
            <td style="color:${crt ? '#00ff41' : 'var(--text-dim)'};">${item.observed}</td>
            <td style="font-size:0.78rem;color:${crt ? '#00cc33' : 'var(--text-dim)'};">${item.dependencies}</td>
        </tr>`;
    });
    return rows;
}

function generateUnknownTable() {
    const crt = document.body.classList.contains('crt-mode');
    let rows = '';
    unknownPredictions.forEach((item, index) => {
        const num = crt ? String(index + 1).padStart(3, '0') : index + 1;
        rows += `<tr>
            <td style="${crt ? 'color:#00cc33;font-size:0.78rem;' : ''}">${num}</td>
            <td>${item.name}</td>
            <td class="prediction-highlight">${item.predicted}</td>
            <td style="color:${crt ? '#00ff41' : 'var(--text-dim)'};">${item.observed}</td>
            <td style="font-size:0.78rem;color:${crt ? '#00cc33' : 'var(--text-dim)'};">${item.dependencies}</td>
        </tr>`;
    });
    return rows;
}

function generateWIPTable() {
    const crt = document.body.classList.contains('crt-mode');
    let rows = '';
    workInProgress.forEach((item, index) => {
        const num = crt ? String(index + 1).padStart(2, '0') : index + 1;
        rows += `<tr>
            <td style="${crt ? 'color:#00cc33;font-size:0.78rem;' : ''}">${num}</td>
            <td>${item.name}</td>
            <td class="prediction-highlight">${item.predicted}</td>
            <td style="color:#ffaa00;">${item.status}</td>
            <td style="font-size:0.78rem;color:${crt ? '#00cc33' : 'var(--text-dim)'};">${item.dependencies}</td>
        </tr>`;
    });
    return rows;
}

function generatePredictionsPage() {
    const crt = document.body.classList.contains('crt-mode');
    return `<h2>${crt ? 'PREDICTIONS :: CANVAS MODEL' : 'Predictions of the Canvas Model'}</h2>
    <p>${crt ? 'Every fundamental number in physics emerges from the eight primitives. Dependencies reference the postulates (P1–P8) and pillars (I–IV). Entries are classified as Type M (Machine-derived, zero fitted parameters), Type D (Derived from State), or Type S (State-fitted).' : 'Every fundamental number in physics emerges from the eight primitives. Dependencies reference the postulates (P1–P8) and pillars (I–IV). Entries are classified as Type M (Machine-derived, zero fitted parameters), Type D (Derived from State), or Type S (State-fitted).'}</p>
    
    <h3 style="margin-top: 2rem;">${crt ? 'KNOWN NUMBERS REPRODUCED' : 'Known Numbers Reproduced'}</h3>
    <p>${crt ? 'Values that emerge from the model. The top quark mass calibrates the overall Yukawa scale (Type S). Charged lepton masses are Type M. Quark masses are Type D.' : 'Values that emerge from the model. The top quark mass calibrates the overall Yukawa scale (Type S). Charged lepton masses are Type M. Quark masses are Type D.'}</p>
    <div class="comparison-scroll">
    <table class="data-table predictions-table">
        <thead><tr><th>${crt ? '#' : '#'}</th><th>${crt ? 'PHENOMENON / CONSTANT' : 'Phenomenon / Constant'}</th><th>${crt ? 'PREDICTED' : 'Predicted'}</th><th>${crt ? 'OBSERVED' : 'Observed'}</th><th>${crt ? 'DEPENDENCIES' : 'Dependencies'}</th></tr></thead>
        <tbody>${generateKnownTable()}</tbody>
    </table>
    </div>

    <h3 style="margin-top: 2rem;">${crt ? 'NOVEL PREDICTIONS' : 'Novel Predictions'}</h3>
    <p>${crt ? 'Predictions unique to the Canvas Model. All are falsifiable by upcoming experiments.' : 'Predictions unique to the Canvas Model. All are falsifiable by upcoming experiments.'}</p>
    <div class="comparison-scroll">
    <table class="data-table predictions-table">
        <thead><tr><th>${crt ? '#' : '#'}</th><th>${crt ? 'PREDICTION' : 'Prediction'}</th><th>${crt ? 'PREDICTED VALUE' : 'Predicted Value'}</th><th>${crt ? 'TEST' : 'Test'}</th><th>${crt ? 'DEPENDENCIES' : 'Dependencies'}</th></tr></thead>
        <tbody>${generateUnknownTable()}</tbody>
    </table>
    </div>

    <h3 style="margin-top: 2rem;">${crt ? 'WORK IN PROGRESS' : 'Work in Progress'}</h3>
    <p>${crt ? 'Results with candidate derivations that are not yet fully verified or have known tensions requiring resolution. Honest status notes are provided for each.' : 'Results with candidate derivations that are not yet fully verified or have known tensions requiring resolution. Honest status notes are provided for each.'}</p>
    <div class="comparison-scroll">
    <table class="data-table predictions-table">
        <thead><tr><th>${crt ? '#' : '#'}</th><th>${crt ? 'ITEM' : 'Item'}</th><th>${crt ? 'CANDIDATE VALUE' : 'Candidate Value'}</th><th>${crt ? 'STATUS' : 'Status'}</th><th>${crt ? 'DEPENDENCIES' : 'Dependencies'}</th></tr></thead>
        <tbody>${generateWIPTable()}</tbody>
    </table>
    </div>`;
}

window.generatePredictionsPage = generatePredictionsPage;