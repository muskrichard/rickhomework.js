class cat {
    constructor(name,color) {
        this._name = name;
        this._color = color;
        this._eat = eat;
        this._sleep = 50;
    }
    
    get name() {
        return this.name;
    }

    get color() {
        return this.cuddly;
    } 

    eat(sleepInc) {
        this._eat += sleepInc;
        console.log(`${this._name} ate a big meal of tuna. It is now sleeping for ${this._sleep}.`);    
    }








}