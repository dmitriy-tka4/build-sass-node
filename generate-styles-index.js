const glob = require("glob");
const fs = require("fs");

const config = {
  root: "./src/styles",
  patterns: [
    "_main.scss",
    "_variables.scss",
    "blocks/**/*.scss"
  ]
};

const styleFiles = config.patterns.reduce((result, pattern) => {
  const filePaths = glob.sync(pattern, {
    cwd: config.root
  });
  return result.concat(filePaths.filter(filePath => !result.includes(filePath)))
}, [])

fs.writeFileSync(config.root + '/index.scss', styleFiles.map(fileName => `@import "${fileName}";`).join('\n'));
