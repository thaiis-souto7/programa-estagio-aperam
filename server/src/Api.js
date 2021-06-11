const fs = require('fs');
const path = require('path');

class Api{

    async execute(request, response){
        
        let somaSul = 0;
        let somaSudeste = 0;
        let somaCentro = 0;
        let somaNorte = 0;
        let somaNordeste = 0;

        // ************************** REGIÃO SUL **************************//
        const sul = fs.readFileSync("sul.CSV", {encoding:'utf-8', flag:'r'});
        sul.split("\n").shift()
        const newSul = sul.split("\n")
        const lengthSul = newSul.length
        console.log(lengthSul)

        for (let index = 1; index < lengthSul; index++) {
            somaSul += Number(newSul[index].split(";")[2]);
        }
        console.log(somaSul)

        // ************************** REGIÃO SUDESTE **************************//
        const sudeste = fs.readFileSync('sudeste.csv', {encoding:'utf-8', flag:'r'});
        sudeste.split("\n").shift()
        const newSudeste = sudeste.split("\n")
        const lengthSudeste = newSudeste.length
        console.log(lengthSudeste)

        for (let index = 1; index < lengthSudeste; index++) {
            somaSudeste += Number(newSudeste[index].split(";")[2]);
        }
        console.log(somaSudeste)

        // ************************** REGIÃO CENTRO-OESTE **************************//
        const centro = fs.readFileSync('centro.csv', {encoding:'utf-8', flag:'r'});
        centro.split("\n").shift()
        const newCentro = centro.split("\n")
        const lengthCentro = newCentro.length
        console.log(lengthCentro)

        for (let index = 1; index < lengthCentro; index++) {
            somaCentro += Number(newCentro[index].split(";")[2]);
        }
        console.log(somaCentro)

        // ************************** REGIÃO NORTE **************************//
        const norte = fs.readFileSync('norte.csv', {encoding:'utf-8', flag:'r'});
        norte.split("\n").shift()
        const newNorte = norte.split("\n")
        const lengthNorte = newNorte.length
        console.log(lengthNorte)

        for (let index = 1; index < lengthNorte; index++) {
            somaNorte += Number(newNorte[index].split(";")[2]);
        }
        console.log(somaNorte)

        // ************************** REGIÃO NORDESTE **************************//
        const nordeste = fs.readFileSync('nordeste.csv', {encoding:'utf-8', flag:'r'});
        nordeste.split("\n").shift()
        const newNordeste = nordeste.split("\n")
        const lengthNordeste = newNordeste.length
        console.log(lengthNordeste)

        for (let index = 1; index < lengthNordeste; index++) {
            somaNordeste += Number(newNordeste[index].split(";")[2]);
        }
        console.log(somaNordeste)

        const result = {
            somaSul, 
            somaSudeste, 
            somaCentro, 
            somaNorte, 
            somaNordeste, 
            lengthSul, 
            lengthSudeste, 
            lengthCentro, 
            lengthNorte, 
            lengthNordeste
        }

        console.log(result)
        return response.json(result)

    }
}

module.exports = Api;