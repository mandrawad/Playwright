
var fname = 'Sachin';
var company = 'Technovert';
var mobileNumber = 1234567890;
var isAutomation = true;
var hasPlaywright;

console.log('First Name:', fname);
console.log(typeof fname); 

console.log('Company:', company);
console.log(typeof company);
console.log('Mobile Number:', mobileNumber);
console.log(typeof mobileNumber);
console.log('Is Automation:', isAutomation);
console.log(typeof isAutomation);
console.log('Has Playwright:', hasPlaywright);
console.log(typeof hasPlaywright);


var a = 3
var b = '3'
console.log(a===b);

console.log(a==b);



var a = 3;
var b = 5;

if(a>b && a==b){
    console.log('A is greater than B');
}else{
    console.log('A is not greater than B');
}

if(a<b || a==b){
    console.log('A is greater than B');
}else{
    console.log('A is not greater than B');
}

(a!=b)? console.log('A is not equal to B'): console.log('A is equal to B');
