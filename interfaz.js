var puedeJugar=true;
var btnPress=false;

function cambiarEstado(evento){
    console.log(evento);
    if(!btnPress){
        btnPress=true;
        evento.srcElement.style.background="#333333";
        evento.srcElement.style.color="#ffffff";
    }
    else{
        btnPress=false;
        evento.srcElement.style.background="";
        evento.srcElement.style.color="";
    }
}
function crearCuadros(num){
    var main=document.getElementById("main");
    var div,h3,divChild;
    var i,j;

    for(i=0; i<num;i++){
        for(j=0; j<num; j++){
            div=document.createElement("div");
            div.className="cuadros";
            main.appendChild(div);

            h3=document.createElement("h3");
            h3.id="f"+i+"c"+j;
            div.appendChild(h3);

            divChild=document.createElement("div");
            divChild.className="tapa";
            divChild.id="r"+i+"c"+j;
            div.appendChild(divChild);
        }
    }
}

function ocultarTapa(evento){
    if(btnPress){
        if(evento.srcElement.style.background===""){
            if(evento.srcElement.className==="tapa fab fa-font-awesome-flag"){
                evento.srcElement.className="tapa";
            }
            else if(evento.srcElement.className==="tapa"){
                evento.srcElement.className="tapa fab fa-font-awesome-flag"
            }
        }
    }
    else if(evento.srcElement.className==="tapa" || evento.srcElement.className==="tapa fab fa-font-awesome-flag"){
        if(puedeJugar){
            if(evento.srcElement.style.background===""){
                var id=evento.srcElement.id;
                var num=1;
                if(id[num+1]==='0' || id[num+1]==='1'){
                    i=id[num]+id[num+1];
                    num=num+3;
                }
                else{
                    i=id[num];
                    num=num+2;
                }

                if(id[num+1]==='0' || id[num+1]==='1'){
                    j=id[num]+id[num+1];
                }
                else{
                    j=id[num];
                }

                if(evento.srcElement.parentElement.firstChild.className==="fas fa-bomb"){
                    evento.srcElement.parentElement.style.background="#FF1301";
                    alert("perdiste");
                    puedeJugar=false;
                    destaparTodo();
                }
                console.log(evento);
                console.log(evento.srcElement.id);
                console.log(i);
                console.log(j);
                expandir(i,j,matriz);
            }
            if(comprobarSiGano()===bombas){
                alert("ganaste");
                puedeJugar=false;
            }
        }
    }
}

function aplicarInterfaz(matriz){
    var i,j;
    var elemento;
    for(i=0;i<12;i++){
        for(j=0;j<12;j++){
            elemento=document.getElementById("f"+i+"c"+j);
            if(matriz[i][j]===10){
                elemento.className="fas fa-bomb";
            }
            else if(matriz[i][j]===0){

            }
            else{
                elemento.innerHTML=matriz[i][j];
                switch(matriz[i][j]){
                    case 1: elemento.style.color="#0C7DE8"; break;
                    case 2: elemento.style.color="#4EE80C"; break;
                    case 3: elemento.style.color="#FF0B00"; break;
                    case 4: elemento.style.color="#380CE8"; break;
                }
            }
        }
    }
}

function destapar(i,j){
    var elemento=document.getElementById("r"+i+"c"+j);
    elemento.style.background="transparent";
    if(elemento.className==="tapa fab fa-font-awesome-flag"){
        elemento.className="tapa";
    }
}

function comprobarDestapada(i,j){
    var elemento=document.getElementById("r"+i+"c"+j);
    if(elemento.style.background==="transparent"){
        return true;
    }
    else{
        return false;
    }
}

function crearBotonBandera(){
    btn=document.createElement("div");
    btn.className="fab fa-font-awesome-flag";
    btn.id="btn";
    document.body.appendChild(btn);
}

