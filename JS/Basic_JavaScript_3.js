
function Addition_Function() {
    var addition = 2 + 2;    
    document.getElementById("Math").innerHTML = "2 + 2 =" + addition;

}

function Subtraction_Function() {
    var subtraction = 5 - 2;
    document.getElementById("MathS").innerHTML = "5 - 2 = " + subtraction;

}

function multiplication() {
    var simple_multiply = 6 * 8;
    document.getElementById("MathM").innerHTML = "6 x 8 = " + simple_multiply;  
}

function division() {
    var simple_divide = 48/6;
    document.getElementById("MathD").innerHTML = "48 / 6 = " + simple_divide;
}

function more_Math() {
    var simple_Math = (1 + 2) * 10 / 2 - 5;
    document.getElementById("MathX").innerHTML = "1 plus 2, multiplied by 10, divided in half and then subtracted by 5 equals " + simple_Math;
}

function modulus_Operator() {
    var simple_MathO = 25 % 6;
    document.getElementById("MathO").innerHTML = "When you divide 25 by 6 you have a remainder of: " + simple_MathO;

}

function negation_Operator() {
    var x = 10; 
    document.getElementById("MathNO").innerHTML = -x;
}

var X = 5;
X++;
document.write(X +"<br>");




var Y = 5.25;
Y--;
document.write(Y +"<br>");

document.getElementById("random").innerHTML = Math.random();

document.getElementById("limits").innerHTML = (Math.random() * 100);

function mysquareRoot() {
    var a = Math.sqrt(0);
    var b = Math.sqrt(25);
    var c = Math.sqrt(49);

    var x = a + "<br>" + b + "<br>" + c;
    document.getElementById("sqrt").innerHTML = x;
}










