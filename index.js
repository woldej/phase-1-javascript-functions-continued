// code your solution here
function mondayWork(strg1="go to the office"){

    return `This Monday, I will ${strg1}.` 
}
function saturdayFun(theDo="roller-skate"){
    return `This Saturday, I want to ${theDo}!`
}
/*function wrapAdjective(result){
    if (result=='*')
    return `You are ${result}a hard worker${result}!`
    else if(result=='||')
    return `You are ${result}a hard worker${result}!`

}*/
function wrapAdjective(result){
return function (adjective){
    return `You are ${result}${adjective}${result}!`
    
}
}
//wrapAdjective("%")("a dedicated programmer"); //=> "You are %a dedicated programmer%!"