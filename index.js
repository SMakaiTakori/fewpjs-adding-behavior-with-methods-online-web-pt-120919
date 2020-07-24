// Your code here
class Cat {
    constructor(name, sex){
        this.name = name;
        this.sex = sex;
    }

     speak() {
        return `${this.name} says meow!`              
    }    
}

let cat = new Cat('Harry','Male');
console.log('cat log', cat)
console.log('speakingCat-', cat.speak())
console.log ('catNameSex-', cat.name, cat.sex)


class Dog {
    constructor(name, sex){
        this.name = name;
        this.sex = sex;
    }
    speak() {
        return `${this.name} says woof!`
    }
}

let dog = new Dog('Jack', 'Male')
let dog2 = new Dog('Charlie', 'Female')

console.log(`${dog.name} is ready for a walk`)
console.log('Doggy info-', `Name: ${dog.name}, Sex: ${dog.sex}`)
console.log(`${dog2.name} is eady for a walk`)
console.log('Doggy2 info-', `Name: ${dog2.name}, Sex: ${dog2.sex}`)
console.log('Dogs speak-', dog.speak(), dog2.speak())

class Bird {
    constructor(name, sex){
        this.name = name;
        this.sex = sex;
    }    

    speak() {
        if (this.sex == 'male'){
            return `It's me! ${this.name}, the parrot!`
        }else {
            return `${this.name} says squawk!`
        }
    }
}

let bird = new Bird('Polly', 'female')
let bird2 = new Bird('Wayne', 'male')

console.log('Bird1 info-', `${bird.name} is a ${bird.sex}`)
console.log(bird.speak())
console.log('Bird2 info-', `${bird2.name} is a ${bird2.sex}`)
console.log(bird2.speak())