// Resposta 1
const funcionario = {
    codigo: 10,
    nome: 'Bruno'
};

// Resposta 2
const funcionario2: {codigo: number, nome: string} = {
    codigo: 10,
    nome: 'bruno'
}

// Respostas 3 e 4
interface Funcionario {  // interfaces https://blog.logrocket.com/types-vs-interfaces-in-typescript/
    codigo: number,
    nome: string
};

const funcionarioObj = {} as Funcionario;
funcionarioObj.codigo = 10;
funcionarioObj.nome = 'Bruno';

const funcionarioObj2: Funcionario = {
    codigo: 10,
    nome: 'Bruno'
}