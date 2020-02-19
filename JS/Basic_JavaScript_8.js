function full_Sentence() {
    var sent_1 = "I have played ";
    var sent_2 = "basketball for most ";
    var sent_3 = "of my life.";
    var whole_sentence = sent_1.concat(sent_2, sent_3);
    document.getElementById("Basketball").innerHTML = whole_sentence;
}

function slice_Method() {
    var Sentence = "Learning about slices of sentences and how to remove them.";
    var Section = Sentence.slice(15,21);
    document.getElementById("Slice").innerHTML = Section;
}

function myFunction() {
    var str = "Learning Upper case method";
    var res = str.toUpperCase();
    document.getElementById("Large").innerHTML = res;
}

function myStringSearch() {
    var str = "I have played basketball for most of my life."
    var n = str.search("basketball");
    document.getElementById("Search").innerHTML = n;
}

function string_Method() {
    var X = 182;
    document.getElementById("Numbers_to_string").innerHTML = X.toString();
}

function precision_Method() {
    var X = 12938.3012987376112;
    document.getElementById("Precision").innerHTML = X.toPrecision(10);
}

function fixed_Method() {
    var num = 6.789123;
    var n = num.toFixed(2);
    document.getElementById("Fixed").innerHTML = n;
}

function valueof_Method() {
    var vehicles = ["Car", " Truck", " Van", " SUV"];
    document.getElementById("ValueOf").innerHTML = vehicles.valueOf();
}
