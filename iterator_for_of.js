const max = +process.argv[2];
const FizzBuzz = {
  [Symbol.iterator]() {
    let num = 1;
    return {
      next() {
        if (num > max) {
          return { done: true };
        }
        let value = num;
        if (value % 15 === 0) {
          value = 'FizzBuzz';
        } else if (value % 3 === 0) {
          value = 'Fizz';
        } else if (value % 5 === 0) {
          value = 'Buzz';
        }
        num++;
        return { done: false, value };
      },
    };
  },
};

for (const n of FizzBuzz) {
  console.log(n);
}
