function displayData(data){
    calc.value=calc.value+data
}
function allClear(){
    calc.value=""
}
function outputOper(){
    calc.value=eval(calc.value)
}