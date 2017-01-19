module.exports = function convertPhpToMoment(format) {
  var replacements = {
    'd' : 'DD',
    'D' : 'ddd',
    'j' : 'D',
    'l' : 'dddd',
    'N' : 'E',
    'S' : 'o',
    'w' : 'e',
    'z' : 'DDD',
    'W' : 'W',
    'F' : 'MMMM',
    'm' : 'MM',
    'M' : 'MMM',
    'n' : 'M',
    't' : '', // No equivalent.
    'L' : '', // No equivalent.
    'o' : 'YYYY',
    'Y' : 'YYYY',
    'y' : 'YY',
    'a' : 'a',
    'A' : 'A',
    'B' : '', // No equivalent.
    'g' : 'h',
    'G' : 'H',
    'h' : 'hh',
    'H' : 'HH',
    'i' : 'mm',
    's' : 'ss',
    'u' : 'SSS',
    'e' : 'zz', // Deprecated since version 1.6.0 of Moment.js.
    'I' : '', // No equivalent.
    'O' : '', // No equivalent.
    'P' : '', // No equivalent.
    'T' : '', // No equivalent.
    'Z' : '', // No equivalent.
    'c' : '', // No equivalent.
    'r' : '', // No equivalent.
    'U' : 'X',
    '\\': '', // Replace backslahes with nothing.
  };
  // Loop through every charater.
  return format.split('').map(function(char, i) {
    /**
     *  Support escaped charaters. If the previous charater was a backslach just
     *  return the charater.
     */
    if (format.charAt(i-1) === '\\') return char;
    return (typeof replacements[char] !== 'undefined') ? replacements[char] : char;
  }).join('');
};
