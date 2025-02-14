// VARIAVEIS

// TIPOS PRIMITIVOS.
// boolean , number, string.
let ligado:boolean = false;
let nome:string = "Artur";
let idade:number = 30; // também serve para números com casas decimais.

// TIPOS ESPECIAIS.
// null, undefined.
let nulo:null = null;
let indefinido:undefined = undefined;

// TIPOS ABRANGENTES.
// any, void.
let retorno:void
let retornoView:any = "Artur" // aceita qualquer tipo primitivo.

// OBJETO - SEM PREVISIBILIDADE.
let produto:object = {
    name:"Artur",
    cidade:"mg",
    idade: 30
};

// OBJETO TIPADO - COM PREVISIBILIDADE.
type ProdutoLoja = {
    nome: string;
    preco: number;
    unidades: number;
}

let meuProduto:ProdutoLoja = {
    nome: "Tênis",
    preco: 89.99,
    unidades: 54
};

// ARRAYS.
let dados:string[] = ["Artur", "Maria", "Felipe"];
let dados2: Array<string> = ["Artur", "Maria", "Felipe"];

// ARRAY DE VARIOS TIPOS.
let infos:(string | number)[] = ["Artur", 20, "Maria", 24];

// TUPLAS.
let boleto:[string, number, number] = ["conta de agua", 199.90, 1294124];

// DATAS.
let aniversario:Date = new Date("2025-02-13 05:00");
console.log(aniversario.toString());

// FUNÇÕES.
function addNumber(x:number, y:number):number {
    return x + y;
};

let soma:number = addNumber(3, 5);
console.log(soma);

// FUNÇÕES MULTI TIPOS.
function callToPhone(phone:number | string) {
    return phone;
}

// FUNÇÕES ASSÍNCRONAS.
async function getDatabase(id:number):Promise<string> {
    return "Artur";
}

// INTERFACES.
interface robot {
    readonly id: number | string;
    name: string;
}

const bot: robot = {
    id: 1,
    name: "Robocop"
}

// CLASSES.
class Character {
    name?:string;
    stregth:number;
    skill:number;

    constructor(stregth:number, skill:number) {
        this.stregth = stregth;
        this.skill = skill;
    }

    attack():void {
        console.log(`Attack with ${this.stregth} points.`);
    }
};

const p1 = new Character(10, 98);
p1.attack();

// GENÉRICOS.
function concatArray<T>(...itens: T[]): T[] {
    return new Array().concat(...itens);
}

const numArray = concatArray<number[]>([1, 5], [3]);
const stgArray = concatArray<string[]>(["Artur", "Maria"], ["Cachorro"]);
console.log(numArray);
console.log(stgArray);

// DECORATORS.
function ExibirNome(target:any) {
    console.log(target);
}

@ExibirNome
class Funcionario {};

@ExibirNome
class Quincas {};