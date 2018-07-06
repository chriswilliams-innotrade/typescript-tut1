var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
// Math
document.write("5 + 4 = " + (5 + 4) + "<br />");
document.write("5 - 4 = " + (5 - 4) + "<br />");
document.write("5 * 4 = " + (5 * 4) + "<br />");
document.write("5 / 4 = " + (5 / 4) + "<br />");
document.write("5 % 4 = " + (5 % 4) + "<br />");
document.write("5 + String 2 = " + (5 + '2') + "<br />");
var randNum = 1;
document.write("randNum++ = " + randNum++ + "<br />");
document.write("++randNum = " + ++randNum + "<br />");
document.write("randNum-- = " + randNum-- + "<br />");
document.write("--randNum = " + --randNum + "<br />");
// Conditional Statemetns
var sampLet = 123;
if (true) {
    var sampLet_1 = 456;
}
document.write("samplet : " + sampLet + "<br />");
// differnece with Var
var sampLet = 123;
if (true) {
    var sampLet = 456;
}
document.write("samplet : " + sampLet + "<br />");
// Array
var randArray = [5, 6, 7, 8];
for (var val in randArray) {
    document.write(val + "<br />");
}
var strArray = randArray.map(String);
for (var _i = 0, strArray_1 = strArray; _i < strArray_1.length; _i++) {
    var val = strArray_1[_i];
    document.write(val + "<br />");
}
// Functions
var getSum = function (num1, num2) {
    return num1 + num2;
};
var theSum1 = getSum(5, 2);
document.write("5 + 2 = " + theSum1 + "<br />");
var getDiff = function (num1, num2, num3) {
    if (num2 === void 0) { num2 = 2; }
    if (typeof num3 !== 'undefined') {
        return num1 - num2 - num3;
    }
    return num1 - num2;
};
document.write("5 - 2 = " + getDiff(5) + "<br />");
document.write("5 - 2 - 3 = " + getDiff(5, 2, 3) + "<br />");
// Receive Unknown number of values 
var sumAll = function () {
    var nums = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        nums[_i] = arguments[_i];
    }
    var sum = nums.reduce(function (a, b) { return a + b; }, 0);
    document.write("Sum : " + sum + "<br />");
};
sumAll(1, 2, 3, 4, 5);
// variable function
var addOne = function (x) { return x + 1; };
document.write("1 + 1 = " + addOne(1) + "<br />");
// Classes
var Animal = /** @class */ (function () {
    function Animal(name, owner) {
        this.name = name;
        this.owner = owner;
        Animal.numOfAnimals++;
    }
    Animal.prototype.ownerInfo = function () {
        document.write(this.name + " is owned by " + this.owner + "<br />");
    };
    Animal.howManyAnimals = function () {
        return Animal.numOfAnimals;
    };
    Object.defineProperty(Animal.prototype, "weight", {
        get: function () {
            return this._weight;
        },
        set: function (weight) {
            this._weight = weight;
        },
        enumerable: true,
        configurable: true
    });
    Animal.numOfAnimals = 0;
    return Animal;
}());
// Animal object to pass into Class
var spot = new Animal("Spot", "Doug");
spot.ownerInfo();
spot.weight = 100;
document.write("Spot's Weight is : " + spot.weight + "<br />");
document.write("# of Animals : " + Animal.howManyAnimals() + "<br />");
// Sub classes to inherit methods and fields from another class with operator extend 
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Dog.prototype.contructor = function (name, owner) {
        _this = _super.call(this, name, owner) || this;
        Dog.numOfAnimals++;
    };
    return Dog;
}(Animal));
var grover = new Dog("Grover", "Jimmy");
document.write("# of Animals : " + Animal.howManyAnimals() + "<br />");
document.write("Is a Dog an Animal : " + (grover instanceof Animal) + "<br />");
document.write("Does grover have a name : " + ('name' in grover) + "<br />");
// Interfaces
