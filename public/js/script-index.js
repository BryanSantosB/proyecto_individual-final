const check1 = document.getElementById("check-1");
const i_1_1 = document.getElementById("i-1-1");
const i_2_1 = document.getElementById("i-2-1");
const caja_opciones1 = document.getElementById("caja1");

const check2 = document.getElementById("check-2");
const i_1_2 = document.getElementById("i-1-2");
const i_2_2 = document.getElementById("i-2-2");
const caja_opciones2 = document.getElementById("caja2");

function cambiarIconoMostrarOpciones(check, i1, i2, caja){
    if(check.checked){
        i1.style.display = "none";
        i2.style.display = "block";
        caja.style.display = "block";
    }else{
        i1.style.display = "block";
        i2.style.display = "none";
        caja.style.display = "none";
    }
}

check1.addEventListener("change", function(){
    cambiarIconoMostrarOpciones(check1, i_1_1,i_2_1,caja_opciones1);
    console.log("java");
})

check2.addEventListener("change", function(){
    cambiarIconoMostrarOpciones(check2, i_1_2,i_2_2,caja_opciones2);
    console.log("java");
})