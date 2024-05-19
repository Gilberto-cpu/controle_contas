async function subtrair() {
    let inputCondo = document.getElementById("input2").value;
    let inputPensao = document.getElementById("inputPensao").value;
    let inputCasa = document.getElementById("inputCasa").value;
    let inputFaculdade = document.getElementById("inputFaculdade").value;
    let inputInternet = document.getElementById("inputInternet").value;
    let inputCartao = document.getElementById("inputCartao").value;
    let inputIoutros = document.getElementById("inputOutros").value;
    let inputCpfl = document.getElementById("inputCpfl").value;

    const response = await fetch('http://localhost:3001/botao', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            inputCpfl,
            inputCondo,
            inputFaculdade,
            inputCartao,
            inputIoutros,
            inputPensao,
            inputCasa,
            inputInternet
        })
    });
}
    const data = await response.json();
    document.getElementById('pagamento').value = data.resultado; 
