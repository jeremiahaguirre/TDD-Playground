const frogJumps = (start, end, jumpLength) => {
  if (start === undefined && end === undefined && jumpLength === undefined) {
    throw new Error("no values where passed in");
  }
  if (jumpLength < 0) {
    throw new Error("invalid jumpLength provided");
  }
  return (end - start) / jumpLength;
};

module.exports = frogJumps;
