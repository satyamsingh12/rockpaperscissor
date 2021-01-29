const game = () => {

    let pScore = 0;
    let cScore = 0;

    const startGame = () => {
        const playButton = document.querySelector('#playBtn');
        let introScreen = document.querySelector('.intro');
        let match = document.querySelector('.match');

        playButton.addEventListener('click', () => {
            introScreen.classList.add('fadeOut');
            match.classList.add('fadeIn');
        })
    }
    const playMatch = () => {
        const options = document.querySelectorAll('.option button');
        const playerHand = document.querySelector('.player-hand');
        const computerHand = document.querySelector('.computer-hand');
        const hands = document.querySelectorAll('.hands img');

        // to stop animation after each round
        hands.forEach(hand => {
            hand.addEventListener('animationend', function () {
                this.style.animation = "";


            });
        })
        //computer options
        const computerOptions = ['rock', 'paper', 'scissors'];

        options.forEach(option => {
            option.addEventListener('click', function () {
                initial();
                //computer choise--
                const computerNumber = Math.floor(Math.random() * 3);
                const computerChoise = computerOptions[computerNumber];
                setTimeout(() => {
                    //calling compare hands--
                    compareHands(this.textContent, computerChoise);


                    //updating images--
                    playerHand.src = `./Pictures/${this.textContent}.png`;
                    computerHand.src = `./Pictures/${computerChoise}.png`;


                }, 2000);
                // animation added

                playerHand.style.animation = "shakePlayer 2s ease"
                computerHand.style.animation = "shakeComputer 2s ease"



            });

        });

    }
    const initial=()=>{
        const playerHand = document.querySelector('.player-hand');
        const computerHand = document.querySelector('.computer-hand');
        playerHand.src=`./Pictures/rock.png`;
        computerHand.src=`./Pictures/rock.png`;
    }

    const updateScore = () => {
        const playerScore = document.querySelector('.player-score p');
        const computerScore = document.querySelector('.computer-score p');
        playerScore.textContent = pScore;
        computerScore.textContent = cScore;

    }
    const compareHands = (playerChoise, computerChoise) => {
        const winner = document.querySelector('.winner');
        //checking for a tie--
        if (playerChoise === computerChoise) {
            winner.textContent = "it's a tie";
            return;
        }
        //checking for Rock---
        if (playerChoise === 'rock') {
            if (computerChoise === "scissors") {
                winner.textContent = "Player Wins..";
                pScore++;
                updateScore();
                return;
            }
            else {
                winner.textContent = "Computer Wins..";
                cScore++;
                updateScore();
                return;
            }

        }

        //check for paper
        if (playerChoise === 'paper') {
            if (computerChoise === "scissors") {
                winner.textContent = "Computer Wins..";
                cScore++;
                updateScore();
                return;
            }
            else {
                winner.textContent = "player Wins..";
                pScore++;
                updateScore();
                return;
            }

        }
        //check for scissors
        if (playerChoise === 'scissors') {
            if (computerChoise === "rock") {
                winner.textContent = "Computer  Wins..";
                cScore++;
                updateScore();
                return;
            }
            else {
                winner.textContent = "Player Wins..";
                pScore++;
                updateScore();
                return;
            }
        }

    }

    //call all the inner functions
    startGame();
    playMatch();



}
//start game main function.
game();