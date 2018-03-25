
//function to open search option
function searchItem() {
    //var itemSeason = prompt("What season would you like to view?");
    var itemSeason= document.getElementById("mySelect").value;
    var seasonClass = document.getElementsByClassName("season");
    var nameClass = document.getElementsByClassName("itemName");
    var photoClass = document.getElementsByClassName("itemPhoto");
    var linkClass = document.getElementsByClassName("nonnavLink");
    //alert(seasonClass);
    
    var match = "Your results :  ";

    for (var i = 0; i < seasonClass.length; i++) {
        if (seasonClass[i].innerText == itemSeason) {
            //alert(i)
            //alert(nameClass[i].innerText + ": " + seasonClass[i].innerText);
            match = match + nameClass[i].innerText + " | "; 
        }
    }
    //if(seasonclass)
    alert(match);



   






}


//greeting function to make content dynamically appear on screen
function Greeting() {
    var x = document.getElementById("greeting1");
    var userName = prompt('Hello and Welcome! What is your name?');
    var size= prompt('What size clothing do you wear?')
    x.getElementsByTagName('h1')[0].innerText = 'Welcome ' + userName + '!  Your size is: ' + size;
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



//function from homework: onfocus/onblur for fields in a form
function colorChange(x) {
    x.style.border = "thick solid crimson";
}
function colorNormal(x) {
    x.style.border = "thin solid lightgrey";
}


//better choose outfit array function:
function chooseOutfit() {
        var userArray = new Array(0);
        var userResponse = confirm('Would you like help choosing between several outfits?');
        while (userResponse) {
            var outfit = prompt('Please enter the name of an outfit');
            userResponse = confirm('Would you like to add another outfit?');
            userArray.push(outfit);
        }
        var z = Math.floor((Math.random() * 50) + 1);
        if (userArray[0] == null) {
            alert('Feel free to make your own choice.');
        }
        else if (z > 0 && z < 20) {
            alert('Julie Chooses: ' + userArray[0]);
        }
        else if (z > 19 && z < 30) {
            alert('Julie Chooses: ' + userArray[1]);
        }
        else if (z > 29 && z < 51) {
            alert('Julie Chooses: ' + userArray[2]);
        }
        
        else {
            alert('Feel free to make your own choice.');
        }
    }

//get outfit array function:
function getOutfit() {
    //var outfitArray = document.getElementsByClassName('itemName');
    var responseArray = new Array(0);
    var userResponse = confirm('Would you like Julie to choose an outfit for you based on your needs?');
    if (userResponse) {
        var active = prompt('Do you want to be active outdoors or dress up to go to dinner? Type "outdoors" or "dinner"')
        var temp = prompt('Is is hot or chold outside? Type "hot" or "cold"')
        responseArray.push(active)
        responseArray.push(temp)
    }
    //alert(responseArray[0] + responseArray[1] + responseArray[2])
    if (responseArray[0] == 'outdoors' && responseArray[1] == 'cold') {
        alert('Julie has chosen Snow Day Outfit.');
    }
    else if (responseArray[0] == 'dinner' && responseArray[1] == 'cold') {
        alert('Julie has chosen Sweater Weather Outfit.');
    }
    else if (responseArray[0] == 'outdoors' && responseArray[1] == 'hot') {
        alert('Julie has chosen Work Out Outfit.');
    }
    else if (responseArray[0] == 'dinner' && responseArray[1] == 'hot') {
        alert('Julie has chosen Out For The Afternoon Outfit.');
    }
    else {
        alert('Feel free to pick your own outfit.');
    }
}


////remove photo test
//    function removePhoto() {
//        var x = document.getElementsByClassName("itemPhoto");
//        x.remove(2);
//    }

