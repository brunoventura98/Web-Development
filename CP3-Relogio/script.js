let elem = document.getElementById("relogio") // localiza o Id relogio no html

function relogio() {
    const horario = new Date () // pega data e hora reais

    let horas = horario.getHours() // pega horas 
    let minutos = horario.getMinutes() // pega minutos 
    let segundos = horario.getSeconds() // pega segundos 
    
    // Tratamento do 0 à esquerda para não fica 23:5:14
    if (horas < 10) {
        horas = "0" + horas
    }
    if (minutos < 10) {
        minutos = '0' + minutos
    }
    if (segundos < 10) {
        segundos = '0' + segundos
    }

    // monta o texto final
    let texto_horario = horas + ":" + minutos + ":" + segundos

    // coloca o texto final na variável elem, que está relacionada ao Id 'relogio' no html
    elem.innerText = texto_horario
}

// chama a função
relogio()

setInterval(relogio, 1000) // atualiza o relogio a cada 1 segundo para alterar o contador;