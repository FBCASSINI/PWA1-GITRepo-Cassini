/**
 * Duel Fight Game - FINISHED
 * Flavio Cassini
 * Date: 11/04/2015
 * Instructor Garlic
 * Class 1511
 * Assignment Duel 2

 Assignment 1
 Part 1/3 of series
*/

// self-executing function
 (function(){  // self executing function

    //console.log("FIGHT!!!"); //console.log the word fight

    //player name
    var fighterOne = {'name':'kabel', 'damage':20, 'health':100};  //variable playeronename is spiderman this will display spiderman when javascript loads
    var fighterTwo = {'name':'kratos','damage':20, 'health':100};   //variable payertwoname = batman. this will display spiderman when javascript loads

    //player damage
    //var player1Damage = 20; //variable player1damage =20. this varaible will deduct 20points when called.
    //var player2Damage = 20; //variable player2damage = 20. this variable will deduct 20points when called upon.

    //player health
   // var playerOneHealth = 100; //variable player health = 100. The variable will start the players at 100points
    //var playerTwoHealth = 100;

    //initiate round
    var round=0;  //This variable will start the round and keep track of it.


    function fight (){ //This function will excute fight when called up;on.


        //fighterOne = kabal;
        //fighterTwo = kratos;
        //alert(fighterOne.name +":"+fighterOne.health+"  *START*  "+fighterTwo.name+":"+fighterTwo.health); //This alert box will pop up when javascript is run and will notify in the box the players name and  health with the start button in the middile using string conatination.
        for (var i = 0; i < 10; i++) //for loop executes and checks if it looped 10 times meaning 10 rounds then class winner check. variable i = rounds. i < 10 notifies the script if 10 has been reached, i++ adds to i by 1 point every round until reached 10 rounds.
        {
            //random formula is - Math.floor(Math.random() * (max - min) + min);
            var minDamage1 = fighterOne.damage * .5; // minimum damage is .5 to player one from 20 = 10 . to made a between 10-20 damage point per round.
            var minDamage2 = fighterTwo.damage * .5;   //minimum damage is .5 to player two from 20 = 10
            var f1 = Math.floor(Math.random()*(fighterOne.damage-minDamage1)+minDamage1); // this variable executes when playerOneHealth-=f1 calls it. it will generate a random number from math.random for deduction in damage points. Then player1/2damage-mindame1/1 will be executing then + mindamage to excute damage between 10- 20
            var f2 = Math.floor(Math.random()*(fighterTwo.damage-minDamage2)+minDamage2);//this variable executes when playertwoHealth-=f2 calls it. it will generate a random number from math.random for deduction in damage points. Then player1/2damage-mindame1/1 will be executing then + mindamage to excute damage between 10- 20

            //inflict damage
            fighterOne.health-=f1; //This variable will execute var f1 using math.random to genearte and conflict damage to playeronehealth
            fighterTwo.health-=f2; //this variable will execute var f2 using math.random to generate and conflict damgage too playertwohealth


            //console.log(fighterOne.name+": "+fighterOne.health + " " + fighterTwo.name+":"+fighterTwo.health); // this will console.log playeronename and playertwoname plus playeronehealth and player2helath plus concatination.

            //check for victor
            var result = winnerCheck(); //function fight calls on winner check
            console.log(result);
            if (result==="no winner")//if variable results === no winner
            {
                round++;// add 1 more to the round when executed.
                //alert(fighterOne.name+":"+fighterOne.health+"  *ROUND "+round+" OVER"+"*  "+fighterTwo.name+":"+fighterTwo.health); // alert box to notify if round is over plus what round your on.

            } else{ //else
                //alert(result); //notifys who won
                break; //break outside the code function fight and exits
            };

          };

        var x = document.getElementById("kabal.p")
        document.getElementsByClassName("buttonblue").onclick = fight(x)
    };

    function winnerCheck(){
        var result="no winner";
        if (fighterOne.health<1 && fighterTwo.health<1) //conditional statement to compare playeronehealth and playertwo health is less then one
        {
            result = "You Both Die"; //candition is true they both die
        } else if(fighterOne.health<1){//else if playerone health  is less then 1 , playertwo wins
            result =fighterTwo.name+" WINS!!!"// Playertwo wins
        } else if (fighterTwo.health<1)////else if playertwo health  is less  then 1 playerone wins
        {
            result = fighterOne.name+" WINS!!!" //playerone wins
        };
       return result; //  exits out of function returns result to winnercheck.
    };

    /*******  The program gets started below *******/
    fight(); //Calls the fight function and begins program.

})();