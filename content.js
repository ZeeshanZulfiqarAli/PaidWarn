const blacklist = [
	'economist.com',
	'fortune.com',
	'glassdoor.com',
	'nytimes.com',
	'washingtonpost.com',
	'wired.com',
];

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
