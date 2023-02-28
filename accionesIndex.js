/*Variables para boton datospersonales y sus textos  SE REPITE*/
let datosPHideText_btn = document.getElementById('datosPHideText_btn');
let datosPHideText = document.getElementById('datosPHideText');
datosPHideText_btn.addEventListener('click',toggleDatos);


/*se declaran varianble para boton */
let hideText_btn = document.getElementById('hideText_btn');
/*se declara variable para el texto */
let hideText = document.getElementById('hideText');
/*Sele agraga un evento al boton */
hideText_btn.addEventListener('click',toggleText);

/*Variables para boton formacion y sus textos SE REPITE */
let formacionHideText_btn = document.getElementById('formacionHideText_btn');
let formacionHideText = document.getElementById('formacionHideText');
formacionHideText_btn.addEventListener('click',toggleFormacion);

/*Variables para boton empresas y sus textos  SE REPITE */
let empresasHideText_btn = document.getElementById('empresasHideText_btn');
let empresasHideText = document.getElementById('empresasHideText');
empresasHideText_btn.addEventListener('click',toggleEmpresas);

/* Botton actualizar cv invoca a otra hoja HTML */
let actualizarCVHideText_btn = document.getElementById('actualizarCVHideText_btn');
actualizarCVHideText_btn.addEventListener('click',toggleActualizarCV);



function toggleDatos(){
   if(datosPHideText){
      datosPHideText.classList.toggle('show4');
      document.getElementById("renombrarH5").innerHTML = "Datos Personales";
      }else{
      console.log("No se encontreo lo especificado en if para formacion");
  
   }

}

/*NO SE REPITE*/
function toggleText(){
   if(hideText){
      hideText.classList.toggle('show');
      document.getElementById("renombrarH2").innerHTML = "Contactar";
      }else{
         console.log("No se encontro lo especificado en if de contactar");
   }
}

function toggleFormacion(){
   if(formacionHideText){
      formacionHideText.classList.toggle('show3');
      document.getElementById("renombrarH4").innerHTML = "Formación";
      }else{
      console.log("No se encontreo lo especificado en if para formacion");
   }

}

function toggleEmpresas(){
   if(empresasHideText){
      empresasHideText.classList.toggle('show2');
      document.getElementById("renombrarH3").innerHTML = "Empresas";
      }else{
      console.log("No se enconteo lo especificado en if empresas");
    }

}


function toggleActualizarCV(){
   if(actualizarCVHideText_btn){
      
      document.getElementById("vinculoform").innerHTML;
      }else{
      console.log("No se encuntra lo especificado en if para formacion"); 

   }
}
