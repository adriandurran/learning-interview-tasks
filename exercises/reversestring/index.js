// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  return str.split('').reduce((rev, chr) => chr + rev, '');
}

module.exports = reverse;

// return str
//   .split('')
//   .reverse()
//   .join('');

// let reversed = '';
// for (let chr of str) {
//     reversed = chr + reversed;
// }
// return reversed;
