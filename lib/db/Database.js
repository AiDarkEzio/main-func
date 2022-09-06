import { readFileSync, writeFileSync } from "fs";
export default class Database {
  constructor(path, type = Object) {
    this.data = new type();
    this.path = path;
    try {
      this.data = JSON.parse(readFileSync(this.path));
    } catch {
      writeFileSync(this.path, JSON.stringify(this.data));
    }
  }
  read() {
    this.data = JSON.parse(readFileSync(this.path));
  }
  write() {
    writeFileSync(this.path, JSON.stringify(this.data));
  }
  print() {
    console.log("Data Type: ", typeof this.data, "\n", "Data: ", this.data);
  }
}
