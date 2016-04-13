const inputs = process.argv.slice(2);
const result = inputs.map((x) => x[0]).reduce((value, x) => value + x);

console.log(result);
