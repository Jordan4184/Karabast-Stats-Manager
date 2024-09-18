//Key Functionality

//Track wins

//Class for adding and tracking leader stats: 

class Leader {
    constructor(leaderName){
        this.leaderName = leaderName; 
        this.wins = [];
        this.losses = []; 
    }
    addWin(){
        return this.wins.push(1);
    }
    addLoss(){
        return this.losses.push(1);
    }
    totalWins(){
        return this.wins.reduce(function winSum(accumulator, currentValue){
            return accumulator + currentValue; 
        }, 0);
    }
    totalLosses(){
        return this.losses.reduce(function lossSum(accumulator, currentValue){
            return accumulator + currentValue
        }, 0);
    }
    winLossRatio(){
        return (((this.totalWins() / (this.totalWins() + this.totalLosses())) * 100).toFixed(2));
    }
}

let vader = new Leader('Darth Vader');
vader.addWin();
vader.addWin();
vader.addWin();
vader.addLoss();
console.log(vader.totalWins());  
console.log(vader.totalLosses());  
console.log(`Your win loss ratio is ${vader.winLossRatio()}%`); 

//graph w/l per date


//Future iterations 

//Interface DOM to get buttons working
//Learn and setup local storage to begin storing entries permenantly
//store deck compilation**
//store sideboard
//buttons to move card from sideboard to main and vice versa**
