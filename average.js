let number=[22,33,44,55,66];

let sums = 0;
//  for(let r=0;r<=number;r++){
// let average=sums+r;
// console.log(average);
//  }

for(let val of number){
sums+= val;
    
}
let avg=sums/number.length;

console.log(sums);

console.log(avg);