var args = process.argv[2].split(",");
args = args.map((arg)=> +arg);

function avg(...args) {
  return args.reduce((previous, current) => previous + current) / args.length;
}

console.log(avg(...args));
