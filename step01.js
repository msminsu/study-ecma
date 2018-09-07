
class User {
    constructor(email, name){
        this.email = email;
        this.name = name;
        this.score = 0;

    }

    login(){
        console.log(this.email,'just logged in');
        return this;
    }

    logout(){
        console.log(this.email, 'jsut logged out');
        return this;
    }

    updateScope(){
        this.score++;
        console.log(this.email, 'scoe is now ', this.score );
        return this;
    }
}

var userOne  = new User('minsu@night.com', 'minsu');
var userTwo  = new User('mario@nintando.com','mario');



function Admin(...args){
    console.log(args);
    User.apply(this, args);

}

var admin = new Admin('minsu@daum.net','hoooo');