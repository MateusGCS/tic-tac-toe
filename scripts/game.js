//iniciar minhas variáveis
var tabuleiro = ['','','','','','','','',''];
var jogadorDaVez = 0;
var token;
let click = 0;
var gameOver = false;

let simbolos = ['o', 'x'];
let jogadaVitoriosa = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]

//Escolha do jogador
document.getElementById('jogador1').addEventListener('click', () => {
    jogadorDaVez = 0;
    token = 0;
    let popup = document.querySelector('.popup');
    popup.style.display = 'none';
});

document.getElementById('jogador2').addEventListener('click', () => {
    jogadorDaVez = 1;
    token = 1;
    let popup = document.querySelector('.popup');
    popup.style.display = 'none';
});

//fim da escolha do jogador

function movimentoFeito(posicao){

        if(gameOver == true){
            
            return;
        }
        
        if(tabuleiro[posicao] == ''){
            tabuleiro[posicao] = simbolos[jogadorDaVez];  

            gameOver = vitoria();

                if(gameOver == false){

                    jogadorDaVez = (jogadorDaVez == 0) ? 1 : 0;
                    click++;
                    }
        }
    return gameOver;
}


function vitoria(){
    
    for(let i = 0; i < jogadaVitoriosa.length; i++)
    {
        let sequencia = jogadaVitoriosa[i];

        let pos1 = sequencia[0];
        let pos2 = sequencia[1];
        let pos3 = sequencia[2];
        if(tabuleiro[pos1] == tabuleiro[pos2] && tabuleiro[pos1] == tabuleiro[pos3]
            && tabuleiro[pos1] != ''){
                
                console.log(sequencia);
                document.getElementById(sequencia[0]).style.backgroundColor = 'green';
                document.getElementById(sequencia[1]).style.backgroundColor = 'green';
                document.getElementById(sequencia[2]).style.backgroundColor = 'green';
            
            return true;
        }
    }
    return false;
}