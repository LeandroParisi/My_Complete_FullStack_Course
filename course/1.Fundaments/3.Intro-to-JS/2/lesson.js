console.log("FIND")
//FIND

const arr = [1, 2, 3, 4];

function minhaFuncao(elementDoArray) {
    const ehIgualA3 = elementDoArray === 3
    return ehIgualA3
}

const xl = (elementDoArray) => {
    const ehIgualA3 = elementDoArray === 3
    return ehIgualA3
}

function myFind(funcaoDoUsuario, array) {
    for (const item of array) {
        const result = funcaoDoUsuario(item)
        if (result === true) {
            console.log("Foi encontrado o valor:" + item);
            return item
        } 
        else {
        }
    }
}

myFind(minhaFuncao, arr)

console.log("FILTER")
//FILTER

const filterArr = [1, 2, 3, 4, 5, 6];

function ehPar (numero) {
    if (numero % 2 === 0){
        return true;
    }
    else {
        return false;
    }
}

function myFilterSearch(filterArr, ehPar) {
    let arrB = [];
    for (const valor of filterArr){
        if (ehPar(valor) === true){
            arrB.push(valor)
        }
    }
    return arrB;
}

console.log("Novo array criado:" + myFilterSearch(filterArr, ehPar));

console.log("EVERY")
//EVERY

const everyArr = [2, 4, 3];

function ehPar (numero) {
    if (numero % 2 === 0){
        return true;
    }
    else {
        return false;
    }
}

function myEverySearch(everyArr, ehPar) {
    for (const valor of everyArr){
        if (ehPar(valor) === false){
            return false;
        }
    }
    return true;
}

console.log("A condição testada é:" + myEverySearch(everyArr, ehPar));

console.log("MAP")
//MAP

const mapArr = [2, 4, 6];

function multipliqueNum (numero) {
    return numero * 2;
}

function myMap(mapArr, multipliqueNum) {
    let novoArrMap = []
    for (const valor of mapArr){
        novoArrMap.push(multipliqueNum(valor))
    }
    return novoArrMap;
}

console.log("O novo array é:" + myMap(mapArr, multipliqueNum));




