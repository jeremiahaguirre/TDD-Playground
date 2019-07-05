/* Example one*/

//Comments are for Big-O
//this is N =V
// function remove(str, i) {
//   let pre = str.substring(0, i);
//   let post = str.substring(i + 1, str.length);
//   return pre + post;
// }

// const specialCase = input => {
//   //O(N^2)
//   for (let i = 0; i < input.length; i++) {
//     let c = input[i]; //one access
//     let rem = remove(input, i); //N access
//     let isUnique = !rem.includes(c); //N access
//     if (isUnique) {
//       return c;
//     }
//   }
//   return undefined;
// };

/* Example two*/
function min(firstSeen, uniqueChars) {
  let minPos = 1000;
  let minChar = undefined;
  uniqueChars.forEach((ch, i) => {
    if (firstSeen[ch] < minPos) {
      minChar = ch;
      minPos = firstSeen[ch];
    }
  });
  return minChar;
}
const specialCase = input => {
  let firstSeen = {};
  for (let i = 0; i < input.length; i++) {
    let ch = input[i];
    if (firstSeen[ch] !== undefined) {
      firstSeen[ch] = -1;
    } else {
      firstSeen[ch] = i;
    }
  }
  let uniqueChars = Object.keys(firstSeen).filter(k => firstSeen[k] !== -1);
  min(firstSeen, uniqueChars);
};

module.exports = specialCase;
