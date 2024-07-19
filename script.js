//7 array joining and splitting

let string=['Hello','World'];
let news=string.join(' ');
console.log(news);
let spl=news.split(" ");
console.log(spl);


//8 array destruction

let num=["hai","hello","haii","hey"];
const[first,second, , fourth]=num;
console.log(first);
console.log(second);
console.log(fourth);


//9 array spreading

let arr=[1,2,3];
let ar=[4,5,6];
let array=[...arr,...ar];
document.write(array);

//11 Array flattening
let nest=[1,[2,[3,[4]]]];
let flat=nest.flat(Infinity);
console.log(flat);


//12 checking array elements
const arra=[27,12,31,98,94]
console.log(arra.includes(27));
console.log(arra.some(n=>n%2==0));
console.log(arra.find(n=>n%2==0));

//13.sorting an array object

const arr3 = [
    { name:'John',age:19},
    { name:'Jane',age:30},
    { name:'Bob',age:20},
    { name:'sam',age:21}
  ];
  arr3.sort((a, b) => a.age - b.age); 
  console.log(arr3);

