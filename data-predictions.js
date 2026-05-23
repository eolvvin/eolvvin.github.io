// data-predictions.js
// Predictions page content

const knownNumbers = [
    { name: "Fine-structure constant", known: "α⁻¹ ≈ 137.036", predicted: "α⁻¹ ≈ 137", doi: "10.5281/zenodo.20047112" },
    { name: "Cosmological constant", known: "Λ ~ 10⁻⁵² m⁻²", predicted: "Λ ~ 10⁻⁵² m⁻²", doi: "10.5281/zenodo.20010872" },
    { name: "Scalar spectral index", known: "n_s ≈ 0.9649 ± 0.0042", predicted: "n_s ≈ 0.964", doi: "10.5281/zenodo.20047393" },
    { name: "Number of spatial dimensions", known: "d = 3", predicted: "d = 3", doi: "10.5281/zenodo.20011680" },
    { name: "Number of fermion generations", known: "3", predicted: "3", doi: "10.5281/zenodo.20031954" },
    { name: "Electron shell filling", known: "2n² = 2, 8, 18, 32, …", predicted: "2n² = 2, 8, 18, 32, …", doi: "10.5281/zenodo.19639452" },
    { name: "Hydrogen energy levels", known: "E_n = −13.6/n² eV", predicted: "E_n = −13.6/n² eV", doi: "10.5281/zenodo.19639452" },
    { name: "Hawking temperature", known: "T_H = ħc³/(8πGMk_B)", predicted: "T_H = ħc³/(8πGMk_B)", doi: "10.5281/zenodo.19952123" },
    { name: "Bekenstein-Hawking entropy", known: "S = k_B A/(4ℓ_P²)", predicted: "S = k_B A/(4ℓ_P²)", doi: "10.5281/zenodo.19952123" },
    { name: "Lamb shift", known: "≈ 1057 MHz", predicted: "≈ 1057 MHz", doi: "10.5281/zenodo.19957655" },
    { name: "Hyperfine splitting", known: "≈ 1420 MHz", predicted: "≈ 1420 MHz", doi: "10.5281/zenodo.19957655" },
    { name: "Nuclear magic numbers", known: "2, 8, 20, 28, 50, 82, 126", predicted: "2, 8, 20, 28, 50, 82, 126", doi: "10.5281/zenodo.19957751" },
    { name: "CKM Wolfenstein parameter", known: "λ ≈ 0.225 ± 0.001", predicted: "λ ≈ 0.22", doi: "10.5281/zenodo.20046668" },
    { name: "Neutrino mass scale", known: "Σm_ν < 0.12 eV", predicted: "~ 0.1 eV", doi: "10.5281/zenodo.19953721" },
    { name: "Baryon asymmetry", known: "η ≈ 6.1 × 10⁻¹⁰", predicted: "η ≈ 6 × 10⁻¹⁰", doi: "10.5281/zenodo.20047373" },
    { name: "BCS gap ratio", known: "2Δ(0)/k_B T_c = 3.53", predicted: "2Δ(0)/k_B T_c = 3.53", doi: "10.5281/zenodo.19954369" },
    { name: "BEC critical temperature", known: "T_c ∝ n^(2/3)", predicted: "T_c ∝ n^(2/3)", doi: "10.5281/zenodo.19954369" },
    { name: "Josephson frequency", known: "ν = 2eV/h", predicted: "ν = 2eV/h", doi: "10.5281/zenodo.19954369" },
    { name: "Speed of light", known: "c = 299,792,458 m/s", predicted: "c (emergent)", doi: "10.5281/zenodo.19639452" },
    { name: "Planck length", known: "ℓ_P ≈ 1.616 × 10⁻³⁵ m", predicted: "ℓ_P (emergent)", doi: "10.5281/zenodo.19639452" },
    { name: "Rabi frequency", known: "Ω_R = |d·E₀|/ħ", predicted: "Ω_R = |d·E₀|/ħ", doi: "10.5281/zenodo.19957655" },
    { name: "Casimir force", known: "F/A = −π²ħc/(240L⁴)", predicted: "F/A = −π²ħc/(240L⁴)", doi: "10.5281/zenodo.19951901" },
    { name: "Alpha decay Geiger-Nuttall law", known: "Observed", predicted: "Reproduced", doi: "10.5281/zenodo.19957751" },
    { name: "Nuclear fusion Gamow peak", known: "Observed", predicted: "Reproduced", doi: "10.5281/zenodo.19957751" },
    { name: "Anderson localization Thouless formula", known: "Observed", predicted: "Reproduced", doi: "10.5281/zenodo.19954369" }
];

