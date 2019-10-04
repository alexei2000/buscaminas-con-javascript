var matriz = new Array(12);
for(var i=0; i<12; i++) {
    matriz[i] = new Array(12);
}

var bombas=20;

function aleatorio(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function matrizAleatoria(matriz){
    var fila,columna,i,j;

    for(i=0;i<12;i++){
        for(j=0;j<12;j++){
            matriz[i][j]=0;
        }
    }

    for(i=0;i<bombas;i++){
        fila=aleatorio(0,11);
        columna=aleatorio(0,11);
        if(matriz[fila][columna]===10){
            i--;
        }
        else{
            matriz[fila][columna]=10;
        }
    }
}

function matrizCompleta(matriz){

    var i,j,ii,jj,cont;
    var contx=[-1,0,1,1,0,0,-1,-1];
    var conty=[0,-1,0,0,1,1,0,0];

    for(i=0;i<12;i++){
        for(j=0;j<12;j++){
            if(matriz[i][j]==10){
                jj=j;ii=i;
                for(cont=0;cont<8;cont++){
                    ii=ii+contx[cont];jj=jj+conty[cont];
                    if((jj>=0 && jj)<12 && ii>=0 && ii<12)
                        if(matriz[ii][jj]!=10)
                        matriz[ii][jj]++;
                }
            }

        }
    }

}

function expandir(i, j, matriz){

    if(i>=0 && i<12 && j>=0 && j<12){
        if(matriz[i][j]!==0){
            destapar(i,j);
        }
        else if (matriz[i][j]===0 && !comprobarDestapada(i,j)){
            destapar(i,j);
            i--;
            expandir(i,j,matriz);
            j--;
            expandir(i,j,matriz);
            i++;
            expandir(i,j,matriz);
            i++;
            expandir(i,j,matriz);
            j++;
            expandir(i,j,matriz);
            j++;
            expandir(i,j,matriz);
            i--;
            expandir(i,j,matriz);
            i--;
            expandir(i,j,matriz);
        }
	}
}

function comprobarSiGano(){
    var i,j,cont=0,elemento;
    for(i=0;i<12;i++){
        for(j=0;j<12;j++){
            elemento=document.getElementById("r"+i+"c"+j);
            if(elemento.style.background===""){
                cont++;
            }
        }
    }
    console.log(cont);
    return cont;
}

function destaparTodo(){
    var i,j,elemento;
    for(i=0;i<12;i++){
        for(j=0;j<12;j++){
            elemento=document.getElementById("r"+i+"c"+j);
            if(elemento.className==="tapa fab fa-font-awesome-flag"){
                elemento.className="tapa";
            }
            if(elemento.style.background===""){
                elemento.style.background="transparent";
            }
        }
    }
}