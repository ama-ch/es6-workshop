const a = 5;
const b = process.argv[2];

if (a === 5) {
  /* eslint-disable prefer-const */
  let c = 4;
  /* eslint-enable */
  console.log(c);  // 4

  const d = 8;
  console.log(d);
}

console.log(a); // 5
console.log(b);
try {
  /* eslint-disable no-undef */
  c = 1000;
  /* eslint-enable */
} catch (e) {
  console.log(e);
}
