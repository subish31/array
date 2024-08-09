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

// 18.intersection of two array
let a=[1,2,3,4,5,7,6]
let b=[2,4,6,8,10,12,14]
let c=[]
for(let i=0;i<a.length;i++){
    for(let j=0;j<b.length;j++){
        if(a[i]==b[j]){
            c.push(a[i])
        }
    }
}
console.log(c)

// 19.difference b/w 2 array

let ar=[1,2,3,4,5,7,6]
let arr1=[2,4,6,8,10,12,14]
let arr2=ar.filter(x => !arr1.includes(x));
let arr3=arr1.filter(x => !ar.includes(x));
let arr4=arr2.concat(arr3)
console.log(arr4)

//20.grouping array element

const arr5 = [1, 2, 2, 3, 3, 3, 4, 4, 4, 4];
const groupedArr = arr5.reduce((acc, current) => {
    if (!acc[current]) {
        acc[current] = [];
    }
    acc[current].push(current);
    return acc;
}, {});
console.log(groupedArr);

// 21.array intersection of two set

const array1 = [1, 2, 3];
const array2 = [2, 3, 4, 5];
const farray = array1.filter(value => array2.includes(value));
console.log(farray)

//22.array manipulation with slice()

const arr7 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
arr7.splice(2, 3); 
console.log(arr7);

// 23.implement queue with array 
const queue = [];
queue.push(2);
queue.push(3);
queue.push(4);
queue.push(5);
queue.push(6);
const dequeuedItem = queue.shift(); 
console.log(queue);

// 24.implement stack with array
const stack = [];
stack.push(2);
stack.push(3);
stack.push(4);
stack.push(5);
stack.push(6);
const poppedItem = stack.pop();
console.log(stack);

//25.array of object sorting with multiple properties
const arr = [
    { name: 'ajay', age: 20},
    { name: 'tom', age: 30},
    { name: 'sam', age: 18},
    { name: 'ram', age: 30 }
];
arr.sort((a, b) => {
    if (a.age < b.age) 
        return -1;
    if (a.age > b.age) 
        return 1;
});
console.log(arr);
//26.creating array of arrays
const arrayOfArrays = [];
arrayOfArrays.push([1, 2, 3]);
arrayOfArrays.push([4, 5, 6]);
arrayOfArrays.push([7, 8, 9]);
console.log(arrayOfArrays);

//27.comparing two array of equality
const arr1 = [1, 2, 3];
const arr2 = [1, 2, 3];
const arr3 = [1, 2, 4];
console.log("arr1 : "+arr1);
console.log("arr2 : "+arr2);
console.log("arr3 : "+arr3);
function check(a1,a2){
    c=0;
    if(a1.length!==a2.length){
        return false
    }
    for(let i=0;i<a1.length;i++){
        if(a1[i]==a2[i]){
            c++;
        }
    }
    if(c==a1.length)
        return true;
    else
        return false;
}
console.log("arr1 == arr2 : "+check(arr1,arr2));
console.log("arr1 == arr3 : "+check(arr1,arr3));

 // 28.Convert array into object
var arr=['a','b','c','d','e','f'];
var obj={}
for(var i=0;i<arr.length;i++){
    obj[arr[i]]=arr[i];
}
console.log("Convert array into object : ",obj);

//29 . removing array elements bys index;
let arr=[27,12,3,31];
let index=2;
arr.splice(index,1);
console.log(arr);

// 30.Insert item at specific position
const arr2=['a','b','c','d','e','f'];
arr2.splice(4, 0, "g");
console.log("Insert item at specific position : ",arr2.join());

//31.Sorting array with complex object
const arr3 = [
    { name: 'Ravi', age: 25 },
    { name: 'Kappa', age: 30 },
    { name: 'Sriram', age: 20 },
    { name: 'Kumar', age: 35 }
];
arr3.sort((a, b) => a.age - b.age);
console.log("Sorting array with complex object : ", arr3);

//.32 Longest string in an array
const arr4=["Ravi","Kappa","Sriram","Samy","subish","Kannan","Mams"]
let me=arr4[0].length;
for(var j=0;j<arr4.length;j++)
{
if(arr4[j].length>me)
    {
    me=arr4[j].length;
    var indx=j;
    }
}
console.log("Longest string in an array : ",arr4[indx])
