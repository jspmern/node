const OS=require('os');

console.log(OS.cpus().length);
console.log(OS.totalmem());
console.log(OS.freemem());
console.log(OS.totalmem()-OS.freemem());
console.log(OS.arch());