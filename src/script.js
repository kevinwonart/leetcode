const fs = require('fs');
const path = require('path');

const directoryPath = path.join(__dirname); // Current directory

fs.readdir(directoryPath, (err, files) => {
  if (err) {
    return console.error('Failed to list directory files: ', err);
  }

  files.forEach(file => {
    if (path.extname(file) === '.ts') {
      const filePath = path.join(directoryPath, file);
      fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
          return console.error(`Failed to read file: ${file}`, err);
        }

        if (!data.includes('export { }')) {
          fs.appendFile(filePath, '\nexport { }', (err) => {
            if (err) {
              console.error(`Failed to append to file: ${file}`, err);
            } else {
              console.log(`Updated file: ${file}`);
            }
          });
        }
      });
    }
  });
});

