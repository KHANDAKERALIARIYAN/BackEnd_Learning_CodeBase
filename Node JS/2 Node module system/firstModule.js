function sum(a,b){
    return parseInt(a) + parseInt(b);
}

function substract(a,b){
    return parseInt(a) - parseInt(b);
}

function multiply(a,b){
    return parseInt(a) * parseInt(b);
}

function divide(a,b){
    if(b == 0){
        return "Error: Division by zero";
    }
    return parseInt(a) / parseInt(b);
}

module.exports={
    sum,
    substract,
    multiply,
    divide
};