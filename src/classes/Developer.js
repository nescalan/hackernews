class Developer {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    //Methods
    getName(){
        return this.firstName + '' + this.lastName;
    }
}