// import dependencies
const fs = require("fs");
const path = require("path");

// ensure the filepath is relative to this script
// const filePath = ".certs/client-cert.pem";
// const filePath = ".certs/client-key.pem";
const filePath = ".certs/server-ca.pem";

// the main operation
const base64Text = fs.readFileSync(path.resolve(filePath)).toString('base64');

// write output to console
console.log(`Outputting ${filePath}`);
console.log('--------');
console.log(base64Text);