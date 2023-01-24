// let t = true
// function promi() {
    
//     return new Promise(function (resolve,reject) {
//         if (t) {
//            resolve("i am resolve") 
//         } else {
//             reject("I am reject")
//         }
//     });
// }
// console.log(promi(true));
// let t = false
// function promis() {
//     return new Promise(function (resolve,reject) {
//         setTimeout(() => {
//             if (t) {
//                 console.log("i am resolve"); 
//              } else {
//                  console.log("i am reject"); 
//              }
//         }, 5000);
      
//     });
// }
// // promis(true).then((result)=>{console.log(result);}).catch((error)=>{console.log(error);})
// console.log(promis);\


let order = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("resolve");
    }, 3000);
})