const fs = require("fs");

const slash = "\\";

const property = {
  path: __dirname + slash + "files" + slash,
  file: "file.json"
};

const wrapper = [
  { key: 1, country: "tokyo", data: new Date() },
  { key: 2, country: "brazil", data: new Date() },
  { key: 3, country: "portugal", data: new Date() },
  { key: 4, country: "new zealand", data: new Date() }
];

if (!fs.existsSync(property.path)) {
  fs.mkdirSync(property.path);
}

fs.writeFile(property.path + property.file, JSON.stringify(wrapper), err => {
  if (err) throw err;
});

fs.readFile(property.path + property.file, (err, data) => {
  if (err) throw err;
  console.log(JSON.parse(data));
});
