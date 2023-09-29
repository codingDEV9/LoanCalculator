const formCalculo = document.querySelector("#prestamo-form");
const divResultado = document.querySelector("#resultados");
const loadinGif = document.querySelector("#loading");


const valorPrestamo = document.getElementById("prestamo");
const valorInteres = document.getElementById("interes");
const valorAños = document.getElementById("año-devol");
const valorPagoMensual = document.getElementById("pago-mensual");
const valorMontoAPagar = document.getElementById("monto-a-pagar");
const valorInteresTotal = document.getElementById("interes-total");


formCalculo.addEventListener("submit", calcularPrestamo);

function calcularPrestamo(e) {
    e.preventDefault();

    divResultado.style.display = 'none';

    let prestamo = parseFloat(valorPrestamo.value);
    let interes = parseFloat(valorInteres.value);
    let meses = parseFloat(valorAños.value * 12);
    let prestamoConIntereses = prestamo + (prestamo * interes) /100;
    let pagoMensual = parseFloat(prestamoConIntereses / meses);
    
    if (isFinite(pagoMensual)) {
        loadinGif.style.display = 'block';
        valorPagoMensual.value = pagoMensual.toFixed(2);
        valorMontoAPagar.value = parseFloat(pagoMensual * meses).toFixed(2);
        valorInteresTotal.value = (prestamoConIntereses - prestamo).toFixed(2);
        mostrarResultado();
    } else {
        mostrarError();
    }
}
function mostrarResultado() {
    setTimeout(function(){
        loadinGif.style.display = 'none';
        divResultado.style.display = 'block';
    }, 1000);
}

function mostrarError() {
    const tarjeta = document.getElementById("main-card");
    const divError = document.createElement("div");
    divError.className = "alert alert-danger";
    divError.innerText = "Revisa los numeros ingresados";


    tarjeta.prepend(divError);
    setTimeout(function(){
        divError.remove();
    }, 3000);
}