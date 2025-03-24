// //p1.

// // import the value
// // let m=require('./abishek');
// // const f=5;
// // console.log(f);
// // console.log(m); 


// //  p2
// // Common module
// const fs= require('fs');

// //SYNC WAY
// const data ={
//     Name:'abishek',
//     age:20
// // };
// // fs.writeFileSync('path1.txt',JSON.stringify(data));//object was changing to object way

   
// // P3.
//   // //ASYNC WAY
//   const fs= require('fs');
//   const baato= 'abishekpath.txt';// IT is used to get the path of the file
//   const data ={
//     naam:"Abishek",
//     age:21,
//     class:13
//   };
//   fs.writeFile(baato,JSON.stringify(data),(err)=>{
//     if (err){
//       console.log(err);
//     }
//     else{
//       console.log(data);
//     }
//   });


  // P4.
  // This is better
//   const fs= require('fs');
//     const baato= 'async.txt';// IT is used to get the path of the file
//     const data ={
//       naam:"Abishek",
//       age:21,
//       class:13
//     };
// fs.writeFile(baato,"hello text",(err)=>{
// if (err) throw err;
// console.log('file is created');
// })

  //p5.
  const { isUtf8 } = require('buffer');
const fs=require('fs');
  const path1='path1.txt';
  const data1={
    firstName:'Abishek',
    Hobby: 'Coding',
  }
  fs.readFile(path1,'utf-8',(err,data1)=>{
    if(err) throw err;
    console.log(data1);
  });
  console.log('hello ')







