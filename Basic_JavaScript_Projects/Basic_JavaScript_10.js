
function count_To_Ten() {
    var Digit = "";
    var X = 1;
    while (X < 11) {
        Digit += "<br>" + X;
        X++;
    }
    document.getElementById("Counting_to_Ten").innerHTML = Digit;
}

function myFunction() {
    var str = "Hello World!";
    var n = str.length;
    document.getElementById("stringlength").innerHTML = n;
}

var Instruments = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute"];
var Content = "";
var Y;
function for_Loop() {
    for (Y = 0; Y < Instruments.length; Y++) {
        Content += Instruments[Y] + "<br>";
        }
        document.getElementById("List_of_Instruments").innerHTML = Content;
}

function array_Function() {
    var sports = ["Basketball ", "Baseball ", "Golf ", "Hockey "]
    document.getElementById("Array").innerHTML = sports;
}

function constant_function() {
    const Bicycle = {type:"road", brand:"Cannondale", color:"green"};
    Bicycle.color = "red";
    Bicycle.price = "$2500";
    document.getElementById("Constant").innerHTML = "The cost of the " + 
        Bicycle.type + " was " + Bicycle.price;
}

var X = 29;
document.write("<br>" + X);
{
        let X = 56;
        document.write("<br>" + X);
}
document.write("<br>" + X);

var x = myReturn(5, 2);
function myReturn(a, b) {
    return a * b;
}
document.getElementById("return").innerHTML = x;

let dinner = {
    main: "Lasagna",
    side: "Greek Salad", 
    appetizer: "Shrimp Cocktail and Garlic Mussels",
    digestif: "Sambuca with three coffee beans",
    description : function() {
        return "We will start with " + this.appetizer + ", then for the main course will be  " + this.main + " along with a "
        + this.side + " and will finish with a " + this.digestif +".";
    }
};
document.getElementById("tonights_menu").innerHTML = dinner.description();

var text = "";
var i;
for (i = 0; i < 10; i++) {
    if (i ===3) { break; }
    text += "The number is " + i + "<br>"; //This types the result
}
document.getElementById("loop_break").innerHTML = text;

function myContinue() {
    var text = "";
    var i;
    for (i = 0; i < 5; i++) {
        if (i ===3) {
            continue;
        }
            text += "The number is " + i + "<br>";
        }
        document.getElementById("loop_continue").innerHTML = text;
    }

    