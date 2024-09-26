

const arr = [1, 2, 3, 4];

function minhaFuncao(elementDoArray) {
    const ehIgualA3 = elementDoArray == 3
    return ehIgualA3
}

function myFind(funcaoDoUsuario, array) {
    for (const item of array) {
        const result = funcaoDoUsuario(item)

        if (result === true) {
            return item
        } else {

        }
    }
}

myFind(minhaFuncao, arr)










// arr.filter()

// arr.every()
// arr.map()




