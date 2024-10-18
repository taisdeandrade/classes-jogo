class heroi{
    constructor(nome, idade, tipo)
    {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar(tipo)
    {
        switch (tipo){
            case 'mago':
                return "magia";
            case "guerreiro":
                return "espada";
            case "monge":
                return "artes marciais";
            case "ninja":
                return "shuriken";
        }
            
    }
   
}

let personagem = new heroi("Jhon", 30, "ninja");
let ataque = personagem.atacar(personagem.tipo);

console.log(`${personagem.tipo} atacou usando ${ataque}`);