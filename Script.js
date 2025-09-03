document.getElementById('mostrarBuscador').addEventListener('click', function () {
    const buscador = document.getElementById('buscador');
    buscador.classList.toggle('hidden');
    buscador.focus();
});

function buscarLugares() {
    const texto = document.getElementById('buscador').value.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    const lugares = document.querySelectorAll('.lugar');

    lugares.forEach(lugar => {
        const titulo = lugar.querySelector('h2').textContent.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
        const descripcion = lugar.querySelector('p').textContent.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");

        // Compara palabras clave individualmente
        const palabrasTexto = texto.split(" ");
        const hayCoincidencia = palabrasTexto.some(palabra =>
            titulo.includes(palabra) || descripcion.includes(palabra)
        );

        if (texto === "" || hayCoincidencia) {
            lugar.classList.remove('hidden');
        } else {
            lugar.classList.add('hidden');
        }
    let algunoVisible = false;
    lugares.forEach(lugar => {
        if (!lugar.classList.contains('hidden')) {
            algunoVisible = true;
        }
    });

    document.getElementById('noResultados').style.display = algunoVisible ? 'none' : 'block';

