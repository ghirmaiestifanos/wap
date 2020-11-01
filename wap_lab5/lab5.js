function myFunctionTest(expected, function2test) {
    let result = function2test();

    if (Array.isArray(expected)) {
        expected = expected.toString();
    }
    if (Array.isArray(result)) {
        result = result.toString();
    }
    if (expected === result) {
        return "TEST SUCCEEDED";
    } else {
        return "TEST FAILED.  Expected " + expected + " found " + function2test();
    }
}

function myarr() {
    return [1, 1];
}
console.log("Expected output of myarr() is 40  " + myFunctionTest([1, 1], function() {
    return myarr();
}));

let max = function(num1, num2) {
    return num1 > num2 ? num1 : num2;
}
console.log("Expected output of max(2,5) is 5  " + myFunctionTest(5, function() {
    return max(2, 5);
}));

let maxOfThree = function(num1, num2, num3) {
    return max(max(num1, num2), num3);
}
console.log("Expected output of maxOfThree(9,7,12) is 12  " + myFunctionTest(11, function() {
    return maxOfThree(9,7,12);
}));

function isVowel(c) {
    return ['a', 'e', 'i', 'o', 'u'].includes(c);
}
console.log("Expected output of isVowel(e) is true   " + myFunctionTest(true, function() {
    return isVowel('e');
}));

function sum(arr) {
    return arr.reduce(function(a, b) {
        return a + b;
    });

}

function multiply(arr) {
    return arr.reduce(function(a, b) {
        return a * b;
    });

}
console.log("Expected output of sum([1,2,3,3,3]) is 12   " + myFunctionTest(12, function() {
    return sum([1, 2, 3, 3, 3]);
}));

console.log("Expected output of multiply([1,2,3,3,3]) is 72  " + myFunctionTest(12, function() {
    return sum([1, 2, 3, 3, 3]);
}));
let reverse = function(s) {
    let str = "";
    for (let i = s.length - 1; i >= 0; i--) {
        str += s[i];
    }
    return str;
}
console.log("Expected output of reverse('Ghirmai') is iamrihG " + myFunctionTest('iamrihG ', function() {
    return reverse('Ghirmai');
}));

let findLongestWord = function(arrWords) {
    return Math.max(...arrWords.map(x => x.length));

}

console.log("Expected output of findLongestWord(['Ghirmai Estifanos','Alazar','Haile']) is 17 " + myFunctionTest(17, function() {
    return findLongestWord(['Ghirmai Estifanos','Alazar','Haile']);
}));

let filterLongWords = function(words) {
    let max = findLongestWord(words);
    for (let m of words) {
        if (m.length == max) {
            return m;
        }
    }

}
console.log("Expected output of filterLongWords(['Ghirmai Estifanos','Alazar','Haile']) is 'Ghirmai Estifanos' " + myFunctionTest('Ghirmai Estifanos', function() {
    return filterLongWords(['Ghirmai Estifanos','Alazar','Haile']);
}));

const a = [1, 3, 5, 3, 3];
const b = a.map(e=>e * 10);
console.log(b);
const c = a.filter(e=>e == 3);
console.log(c);
const d = a.reduce((e,e1) => e+e1);
console.log(d); 