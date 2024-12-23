// inbuild method 
const arr = [7,8,9,4,10,55,1];
arr.sort((a, b) => a - b);
console.log(arr); // [1,4,7,8,9,10,55]
// selection sort
for(let i = 0; i < arr.length; i++) {
    for(let j = i + 1; j < arr.length; j++) {
        if(arr[j] < arr[i]) {
            let temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
    }
}
console.log(arr); // [1,4,7,8,9,10,55]