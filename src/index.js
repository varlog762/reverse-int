module.exports = function reverse(n) {
    let s = n.toString();
    const arrN = [];
    for (let i = 0; i < s.length; i++) {
        if (s[-1] !== '0' && s[i] !== '-') {
            arrN.unshift(s[i]);
        };
    };
    return +arrN.toString().replace(/[\s.,%]/g, '');
};