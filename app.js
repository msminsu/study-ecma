
import {add, substract} from './modules/libA';

class App{

    constructor(){
        console.log(add(2,3));
        console.log(substract(2,3));
    }
}

var a = new App();