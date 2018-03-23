
//function to open search option
function searchItem() {
    var itemSeason = prompt("What season would you like to view?");
    //below won't work by class name, only ID
    //if change below to class name, use no inner text, and add seasonClass[i]innertext to for loop
    var seasonClass = document.getElementsByClassName("season");
    var nameClass = document.getElementsByClassName("itemName");
    //alert(seasonClass);
    

    //var itemSeason = prompt("What season would you like to view?");
    //var seasonClass = document.getElementsByInnerText(itemSeason);
    //alert('hello');


    var match = "Your results: ";

    for (var i = 0; i < seasonClass.length; i++) {
        if (seasonClass[i].innerText == itemSeason) {
            alert(i)
            //match = itemName[i].innertext;
            
        }
    }
    alert(match);
}



function Greeting() {
    var x = document.getElementById("greeting1");
    var userName = prompt('Hello and Welcome! What is your name?');
    x.getElementsByTagName('h1')[0].innerText = 'Welcome ' + userName + '!';
}