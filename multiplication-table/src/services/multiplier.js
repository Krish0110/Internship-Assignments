const multiplier = (value) => {
  const result = [];
  for (let i = 1; i <= 10; i += 1) {
    result.push(value * i);
  }
  return result;
};

export default multiplier;
