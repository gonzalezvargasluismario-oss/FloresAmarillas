const btnAbrir = document.getElementById("btnAbrir");
const inicio = document.getElementById("inicio");

const escena = document.getElementById("escena");

const estrellas = document.getElementById("estrellas");

const particulas = document.getElementById("particulas");

const petalos = document.getElementById("petalos");

const flores = document.getElementById("flores");



// =========================================
// MÚSICA
// =========================================

const musica = new Audio("musica.mp3");

musica.loop = true;

musica.volume = 0.7;


// =========================================
// ABRIR SORPRESA
// =========================================

btnAbrir.addEventListener("click", function () {

    musica.play().catch(function (error) {
        console.log("No se pudo reproducir la música:", error);
    });

    inicio.style.opacity = "0";

    setTimeout(function () {

        inicio.style.display = "none";

        escena.style.display = "block";

        crearEstrellas();

        crearParticulas();

        crearFlores();

        iniciarPetalos();

    }, 1800);

});


// =========================================
// ESTRELLAS
// =========================================

function crearEstrellas() {

    const cantidad = 80;

    for (let i = 0; i < cantidad; i++) {

        const estrella =
            document.createElement("div");

        estrella.classList.add("estrella");

        estrella.style.left =
            Math.random() * 100 + "%";

        estrella.style.top =
            Math.random() * 65 + "%";

        estrella.style.setProperty(
            "--duracion",
            (1.5 + Math.random() * 3) + "s"
        );

        estrella.style.animationDelay =
            Math.random() * 4 + "s";

        estrellas.appendChild(estrella);
    }
}


// =========================================
// PARTÍCULAS
// =========================================

function crearParticulas() {

    const cantidad =
        window.innerWidth < 600 ? 25 : 45;

    for (let i = 0; i < cantidad; i++) {

        const particula =
            document.createElement("div");

        particula.classList.add(
            "particula"
        );

        particula.style.left =
            Math.random() * 100 + "%";

        particula.style.top =
            Math.random() * 75 + "%";

        particula.style.setProperty(
            "--duracion",
            (2 + Math.random() * 4) + "s"
        );

        particula.style.animationDelay =
            Math.random() * 4 + "s";

        particulas.appendChild(particula);
    }
}


// =========================================
// CREAR FLORES
// =========================================

function crearFlores() {

    const cantidad =
        window.innerWidth < 600 ? 7 : 11;

    for (let i = 0; i < cantidad; i++) {

        const flor =
            document.createElement("div");

        flor.classList.add("flor");

        /*
         * Distribución horizontal
         */

        const posicion =
            (i / (cantidad - 1)) * 100;

        flor.style.left =
            `calc(${posicion}% - 40px)`;


        /*
         * Retraso para que
         * crezcan una por una
         */

        flor.style.animationDelay =
            (i * 0.28) + "s";


        /*
         * Tallo
         */

        const tallo =
            document.createElement("div");

        tallo.classList.add("tallo");

        tallo.style.setProperty(
            "--inclinacion",
            ((Math.random() * 12) - 6) + "deg"
        );


        /*
         * Hoja izquierda
         */

        const hojaIzquierda =
            document.createElement("div");

        hojaIzquierda.classList.add(
            "hoja",
            "izquierda"
        );


        /*
         * Hoja derecha
         */

        const hojaDerecha =
            document.createElement("div");

        hojaDerecha.classList.add(
            "hoja",
            "derecha"
        );


        /*
         * Cabeza de la flor
         */

        const cabeza =
            document.createElement("div");

        cabeza.classList.add("cabeza");


        /*
         * Pétalos
         */

        for (let j = 0; j < 8; j++) {

            const petalo =
                document.createElement("div");

            petalo.classList.add(
                "petalo-flor"
            );

            cabeza.appendChild(petalo);
        }


        /*
         * Centro
         */

        const centro =
            document.createElement("div");

        centro.classList.add("centro");

        cabeza.appendChild(centro);


        /*
         * Armar flor
         */

        flor.appendChild(tallo);

        flor.appendChild(hojaIzquierda);

        flor.appendChild(hojaDerecha);

        flor.appendChild(cabeza);

        flores.appendChild(flor);
    }
}


// =========================================
// CREAR UN PÉTALO
// =========================================

function crearPetalo() {

    const petalo =
        document.createElement("div");

    petalo.classList.add(
        "petalo-caida"
    );

    petalo.style.left =
        Math.random() * 100 + "%";

    petalo.style.setProperty(
        "--duracion",
        (5 + Math.random() * 6) + "s"
    );

    petalo.style.animationDelay =
        Math.random() * 2 + "s";


    /*
     * Tamaño aleatorio
     */

    const tamaño =
        0.6 + Math.random() * 0.8;

    petalo.style.scale =
        tamaño;


    petalos.appendChild(petalo);


    /*
     * Eliminar después
     * de la animación
     */

    setTimeout(function () {

        petalo.remove();

    }, 13000);
}


// =========================================
// INICIAR PÉTALOS
// =========================================

function iniciarPetalos() {

    setInterval(function () {

        crearPetalo();

    }, 450);
}