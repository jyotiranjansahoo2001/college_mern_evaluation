console.log("start");
//async functions like setTimeout
setTimeout(() => {
  console.log("async");
}, 1000);
console.log("end");
// output : 
// start
// end
// async