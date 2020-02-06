import {generate} from 'shortid';

/**
 * Utility helper function to check if an input is a number
 * @param {*} n - Input being tested
 * @returns {boolean} Is the given input a number?
 */
export function isNumber(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}

/**
 * Utility helper function to create an array of unique ids
 * @param {number} len - Length of array to be created.
 * @returns {Array<string>} Array of unique ids
 */
export function createUniqueIdArray(len) {
    if (!isNumber(len) || !Number.isInteger(Number(len))) {
        return [];
    }

    // eslint-disable-next-line no-unused-vars
    return [...Array(Number(len))].map((val) => generate());
}