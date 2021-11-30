//Imperativa
const hola= "Pedro";
const decirHola =()=>{
    //return function(){ssdf};
}
//decirHola()
//const dHi=(n)=>`Hi ${n}`;
//console.log(dHi(hola));
const sum = (a, b) => a+b;
const sum2 = (a,b) => a-b;
const suma = (a, b, sum) => sum(a,b);
//console.log(suma(2,2,sum2));
var numbers=[1,5,10,15]
var users=[
    {id: 1, age:10, name: "tal"},
    {id: 2, age:15, name: "tal"},
    {id: 3, age:18, name: "tal"}
]
//map mapeo
var doubles = users.map((num)=>num.age*3);
//reduce el arreglo según la condición
const reducer = (previousValue, currentValue)=> previousValue+currentValue;
var reduce= numbers.reduce(reducer, 5);
let filter = numbers.filter((num)=> num>6)
let found = users.find((user)=>user.age>14)
//concat
let array1 = ['a', 'b', 'c']
let array2 = ['d', 'e', 'f'];
let con = array1.concat(array2);
//fill
let arrfill=[1,2,3,4]
console.log(arrfill.fill(6));
//every
let a = (currentValue)=> currentValue < 40
let arreve=[1,30,39,29,10,13];
console.log(arreve.every(a));
//flat
let arrflat=[1,2,[3,4]];
arrflat.flat();
//includes
let arrin=['perro','gato','ajolote']
console.log(arrin.includes('perro'));
//pop
let verduras = ['brocoli', 'coliflor', 'tomate']
console.log(verduras.pop());
console.log(verduras);
//push
verduras.push('tomate');
console.log(verduras);
//slice
let animales = arrin.slice(1,3);
console.log(animales);
//sort
let arrsort = ['8peso','5peso','3peso','1peso']
arrsort.sort();
console.log(arrsort);
//splice
let meses =['Enero','Febrero','Abril','Mayo']
meses.splice(2, 0, 'Marzo');
console.log(meses);