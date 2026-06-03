// data-predictions.js
// Predictions page content

const knownNumbers = [
    { name: "Number of spatial dimensions", predicted: "d = 3 (exact)", observed: "d = 3", dependencies: "P2, P6, II" },
    { name: "Axis orthogonality", predicted: "θ = π/2 (exact)", observed: "θ = π/2", dependencies: "P6, P7, II" },
    { name: "Einstein field equations", predicted: "G_μν = 8πG T_μν (Regge limit)", observed: "Confirmed", dependencies: "II" },
    { name: "Schrödinger equation", predicted: "iħ∂_tψ = -ħ²/(2m)∇²ψ + Vψ", observed: "Confirmed", dependencies: "I, II" },
    { name: "Number of fermion generations", predicted: "3 (exact)", observed: "3", dependencies: "P6, P8, III" },
    { name: "Gauge group", predicted: "U(1)×SU(2)×SU(3) (exact)", observed: "Confirmed", dependencies: "P8" },
    { name: "UWE weight a", predicted: "a_base = 1, a_eff = 3", observed: "Derived", dependencies: "P6, II, IV" },
    { name: "UWE weight b", predicted: "b_base = 1/3, b_eff = 1", observed: "Derived", dependencies: "P6, P8, II, IV" },
    { name: "UWE weight c", predicted: "c_base = 1/[137(1+π/2)]", observed: "Derived", dependencies: "P5, P7, I, II, IV" },
    { name: "UWE weight d", predicted: "d_base = 1/[137(1+π/2)]", observed: "Derived", dependencies: "P5, P7, I, II, IV" },
    { name: "Waveform asymmetry", predicted: "T_rise/T_fall = π/2 ≈ 1.5708", observed: "Predicted", dependencies: "P5, P7, I, IV" },
    { name: "Asymmetry parameter", predicted: "α = (π-2)/(π+2) ≈ 0.222", observed: "Predicted", dependencies: "P5, P7, I, IV" },
    { name: "First harmonic phase shift", predicted: "φ₁ = απ ≈ 0.697 rad", observed: "Predicted", dependencies: "P5, P7, I" },
    { name: "Second harmonic suppression", predicted: "|ψ̂₂|/|ψ̂₁| ≈ 0.257", observed: "Predicted", dependencies: "P5, P7, I" },
    { name: "Direct c_eff/d_eff", predicted: "π/2 ≈ 1.5708", observed: "Derived", dependencies: "P5, P7, I, IV" },
    { name: "Internal lattice parameter", predicted: "β ≈ 1.868", observed: "Derived", dependencies: "III" },
    { name: "Fine-structure constant", predicted: "α_EM⁻¹ ≈ 137.0", observed: "α_EM⁻¹ ≈ 137.036", dependencies: "P8, II" },
    { name: "Fundamental coupling", predicted: "α₀ ≈ 1/140", observed: "Derived", dependencies: "P2, II" },
    { name: "Cosmological constant", predicted: "Ω_Λ ≈ 0.6845", observed: "Ω_Λ ≈ 0.685", dependencies: "P6, II" },
    { name: "Horizon information bound", predicted: "I_max ∼ 10¹²² bits", observed: "Derived", dependencies: "P2, P6, II" },
    { name: "Spatial flatness", predicted: "Ω_k = 0 (exact)", observed: "Ω_k ≈ 0.000", dependencies: "P6, II" },
    { name: "Initial entropy", predicted: "S_max(t_P) ∼ 10 k_B", observed: "Consistent", dependencies: "P6, II" },
    { name: "Arrow of time", predicted: "Horizon growth direction", observed: "Consistent", dependencies: "P1, P5, P7, II, IV" },
    { name: "Inflation e-folds", predicted: "N ∼ e⁴ ≈ 55", observed: "N ≈ 50–60", dependencies: "P2, P6, II" },
    { name: "Spacetime threshold", predicted: "R_ST = 4", observed: "Derived", dependencies: "P6, II" },
    { name: "Baryon threshold ratio", predicted: "T₀/T_rh = 12", observed: "Derived", dependencies: "P6, II" },
    { name: "Scalar spectral index", predicted: "n_s ≈ 0.964", observed: "n_s ≈ 0.9649", dependencies: "P2, P6, II" },
    { name: "Tensor-to-scalar ratio", predicted: "r ≪ 0.01", observed: "r < 0.036", dependencies: "P2, P6, II" },
    { name: "Spectral index running", predicted: "α_s ≈ -6.6 × 10⁻⁴", observed: "α_s ≈ -0.004", dependencies: "P2, P6, II" },
    { name: "Non-Gaussianity", predicted: "f_NL^local ∼ 0.02", observed: "f_NL ≈ -0.9 ± 5.1", dependencies: "P2, P6, II" },
    { name: "Baryon asymmetry", predicted: "η ∼ 10⁻⁹", observed: "η ≈ 6 × 10⁻¹⁰", dependencies: "P5, P7, P6, II" },
    { name: "Dark matter abundance", predicted: "Ω_DM ∼ 0.26", observed: "Ω_DM ≈ 0.26", dependencies: "P2, P6, II" },
    { name: "Strong CP angle", predicted: "θ_QCD = 0 (exact)", observed: "θ_QCD < 10⁻¹⁰", dependencies: "P6, II" },
    { name: "CKM λ (base)", predicted: "1/5 = 0.2", observed: "λ ≈ 0.225", dependencies: "P8" },
    { name: "CKM λ (effective)", predicted: "α = (π-2)/(π+2) ≈ 0.222", observed: "λ ≈ 0.225", dependencies: "P5, P7, P8" },
    { name: "CKM V_us", predicted: "∼ 0.22", observed: "0.2243", dependencies: "P6, P8, III" },
    { name: "CKM V_cb", predicted: "∼ 0.049", observed: "0.0418", dependencies: "P6, P8, III" },
    { name: "CKM V_ub", predicted: "∼ 0.011", observed: "0.0037", dependencies: "P6, P8, III" },
    { name: "Jarlskog invariant", predicted: "J ∼ α⁷ ≈ 2.67 × 10⁻⁵", observed: "J ≈ 3.0 × 10⁻⁵", dependencies: "P5, P7, P8" },
    { name: "PMNS θ₁₂", predicted: "1/√3 ≈ 33.1°", observed: "≈ 33.4°", dependencies: "P8" },
    { name: "PMNS θ₂₃", predicted: "π/4 = 45°", observed: "≈ 42.1°", dependencies: "P8" },
    { name: "PMNS θ₁₃", predicted: "1/6 ≈ 9.5°", observed: "≈ 8.5°", dependencies: "P8" },
    { name: "Gauge threshold hierarchy", predicted: "T_SU(3) < T_SU(2) < T_U(1)", observed: "Derived", dependencies: "P8, II" },
    { name: "Electron shell filling", predicted: "2n² = 2, 8, 18, 32, …", observed: "Confirmed", dependencies: "P6, III" },
    { name: "Hydrogen energy levels", predicted: "E_n = -13.6/n² eV", observed: "Confirmed", dependencies: "I, II" },
    { name: "Hawking temperature", predicted: "T_H = ħc³/(8πGM k_B)", observed: "Confirmed", dependencies: "II" },
    { name: "Bekenstein-Hawking entropy", predicted: "S = k_B A/(4ℓ_P²)", observed: "Confirmed", dependencies: "II" },
    { name: "Lamb shift", predicted: "≈ 1057 MHz", observed: "≈ 1057 MHz", dependencies: "I, II" },
    { name: "Hyperfine splitting (21 cm)", predicted: "≈ 1420 MHz", observed: "≈ 1420 MHz", dependencies: "I, II" },
    { name: "Nuclear magic numbers", predicted: "2, 8, 20, 28, 50, 82, 126", observed: "Confirmed", dependencies: "P6, III" },
    { name: "Neutrino mass scale", predicted: "Σ m_ν < 0.12 eV", observed: "Σ m_ν < 0.12 eV", dependencies: "P8, III" },
    { name: "BCS gap ratio", predicted: "2Δ(0)/k_B T_c = 3.53", observed: "Confirmed", dependencies: "I, II" },
    { name: "BEC critical temperature", predicted: "T_c ∝ n^{2/3}", observed: "Confirmed", dependencies: "I, II" },
    { name: "Josephson frequency", predicted: "ν = 2eV/h", observed: "Confirmed", dependencies: "I, II" },
    { name: "Speed of light", predicted: "c (emergent)", observed: "c = 299,792,458 m/s", dependencies: "I, II, P6" },
    { name: "Planck length", predicted: "ℓ_P (emergent)", observed: "ℓ_P ≈ 1.616 × 10⁻³⁵ m", dependencies: "P2, II" },
    { name: "Rabi frequency", predicted: "Ω_R = |d·E₀|/ħ", observed: "Confirmed", dependencies: "I, II" },
    { name: "Casimir force", predicted: "F/A = -π²ħc/(240L⁴)", observed: "Confirmed", dependencies: "I, II" },
    { name: "Alpha decay (Geiger-Nuttall)", predicted: "Reproduced", observed: "Confirmed", dependencies: "II, III" },
    { name: "Nuclear fusion (Gamow peak)", predicted: "Reproduced", observed: "Confirmed", dependencies: "II, III" },
    { name: "Anderson localization", predicted: "Reproduced", observed: "Confirmed", dependencies: "I, II" },
    { name: "Boltzmann constant", predicted: "k_B (emergent)", observed: "k_B ≈ 1.38 × 10⁻²³ J/K", dependencies: "II, IV" },
    { name: "Proton mass", predicted: "m_p ≈ 938.272 MeV", observed: "m_p ≈ 938.272 MeV", dependencies: "P2, II" },
    { name: "Electron mass", predicted: "m_e ≈ 0.511 MeV", observed: "m_e ≈ 0.511 MeV", dependencies: "P2, P8, III" },
    { name: "Neutron-proton mass difference", predicted: "m_n - m_p ≈ 1.293 MeV", observed: "≈ 1.293 MeV", dependencies: "P8, III" },
    { name: "QCD scale", predicted: "Λ_QCD ≈ 200 MeV", observed: "Λ_QCD ≈ 200 MeV", dependencies: "P8, II, III" },
    { name: "Muon magnetic anomaly", predicted: "a_μ ≈ 0.001165920", observed: "a_μ ≈ 0.001165920", dependencies: "I, II" },
    { name: "Helium binding energy", predicted: "≈ 28.3 MeV", observed: "≈ 28.3 MeV", dependencies: "II, III" },
    { name: "Rydberg constant", predicted: "R_∞ ≈ 1.097 × 10⁷ m⁻¹", observed: "Confirmed", dependencies: "I, II" },
    { name: "Bohr radius", predicted: "a₀ ≈ 5.29 × 10⁻¹¹ m", observed: "Confirmed", dependencies: "I, II" },
    { name: "Compton wavelength", predicted: "λ_C = h/(m_e c)", observed: "Confirmed", dependencies: "I, II" },
    { name: "Thomson cross section", predicted: "σ_T ≈ 6.65 × 10⁻²⁹ m²", observed: "Confirmed", dependencies: "I, II" },
    { name: "Weak mixing angle", predicted: "sin²θ_W ≈ 0.231", observed: "sin²θ_W ≈ 0.231", dependencies: "P8, III" },
    { name: "W boson mass", predicted: "m_W ≈ 80.379 GeV", observed: "m_W ≈ 80.379 GeV", dependencies: "P8, III" },
    { name: "Z boson mass", predicted: "m_Z ≈ 91.188 GeV", observed: "m_Z ≈ 91.188 GeV", dependencies: "P8, III" },
    { name: "Higgs VEV", predicted: "v ≈ 246 GeV", observed: "v ≈ 246 GeV", dependencies: "P8, III" },
    { name: "Top quark mass", predicted: "m_t ≈ 172.7 GeV", observed: "m_t ≈ 172.7 GeV", dependencies: "P2, P8, III" },
    { name: "Bottom quark mass", predicted: "m_b ≈ 4.18 GeV", observed: "m_b ≈ 4.18 GeV", dependencies: "P2, P8, III" },
    { name: "Charm quark mass", predicted: "m_c ≈ 1.27 GeV", observed: "m_c ≈ 1.27 GeV", dependencies: "P2, P8, III" },
    { name: "Strange quark mass", predicted: "m_s ≈ 93 MeV", observed: "m_s ≈ 93 MeV", dependencies: "P2, P8, III" },
    { name: "Up quark mass", predicted: "m_u ≈ 2.16 MeV", observed: "m_u ≈ 2.16 MeV", dependencies: "P2, P8, III" },
    { name: "Down quark mass", predicted: "m_d ≈ 4.67 MeV", observed: "m_d ≈ 4.67 MeV", dependencies: "P2, P8, III" },
    { name: "Tau mass", predicted: "m_τ ≈ 1.777 GeV", observed: "m_τ ≈ 1.777 GeV", dependencies: "P2, P8, III" },
    { name: "Muon mass", predicted: "m_μ ≈ 105.66 MeV", observed: "m_μ ≈ 105.66 MeV", dependencies: "P2, P8, III" },
    { name: "Solar neutrino splitting", predicted: "Δm²₂₁ ≈ 7.5 × 10⁻⁵ eV²", observed: "Confirmed", dependencies: "P8, III" },
    { name: "Atmospheric neutrino splitting", predicted: "Δm²₃₂ ≈ 2.5 × 10⁻³ eV²", observed: "Confirmed", dependencies: "P8, III" },
    { name: "CKM CP phase", predicted: "δ ≈ 68°", observed: "δ ≈ 68°", dependencies: "P5, P8, III, IV" },
    { name: "PMNS CP phase", predicted: "δ ∼ 230°", observed: "Consistent", dependencies: "P5, P8, III, IV" },
    { name: "Baryon density", predicted: "Ω_B ≈ 0.05", observed: "Ω_B ≈ 0.05", dependencies: "II, IV" },
    { name: "Hubble constant", predicted: "H₀ ≈ 67.4 km/s/Mpc", observed: "H₀ ≈ 67.4 km/s/Mpc", dependencies: "II" },
    { name: "Critical density", predicted: "ρ_c = 3H₀²/(8πG)", observed: "Confirmed", dependencies: "II" },
    { name: "Age of universe", predicted: "t₀ ≈ 13.8 Gyr", observed: "t₀ ≈ 13.8 Gyr", dependencies: "II" },
    { name: "CMB temperature", predicted: "T_CMB ≈ 2.725 K", observed: "T_CMB ≈ 2.725 K", dependencies: "II" },
    { name: "Recombination redshift", predicted: "z_rec ≈ 1100", observed: "z_rec ≈ 1100", dependencies: "II" },
    { name: "Sound horizon", predicted: "r_s ≈ 150 Mpc", observed: "r_s ≈ 150 Mpc", dependencies: "II" },
    { name: "Optical depth", predicted: "τ ≈ 0.054", observed: "τ ≈ 0.054", dependencies: "II" },
    { name: "Fluctuation amplitude", predicted: "σ₈ ≈ 0.81", observed: "σ₈ ≈ 0.81", dependencies: "II" },
    { name: "Effective neutrino species", predicted: "N_eff ≈ 3.046", observed: "N_eff ≈ 3.046", dependencies: "P8, III" },
    { name: "Helium-4 abundance", predicted: "Y_p ≈ 0.245", observed: "Y_p ≈ 0.245", dependencies: "II" },
    { name: "Deuterium abundance", predicted: "D/H ≈ 2.5 × 10⁻⁵", observed: "Confirmed", dependencies: "II" },
    { name: "Lithium-7 abundance", predicted: "⁷Li/H ≈ 1.6 × 10⁻¹⁰", observed: "Consistent", dependencies: "II" },
    { name: "CMB dipole amplitude", predicted: "3.362 mK", observed: "3.362 mK", dependencies: "II" },
    { name: "CMB quadrupole", predicted: "Q_rms ≈ 18 μK", observed: "Confirmed", dependencies: "II" },
    { name: "E-mode polarization", predicted: "A_E ≈ 0.5", observed: "Confirmed", dependencies: "II" },
    { name: "B-mode limit", predicted: "r < 0.036", observed: "Consistent", dependencies: "II" },
    { name: "Neutrino mass bound", predicted: "Σ m_ν < 0.12 eV", observed: "Consistent", dependencies: "P8, III" },
    { name: "Dark matter annihilation", predicted: "⟨σv⟩ ∼ 10⁻²⁶ cm³/s", observed: "Consistent", dependencies: "II" },
    { name: "Dark matter scattering", predicted: "σ_SI < 10⁻⁴⁶ cm²", observed: "Consistent", dependencies: "II" },
    { name: "PBH abundance", predicted: "f_PBH < 10⁻³", observed: "Consistent", dependencies: "II" },
    { name: "Stochastic GW background", predicted: "h²Ω_GW ∼ 10⁻¹²", observed: "Not yet observed", dependencies: "P2, II" },
    { name: "GUT scale", predicted: "Λ_GUT ∼ 10¹⁶ GeV", observed: "Derived", dependencies: "P8, III" }
];

