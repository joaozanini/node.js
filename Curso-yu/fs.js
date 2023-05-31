const { error } = require("console");
const fs = require("fs");

fs.writeFile("message.txt", "hello from Node.js", (err)=> {
    if (err) throw err;
    console.log("the file has been saved!")
});


fs.readFile("./message.txt", 'utf-8', (err, data)=> {
    if (err) throw err;
    console.log(data)
})