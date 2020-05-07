var Dog = require('./Dog');
var Mouse = require('./Mouse');
var Cat = require('./Cat');
var dog = new Dog('Lu');

var cat = new Cat();
var mouse = new Mouse('Mickey')


try{
	cat.eat(dog);

}catch(err){
	console.log('Error while cat eatting a dog');
}
console.log(cat)
