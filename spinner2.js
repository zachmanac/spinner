const characters = [ '\r|', '\r/', '\r-', '\r\\', '\r|', '\r/', '\r-', '\r\\', '\r|\n']
timeout = 100;

for (const char of characters) {
  setTimeout(() => {
    process.stdout.write(char);
  }, timeout);
  timeout += 200;
};