function soma() {
    let num1, num2;
    num1 = document.getElementById("Num1").value;
    num2 = document.getElementById("Num2").value;
    let resp = parseFloat(num1) + parseFloat(num2); //pode usar parseInt tbm
    alert(resp);
    document.getElementById('exibe').innerText = `Resultado: ${resp}`;
}

function subtrai() {
    let num1, num2;
    num1 = document.getElementById("Num1").value;
    num2 = document.getElementById("Num2").value;
    let resp = parseFloat(num1) - parseFloat(num2); //pode usar parseInt tbm
    alert(resp);
    document.getElementById('exibe').innerText = `Resultado: ${resp}`;
}

function multiplica() {
    let num1, num2;
    num1 = document.getElementById("Num1").value;
    num2 = document.getElementById("Num2").value;
    let resp = parseFloat(num1) * parseFloat(num2); //pode usar parseInt tbm
    alert(resp);
    document.getElementById('exibe').innerText = `Resultado: ${resp}`;
}

function divide() {
    let num1, num2;
    num1 = document.getElementById("Num1").value;
    num2 = document.getElementById("Num2").value;
    let resp = parseFloat(num1) / parseFloat(num2); //pode usar parseInt tbm
    alert(resp);
    document.getElementById('exibe').innerText = `Resultado: ${resp}`;
}