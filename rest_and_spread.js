const rawArgs = process.argv.slice(2);
const args = [];

rawArgs.forEach(arg => {
  const commaSep = arg.split(',');
  commaSep.forEach(val => {
    if (val !== '') args.push(+val);
  });
});

function avg(...values) {
  return values.reduce((a, b) => a + b) / values.length;
}

console.log(avg(...args));
