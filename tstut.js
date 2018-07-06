// Variables
var myName = "Chris";
var myAge = 34;
var canVote = true;
var anything = "dog";
anything = 2;
document.getElementById("tsStuff").innerHTML = "My name is " + myName;
document.write("canVote is a  " + typeof (canVote) + "<br />");
document.write("myname is a  " + typeof (myName) + "<br />");
document.write("anything is a  " + typeof (anything) + "<br />");
var strTONum = parseInt("5");
var numToStr = 5;
document.write("numToStr is a " + typeof (numToStr.toString()) + "<br />");
var PI = 3.14159;
var superman = {
    realName: "Clark Kent",
    superName: "Superman"
};
document.write(superman.realName + " is " + superman.superName + "<br />");
// Arrays
var employees = ["Bob", "Sally", "Sam"];
document.write(employees.toString() + "<br />");
var superheroes = [];
superheroes.push({
    realName: 'Bruce Wayne',
    superName: 'Batman'
});
document.write(superheroes[0].realName + " is " + superheroes[0].superName + "<br />");
//math
document.write("5 + 4 = " + (5 + 4) + "<br />");
document.write("5 - 4 = " + (5 - 4) + "<br />");
document.write("5 * 4 = " + (5 * 4) + "<br />");
document.write("5 / 4 = " + (5 / 4) + "<br />");
document.write("5 % 4 = " + (5 % 4) + "<br />");
document.write("5 + String 2 = " + (5 + '2') + "<br />");
