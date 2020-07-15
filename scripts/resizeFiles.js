const sharp = require('sharp');
const fs = require('fs');

const directory = './public/projects';

fs.readdirSync(directory).forEach(subdir => {
  const dirPath = `${directory}/${subdir}`;

  fs.readdirSync(dirPath).forEach(file => {
    const filePath = `${dirPath}/${file}`;
    const isImage = !fs.lstatSync(filePath).isDirectory();

    if (isImage) {
      sharp(filePath)
        .resize(200, 100) // width, height
        .toFile(`${filePath}-small.jpg`);
    } else {
      fs.readdirSync(filePath).forEach(innerFile => {
        sharp(`${filePath}${innerFile}`)
          .resize(200, 100) // width, height
          .toFile(`${filePath}/${innerFile}-small.jpg`);
      });
    }
  });
});
