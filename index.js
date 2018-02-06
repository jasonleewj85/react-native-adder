export const adder = (a, b) => new Promise((resolve, reject) => {
    const c = a + b;
    resolve(c);
  });