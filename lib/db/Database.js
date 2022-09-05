const fileSystem = require('fs');
module.exports = class Database {
  constructor(path, type = Object) {
    this.data = new type();
    this.path = path;
    try {this.data = JSON.parse(fileSystem.readFileSync(this.path)); } 
    catch { fileSystem.writeFileSync(this.path, JSON.stringify(this.data)); }
  }
  read() { this.data = JSON.parse(fileSystem.readFileSync(this.path)); }
  write() { fileSystem.writeFileSync(this.path, JSON.stringify(this.data)); }
  print() { console.log("Data Type: " , typeof this.data, "\n", "Data: ", this.data); }
};