
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

//function from homework: onfocus/onblur
function colorChange(x) {
    x.style.border = "thick solid crimson";
}
function colorNormal(x) {
    x.style.border = "thin solid lightgrey";
}


//get outfit array function:
function getOutfit() {
    var outfitArray = document.getElementsByClassName('itemName');
    var responseArray = new Array(0);
    var userResponse = confirm('Would you like Julie to choose an outfit for you based on your needs?');
    if (userResponse) {
        var active = prompt('Do you want to be active outdoors or dress up to go to dinner? Type "outdoors" or "dinner"')
        var temp = prompt('Is is hot or chold outside? Type "hot" or "cold"')
        var color = prompt('Are you looking for something colorful or muted?  Type "colorful" or "muted"')
        responseArray.push(active)
        responseArray.push(temp)
        responseArray.push(color)
    }
    //alert(responseArray[0] + responseArray[1] + responseArray[2])
    if (responseArray[0] == 'outdoors' && responseArray[1] == 'cold' && responseArray[2] == 'colorful') {
        alert('Julie has chosen ' + outfitArray[7].innerText + '.');
    }
    if (responseArray[0] == 'dinner' && responseArray[1] == 'cold' && responseArray[2] == 'colorful') {
        alert('Julie has chosen ' + outfitArray[8].innerText + '.');
    }
    if (responseArray[0] == 'outdoors' && responseArray[1] == 'hot' && responseArray[2] == 'colorful') {
        alert('Julie has chosen ' + outfitArray[11].innerText + '.');
    }
    if (responseArray[0] == 'outdoors' && responseArray[1] == 'cold' && responseArray[2] == 'muted') {
        alert('Julie has chosen ' + outfitArray[9].innerText + '.');
    }

    
    if (responseArray[0] == 'dinner' && responseArray[1] == 'hot' && responseArray[2] == 'colorful') {
        alert('Julie has chosen ' + outfitArray[15].innerText + '.');
    }
    if (responseArray[0] == 'dinner' && responseArray[1] == 'hot' && responseArray[2] == 'muted') {
        alert('Julie has chosen ' + outfitArray[9].innerText + '.');
    }
    if (responseArray[0] == 'dinner' && responseArray[1] == 'cold' && responseArray[2] == 'muted') {
        alert('Julie has chosen ' + outfitArray[14].innerText + '.');
    }
    
}