var X = 10;
function Add_numbers_1() {
     document.write(20 + X + "<br>");
}

function Add_numbers_2() {
    
    document.write(X + 100 +"<br>");
}
Add_numbers_1();
Add_numbers_2();

function get_Date() {
    if (new Date().getHours() < 16) {
    document.getElementById("Greeting").innerHTML = "How are you today?";
    }
}

if (45 > 39);
    document.write("Good Day Sir!");

function fluid_Function() {
    var Gallon;
    Liquid = document.getElementById("Liquid").value;
    if (Liquid >= 128) {
        Gallon = "You have one gallon!";
    }
    else {
        Gallon = "You have less than one gallon.";
    }
    document.getElementById("Liquid_Ounces").innerHTML = Gallon;
}

function Time_function() {
    var Time= new Date().getHours();
    var Reply;
    if (Time < 12 == Time > 0) {
        Reply = "It is morning time!";
    }
    else if (Time < 12 == Time < 18) {
        Reply = "It is the afternoon.";
    }
    else {
        Reply = "It is evening time.";
    }
    document.getElementById("Time_of_day").innerHTML = Reply;
}