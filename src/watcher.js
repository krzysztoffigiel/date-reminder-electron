const fs = require('fs');

(async () => {
  const watcher = fs.watch('./index.html');
  watcher.on('change', () => {
    console.log('changed')
  });
})();