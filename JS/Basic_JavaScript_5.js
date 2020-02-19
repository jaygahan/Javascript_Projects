

document.write("Hello World!<br>");

function my_Function() {
    document.getElementById("Test").innerHTML = 0/0;
}

function my_FunctionA() {
    document.getElementById("TestA").innerHTML = isNaN('This is a string');
}

function my_FunctionB() {
    document.getElementById("TestB").innerHTML = isNaN('007');
}

document.write (3E310 +"<br>");

document.write (-3E310 +"<br>");

document.write ((9 >4) + "<br>");

document.write ((9 < 4) + "<br>");

console.log(3+3);

document.write (("10" + 5) + "<br>");

console.log(6>9);

document.write((9==9)+ "<br>");

document.write((9==8)+"<br>");

X = 8;
Y = 8;
document.write((X === Y) + "<br>");

X = 8;
Y = "nine";
document.write((X === Y) + "<br>");

X = 8;
Y = 9;
document.write((X === Y) + "<br>");

X = 8;
Y = "8";
document.write((X === Y) + "<br>");

document.write((5 > 2 && 10 > 4) + "<br>");

document.write((5 > 10 || 10 > 4) + "<br>");

document.write((5 > 10 || 10 > 20) + "<br>");   

function not_Function() {
    document.getElementById("Not").innerHTML = !(20 > 10);
}

function not_FunctionA() {
    document.getElementById("NotA").innerHTML = !(6 > 10);
}


