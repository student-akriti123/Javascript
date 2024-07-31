let price = [234,280,450,780,440];
let idx=0;
for(let value of price){
console.log(value);
let offer=value/10;
price[idx]=price[idx]-offer;
console.log(price);
idx++;
}

