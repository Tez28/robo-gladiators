var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;
// you can also log multiple values at once like this 
console.log(playerName, playerAttack, playerHealth);

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
// console.log(enemyNames.length);
// for(var i = 0; i < enemyNames.length; i++) {
//     console.log(enemyNames[i]);
//     console.log(i);
//     console.log(enemyNames[i] + "is at " + i + " index");
// }
var enemyHealth = 50;
var enemyAttack = 12;

// console log enemy
//console.log (enemyName, enemyAttack, enemyHealth);
// fight function
var fight = function (enemyName) {
    //window.alert("Welcome to Robot Gladiators!");
    // repeat and execute as long as the enemy-robot is alive
    while(playerHealth > 0 && enemyHealth > 0) {
        // ask player if they'd like to fight or run
        var promptFight = window.prompt('Would you like to FIGHT or SKIP this battle? Enter "FIGHT" or "SKIP" to chose.');
          
        // if player choses to skip
        if (promptFight === "skip" || promptFight === "SKIP") {
            // confirm player wants to skip
            var confrimSkip = window.confirm("Are you sure you'd like to quit?");

            // if yes (true), leave fight
            if (confrimSkip) {
                window.alert(playerName + " has decided to skip this fight. Goodbye!");
                // subtract money from playerMoney for skipping
                playerMoney = playerMoney - 10;
                console.log("playerMoney", playerMoney);
                break;
            }
        }
    
        // if player choses to fight, fight
        if (promptFight === "fight" || promptFight === "FIGHT") {
            // remove enemey health by subtracting the amount set in the playerAttack variable
            enemyHealth = enemyHealth - playerAttack;
            console.log(
                playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
            );
            // check enemy health
            if (enemyHealth <= 0) {
                window.alert(enemyName + " has died!");
                break;
            } else {
                window.alert(enemyName + " still has " + enemyHealth + " health left.");
            }
    
            // remove player health by subtracting the amount set in the enemyAttack variable
            playerHealth = playerHealth - enemyAttack;
            console.log(
                enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
            );
            
            // check players health
            if (playerHealth <= 0) {
                window.alert(playerName + " has died!");
                //leave while() loop if player is dead
                break;
            }   else {
                window.alert(playerName + " still has " + playerHealth + " health left.");
            }
        }
    }
}; // end of fight function



var startGame = function() {
    // reset player stats
    playerHealth = 100;
    playerAttack = 10;
    playerMoney = 10;
    // fight function executed in for loop 
    for(var i = 0; i < enemyNames.length; i++) {
        if (playerHealth > 0){
            // let player know what round they are in, remember that arrays start at ) it needs to have 1 added to it
            window.alert("Welcome to Robot Gladiators" + (i + 1));
            // pick enemy to fight based on the index of the enemyNames array
            var pickedEnemyName = enemyNames[i];
            // reset enenmyHealth before starting new fight
            enemyHealth = 50;
            // use debugger to pause script from running and check what's going on at that moment in the code
            // debugger;
            // call fight function with enemy-robot
            // pass the pickedEnemyName variable's value into the fight function, where it will assume the value of the enemyName parameter
           fight(pickedEnemyName);
           
        } else {
            window.alert("You have lost your robot in battle! Game Over!");
            break;
        }
    }
    // after the loop ends, player is either out of helath or enemies to fight
    endGame();
};

// fucnction to end the entire game
var endGame = function() {
    // if player is still alive, player wins!
    window.alert("The game has now ended. Let's see how you did!");

    if (playerHealth > 0) {
        window.alert("Great job, you've survived the game! You now have a score of " + playerMoney +  '.');
    } else {
        window.alert("You've lost your robot in battle.")
    }
    // ask player if they'd like to play again 
    var playAgainConfirm = window.confirm("Would you like to play agin?");

    if (playAgainConfirm) {
        // restart the game
        startGame();
    } else {
        window.alert("Thank you for playing Robot Gladiators! Come back Soon!");
    }
};
// start the game when the page loads
startGame();