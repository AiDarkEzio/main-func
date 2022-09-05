# Main-Func

* 📦 It has my funcs

## Installation

```bash
npm i @aidarkezio/main-func
```

### Usage

* *DataBase*

  ```js
  const { Database } = require('@aidarkezio/main-func');
  const path = require("path");

  let db = new Database(path.join(__dirname, 'DataBase.json'));
  db.read();
  db.data.name = "Dark Ezio";
  db.data.lang = ["js", "py"];
  db.print();
  db.write();
  ```

* *UUID*

  ```js
  const { encode } = require('@aidarkezio/main-func');
  const path = require("path");

  let id1 = encode.randomUUID();
  let id2 = encode.randomBytes(10); // defalt 25

  console.log(id1);
  console.log(id2);
  ```
  
* Text Ecoding

  ```js
  const { encode } = require('@aidarkezio/main-func');

  let encodedText = encode.textEncode("Dark Ezio 1 !");
  let decodedText = encode.textDecode("snWA HLQb 5 !");

  console.log(encodedText); // Output "snWA HLQb 5 !"
  console.log(decodedText); // Output "Dark Ezio 1 !"
  ```

#### **Created By** ***Dark Ezio***

* Under MIT Lisene
