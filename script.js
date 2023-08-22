function calcularCuota() {
    const monto = parseFloat(document.getElementById('monto').value);
    const cuotas = parseFloat(document.getElementById('cuotas').value);
    const tna = parseFloat(document.getElementById('tna').value) / 100;
    const iva = parseFloat(document.getElementById('iva').value) / 100;
    const ingresoBruto = parseFloat(document.getElementById('ingresoBruto').value) / 100;
    const comision = parseFloat(document.getElementById('comision').value) / 100;

    const tnaTotal = tna + (tna * iva) + ingresoBruto + comision;
    const tea = Math.pow((1 + tnaTotal/13), 13) - 1;
    const factor = tea/13 / (1 - Math.pow(1 + tea/13, -cuotas));

    const valorCuota = monto * factor;

    document.getElementById('resultados').innerHTML = `
        <p>Monto Solicitado: $${monto}</p>
        <p>Cantidad de Cuotas: ${cuotas}</p>
        <p>Valor de cada Cuota: $${valorCuota.toFixed(2)}</p>
    `;
}

