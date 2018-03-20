const initializeNames = (name) => {
  return name
    .split(' ')
    .map((c, i, a) => i !== 0 && i !== a.length - 1 ? `${c[0]}.` : c)
    .join(' ');
};
