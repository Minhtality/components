/** Async compatible timeout.
 * @param {integer} ms - The timeout number.
 * @returns {Promise} - Returns a promise when the timer has resolved.
 */
export function timeout(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
