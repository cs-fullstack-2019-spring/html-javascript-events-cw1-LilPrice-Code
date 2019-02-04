var letters = 0;
var words = "HEY Listen! How are you doing? Do you want to play a game? Okay this is boring! Having Fun YET!! Who lives in a Pineapple under the sea? Spongebob Squarepants!! Out of words Sorry.";

// As the User types, make it so they always enter a set sentence no matter what letters they actually type
// (each to the User presses a key, your JavaScript should add the next character from your
// hardcoded sentence to the textarea just as if they typed it)
var btn = document.querySelector('button');

var textfw = document.getElementById("typer");
textfw.onkeypress = function (e) {
    if (letters < words.length){
        textfw.value += words[letters];
        letters ++;

    }
    else{
        textfw.value += " ";
        letters = 0;
    }
    e.preventDefault();
}

btn.onclick = function () {
    textfw.value = "";
    letters = 0;
}