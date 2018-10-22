module.exports = {
    sum: function (a, b) { return a + b; },
    sub: function (a, b) { return a - b; },
    mult: function (a, b) { return a * b; },
    div: function (a, b) { return (b === 0) ? 'Não é possível dividir por zero!' : a / b; },

}