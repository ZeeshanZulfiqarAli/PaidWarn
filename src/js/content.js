let defaultSites = require('./data/sites');

// defaultSites = Object.values(defaultSites);
chrome.storage.sync.get({'sites': defaultSites}, function(result) {
	let blacklist = Object.values(result.sites);

	const regex = generateRegex(blacklist);

	addWarning(regex);
});

function generateRegex(blacklist) {
	let regex = new RegExp(
		blacklist
			.reduce((acc, el) => {
				return (acc += `${el.split('.')[0]}\\.${el.split('.')[1]}|`);
			}, '')
			.slice(0, -1)
	);

	return regex;
}

function addWarning(regex) {
	document.querySelectorAll('a').forEach((node) => {
		if (regex.test(node.href)) {
			const paywallEl = document.createElement('span');
			paywallEl.innerText = ' [PAYWALL]';

			node.appendChild(paywallEl);
		}
	});
}
