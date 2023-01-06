class Atleta {
    constructor(nome, idade, peso, altura, notas) {
        this.nome = nome;
        this.idade = idade;
        this.peso = peso;
        this.altura = altura;
        this.notas = notas;
        }

        obtemNomeAtleta(){        
        return this.nome;
        }
        
        obtemIdadeAtleta(){
            return this.idade;
        }

        obtemPeso(){
            return this.peso;
        }

        obtemAlturaAtleta(){
            return this.altura;
        }

        obtemNotasAtleta(){
            return this.notas
        }

        calculaCategoria(){
            if (this.idade >=9 && this.idade <= 11){
                return "Ifantil";
            }
            if (this.idade > 11 && this.idade <= 13){
                return "Juvenil";
            }
            if (this.idade > 13 && this.idade <= 15){
                return "Intermediário";
            }
            if (this.idade > 15 && this.idade <= 30){
                return "Adulto";
            }
            else{
                return "Sem Categoria";
            }
        }

        obtemIMC(){
            return this.peso / (this.altura * this.altura);
        }

        obtemMediaValida(){
            let notasObtidas = this.notas.sort(function (a, b){
                return a - b;     
              });

              let notasValidas = notasObtidas.slice(1, 4);
              let soma = 0
              notasValidas.forEach(function(nota){
                soma = soma + nota
                });

              return soma / notasValidas.length;
        }



}
const atleta = new Atleta("Cesar Abascal",
   30, 80, 1.70,
    [10, 9.34, 8.42, 10, 7.88]);

console.log(`Nome: ${atleta.obtemNomeAtleta()} \nIdade: ${atleta.obtemIdadeAtleta()} \nPeso: ${atleta.obtemPeso()} \nAltura: ${atleta.obtemAlturaAtleta()} \nNotas: ${atleta.obtemNotasAtleta()} \ncategoria: ${atleta.calculaCategoria()} \nIMC: ${atleta.obtemIMC()} \nMédia Valida: ${atleta.obtemMediaValida()}` );