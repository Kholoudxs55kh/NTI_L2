// let arr1 = ['kholoud', '5', 10, [12, 'kh'], function add(a, b){return a+b}];
// // console.log(arr1);
// let arr2 = new Array(4);
// arr2 = [1,2,3,4];
// // console.log(arr2)
// arr1[2] = 'Changed';
// // console.log(arr1);
// const a = ["a", "b", "c"];

// for (const [index, element] of a.entries()) {
// //   console.log(index, element);
// }


// // *******excute function within ana array*******

// // console.log(arr1[4].call(null,5,3));

// let testArrByClasses = document.getElementsByClassName("test");
// // document.writeln(Array.isArray(testArrByClasses));
// // document.writeln(Array.from(testArrByClasses));

// // document.writeln('<br>');

// let testArrByQuery = document.querySelectorAll(".test");
// // document.writeln(Array.isArray(testArrByQuery))

// // **** get length ****
// // console.log(arr1.length)
// // document.writeln(arr1.length)

// // **** added index[9] are added even if the length[3] is not supporting and others are empty[4,5,6,7,8]****

// // **** dynamic adding and controlling with length****


// // **** Methods *****
// let arrTest = ['A', 'B', 'c'];

// // console.log(arrTest)

// arrTest.unshift('k')
// // console.log(arrTest)

// arrTest.push('m')
// // console.log(arrTest)

// let firstRemoved = arrTest.shift();
// // console.log(arrTest);
// // console.log(firstRemoved);

// let lastRemoved = arrTest.pop()
// // console.log(arrTest)
// // console.log(lastRemoved);

// // // ***** Ordering *****

// // // console.log(arrTest.reverse())
// // // console.log(arrTest.sort())

// // // **** Slice Method ****
// // // console.log(arrTest.slice(0,2))
// // // console.log(arrTest.slice(-3,-1)) //A, B


// // // **** Splice Method ****

// // console.log('Origin ' , arrTest)
// // // (start index, deleted count, values)
// // // update array 
// // arrTest.splice(0,1,'k')
// // console.log(arrTest)

// // shift 
// // arrTest.splice(0, 1)
// // console.log(arrTest)

// //unshift 
// // arrTest.splice(0,0 ,'k')
// // console.log(arrTest)

// // push
// // arrTest.splice(-1,1)
// // console.log(arrTest)

// // pop
// // arrTest.splice(arrTest.length,0 ,'k')
// // console.log(arrTest)

// // ***** indexs *****
// // let arrTest = ['A', 'B', 'c', 'B', 'A'];
// // console.log(arrTest.indexOf('d'))
// // console.log(arrTest.lastIndexOf('B'))

// // **** concatinate
// let ar1 = [1,3,5]
// let ar2 =[2,4,6]
// // let arAll = ar1.concat(ar2)
// // console.log(arAll)

// // **** joining
// // console.log(arrTest.join('-'))

// // **** every()

// // console.log(ar1.every((number) => number % 2 === 0))
// // console.log(ar2.every((number) => number % 2 === 0))

// /*** copying ****/

// a1 = [1,2,3,4,5,6]
// // console.log('a1' , a1)
// a2 = a1.slice(0,3)
// // a2 = a1.copyWithin(2,0,-1) // shallow
// // a2 = Object.assign([], a1) //deep
// // console.log('a1' , a1)
// // console.log('a2', a2)
// newArr = a1.concat(a2)
// // console.log(newArr)
// a2[2] = 555
// a2.push(9)
// // console.log(newArr)
// // console.log('a1', a1)
// // console.log('a2',a2)
// // console.log(a1[2])

// /*
// const arr = [1, 2, undefined, 4, 5];

// // The array is empty, but it has a length of 0.
// console.log(arr.length); // 0

// // The empty slot at index 0 is treated as undefined by the some method.
// const isEven = arr.some(num => num % 2 === 0);

// console.log(isEven); // false

// */

