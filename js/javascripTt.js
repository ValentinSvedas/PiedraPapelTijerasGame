"use strict";

document.addEventListener("DOMContentLoaded", function(){


let jugar = document.querySelector("#boton-juego");
jugar.addEventListener("click", async function(){
    let promesa = fetch("http://localhost/PPTJuego/gamEe.html");
    document.querySelector("#juego").innerHTML= "Cargando..."
    try{
        let response = await promesa;
        if(response.ok){
            let html = await response.text();
            if(html){
                let div = document.querySelector("#juego");
                console.log(html)
                div.innerHTML = html;

                let jGanadas=0;
                let jPerdidas=0;
                let cGanadas=0;
                let cPerdidas=0;
                let juegos =0 ;

                let btnjugar = document.querySelector("#jugar");
                 btnjugar.addEventListener("click", function(){ //Empieza el juego
                    let piedra = document.querySelector("#piedra");
                    let papel = document.querySelector("#papel");
                    let tijera = document.querySelector("#tijeras");
                    let numRandom = Math.floor(Math.random()*3+1);
                    let divR = document.querySelector("#resultado"); 
                    let numJ;
                   

                    if(piedra.checked){ //comprueba lo que el jugador seleccionaa
                        numJ = 1;
                    }
                    else if(papel.checked){
                        numJ = 2;
                    }
                    
                    else if(tijeras.checked){
                        numJ = 3;
                    }
                    document.querySelector("#rJugador").src = "img/imagen"+numJ+".jpg"; //Cambia la imagen del jugador
                    document.querySelector("#rComputadora").src  = "img/imagen"+numRandom+".jpg";//Cambia la imagen de la maquina
                    let ctabla = document.querySelector("#ctabla");
                    let jtabla = document.querySelector("#jtabla");
                    console.log(numRandom);
                    if(numRandom == 1 && tijera.checked || numRandom == 2 && piedra.checked || numRandom == 3 && papel.checked){ //Comprueba si perdiste
                        console.log("Perdiste");
                        let ganador = "Computadora";
                        juegos++;
                        cGanadas++;
                        jPerdidas++;
                        divR.innerHTML = "Perdiste"
                        divR.classList.add("perdiste");
                        let nTabla = "<tr>"+"<td>"+ ganador +"</td>"+"<td>"+ juegos +"</td>"+"<td>"+ cGanadas +"</td>"+ "<td>"+ cPerdidas +"</td>"+ "</tr>"
                        ctabla.innerHTML = nTabla;
                    }
                    else if(numRandom == 2 && tijera.checked || numRandom == 3 && piedra.checked || numRandom == 1 && papel.checked){//Comprueba si ganaste
                        console.log("Ganaste");
                        let ganador = "Jugador";
                        juegos++;
                        jGanadas++;
                        cPerdidas++;
                        divR.innerHTML = "Ganaste"
                        divR.setAttribute("class", "ganaste");
                        let nTabla = "<tr>"+"<td>"+ ganador +"</td>"+"<td>"+ juegos +"</td>"+"<td>"+ jGanadas +"</td>"+ "<td>"+ jPerdidas +"</td>"+ "</tr>"
                        jtabla.innerHTML = nTabla;
                    }
                    else{
                        juegos++;
                        console.log("Nadie gano")
                        divR.innerHTML = "Nadie gano";
                        divR.setAttribute("class", "empate");
                    }

                    
                })
            }
        }
    }
    catch(e){
        document.querySelector("#juego").innerHTML= "Erorr "+ e;
    }


})

})