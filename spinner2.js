const spinnerParts = ["\r|   ", "\r/   ", "\r-   ", "\r\\   ", "\r|   ", "\r/   ", "\r-   "];
let time = 100;
for (let part of spinnerParts) {
  time += 200;
  setTimeout(() => {
    process.stdout.write(part);
  }, time);
}
setTimeout(() => {
  process.stdout.write('hello from spinner1.js... \rheyyy\n');
}, time);
