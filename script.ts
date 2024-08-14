
// Interfaces podem extender uma outra interface ou type
interface documents extends personProps {
    documents:{
        cpf: string;
        rg: number;
    }
}

// Exemplo de type - Nome por ter o sinal '?' se torna opcional
type personProps = {
    name?: string;
    age: number;
}

// Exemplo de contatenação de um type ou interface utilizando o '&'
type fullPerson = personProps & documents;

// Exemplo de tipagem de um parâmetro sendo objeto e utilizando um type "{name, age}: personProps"
function getDataPerson({name, age}: personProps): 
// Exemplo de tipagem do retorno da função, estamos retornando um objeto e espeficiando os tipos das propiedades. A propiedade 'countName' possui dois tipos possíveis "Number" ou "Undefined"
{adult: boolean; countName: number | undefined}
{
    return {
        adult: (age >= 18) ? true : false,
        // Validando o name por ele ser uma propriedade opcional
        countName: (typeof name === undefined) ? 0 : name?.length
    }
}

const person = {name: "Gustavo", age: 33}

console.log(getDataPerson(person));