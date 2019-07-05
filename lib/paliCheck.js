const paliendromCheck = str => {
  if ("string" !== typeof str) {
    throw new Error("This is not an string");
  } else {
    const trimed = str.replace(/\s/g, "");
    const lowerCase = trimed.toLowerCase();
    const splitString = lowerCase.split("");
    const reverseArray = splitString.reverse();
    const join = reverseArray.join("");

    return join.toString();
  }
};

module.exports = paliendromCheck;
