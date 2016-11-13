const test = require('tape');

var tern = function(x){
    return isNaN(x) ? (x!=x ? "NaN" :  (undefined===x ? "undefined" : (isNaN(x) ? "NaN" : "Hey"   )  )  ) : (x === 0? "number" :  ( isNaN(parseInt(x)) ? "NaN" : "number"  ) )
};

var analog = function (x) {
    if (isNaN(x)) {
        if (x!==x) {
            return 'NaN';
        } else {
            if (undefined===x ) {
                return 'undefined';
            } else {
                if (isNaN(x)) {
                    return 'NaN';
                } else {
                    return 'Hey';
                }
            }
        }
    } else {
        if (x === 0) {
            return 'number';
        } else {
            if (isNaN(parseInt(x))) {
                return 'NaN';
            } else {
                return 'number';
            }
        }
    }
};

const tests = [-1, '1', 0, '0', '1', 1, 'NAN', NaN, false, 'false', 0.1, '0.1', undefined, 'undefined', '+'];

tests.forEach( function(element, index, array){
    test('Test #' + (index + 1), function(assert){
        const actual = analog(element);
        const expected = tern(element);

        assert.equal(actual, expected, 'Input: ' + element +', expected: ' + expected + ', actual: ' + actual);
        assert.end();
    });
});