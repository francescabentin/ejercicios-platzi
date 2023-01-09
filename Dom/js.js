
const h1 = document.querySelector("h1");
//const form = document.querySelector("#form")
const input1 = document.querySelector("#calculo1");
const input2 = document.querySelector("#calculo2");
const boton = document.querySelector("#btnCalcular");
const presult = document.querySelector("#resultado");

/*form.addEventListener ("submit",sumarinputvalues);

function sumarinputvalues(event) {
    //console.log(event);
    event.preventDefault();
   const sumaImputs = parseInt(input1.value) + parseInt(input2.value);
   presult.innerText = "Resultado: " + sumaImputs; 
}
*/
// form-submit-event-prevent-default es para que cuando usas un form no se recargue la pagina// otra forma seria con boton y poniendo type=button. lo que pasa es que js identifica al boton como submit cuando pones form.

boton.addEventListener ("click",sumarinputvalues);

function sumarinputvalues(event) {
    const sumaImputs = parseInt(input1.value) + parseInt(input2.value);
   presult.innerText = "Resultado: " + sumaImputs; 
}
