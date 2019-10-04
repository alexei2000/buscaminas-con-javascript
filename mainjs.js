var main=document.getElementById("main");
main.addEventListener("click",ocultarTapa);


//<i class="fas fa-bomb"></i>
//<i class="fab fa-font-awesome-flag"></i>

crearCuadros(12);
crearBotonBandera();
matrizAleatoria(matriz);
matrizCompleta(matriz);
aplicarInterfaz(matriz);

var botton=document.getElementById("btn");
botton.addEventListener("click",cambiarEstado);

