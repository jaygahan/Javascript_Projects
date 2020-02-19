
function My_First_Function() {
    var str = "This text is red!";
    var result = str.fontcolor("red");
    document.getElementById("Red_text").innerHTML = result;
}





function myFunction() {
    var sentence = "Words in a ";
    sentence += "sentence";
    document.getElementById("words").innerHTML = sentence;
}

function toCelsius(f) {
    return (5/9) * (f-32);
}
document.getElementById("demo").innerHTML = toCelsius(77);