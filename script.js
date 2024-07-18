function calcularPuntaje() {
    let enarm = parseFloat(document.getElementById('enarm').value);
    let promedio = parseFloat(document.getElementById('promedio').value);
    
    if (isNaN(enarm) || isNaN(promedio)) {
        alert("Por favor, ingrese valores válidos en los campos obligatorios.");
        return;
    }
    
    let puntajeBase = (enarm + promedio) / 2;
    
    let trabajadorIMSS = document.getElementById('trabajadorIMSS').checked;
    let hijoTrabajadorIMSS = document.getElementById('hijoTrabajadorIMSS').checked;
    let internadoIMSS = document.getElementById('internadoIMSS').checked;
    let servicioSocialIMSS = document.getElementById('servicioSocialIMSS').checked;
    
    if (trabajadorIMSS) {
        puntajeBase += 1.0;
    } else if (hijoTrabajadorIMSS) {
        puntajeBase += 0.75;
    }
    
    if (internadoIMSS) {
        puntajeBase += 0.25;
    }
    
    if (servicioSocialIMSS) {
        puntajeBase += 0.75;
    }
    
    alert(`Tu puntaje es de: ${puntajeBase.toFixed(2)}`);
}

