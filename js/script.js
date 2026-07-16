// ==========================
// ELEMENTOS
// ==========================

const enterButton = document.getElementById("enterButton");

const welcome = document.getElementById("welcome");

const invitation = document.getElementById("invitation");

const music = document.getElementById("music");


const modal = document.getElementById("modal");

const confirmButton = document.getElementById("confirmButton");

const closeButton = document.querySelector(".close");

const yesButton = document.querySelector(".yes");

const noButton = document.querySelector(".no");



// ==========================
// ABRIR INVITACIÓN
// ==========================


enterButton.addEventListener("click", () => {


    // Ocultar bienvenida

    welcome.style.opacity = "0";


    setTimeout(() => {

        welcome.style.display = "none";

        invitation.style.display = "block";


    },500);



    // Música

    music.volume = 0.3;


    music.play().catch(() => {

        console.log(
            "El navegador bloqueó la reproducción automática"
        );

    });



    window.scrollTo({

        top:0,

        behavior:"smooth"

    });


});




// ==========================
// CUENTA REGRESIVA
// ==========================


const eventDate = new Date(
    "August 29, 2026 15:00:00"
).getTime();



function countdown(){


    const now = new Date().getTime();


    const distance = eventDate - now;



    if(distance <= 0){


        document.getElementById("timer").innerHTML = `

        <h2>
        ¡Hoy es el gran día! 🤎🧸
        </h2>

        `;


        return;

    }



    const days = Math.floor(

        distance /
        (1000 * 60 * 60 * 24)

    );



    const hours = Math.floor(

        (distance %
        (1000 * 60 * 60 * 24))
        /
        (1000 * 60 * 60)

    );



    const minutes = Math.floor(

        (distance %
        (1000 * 60 * 60))
        /
        (1000 * 60)

    );



    const seconds = Math.floor(

        (distance %
        (1000 * 60))
        /
        1000

    );



    document.getElementById("days").textContent = days;

    document.getElementById("hours").textContent = hours;

    document.getElementById("minutes").textContent = minutes;

    document.getElementById("seconds").textContent = seconds;



}



setInterval(countdown,1000);

countdown();




// ==========================
// MODAL CONFIRMACIÓN
// ==========================


confirmButton.addEventListener("click",()=>{


    modal.style.display="flex";


});



closeButton.addEventListener("click",()=>{


    modal.style.display="none";


});



window.addEventListener("click",(event)=>{


    if(event.target === modal){


        modal.style.display="none";


    }


});





// ==========================
// WHATSAPP
// ==========================


const telefono = "50687090992";



yesButton.addEventListener("click",()=>{


    const mensaje = `

Hola 🤎🧸

Confirmo que SÍ asistiré a la revelación de sexo.

Estoy muy feliz de acompañarlos en este momento tan especial.

`;



    window.open(

        `https://wa.me/${telefono}?text=${encodeURIComponent(mensaje)}`,

        "_blank"

    );


});




noButton.addEventListener("click",()=>{


    const mensaje = `

Hola 🤎

Muchas gracias por la invitación.

Lamentablemente NO podré asistir a la revelación de sexo.

Les deseo lo mejor en esta hermosa etapa 🧸

`;



    window.open(

        `https://wa.me/${telefono}?text=${encodeURIComponent(mensaje)}`,

        "_blank"

    );


});