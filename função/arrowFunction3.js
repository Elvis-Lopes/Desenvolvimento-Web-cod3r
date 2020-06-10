let comparaComThis = function (param){
    console.log(this === param)
}

comparaComThis(global)

const obs = {}
comparaComThis = comparaComThis.bind(obs)
comparaComThis(global)
comparaComThis(obs)

let comparaComThisArrow = param => console.log(this === param)
comparaComThisArrow(global)
comparaComThisArrow(module.exports)

comparaComThisArrow = comparaComThisArrow.bind(obs)