//sorry i cant code without using functions and organizing my code.

let userName;
let userAge;
let userLocation;
let usersFavoriteTravelDestination;



function AskUserForInfo()
{
    userName = prompt("Hey there, what is your name ?");
    console.log(userName);

    userAge = prompt("nice to meet you, "+userName+". what is your age ?");
    console.log(userAge);

    userLocation = prompt("where are you from, "+userName+" ?")
    console.log(userLocation);

    usersFavoriteTravelDestination = prompt("what is the most place you like to visit, "+userName+" ?")
    console.log(usersFavoriteTravelDestination);

    OutPutToUser();
}



function OutPutToUser()
{
    //decide if age is a number and ask again if info is wrong
    if(isNaN(userAge))
    {
        alert("please enter a correct age!");
        AskUserForInfo();
        return;
    }
    else{
        //check user age
        let tempoMessage;
        if(userAge < 18)
            tempoMessage = "sorry, "+userName+" you are under 18, there are no free travels for underagers :(";
        else{
            tempoMessage = "hooray "+userName+" you earned a free travel to your favorite travel destination, "+usersFavoriteTravelDestination+"."
        }

        alert(tempoMessage);

    }
}
