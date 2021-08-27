let score = [0, 0];
let scoreTexto = document.querySelectorAll('.contador');

document.addEventListener('DOMContentLoaded',()=>{

    let mesa = document.querySelectorAll('.mesa');

    mesa.forEach((quadradoDaMesa)=>{
        quadradoDaMesa.addEventListener('click', clickFeito);
    })
})

function clickFeito(event){

    let quadradoDaMesa = event.target;
    let posicao = quadradoDaMesa.id;

    console.log(quadradoDaMesa, posicao);
    
    if(movimentoFeito(posicao) == true){
        
        setTimeout(() => {
            
            score[jogadorDaVez]++;
            scoreTexto[jogadorDaVez].innerHTML = `${score[jogadorDaVez]}`;

            alert('O jogo acabou - O vencedor foi: '+ jogadorDaVez);
            reset();
        },20);
        
    }
    if(click >= 9 && movimentoFeito(posicao) != true){
       setTimeout(() => {
        alert('O jogo empatou!');
        reset();
       },20) 
    }

    atualizarQuadrado(posicao);
}

function atualizarQuadrado(posicao){
    let quadradoDaMesa = document.getElementById(posicao.toString());
    let simbolo = tabuleiro[posicao];
    quadradoDaMesa.innerHTML = `<div class='${simbolo}'></div>`;
}

function reset () {
    if(token == 0){
        jogadorDaVez = 0;
    }
    else{
        jogadorDaVez = 1;
    }
    tabuleiro = ["", "", "", "", "", "", "", "", ""];
    gameOver = false;
    score[0, 0];
    click=0;
  
    let mesa = document.querySelectorAll(".mesa");
  
    mesa.forEach((quadradoDaMesa) => {
      quadradoDaMesa.innerHTML = "";
      quadradoDaMesa.style.backgroundColor = "#2C5F2DFF";
    })
  
  }

  function resetAll(){
    document.location.reload(true);
}