const unknownPredictions = [
    { name: "Fundamental coupling", predicted: "α₀ ≈ 1/140", doi: "10.5281/zenodo.20046942" },
    { name: "Information bound", predicted: "I_max ≈ 10¹²² bits", doi: "10.5281/zenodo.20046915" },
    { name: "Residual asymmetry", predicted: "ε ~ 10⁻¹²²", doi: "10.5281/zenodo.20010872" },
    { name: "Time variation of α", predicted: "α̇/α ~ 10⁻¹⁷ yr⁻¹", doi: "10.5281/zenodo.20047271" },
    { name: "Dark energy equation of state", predicted: "w + 1 ~ 10⁻²", doi: "10.5281/zenodo.20047314" },
    { name: "Tensor-to-scalar ratio", predicted: "r ≪ 0.01", doi: "10.5281/zenodo.20047292" },
    { name: "Cutoff in CMB power spectrum", predicted: "At high multipoles", doi: "10.5281/zenodo.20047314" },
    { name: "Energy-dependent speed of light", predicted: "Predicted", doi: "10.5281/zenodo.20047314" },
    { name: "No proton decay", predicted: "Predicted", doi: "10.5281/zenodo.19953721" },
    { name: "No supersymmetry at any scale", predicted: "Predicted", doi: "10.5281/zenodo.20046890" },
    { name: "No extra spatial dimensions", predicted: "Predicted", doi: "10.5281/zenodo.20011680" },
    { name: "No fourth generation of fermions", predicted: "Predicted", doi: "10.5281/zenodo.20031954" },
    { name: "Axion mass", predicted: "m_a ~ 10⁻⁵ eV", doi: "10.5281/zenodo.20012618" },
    { name: "Right-handed neutrino mass", predicted: "M_R ~ 10¹⁴ GeV", doi: "10.5281/zenodo.19953721" },
    { name: "Remnant dark matter abundance", predicted: "Ω_rem ≈ 0.25", doi: "10.5281/zenodo.20020898" },
    { name: "Reheating temperature", predicted: "T_reh ~ √(M_P Γ)", doi: "10.5281/zenodo.19952123" },
    { name: "Number of e-folds", predicted: "N ~ 55", doi: "10.5281/zenodo.20047393" },
    { name: "Primordial gravitational wave amplitude", predicted: "P_h ∝ H²/M_P²", doi: "10.5281/zenodo.19952123" },
    { name: "Gauge coupling unification scale", predicted: "Λ_GUT", doi: "10.5281/zenodo.19953721" },
    { name: "Spectral gap of prime lattice", predicted: "λ₁ ≥ 1/8", doi: "10.5281/zenodo.20313135" },
    { name: "Cheeger constant of prime lattice", predicted: "h = 1/2", doi: "10.5281/zenodo.20313135" },
    { name: "Flat universe", predicted: "Ω_k = 0 exactly", doi: "10.5281/zenodo.20020854" },
    { name: "Hubble tension reduction", predicted: "ΔH₀ ≈ +3 to +5 km/s/Mpc", doi: "10.5281/zenodo.20020702" },
    { name: "Higgs mass", predicted: "Naturally light", doi: "10.5281/zenodo.20046890" },
    { name: "Top quark mass", predicted: "Heaviest", doi: "10.5281/zenodo.19953721" },
    { name: "Electron mass", predicted: "Lightest", doi: "10.5281/zenodo.19953721" },
    { name: "Neutrino mass ordering", predicted: "Normal", doi: "10.5281/zenodo.19953721" },
    { name: "Dark matter", predicted: "Cold, collisionless, Planck-mass remnants", doi: "10.5281/zenodo.20020898" },
    { name: "No magnetic monopoles observed", predicted: "Predicted", doi: "10.5281/zenodo.19953721" },
    { name: "1/ln universality", predicted: "Across physics and number theory", doi: "10.5281/zenodo.20046915" },
    { name: "10 structural dimensions", predicted: "Predicted", doi: "10.5281/zenodo.20021515" },
    { name: "No tachyon in physical spectrum", predicted: "Predicted", doi: "10.5281/zenodo.20021515" },
    { name: "No worldsheet supersymmetry required", predicted: "Predicted", doi: "10.5281/zenodo.20021515" },
    { name: "No exotic gauge representations", predicted: "Predicted", doi: "10.5281/zenodo.20046645" },
    { name: "Wolfenstein parameter", predicted: "λ = 1/(2+3) = 1/5 = 0.2", doi: "10.5281/zenodo.20046841" },
    { name: "Three-body escape time distribution", predicted: "Exponential", doi: "10.5281/zenodo.20313135" },
    { name: "Critical scaling near E = 0⁺", predicted: "γ ∝ E^(1/2)", doi: "10.5281/zenodo.20313135" },
    { name: "Hierarchical triple stability", predicted: "γ_stab ∝ ε^(−3/2)", doi: "10.5281/zenodo.20313135" },
    { name: "CKM unitarity is exact", predicted: "Predicted", doi: "10.5281/zenodo.20046668" },
    { name: "Anomaly cancellation is automatic", predicted: "Predicted", doi: "10.5281/zenodo.20046645" },
    { name: "PMNS large mixing angles", predicted: "Predicted", doi: "10.5281/zenodo.20046668" },
    { name: "13 flavor observables from 7 structural parameters", predicted: "Predicted", doi: "10.5281/zenodo.20046680" },
    { name: "Flavor encoding is provably minimal", predicted: "Predicted", doi: "10.5281/zenodo.20046680" },
    { name: "Right-handed neutrinos are completely sterile", predicted: "Predicted", doi: "10.5281/zenodo.20046645" },
    { name: "Actual infinity is impossible", predicted: "Predicted", doi: "10.5281/zenodo.20312907" },
    { name: "Instantaneous correlation ≠ infinite speed", predicted: "Predicted", doi: "10.5281/zenodo.20319650" },
    { name: "Cycloid ratio", predicted: "γ/(h²/2) ≈ 50", doi: "10.5281/zenodo.20313135" },
    { name: "Plank threshold equals Cheeger constant", predicted: "T_ST = h = 1/2", doi: "10.5281/zenodo.20313135" },
    { name: "Threshold hierarchy", predicted: "T_ST < T_SU(3) < T_SU(2) < T_U(1)", doi: "10.5281/zenodo.20021043" },
    { name: "Algebraicity field is harmonic", predicted: "Φ_alg is harmonic", doi: "10.5281/zenodo.20236712" },
    { name: "Λ ∝ 1/R_H² scaling", predicted: "Λ ∝ 1/R_H²", doi: "10.5281/zenodo.20010872" },
    { name: "ε = 1/I_max", predicted: "ε = 1/I_max", doi: "10.5281/zenodo.20010872" },
    { name: "I_max = A_horizon/ℓ_P²", predicted: "I_max = A_horizon/ℓ_P²", doi: "10.5281/zenodo.20046915" },
    { name: "α₀ = 2/ln(I_max)", predicted: "α₀ = 2/ln(I_max)", doi: "10.5281/zenodo.20046942" },
    { name: "Λ = 12ε/ℓ_P²", predicted: "Λ = 12ε/ℓ_P²", doi: "10.5281/zenodo.20010872" }
];

