// data-millennium.js
// Millennium Prizes page content

const millenniumProblems = [
    { name: "Riemann Hypothesis", since: "1859", yearsOpen: "165+", status: "SOLVED IN CTM", doi: "10.5281/zenodo.20136786" },
    { name: "Yang-Mills Mass Gap", since: "1954", yearsOpen: "70+", status: "SOLVED IN CTM", doi: "10.5281/zenodo.20313135" },
    { name: "Hodge Conjecture", since: "1950", yearsOpen: "75+", status: "SOLVED IN CTM", doi: "10.5281/zenodo.20313135" },
    { name: "P vs NP", since: "1971", yearsOpen: "50+", status: "SOLVED IN CTM", doi: "10.5281/zenodo.20323576" },
    { name: "Navier-Stokes Existence and Smoothness", since: "2000", yearsOpen: "25+", status: "SOLVED IN CTM", doi: "10.5281/zenodo.20323576" },
    { name: "Birch and Swinnerton-Dyer Conjecture", since: "1965", yearsOpen: "60+", status: "SOLVED IN CTM", doi: "10.5281/zenodo.20323576" },
    { name: "Poincaré Conjecture", since: "1904", yearsOpen: "100+", status: "PERELMAN 2003", doi: "10.5281/zenodo.20323576" }
];

function generateMillenniumPage() {
    const crt = document.body.classList.contains('crt-mode');
    
    const rows = millenniumProblems.map((p, i) => {
        const doiUrl = `https://doi.org/${p.doi}`;
        return `<tr>
            <td style="${crt ? 'color:#00cc33;font-size:0.78rem;' : ''}">${crt ? String(i + 1).padStart(2, '0') : i + 1}</td>
            <td><a href="${doiUrl}" class="problem-link" target="_blank" rel="noopener noreferrer">${p.name}</a></td>
            <td>${p.yearsOpen}</td>
            <td>${p.since}</td>
            <td class="status-solved">${crt ? '[' + p.status + ']' : '✅ ' + p.status}</td>
        </tr>`;
    }).join('');
    
    return `<h2>${crt ? 'MILLENNIUM PRIZE PROBLEMS' : 'Seven Millennium Prize Problems'}</h2>
    <p>${crt ? 'All seven Millennium Prize Problems resolved within Canvas Temporal Mathematics.' : 'All seven Millennium Prize Problems have been solved within Canvas Temporal Mathematics.'}</p>
    <table class="data-table">
        <thead><tr><th>${crt ? '#' : '#'}</th><th>${crt ? 'PROBLEM' : 'Prize'}</th><th>${crt ? 'YRS OPEN' : 'Years Open'}</th><th>${crt ? 'SINCE' : 'Since'}</th><th>${crt ? 'STATUS' : 'Status'}</th></tr></thead>
        <tbody>${rows}</tbody>
    </table>`;
}

window.generateMillenniumPage = generateMillenniumPage;