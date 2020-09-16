function getAnswer(a, b, sign) {
    if (sign === '+') return a + b;
    if (sign === '-') return a - b;
    if (sign === '/') return a / b;
    if (sign === '*') return a * b;
    if (sign === '<') return a < b;
    if (sign === '>') return a > b;
    if (sign === '<=') return a <= b;
    if (sign === '>=') return a >= b;
    if (sign === '=') return a = b;
    return 'wat';
}

exports.getAnswer = getAnswer;