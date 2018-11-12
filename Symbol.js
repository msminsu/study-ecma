try{
    "ABC".includes(/ABC/);
}catch(e){
    console.log('정규표현식 작성 불가');
}


let regexpObj = /ABC/;

regexpObj[Symbol.match] = false;

console.log('/ABC/'.includes(regexpObj));
