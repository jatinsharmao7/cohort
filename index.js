// console.log("hii");
// let firstname="jatin";
// let lastname="sharma";
// console.log("first name is "+firstname+" last name is "+lastname);
// let age=19;
// if(age>=18){
//     console.log("he is eligible for vote");

// }
// else{
//     console.log("not eligible for vote");
// }
// let ans=0;
// for(let i=0;i<=1000;i++){
//     ans=ans+i;
// }
// console.log(ans);
// let arr=[2,3,4,5,6,7,8,9];
// let ans1=0;
// for(let i=0;i<arr.length;i++){
//     if((arr[i]&1)==0){
//         console.log(arr[i]);
//     }
//     if(ans1<arr[i]){
//         ans1=arr[i];
//     }

// }
// console.log(ans1);
// //object in js
// let user=[{
//     firstname:"jatin",
//     gender:"male"
// },{
//     firstname:"adi",
//     gender:"male"
// },{
//     firstname:"divya",
//     gender:"female"
// }];
// for(let i=0;i<user.length;i++){
//     if(user[i]["gender"]=="male"){
//         console.log(user[i]["firstname"]);
//     }
// }
// //function 
// function sum(a,b){
//     return a+b;
// }
// const val=sum(2,4);
// console.log(val);
// //callback function
// function findsum(a,b,fncall){
//     const result=a+b;
//     fncall(result);

// }
// function activefn(data){
//     console.log("result of sum: "+data);
// }
// function passivefn(data){
//     console.log("sum's result is: "+data);
// }
// //you only allowed to call one fn after this
// //how will you display result of a sum
// findsum(3,5,activefn);

// //array started 
// const personarray=["jatin","adi","anmol"];
// const age=[21,22,23,24,25];
// for(let i=0;i<age.length;i++){
//     if(age[i]%2==0){
//         console.log(age[i]);
//     }
// }
// //object started 
// const allusers=[{
//     firstname:"jatin",
//     gender:"male"
// },{
//     firstname:"anmol",
//     gender:"randi"
// },{
//     firstname:"aditya",
//     gender:"trans"

// }];
// for(let i=0;i<allusers.length;i++){
//     if(allusers[i]["gender"]=="male"){
//         console.log(allusers[i]["firstname"]);
//     }
// }
// call back function
function sum(a,b,fntocall,fntocallpassive){
    const result=a+b;
    fntocall(result);
    fntocallpassive(result);
}
function displayResult(data){
    console.log("result of sum is: "+data);
}
function displayresultpassive(data){
    console.log("sum's result is: "+data);
}
//you only allowed to call one fn after this
//how will you display result of a sum
const ans=sum(3,5,displayResult,displayresultpassive);