
//function to open search option
function searchItem() {
    var itemSeason = prompt("What season would you like to view?");
    var seasonClass = document.getElementsByClassName("season");
    var nameClass = document.getElementsByClassName("itemName");
    var photoClass = document.getElementsByClassName("itemPhoto");
    var linkClass = document.getElementsByClassName("nonnavLink");
    //alert(seasonClass);
    
    var match = "Your results |  ";

    for (var i = 0; i < seasonClass.length; i++) {
        if (seasonClass[i].innerText == itemSeason) {
            // alert(i)
            //alert(nameClass[i].innerText + ": " + seasonClass[i].innerText);
            match = match + nameClass[i].innerText + " | "; 
        }
    }
    alert(match);
}


//greeting function to make content dynamically appear on screen
function Greeting() {
    var x = document.getElementById("greeting1");
    var userName = prompt('Hello and Welcome! What is your name?');
    x.getElementsByTagName('h1')[0].innerText = 'Welcome ' + userName + '!';
}

//function to navigate to another site
function goToPortfolio(x) {
    var confirmButton = document.getElementById(x);
    var userResponse = confirm('You are about to be redirected to another site. If you want to stay, please select cancel.');
    var displayContainer = document.getElementById('confirmResponse');
    var displayMessage = '';
    if (userResponse) {
        var win = window.open("https://juliepretzlaff.github.io/", '_blank');
        win.focus();
    }
}


//function to change text color and size when mouseover:
function sizeBigger(x) {
    x.style.fontSize = "xx-large";
    x.style.color = "darkgoldenrod";
}
function sizeNormal(x) {
    x.style.fontSize = "large";
    x.style.color = "crimson";
}

//function to swap date with name in footer:
function Swap(div1, div2) {
    d1 = document.getElementById(div1);
    d2 = document.getElementById(div2);
    if (d2.style.display == "none") {
        d1.style.display = "none";
        d2.style.display = "flex"
    }
    else {
        d1.style.display = "flex";
        d2.style.display = "none";
    }
};