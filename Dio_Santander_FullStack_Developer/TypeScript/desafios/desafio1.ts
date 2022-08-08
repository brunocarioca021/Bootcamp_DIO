/*
DESAFIO 1:

Como podemos rodar isso em um arquivo .ts sem causar erros?

 let employee = {};
employee.code = 10;
employee.name = "John";
*/

//RESPOSTA

let employee:{code:number,name:string} = {
    code:10,
    name:'John'
};


console.log(`${employee.name}´s code is ${employee.code}.`);