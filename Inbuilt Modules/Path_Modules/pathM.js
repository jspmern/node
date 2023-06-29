const path =require('path');

console.log(path.dirname('PathModules\pathM.js'));

console.log(path.extname('pathM.js'));

console.log(path.basename('PathModules\pathM.js'));

console.log(path.parse('PathModules\pathM.js'));

const pathParse=path.parse('C:\Users\HP\Desktop\nodejs\PathModules\pathM.js');
console.log(pathParse.ext);

console.log(path.join(__dirname,'index.html'));