const numbers = [1, 2, 3];
numbers[1] = 10;
console.log(numbers[1]);

const string = ["sss", "fff", "ddd"];
string[3] = "iii";
console.log(string[3]);

let rezalt = 0;
const sum = [33, 63, 24];
for (let i = 0; i < sum.length; i += 1) {
  rezalt += sum[i];
}
console.log(rezalt);

const a = [1, 22, 33, 77, 55];
for (let i = 0; i < a.length; i += 1) {
  console.log(a[i]);
}

const qwer = ["asdfg", "dfg", "opglk", "rtyui", "jkl"];
for (let s of qwer) {
  if (s.length >= 5) {
    console.log(s);
  }
}

const b = [1,3,5,6,8,33,9865,124,555,8290];
let largestNumber = b[0]
for(let i = 0; i < b.length; i += 1){
    if(largestNumber < b[i]){
        largestNumber = b[i];
        console.log(b[i]);
    }
}

const arr = [1,3,5,6,8,33,9866,124,555,8290];
for (let i = 0; i < arr.length; i += 1 ){
    if(arr[i]%2 === 0){
        console.log(arr[i]);
        
    }
}