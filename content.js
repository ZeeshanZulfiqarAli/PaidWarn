const blacklist = [
	'economist.com',
	'fortune.com',
	'glassdoor.com',
	'nytimes.com',
	'washingtonpost.com',
	'wired.com',
];

let regex = blacklist.reduce((acc, el) => {
	return (acc += `${el.split('.')[0]}\\.${el.split('.')[1]}|`);
}, '');
regex = new RegExp(regex.slice(0, -1));

// console.log('regex', regex);

document.querySelectorAll('a').forEach((node) => {
	if (regex.test(node.href)) {
		node.innerText += ' [PAID]';
	}
});
