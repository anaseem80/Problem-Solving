class Dinglemouse {
    constructor() {
        this.order = {};
    }

    setAge(age) {
        this.order.age = `I am ${age}.`
        return this
    }

    setSex(sex) {
        this.order.sex = `I am ${sex == "M" ? "male" : "female"}.`
        return this
    }

    setName(name) {
        this.order.name = `My name is ${name}.`
        return this
    }

    hello = () => {
        if(Object.values(this.order).join(" ")){
            return ['Hello. ', ...Object.values(this.order).join(" ")].join("")
        }else{
            return "Hello."
        }
    }
}

const user1 = new Dinglemouse()
console.log(user1.hello())