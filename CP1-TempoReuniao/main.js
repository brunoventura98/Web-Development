function calcular() {
    // Pegando os valores por Id do prompt()
    let horaIni = document.getElementById("horaIni").value;
    let minIni = document.getElementById("minIni").value;
    let horaFim = document.getElementById("horaFim").value;
    let minFim = document.getElementById("minFim").value;

    // Os valores chegam como string, devemos transformar em números inteiros
    horaIni = parseInt(horaIni);
    minIni = parseInt(minIni);
    horaFim = parseInt(horaFim);
    minFim = parseInt(minFim);

    // Transformando horas em minutos e pegando o valor total
    let inicioEmMinutos = (horaIni * 60) + minIni;
    let fimEmMinutos = (horaFim * 60) + minFim;

    // Calculando a duração
    let duracao = fimEmMinutos - inicioEmMinutos

    // Transformando o tempo final de volta em minutos
    let horas = Math.floor(duracao / 60);
    let minutos = duracao % 60

    // Atualiza o valor no html
    document.getElementById("horas").innerText = horas;
    document.getElementById("minutos").innerText = minutos;
}