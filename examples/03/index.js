const mock = require("./lib/mock");
const file = require("./lib/file");
const fn = require("./lib/fn");

async function generateFile() {
  file.setPath(`${__dirname}\\files`);
  file.setFile("countries.json");
  file.setContainer("json", mock.countries);
  const generate = await file.generate();
  if (generate) {
    const container = await file.read();
    let result = [];
    container.forEach(item => {
      result.push(fn.convertDate(item));
    });
    console.log("result::: ", result);
  }
}

generateFile();
