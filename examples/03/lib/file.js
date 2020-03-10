const fs = require("fs");

class File {
  constructor() {
    this.path;
    this.file;
    this.container;
  }

  setPath(path) {
    this.path = path;
  }

  setFile(file) {
    this.file = file;
  }

  getPath() {
    return this.path;
  }

  setContainer(type, container) {
    if (type === "xml") {
      this.container = container;
    }
    if (type === "json") {
      this.container = JSON.stringify(container);
    }
  }

  generate() {
    return this._createPath()
      .then(res => {
        this._createFile();
        return true;
      })
      .catch(err => {
        return false;
      });
  }

  async read() {
    let read = new Promise((resolve, reject) => {
      fs.readFile(`${this.path}\\${this.file}`, (err, data) => {
        if (err) return reject("ERROR Read file!");
        resolve(JSON.parse(data));
      });
    });
    const data = await read;
    return data;
  }

  _createPath() {
    return new Promise((resolve, reject) => {
      if (fs.existsSync(this.path)) return resolve(false);
      try {
        fs.mkdirSync(this.path);
        resolve(true);
      } catch (error) {
        reject(true);
      }
    });
  }

  _createFile() {
    return fs.writeFile(
      `${this.path}\\${this.file}`,
      this.container,
      error => !error
    );
  }
}

module.exports = new File();