// // fun(arr){
// //     counter =0
// //     i =0

// //     for (i = 0; arr[i] != null; i++)
// //     {
// //         counter +=1
// //     }
// //     return counter
// // }



// /*** copying ****/

// a1 = [1,2,3,4,5,6]
// a2 = a1.slice(0,3)
// // a2 = a1.copyWithin(2,0,-1) // shallow
// // a2 = Object.assign([], a1) //deep
// // console.log('a1' , a1)
// // console.log('a2', a2)
// newArr = a1.concat(a2)
// console.log(newArr)
// a2[2] = 555
// a2.push(9)
// console.log(newArr)
// // console.log('a1', a1)
// // console.log('a2',a2)
// // console.log(a1[2])

// /*
// const arr = [1, 2, undefined, 4, 5];

// // The array is empty, but it has a length of 0.
// console.log(arr.length); // 0

// // The empty slot at index 0 is treated as undefined by the some method.
// const isEven = arr.some(num => num % 2 === 0);

// console.log(isEven); // false

// */

// let arrTest = [5, 4, -1, 3, 7, -2, 1]
// console.log(arrTest.sort())
// console.log(arrTest.sort((a,b) => a - b)) // [1,3,4,5,7]
// console.log(arrTest.sort((a,b) => b - a)) // => reverse()
// console.log(arrTest.reverse()) // [7,5,4,3,1]
// arrTest = ['d', 'a', 'c', 'b']
// console.log(arrTest.sort()) // ['a', 'c', 'd']
// console.log(arrTest.reverse()) // ['d', 'c', 'a']

// console.log(arrTest.sort().reverse())
// console.log(arrTest.reverse().sort())



// Serach ..
//  ============== Edit article
let arrTest = [5, 4, 3, 7, 3, 1, 3, 8]
console.log(arrTest.indexOf(3)) // 2
console.log(arrTest.lastIndexOf(3)) // 6
console.log(arrTest.indexOf(55)) // -1

console.log(arrTest.includes(4)) // true

console.log(arrTest.filter((element) => element > 4)) // any element that elligeble for the condition // []
console.log(arrTest.find((element) => element > 5)) // the first element that's elligible for the cond // undefined


// concat
arr1 = [1,2,3]
arr2 = [4,2,5]
arr3 =['a', 'b', 'c']
console.log(arr1.concat(arr2, arr3)) // [ 1, 2, 3, 4, 2, 5 ]


// arr = [1,2,3,4,5,6,7,8]
// console.log(arr.slice(0,3)) // [1,2,3] => endidx is n't includded

// arrCopy = arr.slice(0, -1)

// console.log(arrCopy)

arrTest = ['k','h','o','l','o','u','d']
console.log(arrTest.join('-')) // d-a-c
console.log(arrTest.join('')) // d,a,c

let n = arrTest.join('')

console.log(Array.from('mohamed'))

console.log(Array.of('mohamed'))

console.log('mohamed'.split('')) // strtok()

arrTest = [2,4,6,7]
// console.log(arrTest.every((number) => number % 2 === 0)) // false
// console.log(arrTest.some((number) => number % 2 === 0)) // true


let arrTest1 = [1,3,5,8,9]
console.log(arrTest.forEach((element, index, array) => {
    console.log('k');
    // console.log(ele);
    // console.log(arrTest.push(arrTest1))
}));


arrTest = [10,21,30,60]

console.log(arrTest.map((number) => number > 50 ? number * 2 : number % 2 ===0? number / 2 : number))

// Ternary Operater
/*
condition if : do something : else
condition ? true : false
condition ? condition ? true : flase : false

if (condition){
    do smthg
} else {
    do smthg
}
*/









const logArrayElements = (element, index , array ) => {
            console.log(a[${index}] = ${element} array : ${array} length : ${array.length} );
            };


            [2, 5, , 9].forEach(logArrayElements);
            // length 
            // push after each element
            // splice 
            // split



















