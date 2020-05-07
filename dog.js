var chalk = require('chalk');
function Dog(name){
	this.stomach = [];
	this.name = name;
};
Dog.prototype.eat = function(){
	this.stomachh.push(cat);
};

Dog.prototype.sayHi = function(){
	console.log('Hi! I am a dog. May name is '+ chalk.blue(this.name));
}

module.exports = Dog;