let arr=[];



function findNumber(numbers) {
    
    for (let i = 0; i < numbers.length; i++) {
        if(numbers.indexOf(numbers[i]) == numbers.lastIndexOf(numbers[i])){
            arr.push(numbers[i]);
        }
    }
    return arr;
}




let nums = [1, 2, 3, 4, 5, 5]
console.log(findNumber(nums))
