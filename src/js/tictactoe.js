class TicTacToe {

    constructor() {
        this.GLOBAL_GAME_CONTAINER = '#global-game-container';
        this.PICK_GAME = '#pick-game'; //content
        this.PICK_PLAYER = '.play-button-tictactoe' //buttons
        this.BUTTON_X = '.button-x'; //button x
        this.BUTTON_O = '.button-o'; // button o
        this.START_GAME = '#start-game';
        this.VS_CPU = '#vs-cpu';
        this.VS_PLAYER = '#vs-player';

    }

    init(){
        this.initVariables();
        this.initEvents();
    }

    record(current){
        if(current === 'x'){
            this.dataSet.currentPlayer = current;
        }
        if(current === 'o'){
            this.dataSet.currentPlayer = current;
        }
        

        return this.dataSet

    }

    initVariables() {
        this.globalGameContainer = document.querySelector(this.GLOBAL_GAME_CONTAINER);
        this.pickGame = document.querySelector(this.PICK_GAME);
        this.pickPlayer = document.querySelectorAll(this.PICK_PLAYER);
        this.startGame = document.querySelector(this.START_GAME);
        this.vsCpu = document.querySelector(this.VS_CPU);
        this.vsPlayer = document.querySelector(this.VS_PLAYER);
        this.buttonX = document.querySelector(this.BUTTON_X);
        this.buttonO = document.querySelector(this.BUTTON_O);
        this.dataSet = {
            player: 'x',
            cpu: 'o',
            currentPlayer: 'x',
            player2: 'o',
            cpu2: 'x',
            board: [
                '', '', '',
                '', '', '',
                '', '', ''
            ]
        }
    }

    initEvents() {
        this.pickPlayer.forEach((el) => el.addEventListener('click', this.playerSelected.bind(this)));
        this.buttonX.addEventListener('click', this.pickPlayerX.bind(this));
        this.buttonO.addEventListener('click', this.pickPlayerO.bind(this));
        this.vsCpu.addEventListener('click', this.startGameVsCPU.bind(this));
        this.vsPlayer.addEventListener('click', this.startGameVsPlayer.bind(this));
    }

    playerSelected() {
        this.pickPlayer.forEach((el) => {
            if (el.classList.contains('active')) {
                el.classList.remove('active');
            
            } else { 
                el.classList.add('active');
            }

        });
    }

    pickPlayerX() {
        this.buttonO.classList.remove('active');
        this.buttonX.classList.add('active');
        this.dataSet.player = 'x';
        // this.dataSet.cpu = 'o';
        this.dataSet.currentPlayer = 'x';
        this.record(this.dataSet.currentPlayer);
    }

    pickPlayerO() {
        this.buttonX.classList.remove('active');
        this.buttonO.classList.add('active');
        this.dataSet.player = 'o';
        // this.dataSet.cpu = 'x';
        this.dataSet.currentPlayer = 'o';
        this.record(this.dataSet.currentPlayer);
    }

    startGameVsCPU(){
        console.log('start game vs cpu');
        this.dataSet.cpu = this.dataSet.player === 'x' ? 'o' : 'x';
        this.record( this.dataSet.cpu);
    }

    startGameVsPlayer(){
        console.log('start game vs player');
        this.dataSet.player2 = this.dataSet.player === 'x' ? 'o' : 'x';
        this.record( this.dataSet.player2);
    }
}

export default TicTacToe;