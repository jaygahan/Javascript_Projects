
function Ride_Function() {
    var Height, Can_ride;
    Height = document.getElementById("Height").value;
    Can_ride = (Height < 52) ? "You are too short":"You are tall enough";
    document.getElementById("Ride").innerHTML = Can_ride + " to ride.";
       
}

function Vote_Function() {
    var Age, Can_vote;
    Age = document.getElementById("Age").value;
    Can_vote = (Age < 18) ? "You are not old enough":"You are old enough";
    document.getElementById("Vote").innerHTML = Can_vote + " to vote.";
}

function Vehicle(Make, Model, Year, Color) {
    this.Vehcicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}

var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");
function myFunction() {
    document.getElementById("Keywords_and_Constructors").innerHTML = "Erik drives a " + Erik.Vehicle_Color + 
    "-colored " + Erik.Vehicle_Model + " manufactured in " + Erik.Vehicle_Year;
}


function Dinner(Meat, Vegetable, Starch) {
    this.Dinner_Meat= Meat;
    this.Dinner_Vegetable = Vegetable;
    this.Dinner_Starch = Starch;
}

var Jay = new Dinner("Steak", "Salad", "Yam");
var Sylas = new Dinner("Burger", "Salad", "Tots");
var Jaxsun = new Dinner("Pork", "Green Beans", "Pasta");
function dinnerFunction() {
    document.getElementById("New_and_This").innerHTML = "Jaxsun's ideal dinner is " + Jaxsun.Dinner_Meat + 
    ", " + Jaxsun.Dinner_Vegetable + ", and  " + Jaxsun.Dinner_Starch;
}

function Person(first, last, age) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
}

var myMother = new Person("Ingrid", "Gahan", 72);

document.getElementById("demo").innerHTML = "My mother is " + myMother.age + ".";

function count_Function() {
    document.getElementById("Counting").innerHTML = Count();
    function Count() {
        var Starting_point = 9;
        function Plus_one() {Starting_point += 1;}
        Plus_one();
        return Starting_point;
    }
}