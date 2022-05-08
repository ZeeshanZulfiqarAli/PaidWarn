// In-page cache of the user's options
const sites = {};

let defaultSites = require('./data/sites');

// defaultSites = Object.values(defaultSites);

// Initialize the form with the user's option settings
chrome.storage.sync.get({'sites': defaultSites}, (data) => {
  Object.assign(sites, data.sites);
  populateTable(sites);
});

function populateTable(sites) {
    const tbody = document.querySelector('#blacklist-table tbody');

    let fragment = document.createDocumentFragment();
    Object.entries(sites).forEach(([label, href]) => {
        let tr = document.createElement('tr');
        let tdLabel = document.createElement('td');
        tdLabel.innerText = label;
        
        let tdHref = document.createElement('td');
        tdHref.innerText = href;

        let tdRemove = document.createElement('span');
        tdRemove.className = 'button-like';
        tdHref.innerText = 'remove';

        tr.append(tdLabel, tdHref, tdRemove);
        fragment.appendChild(tr);
    })

    tbody.appendChild(fragment);
}