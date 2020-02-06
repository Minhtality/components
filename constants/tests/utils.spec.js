import {isNumber, createUniqueIdArray} from '../js/utils';
import test from 'tape';

test('Custom JavaScript Utils - isNumber', (t) => {
    // False tests
    t.false(isNumber(null), 'Null should NOT be a number');
    t.false(isNumber(undefined), 'Undefined should NOT be a number');
    t.false(isNumber(false), 'false should NOT be a number');
    t.false(isNumber(NaN), 'NaN should NOT be a number');
    t.false(isNumber(''), 'Empty String should NOT be a number');
    t.false(isNumber('1.ab'), 'String should NOT be a number');
    t.false(isNumber([]), 'Array should NOT be a number');
    t.false(isNumber({}), 'Object should NOT be a number');
    t.false(isNumber(Infinity), 'Inifinity should NOT be a number (since it is not finite)');
    t.false(isNumber(-Infinity), '-Inifniity should be a number (since it is not finite)');

    // True tests
    t.true(isNumber(0), 'Zero should be a number');
    t.true(isNumber('1'), 'Number string should be a number');
    t.true(isNumber('1.305'), 'Number decimal should be a number');
    t.true(isNumber(1), 'Number should be a number');
    t.true(isNumber(1.305), 'Decimal should be a number');

    t.end();
});

test('Custom JavaScript Utils - createUniqueIdArray', (t) => {
    const zeroTest = 0;
    const emptyTest = [];
    const decimalTest = 1.34;
    const multiTest = 10;
    const bigTestResult = createUniqueIdArray(1000);

    t.deepEqual(createUniqueIdArray(emptyTest), createUniqueIdArray(zeroTest), 'Zero and non-number should return the same thing');
    t.deepEqual(createUniqueIdArray(zeroTest), [], 'Zero should return an empty array');
    t.deepEqual(createUniqueIdArray(decimalTest), [], 'Decimal should return an empty array');
    t.equal(createUniqueIdArray(multiTest).length, multiTest, 'Array length should be equal to number inputted');
    t.deepEqual(bigTestResult, [...new Set(bigTestResult)], 'Generating lots of ids should not yield any duplicates');

    t.end();
});
