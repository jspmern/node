const fs=require('fs');

//--------------- Read file-------------------
// const data = fs.readFileSync('./hello.txt','utf-8')
// console.log(data);

// const data1 = fs.readFileSync('./hello.txt')
// console.log(data1.toString());

// fs.readFile('./hello.txt','utf-8',(err,data)=>{
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log(data);
//     }
// });


// ---------------------Write File---------------
// it is used to create a new file and it also overwrite the existing file with new data

// fs.writeFileSync('./hello.txt','Hello !!! My Name is Vicky');
// console.log('Data Updated');

// fs.writeFile('./hello.txt',"Hello!!! Good Evening",(err)=>{
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log('Data Updated');
//     }
// });


// ---------------------Append File----------------------
// it is used to insert new data into existing file

// fs.appendFile('./hello.txt'," Hope You have a great day",(err)=>{
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log('Data Updated');
//     }
// });


// -----------------------------Copy File--------------------
// this method only copy the content present in the file(deepcopy)

// const {join}=require('path');

// fs.copyFile(join(__dirname,'.','hello.txt'),join(__dirname,'.','bye.txt'),(err)=>{
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log('file copied');
//     }
// });


// --------------------------------Link -----------------------
// this method link the memory reference of the file with another file(shallow copy)

// const {join}=require('path');

// fs.link(join(__dirname,'.','hello.txt'),join(__dirname,'.','bye.txt'),(err)=>{
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log('file copied');
//     }
// });


// ------------------------------------ Delete File(Unlink)-------------------
// this method used to delete the file

// const {join}=require('path');

// fs.unlink(join(__dirname,'.','bye.txt'),(err)=>{
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log('file deleted');
//     }
// });


// ----------------------------------Create Folder(mkdir)----------------------
// mkdir method used for creating folder

// const {join}=require('path');

// fs.mkdir(join(__dirname,'..','public'),(err)=>{
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log('folder created');
//     }
// });


// ----------------------------------Delete Folder(rmdir)----------------------
// mkdir method used for delete the folder

// const {join}=require('path');

// fs.rmdir(join(__dirname,'..','public'),(err)=>{
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log('folder deleted');
//     }
// });