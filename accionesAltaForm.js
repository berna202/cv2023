/*variables para boton presentación */
let presentahideText_btn = document.getElementById('presentahideText_btn');
let presentahideText = document.getElementById('presentahideText');
presentahideText_btn.addEventListener('click',togglePresenta);

/*Variables para boton datospersonales y sus textos SE REPITE*/
let datosPHideText_btn = document.getElementById('datosPHideText_btn');
let datosPHideText = document.getElementById('datosPHideText');
datosPHideText_btn.addEventListener('click',toggleDatos);


 /*variables para boton contactar */
 let contactarHide_btn = document.getElementById('contactarHide_btn');
 let contactarHideText = document.getElementById('contactarHideText');
 contactarHide_btn.addEventListener('click',toggleContactar);
 
 /*Variables para boton formacion y sus textos SE REPITE */
 let formacionHideText_btn = document.getElementById('formacionHideText_btn');
 let formacionHideText = document.getElementById('formacionHideText');
 formacionHideText_btn.addEventListener('click',toggleFormacion);


/*Variables para boton empresas y sus textos SE REPITE*/
let empresasHideText_btn = document.getElementById('empresasHideText_btn');
let empresasHideText = document.getElementById('empresasHideText');
empresasHideText_btn.addEventListener('click',toggleEmpresas);

/*variables para boton foto cv  */
let fotoHide_btn = document.getElementById('fotoHide_btn');
let fotoHide = document.getElementById('fotoHide');
fotoHide_btn.addEventListener('click',togglefoto);


/*  BOTON PRESENTACIÓN  */
function togglePresenta(){
   if(presentahideText){
    presentahideText.classList.toggle('show1');
      document.getElementById("renombrarH").innerHTML = "Presentación";
      }else{
         console.log("No se encontro lo especificado en if de contactar");
    }
}


 /* BOTON DATOS PERSONALES  se repite*/
 function toggleDatos(){
    if(datosPHideText){
       datosPHideText.classList.toggle('show4');
       document.getElementById("renombrarH5").innerHTML = "Datos Personales";
       }else{
       console.log("No se encontreo lo especificado en if para formacion"); 
    }
 
 }

 /*  BOTON CONTACTAR  */
function toggleContactar(){
    if(contactarHideText){
       contactarHideText.classList.toggle('show6');
       document.getElementById("renombrarH7").innerHTML = "Contactar";
       }else{
       console.log("No se encontreo lo especificado en if");
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

/*  BOTON EMPRESAS  serepite */
function toggleEmpresas(){
    if(empresasHideText){
       empresasHideText.classList.toggle('show2');
       document.getElementById("renombrarH3").innerHTML = "Empresas";
       }else{
       console.log("No se enconteo lo especificado en if empresas");
    }
 
 }
 

/* BOTON FOTO CV */
function togglefoto(){
    if(fotoHide){
       fotoHide.classList.toggle('show5');
       document.getElementById("renombrarH6").innerHTML = "Foto CV";
       }else{
       console.log("No se encontreo lo especificado en if");
    }
 }
 
