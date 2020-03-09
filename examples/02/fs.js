const fs = require("fs");
const replaceAll = require("./help");

const slash = "\\";

const property = {
  path: __dirname + slash + "files" + slash,
  file: "file.json"
};

// Dados do aquivo
const wrapper = [
  { key: 1, country: "tokyo", data: new Date() },
  { key: 2, country: "brazil", data: new Date() },
  { key: 3, country: "portugal", data: new Date() },
  { key: 4, country: "new zealand test", data: new Date() }
];

// Cria o diretorio se não existe o mesmo!
if (!fs.existsSync(property.path)) {
  fs.mkdirSync(property.path);
}

// Cria o aquivo e convert os dados para string
fs.writeFile(property.path + property.file, JSON.stringify(wrapper), err => {
  if (err) throw err;
});

// Leio o arquivo
fs.readFile(property.path + property.file, (err, data) => {
  if (err) throw err;
  const result = JSON.parse(data);
  readOperation(result);
});

function readOperation(data) {
  let list = [];
  for (let x = 0; x < Object.keys(data).length; x++) {
    // const item = data[x].country;
    // const item = data[x].country;
    // list.push(item);
    // list[x] = item;
    // list.push(data[x].country);
    // let item = "";
    // item = data[x].country;
    // item = item.replace(" ", "_");
    // list.push(item);
    // list.push(data[x].country.replace(" ", "_"));
    //
    item = data[x].country;
    item = replaceAll(item, " ", "_");
    list.push(item);
  }

  const str = list.join(" ");

  console.log(str);
}
