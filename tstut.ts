
// Variables
var myName: string = "Chris";
var myAge: number = 34;
var canVote: boolean = true;
var anything: any = "dog";
anything = 2;

document.getElementById("tsStuff").innerHTML = "My name is " + myName;

document.write("canVote is a  " + typeof(canVote) + "<br />");
document.write("myname is a  " + typeof(myName) + "<br />");
document.write("anything is a  " + typeof(anything) + "<br />");

var strTONum: number = parseInt("5");

var numToStr: number = 5;
document.write("numToStr is a " +typeof(numToStr.toString()) + "<br />");

const PI = 3.14159;


// Interface 

interface SuperHero {
    realName: String;
    superName: String;
}

var superman: SuperHero = {
    realName: "Clark Kent",
    superName: "Superman"
}

document.write(superman.realName + " is " + superman.superName + "<br />");

// Arrays

var employees: string[] = ["Bob", "Sally", "Sam"];

document.write(employees.toString() + "<br />");

interface SuperHero {
    realName: String;
    superName: String;
}

var superheroes: SuperHero[] = [];

superheroes.push({
    realName: 'Bruce Wayne',
    superName: 'Batman'
});

document.write(superheroes[0].realName + " is " + superheroes[0].superName + "<br />");

//math

document.write("5 + 4 = " + (5+4) + "<br />");
document.write("5 - 4 = " + (5-4) + "<br />");
document.write("5 * 4 = " + (5*4) + "<br />");
document.write("5 / 4 = " + (5/4) + "<br />");
document.write("5 % 4 = " + (5%4) + "<br />");

document.write("5 + String 2 = " + (5+'2') + "<br />");







