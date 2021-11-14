var vector = [];

function constructorObjeto(nombre,color,peso){
    this.nombre = nombre;
    this.color = color;
    this.peso = peso;
}

function capturar () {
    console.log("asdad");
    let nombre = document.getElementById("nombre").value;
    let colorTemp = document.getElementById("color").value;
    let peso = document.getElementById("peso").value;
    Add(nombre,colorTemp,peso)
}

$('#button').on('click', () => {
    capturar();
});

$('#showObj').on('click', () => {
    mostrar();
});

$('#hideObj').on('click', () => {
    ocultar();
});

function color(color){
    $(".objeto").css("color",color);
}

function Add(nombre,colorTemp,peso){
    let name = nombre;
    let color = colorTemp;
    let weight = peso;
    let tempObject = new constructorObjeto(name,color,weight);
    vector.push(tempObject);
    let caja = document.createElement("div");
    let contenido = `<div style="display: none" class="objeto"><h1> ${name}</h1><h2>${color}</h2><h3>${weight}</h3><h1>--------------------------</h1></div>`;
    caja.innerHTML = contenido;
    $("#contenedor").append(caja);
    $(".objeto").fadeIn("slow")
                .css("color","blue");
}

function ocultar(){
    $("#contenedor").slideUp("slow");
}

function mostrar(){
    $("#contenedor").slideDown("slow");
}





    
    


