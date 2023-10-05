const name="Hamid";
const age="22";
//console.log(name + age);
console.log(`hello my name is ${name} and my age is ${age}`);
const gameName = new String(' mario')

console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('r'));
console.log(gameName.trim());

const newString =gameName.substring(0,4);
console.log(newString);

const anotherString = gameName.slice(-4,0);
console.log(anotherString);
 
const url ="http://hamid.com/hamid%20raza"
console.log(url.replace('%20','-'));

console.log(url.includes('Gobar'));
/* 
hello my name is Hamid and my age is 22
 
{}
 MARIO
a
3
mario
 mar

http://hamid.com/hamid-raza
false
*/