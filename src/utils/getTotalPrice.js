export const getTotalPrice = (cart) => {
  const total = cart.reduce((acc, curr) => acc + curr.qty * curr.price, 0);
  return total;
};
