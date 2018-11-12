let sameKey = {one: 1, one:2};
console.log(sameKey) //{one:2} 대체되어 한개의 값만 가짐


let one = 1,two = 2;
let values ={one,two};

console.log(values);   //{one:1, two:2}


//es5
/* let obj = {
    getTotal : function(param){
        return param + 200;
    }
};
 */

//es6
let obj ={
    getTotla(param){
        return param + 200;
    }
};

console.log(obj.getTotla(400));

//디스크립터 
let testObj = {}
Object.defineProperty(testObj, "book", {value: 123,writable:true, enumerable: false});

testObj.book = 456;
console.log(testObj.book);

//es5 get 속성
var es5Get = {}
Object.defineProperty(es5Get,"book",{
    get : function(){
        return "책";
    }
})
console.log(es5Get.book);

//es6 getter 속성
let es6Get = {
    value : 'es6-get-value',
    get getValue(){
        return this.value;
    }
};
console.log(es6Get.getValue);

// es5 set 속성
var es5Set = {};

Object.defineProperty(es5Set, "item",{
    set: function(param){
        this.sports = param;
    }
});

es5Set.item = "축구";
console.log(es5Set.sports);

// es6 setter
var es6Set = {
    set setValue(value){
        this.value = value;
    }
};

es6Set.setValue = "es6-set-value";
console.log(es6Set.value);

// is() 값과 값 타입 비교
console.log("1",Object.is(1, "1"), 1 ==="1");3
console.log("2",Object.is(NaN, NaN), NaN === NaN);
console.log("3",Object.is(0, -0), 0=== -0);
console.log("4",Object.is(-0, 0), -0=== 0);
console.log("5",Object.is(-0, -0), -0=== -0)
console.log("6",Object.is(NaN, 0/0), NaN=== 0/0)
console.log("7",Object.is(null, null), null=== null)
console.log("8",Object.is(undefined, null), undefined=== null);



//assign() 오브젝트 프로퍼티 복사 

try{
    let obj = Object.assign(null, {x: 1});
}catch(e){
    console.log('null 지정 불가');
}

console.log(Object.assign(123));
console.log(Object.assign(456,70));


console.log(Object.assign("ABC",{one:1}));
console.log(Object.assign(Symbol("ABC"),{one:1}));


try{
    let obj = Object.assign("ABC", "ONE");
}catch(e){
    console.log("파라미터 모두 문자열 사용 불가");
}