const removeChar = (str) => {
  return str
    .split('')
    .filter((e, i, c) => i !== 0 && i !== c.length - 1) // ^.slice(1, -1)
    .reduce((p, c) => p + c, ''); // .join('')
};

console.log(removeChar('place'));
