let numbers = [2, 5, 7, 8, 13, 14, 18, 21, 22, 30];
function evenNumbers(){
    let even = [];
    for(let i = 0; i < numbers.length; i++)
        if(numbers[i] % 2 === 0){
            even.push(numbers[i])
        }
    return even
}
console.log(evenNumbers())