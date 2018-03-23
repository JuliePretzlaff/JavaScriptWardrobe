
//function to open search option
function searchItem() {
    var itemSeason = prompt("What season would you like to view?");
    var seasonClass = document.getElementsByClassName("season");
    var nameClass = document.getElementsByClassName("itemName");
    //alert(seasonClass);
    
    var match = "Your results: ";

    for (var i = 0; i < seasonClass.length; i++) {
        if (seasonClass[i].innerText == itemSeason) {
           // alert(i)
            alert(nameClass[i].innerText);
            
        }
    }
    //alert(match);
}



function Greeting() {
    var x = document.getElementById("greeting1");
    var userName = prompt('Hello and Welcome! What is your name?');
    x.getElementsByTagName('h1')[0].innerText = 'Welcome ' + userName + '!';
}