//Key Functionality

//Track wins

//Factory Function (obj) for "add leader button": 
function addLeader(leader) {
    return {
        leader:leader, 
        wins: [],
        losses: [],
        addWin: function(){
            return this.wins.push(1);
        },
        addLoss: function(){
            return this.losses.push(1);
        },
        totalWins: function(){
            return this.wins.reduce((acc, val) => acc + val, 0);
        },
        totalLosses: function (){
            return this.losses.reduce((acc, val) => acc + val, 0);
        },
        winLossRatio: function(){
            const totalWins = this.totalWins();
            const totalLosses = this.totalLosses();
            return totalLosses > 0 ? ((totalWins / (totalWins + totalLosses))*100).toFixed(2) : totalWins * 100;
        }, 
    };
};

let vader = addLeader("Darth Vader")
vader.addWin();
vader.addWin();
vader.addLoss();
console.log(vader.totalWins());
console.log(vader.totalLosses());
console.log(`You have a ${vader.winLossRatio()}% win rate`);

//graph w/l per date


//Future iterations 

//Interface DOM to get buttons working
//Learn and setup local storage to begin storing entries permenantly
//store deck compilation**
//store sideboard
//buttons to move card from sideboard to main and vice versa**
