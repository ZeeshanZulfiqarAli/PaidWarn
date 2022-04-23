const blacklist = /google\.com|twitter\.com/;

document.querySelectorAll('a').forEach(node => {
    if (blacklist.test(node.href)) {
        node.innerText += ' [PAID]';
    }
});