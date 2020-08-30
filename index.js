'use strict';

let allNumbers = [1, 2, 4, 5, 6, 7, 8],
    someNumbers = [1, 2, 'Hello', 4, 5, 'world', 6, 7, 8],
    noNumbers = ['здесь', 'нет', 'чисел'];

function isNumber(val) {
    return typeof val === 'number';
}

const isSomeTrue = function(array, func) {
    let i = 0;

    const filterFunc = (item) => {
        if (i < (array.length - 1)) {
            if (!func(item)) {
                i++;
                filterFunc(array[i]);
            } else {
                return;
            }
        }
    };

    filterFunc(array[i]);

    return func(array[i]);
    
};

console.log(isSomeTrue(allNumbers, isNumber)); //вернет true
console.log(isSomeTrue(someNumbers, isNumber)); //вернет true
console.log(isSomeTrue(noNumbers, isNumber)); //вернет false