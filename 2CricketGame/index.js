
function randomNumber(){
let randomNumbers=Math.random() * 3;
console.log(randomNumber);
};
console.log(randomNumber());
 

let scoreStr =localStorage.getItem('score'); 
let score;
resetScore(scoreStr);
function resetScore(scoreStr){
  score=scoreStr ? JSON.parse(scoreStr) : {
    win:0,
    lost:0,
    tie:0,
     };
   
score.displayScore=function() {
    return   `won:${score.win},
              lost:${score.lost},
              tie:${score.tie}`;
 }
    text1();
}
function text1(user,computer,result){
    document.querySelector('#user-move').innerText=`user choice is =  ${user}`;
    document.querySelector('#computer-move').innerText=`computer choice is  = ${computer}`;
    document.querySelector('#result').innerText=`result is =  ${result}`;
    document.querySelector('#score').innerText=`YOUR SCORE IS = 
    ${score.displayScore()}`;
}
     
 
 
console.log(score);