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

console.log(suma(2,2,sum2));