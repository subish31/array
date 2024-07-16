// 1
let arr=[1,2,3,4,5];
console.log(arr);

//2
arr.push(6,7);
console.log(arr);
arr.unshift(0);
console.log(arr);
arr.pop();
console.log(arr);
arr.shift();
console.log(arr);

//3
console.log(arr.indexOf(4));
let lar=(element)=>element>3;
console.log(arr.find(lar));
console.log(arr.includes(2));

//4
let even=n=>n%2==0;
console.log(arr.filter(even));

//5
let number=[4,9,16,25,36];
let n=number.map(Math.sqrt);
console.log(n);

//6
let arr1=[27,12,31]
console.log(arr1.sort());
console.log(arr1.reverse());


//10
let num=[88,70,83,46];
let max=num[0];
let min=num[0];
for(let i=0;i<num.length;i++)
{
    if(max<num[i])
        max=num[i];
    if(min>num[i])
        min=num[i];
}
console.log("Max : ",max);
console.log("Min : ",min);
