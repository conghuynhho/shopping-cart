const formatCurrency = (number) => {
  let str = String(number);
  return str
    .split("")
    .reverse()
    .reduce((prev, next, index) => {
      return (index % 3 ? next : next + ",") + prev;
    });
};

export default formatCurrency;