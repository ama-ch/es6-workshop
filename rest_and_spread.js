let args = process.argv[2].split(',');
args = args.map((arg) => +arg);

function avg(...values) {
  return args.reduce((previous, current) => previous + current) / values.length;
}

console.log(avg(...args));
