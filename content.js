const sites = require('./sites');
const blacklist = Object.values(sites);

let regex = new RegExp(
	blacklist
		.reduce((acc, el) => {
			return (acc += `${el.split('.')[0]}\\.${el.split('.')[1]}|`);
		}, '')
		.slice(0, -1)
);

document.querySelectorAll('a').forEach((node) => {
	if (regex.test(node.href)) {
		node.innerText += ' [PAYWALL]';
	}
});