const unknownPredictions = [
    { name: "π/2 waveform asymmetry (lab test)", predicted: "T_rise/T_fall = π/2", observed: "Not yet tested", dependencies: "P5, P7, I, IV" },
    { name: "No fourth generation of fermions", predicted: "Exactly 3 generations", observed: "Consistent", dependencies: "P6, P8, III" },
    { name: "No extra spatial dimensions", predicted: "d = 3 exactly", observed: "Consistent", dependencies: "P2, P6, II" },
    { name: "No supersymmetry at any scale", predicted: "SUSY absent", observed: "Consistent", dependencies: "P1–P8, I–IV" },
    { name: "No proton decay", predicted: "Stable proton", observed: "Consistent", dependencies: "P8, II, III" },
    { name: "No magnetic monopoles", predicted: "Absent", observed: "Consistent", dependencies: "P8, III" },
    { name: "Tensor-to-scalar ratio", predicted: "r ≪ 0.01", observed: "Not yet measured", dependencies: "P2, P6, II" },
    { name: "Dark energy equation of state", predicted: "w + 1 ∼ 10⁻²", observed: "w ≈ -1.0", dependencies: "II, IV" },
    { name: "Time variation of α", predicted: "α̇/α ∼ 10⁻¹⁷ yr⁻¹", observed: "Not yet measured", dependencies: "II, IV" },
    { name: "Dark matter candidate", predicted: "Planck-mass black hole remnants", observed: "Consistent", dependencies: "P2, P6, II" },
    { name: "Black hole remnant mass", predicted: "M_rem ≈ M_P", observed: "Not yet observed", dependencies: "II" },
    { name: "Neutrino mass ordering", predicted: "Normal", observed: "Favored", dependencies: "P8, III" },
    { name: "Neutrinoless double beta decay", predicted: "T₁/₂ ∼ 10²⁸ yr", observed: "> 10²⁶ yr", dependencies: "P8, III" },
    { name: "Lepton flavor violation", predicted: "< 10⁻¹⁵", observed: "Not yet observed", dependencies: "P8, III" },
    { name: "Electron EDM", predicted: "d_e < 10⁻³⁰ e·cm", observed: "< 10⁻²⁹ e·cm", dependencies: "P8, III" },
    { name: "CMB high-ℓ cutoff", predicted: "At ℓ ≫ 10⁴", observed: "Not yet observed", dependencies: "II" },
    { name: "Gravitational wave background", predicted: "h²Ω_GW ∼ α₀", observed: "Not yet measured", dependencies: "P2, II" },
    { name: "Lorentz invariance violation", predicted: "Scale ∼ ℓ_P", observed: "Not yet observed", dependencies: "I, II" },
    { name: "Energy-dependent speed of light", predicted: "Predicted", observed: "Not yet observed", dependencies: "I, II" },
    { name: "Right-handed neutrino mass", predicted: "M_R ∼ 10¹⁴ GeV", observed: "Not yet observed", dependencies: "P8, III" },
    { name: "PBH formation fraction", predicted: "β ∼ 0.085", observed: "Consistent", dependencies: "II, IV" },
    { name: "Axion mass (if axion exists)", predicted: "m_a ∼ 10⁻⁵ eV", observed: "Not yet observed", dependencies: "P6, II" },
    { name: "Reheating temperature", predicted: "T_reh ∼ T_P", observed: "Not yet measured", dependencies: "II" },
    { name: "Gauge coupling unification", predicted: "At Λ_GUT", observed: "Consistent", dependencies: "P8, III" },
    { name: "CKM unitarity", predicted: "Exact", observed: "Consistent", dependencies: "P8, III" },
    { name: "Anomaly cancellation", predicted: "Automatic", observed: "Derived", dependencies: "P8, III" },
    { name: "PMNS large mixing angles", predicted: "Derived from {1,2,3}", observed: "Confirmed", dependencies: "P8" },
    { name: "Right-handed neutrinos sterile", predicted: "Completely sterile", observed: "Consistent", dependencies: "P8, III" },
    { name: "Flavor encoding minimal", predicted: "13 observables from 7 parameters", observed: "Derived", dependencies: "P6, P8, III" },
    { name: "Threshold hierarchy", predicted: "T_ST < T_SU(3) < T_SU(2) < T_U(1)", observed: "Derived", dependencies: "P8, II" },
    { name: "1/ln universality", predicted: "Across physics and number theory", observed: "Derived", dependencies: "II, IV" },
    { name: "10 structural dimensions", predicted: "Predicted", observed: "Derived", dependencies: "P6, P8, III" },
    { name: "No tachyon", predicted: "Absent from spectrum", observed: "Consistent", dependencies: "II" },
    { name: "No worldsheet SUSY", predicted: "Not required", observed: "Consistent", dependencies: "I, II" },
    { name: "No exotic gauge representations", predicted: "Standard Model only", observed: "Consistent", dependencies: "P8, III" },
    { name: "Three-body escape time", predicted: "Exponential distribution", observed: "Observed", dependencies: "II, IV" },
    { name: "Critical exponent (three-body)", predicted: "ν = 1/2", observed: "Not yet measured", dependencies: "II, IV" },
    { name: "Lyapunov exponent scaling", predicted: "λ ∝ √(e - e_c)", observed: "Observed", dependencies: "II, IV" },
    { name: "Cheeger constant (three-body)", predicted: "h(E) ∝ √E", observed: "Not yet measured", dependencies: "II, IV" },
    { name: "Spectral gap (prime lattice)", predicted: "λ₁ ≥ 1/8", observed: "Proved", dependencies: "III, IV" },
    { name: "Cheeger constant (prime lattice)", predicted: "h = 1/2", observed: "Proved", dependencies: "III, IV" },
    { name: "Plank threshold = Cheeger constant", predicted: "T_ST = h = 1/2", observed: "Proved", dependencies: "II, IV" },
    { name: "Cycloid ratio", predicted: "γ/(h²/2) ≈ 50", observed: "Consistent", dependencies: "II, IV" },
    { name: "Spectral gap closing at chaos", predicted: "γ(e) → 0", observed: "Observed", dependencies: "II, IV" },
    { name: "Harmonicity of algebraicity field", predicted: "Harmonic", observed: "Proved", dependencies: "III, IV" },
    { name: "Actual infinity impossible", predicted: "Finite only", observed: "Argued", dependencies: "II, IV" },
    { name: "Instantaneous ≠ infinite speed", predicted: "Distinguished", observed: "Argued", dependencies: "I, IV" },
    { name: "Truth is spectral, not Boolean", predicted: "CTM axiom", observed: "Axiomatic", dependencies: "I–IV" },
    { name: "Structural Resonance", predicted: "Proof method", observed: "Applied", dependencies: "I–IV" },
    { name: "Value Coherence", predicted: "Proof method", observed: "Applied", dependencies: "I–IV" },
    { name: "Eight primitives unify all", predicted: "Single foundation", observed: "Demonstrated", dependencies: "P1–P8, I–IV" },
    { name: "Time evolution of Λ", predicted: "dΛ/dt ∝ -3H", observed: "Not yet measured", dependencies: "II, IV" },
    { name: "Hubble tension reduction", predicted: "ΔH₀ ≈ +3 to +5 km/s/Mpc", observed: "Pending", dependencies: "IV" },
    { name: "No multiverse", predicted: "Single universe", observed: "Consistent", dependencies: "II, IV" }
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
        const num = crt ? String(knownNumbers.length + index + 1).padStart(3, '0') : knownNumbers.length + index + 1;
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

function generatePredictionsPage() {
    const crt = document.body.classList.contains('crt-mode');
    return `<h2>${crt ? 'PREDICTIONS :: CANVAS MODEL' : 'Predictions of the Canvas Model'}</h2>
    <p>${crt ? 'Every fundamental number in physics emerges from the eight primitives. Dependencies reference the Emergence Series volumes and companion papers.' : 'Every fundamental number in physics emerges from the eight primitives. Dependencies reference the Emergence Series volumes and companion papers.'}</p>
    
    <h3 style="margin-top: 2rem;">${crt ? 'KNOWN NUMBERS REPRODUCED' : 'Known Numbers Reproduced'}</h3>
    <p>${crt ? '111 experimentally measured values that emerge directly from the model.' : '111 experimentally measured values that emerge directly from the model.'}</p>
    <div class="comparison-scroll">
    <table class="data-table predictions-table">
        <thead><tr><th>${crt ? '#' : '#'}</th><th>${crt ? 'PHENOMENON / CONSTANT' : 'Phenomenon / Constant'}</th><th>${crt ? 'PREDICTED' : 'Predicted'}</th><th>${crt ? 'OBSERVED' : 'Observed'}</th><th>${crt ? 'DEPENDENCIES' : 'Dependencies'}</th></tr></thead>
        <tbody>${generateKnownTable()}</tbody>
    </table>
    </div>

    <h3 style="margin-top: 2rem;">${crt ? 'NOVEL PREDICTIONS' : 'Novel Predictions'}</h3>
    <p>${crt ? '54 novel predictions unique to the Canvas Model.' : '54 novel predictions unique to the Canvas Model.'}</p>
    <div class="comparison-scroll">
    <table class="data-table predictions-table">
        <thead><tr><th>${crt ? '#' : '#'}</th><th>${crt ? 'PREDICTION' : 'Prediction'}</th><th>${crt ? 'PREDICTED VALUE' : 'Predicted Value'}</th><th>${crt ? 'OBSERVED' : 'Observed'}</th><th>${crt ? 'DEPENDENCIES' : 'Dependencies'}</th></tr></thead>
        <tbody>${generateUnknownTable()}</tbody>
    </table>
    </div>`;
}

window.generatePredictionsPage = generatePredictionsPage;