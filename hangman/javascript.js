



var cont=0, cont2=0, i=0, n=0, x=0, aleatorio=0;
var word=new Array();


aleatorio=Math.floor(Math.random()*10);//utilizamos el modo aleatorio,escoje una palabra al azar, son nueve palabras, limitamos el random a 10,es una array contamos desde 0 

switch(aleatorio){/*switch;permite hacer múltiples operaciones dependiendo del estado de una variable.
  La expresión se evalúa, si vale valor1 se ejecutan las sentencias relacionadas con ese caso. Si la expresión
   vale valor2 se ejecutan las instrucciones relacionadas con ese valor y así sucesivamente, por tantas opciones 
   como deseemos. Finalmente, para todos los casos no contemplados anteriormente se ejecuta el caso por defecto.*/

 case 0:// enumeramos cada palabra,para llevar un orden de la array

 n=5;// numero de letras de la palabra
 word[0]='d';
 word[1]='e';
 word[2]='d';
 word[3]='a';
 word[4]='l';

 break;// cerramos la palabra para empezar con otra gracias al random

 case 1:

 n=6;
 word[0]='a';
 word[1]='n';
 word[2]='t';
 word[3]='e';
 word[4]='n';
 word[5]='a';

 break;

 case 2:

 n=8;
 word[0]='c';
 word[1]='o';
 word[2]='l';
 word[3]='o';
 word[4]='r';
 word[5]='e';
 word[6]='t';
 word[7]='e';

 break;

 case 3:

 n=7;
 word[0]='p';
 word[1]='a';
 word[2]='r';
 word[3]='a';
 word[4]='s';
 word[5]='o';
 word[6]='l';

 break;

 case 4:

 n=12;
  word[0]='p';
  word[1]='r';
  word[2]='o';
  word[3]='g';
  word[4]='r';
  word[5]='a';
  word[6]='m';
  word[7]='a';
  word[8]='c';
  word[9]='i';
 word[10]='o';
 word[11]='n';

 break;

 case 5:

 n=10;
 word[0]='p';
 word[1]='a';
 word[2]='s';
 word[3]='t';
 word[4]='e';
 word[5]='l';
 word[6]='e';
 word[7]='r';
 word[8]='i';
 word[9]='a';
 
 
 break;

 case 6:

 n=6;
 word[0]='c';
 word[1]='a';
 word[2]='r';
 word[3]='t';
 word[4]='a';
 word[5]='s';

 break;

 case 7:

 n=11;
 word[0]='a';
 word[1]='s';
 word[2]='c';
 word[3]='e';
 word[4]='n';
 word[5]='s';
 word[6]='o';
 word[7]='r';
 
 break;

 case 8:

 n=7;
 word[0]='s';
 word[1]='a';
 word[2]='r';
 word[3]='d';
 word[4]='i';
 word[5]='n';
 word[6]='a';

 break;


 case 9:

 n=10;
 word[0]='s';
 word[1]='i';
 word[2]='l';
 word[3]='l';
 word[4]='o';
 word[5]='n';
 
 break;



}

var tecladoOff=false;
var esta=false;


function abc(cad){// creamos una function para el teclado

       if(tecladoOff==false){

        document.getElementById(cad).style.backgroundColor='red';// cada vez que pulsamos una tecla esta cambia de color,para luego no repetir

        esta=false;
        ganaste=false;

        for(i=0; i<n ; i++){
          if(cad==word[i]){
	
        document.getElementById('l'+i).innerHTML=cad;

        esta=true;

        cont2++;
 
          }else{  

            if(esta!=true){

            esta=false;

            }

        }

        }//for

        if(esta==false){
          cont++;
          image(cont);

        }


        if(cont2==n){
          alert('You won!');
          tecladoOff=true;
        }
 

          }else{ 

          alert('NO MORE MOVEMENTS'); }

}//fin funcion

//..................................................................................................................................
//DIBUJO
function image(c){// aqui meteremos la array de los dibujos con sus determinados breaks,cada vez que s epulse una tecla fallida

            switch(c){

                case 1:
                  document.getElementById('hangman').src="2.PNG";
                break;

                case 2:
                  document.getElementById('hangman').src="3.PNG";
                break;

                case 3:
                  document.getElementById('hangman').src="4.PNG";
                break;

                case 4:
                  document.getElementById('hangman').src="5.PNG";
                break;

                case 5:
                  document.getElementById('hangman').src="6.PNG";
                break;

                case 6:
                  document.getElementById('hangman').src="7.PNG";

                    alert('You lost the game!');// se acaba el juego se ha ffallado los 7 intentos
                    tecladoOff=true;// una vez concluido el dibujo se termina el escribir mas
                break;  

 } 

}

//..................................................lineas con sus espacios..............................................................
//var cont=0, cont2=0, i=0, n=0, x=0, aleatorio=0;   ponemos esto para ver mejor la function
var lin=new Array();

  function lineas(){

      for(x=0; x<n; x++){
      lin[x]='<div id="l'+x+'">__</div>';//casillas vacias
  
       }

      for(x=0; x<n; x++){

      document.getElementById('lineas').innerHTML=document.getElementById('lineas').innerHTML+lin[x];

      } 

 
}