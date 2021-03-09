const lines = ["|", "/", "-", "\\"];

const spin = function(charArray) {
  let n = 0;
  for (let i = 0; i < 2; i++) {
    for (const char of charArray) {
      setTimeout(() => {
        process.stdout.write(`\r${char}   `);
      }, n);
      n += 200;
    }
  }
  setTimeout(() => process.stdout.write("\n"), n);
};
spin(lines);