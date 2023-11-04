function verificaChuteValido(chute) {
    const numero = +chute

    if(chuteForInvalido(numero)) {
        elementoChute.innerHTML += '<div>Valor inválido</div>'
        return
    }

    if(numeroForaDoRange(numero)) {
        elementoChute.innerHTML += `
        <div> 
            Valor inválido: o número secreto precisa entre ${menorValor} e ${maiorValor}
        </div>    
        `
        return
    }

    if(numero === numeroSecreto) {
        document.body.innerHTML = `
        <h2>Você acertou!</h2>
        <h3>O número secreto era ${numeroSecreto}</h3>

        <button id="jogar-novamente" class="btn-jogar">Jogar novamente</button>
        `
    } else if(numero > numeroSecreto) {
        elementoChute.innerHTML += `
        <div>
            O número secreto é menor <i class="fa-solid fa-down-long"></i>
        </div>
        `
    } else {
        elementoChute.innerHTML += `
        <div>
            O número secreto é maior <i class="fa-solid fa-up-long"></i>
        </div>
        `
    }
}

function numeroForaDoRange(numero) {
    return numero > maiorValor || numero < menorValor
}

function chuteForInvalido(numero) {
    return Number.isNaN(numero)
}

document.body.addEventListener('click', e => {
    if(e.target.id == 'jogar-novamente') {
        window.location.reload()
    }
})