function generateKnownTable() {
    let rows = '';
    knownNumbers.forEach((item, index) => {
        const doiUrl = `https://doi.org/${item.doi}`;
        rows += `<tr>
            <td>${index + 1}</td>
            <td><a href="${doiUrl}" class="derivation-link" target="_blank" rel="noopener noreferrer">${item.name}</a></td>
            <td>${item.known}</td>
            <td class="prediction-highlight">${item.predicted}</td>
        </tr>`;
    });
    return rows;
}

function generateUnknownTable() {
    let rows = '';
    unknownPredictions.forEach((item, index) => {
        const doiUrl = `https://doi.org/${item.doi}`;
        rows += `<tr>
            <td>${knownNumbers.length + index + 1}</td>
            <td><a href="${doiUrl}" class="derivation-link" target="_blank" rel="noopener noreferrer">${item.name}</a></td>
            <td class="undiscovered-text">Undiscovered</td>
            <td class="prediction-highlight">${item.predicted}</td>
        </tr>`;
    });
    return rows;
}

function generatePredictionsPage() {
    return `<h2>Predictions of the Canvas Model</h2>
    <p>Every fundamental number in physics emerges from the Canvas Model's eight primitives. Below are 25 known constants that the model reproduces, followed by 55 novel predictions — many already confirmed, others testable. Click any quantity name to view the derivation paper.</p>
    
    <h3 style="margin-top: 2rem;">Known Numbers Reproduced</h3>
    <p>These experimentally measured values emerge directly from the model without free parameters.</p>
    <div class="comparison-scroll">
    <table class="data-table predictions-table">
        <thead><tr><th>#</th><th>Quantity</th><th>Known Value</th><th>Canvas Predicted Value</th></tr></thead>
        <tbody>${generateKnownTable()}</tbody>
    </table>
    </div>

    <h3 style="margin-top: 2rem;">Unknown Numbers Predicted</h3>
    <p>Novel predictions unique to the Canvas Model — many falsifiable with current or near-future experiments.</p>
    <div class="comparison-scroll">
    <table class="data-table predictions-table">
        <thead><tr><th>#</th><th>Quantity</th><th>Real Value</th><th>Canvas Predicted Value</th></tr></thead>
        <tbody>${generateUnknownTable()}</tbody>
    </table>
    </div>
    
    `;
}

window.generatePredictionsPage = generatePredictionsPage;