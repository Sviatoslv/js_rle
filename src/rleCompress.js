'use strict';

/**
 * Implement rleCompress function:
 *
 * Function takes string argument and returns compressed string.
 * Compression algorithm is the following: 2 and more identical
 * letters in a row are replaced with the letter and count of
 * repeating (don’t add number 1 for one letter)
 *
 * rle('A') === 'A'
 * rle('ABC') === 'ABC'
 * rle('AABDE') === 'A2BDE'
 * rle('ABGGGDKKKUKKF') === 'ABG3DK3UK2F'
 *
 * @param {string} source
 *
 * @return {string}
 */
function rleCompress(source) {
  let compressedSource = '';
  let mutchCounter = 1;

  for (let i = 0; i < source.length; i++) {
    if (source[i] === source[i + 1]) {
      mutchCounter ++;
    } else if (source[i] === source[i - 1]) {
      compressedSource += source[i] + mutchCounter;
      mutchCounter = 1;
    } else {
      compressedSource += source[i];
      mutchCounter = 1;
    }
  }

  return compressedSource;
}

module.exports = rleCompress;

// console.log(rleCompress('aaabbcfff'))
