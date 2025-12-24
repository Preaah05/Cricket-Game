let scoreStr = localStorage.getItem('score');
        let score;
        resetScore(scoreStr);
        function resetScore(scoreStr){
            score = scoreStr ? JSON.parse(scoreStr) : {
                win: 0,
                lost: 0,
                tie: 0,
            }
            score.displayScore = function(){
                return `Score: Won: ${score.win}, Lost: ${score.lost} and Tie: ${score.tie}`;
            }
            showResult();
        }

        function generateComputerChoice(){
            let computerChoice = '';
            let randomNo = Math.random()*3;
            if(randomNo>=0 && randomNo<=1){
                computerChoice = 'Bat';
            }else if(randomNo>1 && randomNo<=2){
                computerChoice = 'Ball';
            }else{
                computerChoice = 'Stump';
            }
            return computerChoice;
        }

        function getResult(userMove, computerMove){
            if(userMove==='Bat'){
                if(computerMove==='Ball'){
                    score.win++;
                    return `User won`;
                }else if(computerMove==='Bat'){
                    score.tie++;
                    return `It's a tie`;
                }else{
                    score.lost++;
                    return `Computer won`;
                }
            }else if(userMove==='Ball'){
                if(computerMove==='Ball'){
                    score.tie++;
                    return `It's a tie`;
                }else if(computerMove==='Bat'){
                    score.lost++;
                    return `Computer has won`;
                }else{
                    score.win++;
                    return `User won.`;
                }
            }else{
                if(computerMove==='Ball'){
                    score.lost++;
                    return `Computer has won`;
                }else if(computerMove==='Bat'){
                    score.win++;
                    return `User won`;
                }else{
                    score.tie++;
                    return `It's a tie`;
                }
            }
        }

        function showResult(userMove, computerMove, resultMsg){
            localStorage.setItem('score', JSON.stringify(score));
            document.querySelector('#user-move').innerText = 
            userMove!== undefined ? `You've chosen ${userMove}.` : '';
            document.querySelector('#computer-move').innerText = 
            computerMove!==undefined?`Computer've chosen ${computerMove}.`:'';
            document.querySelector('#result').innerText = resultMsg!==undefined?`And ${resultMsg} `:'';
            document.querySelector('#score').innerText = `${score.displayScore()}`;
        }