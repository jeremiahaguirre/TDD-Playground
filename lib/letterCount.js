const letterCount = (str, letter) => {
  let letterCount = 0;
  if ("string" !== typeof str || str === undefined) {
    throw new Error("This is not a string");
  } else {
    for (let position = 0; position < str.length; position++) {
      if (str.charAt(position) == letter) {
        letterCount += 1;
      }
    }
    return letterCount;
  }
};

module.exports = letterCount;
/* Way one*/
// const newStringGenerter=(words)=>{
//     const letters=[];
//     const counts=[];
//     for (let i=0; i<words.length; i++){
//       if(letters.includes(words.charAt(i))){
//          counts[letters.indexOf(words.charAt(i))]++;
//       } else{
//         letters.push(words.charAt(i));
//         counts[letters.length-1]=1;
//       }
//     }
//     let result ="";
//     for (let i=0; i<letters.length; i++){
//       result+=(letters[i]+counts[i])
//     }
//       return result;
//   }

/* Way two*/
//   const compressString = string => {
//     if (!string) return '';
//     const countArray = [];
//     for (let i = 0; i < string.length; i++) {
//       const lastLetter = countArray[countArray.length - 2];
//       const occurrences = countArray[countArray.length - 1];
//       // If the letter has already been recorded, increment the count
//       if (string[i] === lastLetter) {
//         countArray[countArray.length - 1] = occurrences + 1;
//       }
//       // If the letter has not been recorded, add it to the array
//       // with a count of 1
//       else {
//         countArray.push(string[i]);
//         countArray.push(1);
//       }
//     }
//     // Convert array to string
//     return countArray.join('');
//   };
//   module.exports = compressString;
