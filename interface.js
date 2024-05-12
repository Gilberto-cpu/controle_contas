

  
 document.addEventListener("DOMContentLoaded", function() {

    // Elementos do DOM
    let contaPagaPensao = document.getElementById("contaPagaPensao");
    let contapagaCondo = document.getElementById("contaPagaCondo");
    let btnCpfl = document.getElementById("cpfl1");
    let contaPaga = document.getElementById("contaPaga");
    let btnCondo = document.getElementById("condo");
    let btnFaculdade = document.getElementById("faculdade");
    let contaPagaCasa = document.getElementById("contaPagaCasa");
    let contaPagaFaculdade = document.getElementById("contaPagaFaculdade");
    let contaPagaCredito = document.getElementById("contaPagaCredito");
    let contaPagaOutros = document.getElementById("contaPagaOutros");
    let pagamentoTotal = document.getElementById("pagamento");
    let inputCpfl = document.getElementById("InputCpfl");
    let btnCasa = document.getElementById("casa")
    let somar = document.getElementById("btnSomar");
    let inputCondo = document.getElementById("input2");
    let inputPensao = document.getElementById("inputPensao");
    let inputCasa = document.getElementById("inputCasa");
    let inputFaculdade = document.getElementById("inputFaculdade");
    let inputInternet = document.getElementById("inputInternet");
    let inputCartao = document.getElementById("inputCartao");
    let inputIoutros = document.getElementById("inputOutros");
    let btnPensao = document.getElementById("pensao")
    let btnOutros = document.getElementById("outros")
    // Função para calcular a soma total
    function calcularSomaTotal() {
        let soma = 
            (isNaN(parseFloat(inputCondo.value)) ? 0 : parseFloat(inputCondo.value)) +
            (isNaN(parseFloat(inputCasa.value)) ? 0 : parseFloat(inputCasa.value)) +
            (isNaN(parseFloat(inputCartao.value)) ? 0 : parseFloat(inputCartao.value)) +
            (isNaN(parseFloat(inputCpfl.value)) ? 0 : parseFloat(inputCpfl.value)) +
            (isNaN(parseFloat(inputFaculdade.value)) ? 0 : parseFloat(inputFaculdade.value)) +
            (isNaN(parseFloat(inputInternet.value)) ? 0 : parseFloat(inputInternet.value)) +
            (isNaN(parseFloat(inputPensao.value)) ? 0 : parseFloat(inputPensao.value)) +
            (isNaN(parseFloat(inputIoutros.value)) ? 0 : parseFloat(inputIoutros.value));

        document.getElementById("pagMenor").value = soma;
        validarCampo();   
    }

    // Funções para mostrar inputs e subtrair valores
    function insertInput() {
        contaPaga.style.display = 'inline';
        subtrair(inputCpfl);
        validarInputPag();   
        calcularSomaTotal();   
    }

    function insertFaculdade() {
        contaPagaFaculdade.style.display = 'inline';
        document.getElementById("inputPensao").style.backgroundColor = 'lightgray';
        document.getElementById("inputPensao").style.color = 'blue';
        subtrair(inputFaculdade);
        calcularSomaTotal();
        validarInputPag();
    }

    function insertCondo() {
        contapagaCondo.style.display = 'inline';
        document.getElementById("InputCpfl").style.backgroundColor = 'lightgray';
        document.getElementById("InputCpfl").style.color = 'blue';
        subtrair(inputCondo);
        calcularSomaTotal();
        validarInputPag();
    }

    function insertCasa() {
        contaPagaCasa.style.display = 'inline';
        document.getElementById("input2").style.backgroundColor = 'lightgray';
        document.getElementById("input2").style.color = 'blue';
        subtrair(inputCasa);
        calcularSomaTotal();
        validarInputPag();
    }

    function insertPensao() {
        contaPagaPensao.style.display = 'inline';
        document.getElementById("inputCasa").style.backgroundColor = 'lightgray';
        document.getElementById("inputCasa").style.color = 'blue';
        subtrair(inputPensao);
        calcularSomaTotal();
        validarInputPag();
    }

    function insertInternet() {
        contaPagaInternet.style.display = 'inline';
        document.getElementById("inputFaculdade").style.backgroundColor = 'lightgray';
        document.getElementById("inputFaculdade").style.color = 'blue';
        subtrair(inputInternet);
        calcularSomaTotal();
        validarInputPag();
    }

    function insertCredito() {
        contaPagaCredito.style.display = 'inline';
        document.getElementById("inputInternet").style.backgroundColor = 'lightgray';
        document.getElementById("inputInternet").style.color = 'blue';
        subtrair(inputCartao);
        calcularSomaTotal();
        validarInputPag();
    }

    function insertOutros() {
        contaPagaOutros.style.display = 'inline';
        document.getElementById("inputCartao").style.backgroundColor = 'lightgray';
        document.getElementById("inputOutros").style.backgroundColor = 'lightgray';
        document.getElementById("inputCartao").style.color = 'blue';
        document.getElementById("inputOutros").style.color = 'blue';
        subtrair(inputIoutros);
        calcularSomaTotal();
        validarInputPag();
    }

    // Funções para subtrair valores
  
    function subtrair(valor) {
        let total = parseFloat(pagamentoTotal.value);
        total -= parseFloat(valor.value);
        pagamentoTotal.value =  total;
    } 


    // Função para validação de campos
    function validarCampo() {
        if (parseFloat(pagamentoTotal.value) < 0) {
            document.getElementById("pagamento").style.backgroundColor = 'red';
            document.getElementById("pagamento").style.color = 'white';
            modal.style.display = 'flex';
        } else {
            document.getElementById("pagamento").style.backgroundColor = '';
            document.getElementById("pagamento").style.color = '';
        }
    }

    // Configuração do modal
    const modal = document.getElementById('meuModal');
    const fecharModal = document.querySelector('.fechar');

    fecharModal.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });

    function validarInputPag() {
        let pagamentoTotal = document.getElementById("pagamento");
        let paragrafo = document.getElementById("paragrafo");

        if (pagamentoTotal.value.trim() === "") {
            paragrafo.removeAttribute('none');
            paragrafo.style.display = 'inline';
            contaPaga.style.display = 'none';
            pagamentoTotal.focus();
        } else {
            paragrafo.style.display = 'none';
        }
        return true;
             
 }
    //Adicionando eventos aos botões
    somar.addEventListener('click', calcularSomaTotal);
    btnCpfl.addEventListener('click', insertInput);
    btnCondo.addEventListener('click', insertCondo);
    btnCasa.addEventListener('click', insertCasa);
    btnPensao.addEventListener('click', insertPensao);
    btnFaculdade.addEventListener('click', insertFaculdade);
    internet.addEventListener('click', insertInternet);
    credito.addEventListener('click',insertCredito)
    btnOutros.addEventListener('click',insertOutros)

   })

 
