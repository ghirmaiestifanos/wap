/* runs test to see if expected argument is === to value returned by function2test argument */
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

// function to sum
function sum(arr) {
    var sm = 0
    for(const  i of arr){
        sm +=i;
    }
    return sm;
}
console.log("Expected output of sum([4,3,2,1]) is 10  " + myFunctionTest(10, function () {
    return sum([4,3,2,1]);
}));

// function to multiply
function multiply(arr) {
    m = 1;
    for(const i in arr){
        m *= arr[i];
    }
    return m;
}
console.log("Expected output of multiply([5,4,6,7]) is 840  " + myFunctionTest(840, function () {
    return multiply([5,4,6,7]);
}));

// function to reverse string
function reverse(s) {
    var arr =s.split('');
    arr.indexOf();
    return arr.map(s=>arr[arr.length - arr.indexOf(s)-1]).reduce((t,s)=> t + '' + s,'');

}
console.log("Expected output of reverse('eyob') is boye " + myFunctionTest('boye', function () {
    return reverse('eyob');
}));


// function to find the longest word
function findLongestWords(arr,i) {
    let arr2 = [];
    let j = 0;
    for(let e of arr){
        if (e.length > i) {
            arr2[j++] = e;
        }
    }
    return arr2;

}
console.log("Expected output of findLongestWord(['weldeyohannes','eyob','bini','henok']) is ['weldeyohannes','henok']  " + myFunctionTest(['weldeyohannes','henok'], function () {
    return findLongestWords(['weldeyohannes','eyob','bini','henok'],4);
}));
