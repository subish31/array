//1 first

function one(n)
{
    if(n>=1 && n<=100)
    {
        if(n%3==0 && n%5==0)
        {
            console.log("FizzBuzz");
        }
        else if(n%3==0)
        {
            console.log("Fizz");
        }
        else if(n%5==0)
        {
            console.log("Buzz");
        }
        else
            console.log("No Multiples");
    }
    else
    {
       console.log("Invalid Number"); 
    }
}
one(30);


// 2 palindrome

function palindrome(str){
    const rev=str.split('').reverse().join('');
    if(str==rev)
        console.log("Palindrome");
    else
        console.log("Not Palindrome");
}
let s="MADAM";
palindrome(s);


//3 Largest Number in an array

let arr1=[27,12,3,98,94]
function max(arr)
{
    let ma=arr[0];
    for(let i=0;i<arr.length;i++)
    {
        if(ma<arr[i])
            ma=arr[i];
    }
    console.log(ma);
}
max(arr1);


//4 letter count
let string= "hello world";
function count(string)
{
let re = {}
for(let i = 0;i< string.length;i++){
  let ch = string.charAt(i);
  if(re[ch]){
    re[ch]+=1;
  }
  else{
    re[ch]=1;
  }
}
console.log(re);
}
count(string);


// 5 longest word in  a string

let st="Hello this is JavaScript Programming";
function longest(str) {
    str = str.match(/[a-zA-Z0-9]+/gi);
    let largest = "";
    for (let i = 0; i < str.length; i++) {
        if (str[i].length > largest.length) {
            largest = str[i];
        }
    }
    return largest;
}
console.log(longest(st));


// 6 factorial of a given  number

function fact(n)
{
    for(let i=1;i<=n;i++)
    {
        if(n%i==0)
            console.log(i);
    }
}
fact(98);


//6 array sorting and reverse
let arr3=[27,12,31]
console.log(arr3.sort());
console.log(arr3.reverse());

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


//10 finding minimum and maximum
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

//14 merging array
let arr1=[1,2,3];
let arr2=[4,5,6];
let arr=arr1.concat(arr2);
console.log(arr);
