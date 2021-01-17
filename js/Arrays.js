/*ENTRIES
 * The entries() method returns a new Array Iterator object
 *  that contains the key/value pairs for each index in the array.
 *  Syntax: array.entries()
 */
array1 = ['a', 'b', 'c'];

iterator1 = array1.entries();

console.log(iterator1.next().value);
// expected output: Array [0, "a"]

console.log(iterator1.next().value);
// expected output: Array [1, "b"]


/* 
 * FILTER
 * The filter() method creates a new array with all elements that pass the 
 * test implemented by the provided function. 
 */
//Syantax: var newArray = arr.filter(callback(element[, index[, array]])[, thisArg])
fruits = ['apple', 'banana', 'grapes', 'mango', 'orange'];

/**
 * Array filters items based on search criteria (query)
 */
function filterItems(query) {
  return fruits.filter(function(el) {
      return el.toLowerCase().indexOf(query.toLowerCase()) > -1;
  })
}

console.log(filterItems('ap')); // ['apple', 'grapes']
console.log(filterItems('an')); // ['banana', 'mango', 'orange']



/*
FIND
returns the value of the first element in the array that satisfies the provided
 testing function. Otherwise undefined is returned.
*/
//Syantax: arr.find(callback(element[, index[, array]])[, thisArg])
array1 = [5, 12, 8, 130, 44];

found = array1.find(element => element > 10);

console.log(found);
// expected output: 12


/*
 * FINDINDEX
 * The findIndex() method returns the index of the first element in the array
 *  that satisfies the provided testing function. Otherwise, it returns -1, 
 *  indicating no element passed the test.
 */
//Syantax: arr.findIndex(callback(element[, index[, array]])[, thisArg])
array1 = [5, 12, 8, 130, 44];

isLargeNumber = (element) => element > 13;
console.log(array1.findIndex(isLargeNumber));
// expected output: 3


/*FLAT
 * The flat() method creates a new array with all sub-array elements concatenated
 * into it recursively up to the specified depth.
 * Syntax: var newArray = arr.flat([depth])
 */
var arr1 = [1, 2, [3, 4]];
console.log(arr1.flat()); 
// [1, 2, 3, 4]

var arr2 = [1, 2, [3, 4, [5, 6]]];
console.log(arr2.flat());
// [1, 2, 3, 4, [5, 6]]

var arr3 = [1, 2, [3, 4, [5, 6]]];
console.log(arr3.flat(2));
// [1, 2, 3, 4, 5, 6]



/*FLATMAP
 * The flatMap() method first maps each element using a mapping function, 
 * then flattens the result into a new array. It is identical to a map followed
 *  by a flat of depth 1, but flatMap is often quite useful, as merging both into
 *   one method is slightly more efficient.
 * */
/* Syantax: var new_array = arr.flatMap(function callback(currentValue[, index[, array]]) {
    // return element for new_array
}[, thisArg])
*/
arr1 = [1,2, 3, 4];

console.log(arr1.map(x => [x * 2])); 
// [[2], [4], [6], [8]]

console.log(arr1.flatMap(x => [x * 2]));
// [2, 4, 6, 8]

// only one level is flattened
console.log(arr1.flatMap(x => [[x * 2]]));
// [[2], [4], [6], [8]]



/* FOREACH 
 * The forEach() method executes a provided function once for each array element.
 */
/* Syantax: arr.forEach(function callback(currentValue[, index[, array]]) {
    //your iterator
}[, thisArg]);
*/

//Usecase 1
array1 = ['a', 'b', 'c'];

array1.forEach(element => console.log(element));

//Usecase 2
items = ['item1', 'item2', 'item3'];
copy = [];

items.forEach(function(item){
  copy.push(item);
});
console.log(copy);



/* FROM
 * The Array.from() method creates a new, shallow-copied 
 * Array instance from an array-like or iterable object.
 */
//Syantax: Array.from(arrayLike[, mapFn[, thisArg]])
console.log(Array.from('foo'));
// expected output: Array ["f", "o", "o"]

console.log(Array.from([1, 2, 3], x => x + x));
// expected output: Array [2, 4, 6]

//Array from a set
var s = new Set(['foo', window]); 
console.log(Array.from(s)); 
// ["foo", window]

//Array from a map
var m = new Map([[1, 2], [2, 4], [4, 8]]);
Array.from(m);
// [[1, 2], [2, 4], [4, 8]]

var mapper = new Map([['1', 'a'], ['2', 'b']]);
Array.from(mapper.values());
// ['a', 'b'];

Array.from(mapper.keys());
// ['1', '2'];



/*INCLUDES
 * The includes() method determines whether an array includes a certain element,
 *  returning true or false as appropriate.
 */
//Syantax: arr.includes(searchElement[, fromIndex])
array1 = [1, 2, 3];

console.log(array1.includes(2));
// expected output: true

pets = ['cat', 'dog', 'bat'];

console.log(pets.includes('cat'));
// expected output: true



/*INDEXOF
 * The indexOf() method returns the first index at which a given element can
 *  be found in the array, or -1 if it is not present.
 */
//Syntax: arr.indexOf(searchElement[, fromIndex])
beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];

console.log(beasts.indexOf('bison'));
// expected output: 1

// start from index 2
console.log(beasts.indexOf('bison', 2));
// expected output: 4

console.log(beasts.indexOf('giraffe'));
// expected output: -1



/*FILL
 * The fill() method fills all the elements of an array from
 *  a start index to an end index with a static value. 
 *  The end index is not included.
 *  Syantax: arr.fill(value[, start[, end]])
 */
array1 = [1, 2, 3, 4];

// fill with 0 from position 2 until position 4
console.log(array1.fill(0, 2, 4));
// expected output: [1, 2, 0, 0]

// fill with 5 from position 1
console.log(array1.fill(5, 1));
// expected output: [1, 5, 5, 5]

console.log(array1.fill(6));
// expected output: [6, 6, 6, 6]



/*EVERY
 * The every() method tests whether all elements in the array
 * pass the test implemented by the provided function.
 * Syntax: arr.every(callback(element[, index[, array]])[, thisArg])
 */
isBelowThreshold = (currentValue) => currentValue < 40;

array1 = [1, 30, 39, 29, 10, 13];

console.log(array1.every(isBelowThreshold));
// expected output: true



/*COPYWITHIN
 * The copyWithin() method shallow copies part of an array to another
 * location in the same array and returns it, without modifying its size.
 * Syantax: arr.copyWithin(target[, start[, end]])
 */
array1 = ['a', 'b', 'c', 'd', 'e'];

// copy to index 0 the element at index 3
console.log(array1.copyWithin(0, 3, 4));
// expected output: Array ["d", "b", "c", "d", "e"]

// copy to index 1 all elements from index 3 to the end
console.log(array1.copyWithin(1, 3));
// expected output: Array ["d", "d", "e", "d", "e"]



/*CONCAT
 * The concat() method is used to merge two or more arrays. 
 * This method does not change the existing arrays, but instead returns a new array.
 * Syantax: var new_array = old_array.concat([value1[, value2[, ...[, valueN]]]])
 */
array1 = ['a', 'b', 'c'];
array2 = ['d', 'e', 'f'];
array3 = array1.concat(array2);

console.log(array3);
// expected output: Array ["a", "b", "c", "d", "e", "f"]



/*ISARRAY
 * The Array.isArray() method determines whether the passed value is an Array.
 * Syntax: Array.isArray(value)
 */
Array.isArray([1, 2, 3]);  // true
Array.isArray({foo: 123}); // false
Array.isArray('foobar');   // false
Array.isArray(undefined);  // false



/*JOIN
 * The join() method creates and returns a new string by concatenating
 * all of the elements in an array (or an array-like object), separated by
 * commas or a specified separator string.
 * Syntax: arr.join([separator])
 */
elements = ['Fire', 'Air', 'Water'];

console.log(elements.join());
// expected output: "Fire,Air,Water"

console.log(elements.join(''));
// expected output: "FireAirWater"

console.log(elements.join('-'));
// expected output: "Fire-Air-Water"


/*ARRAY.KEYS
 * The keys() method returns a new Array Iterator object that contains
 * the keys for each index in the array. 
 * Syantax: arr.keys()
 */
array1 = ['a', 'b', 'c'];
iterator = array1.keys();

for (const key of iterator) {
  console.log(key);
}

// expected output: 0
// expected output: 1
// expected output: 2



/*ARRAY.VALUES
 * The values() method returns a new Array Iterator object that contains
 * the values for each index in the array.
 */
let array1 = ['a', 'b', 'c'];
let iterator = array1.values();

for (const value of iterator) {
  console.log(value);
}

// expected output: "a"
// expected output: "b"
// expected output: "c"



/*LASTINDEXOF
 * The lastIndexOf() method returns the last index at which a given element
 * can be found in the array, or -1 if it is not present.The array is searched
 * backwards, starting at fromIndex.
 * Syntax: arr.lastIndexOf(searchElement)
           arr.lastIndexOf(searchElement, fromIndex)
 */
animals = ['Dodo', 'Tiger', 'Penguin', 'Dodo'];

console.log(animals.lastIndexOf('Dodo'));
// expected output: 3

console.log(animals.lastIndexOf('Tiger'));
// expected output: 1


/*ARRAY.LENGTH
 * The length property of an object which is an instance of type 
 * Array sets or returns the number of elements in that array. 
 * The value is an unsigned, 32-bit integer that is always numerically greater
 *  than the highest index in the array.
 *  Syntax: arr.length
 */
clothing = ['shoes', 'shirts', 'socks', 'sweaters'];

console.log(clothing.length);
// expected output: 4

/*ARRAY.MAP
 * The map() method creates a new array with the results of calling 
 * a provided function on every element in the calling array.
 * Syntax: var new_array = arr.map(function callback(currentValue[, index[, array]]) {
              // Return element for new_array
           }[, thisArg])
 */
array1 = [1, 4, 9, 16];

// pass a function to map
map1 = array1.map(x => x * 2);

console.log(map1);
// expected output: Array [2, 8, 18, 32]


/*ARRAY.OF
 * The Array.of() method creates a new Array instance with a variable number
 * of arguments, regardless of number or type of the arguments.
 * Syntax: Array.of(element0[, element1[, ...[, elementN]]])
 */
Array.of(7);       // [7] 
Array.of(1, 2, 3); // [1, 2, 3]

Array(7);          // [ , , , , , , ]
Array(1, 2, 3);    // [1, 2, 3]


/*ARRAY.POP
 * The pop() method removes the last element from an array and returns that element. 
 * This method changes the length of the array.
 * Syntax: arr.pop()
 */
plants = ['broccoli', 'cauliflower', 'cabbage', 'kale', 'tomato'];

console.log(plants.pop());
// expected output: "tomato"

console.log(plants);
// expected output: Array ["broccoli", "cauliflower", "cabbage", "kale"]

plants.pop();

console.log(plants);
// expected output: Array ["broccoli", "cauliflower", "cabbage"]\


/*ARRAY.PROTOTYPE
 * Array instances inherit from Array.prototype. As with all constructors, 
 * you can change the constructor's prototype object to make changes to all 
 * Array instances. For example, you can add new methods and properties to extend 
 * all Array objects. This is used for polyfilling
 */

/*ARRAY.PUSH
 * The push() method adds one or more elements to the end of an array and
 * returns the new length of the array.
 * Syntax: arr.push(element1[, ...[, elementN]])
 */
animals = ['pigs', 'goats', 'sheep'];

const count = animals.push('cows');
console.log(count);
// expected output: 4
console.log(animals);
// expected output: Array ["pigs", "goats", "sheep", "cows"]

animals.push('chickens', 'cats', 'dogs');
console.log(animals);
// expected output: Array ["pigs", "goats", "sheep", "cows", "chickens", "cats", "dogs"]


/*ARRAY.REDUCE
 * The reduce() method executes a reducer function (that you provide) 
 * on each member of the array resulting in a single output value.
 * Syntax: arr.reduce(callback[, initialValue])
 */
array1 = [1, 2, 3, 4];
reducer = (accumulator, currentValue) => accumulator + currentValue;

// 1 + 2 + 3 + 4
console.log(array1.reduce(reducer));
// expected output: 10

// 5 + 1 + 2 + 3 + 4
console.log(array1.reduce(reducer, 5));
// expected output: 15


/*ARRAY.REDUCERIGHT
 * The reduceRight() method applies a function against an accumulator and each value
 * of the array (from right-to-left) to reduce it to a single value.
 * Syntax: arr.reduceRight(callback[, initialValue])
 */
array1 = [[0, 1], [2, 3], [4, 5]].reduceRight(
  (accumulator, currentValue) => accumulator.concat(currentValue)
);

console.log(array1);
// expected output: Array [4, 5, 2, 3, 0, 1]


/*ARRAY.REVERSE
 * The reverse() method reverses an array in place. The first array element 
 * becomes the last, and the last array element becomes the first.
 * Syntax: arr.reverse()
 */
array1 = ['one', 'two', 'three'];
console.log('array1:', array1);
// expected output: "array1:" Array ["one", "two", "three"]

reversed = array1.reverse();
console.log('reversed:', reversed);
// expected output: "reversed:" Array ["three", "two", "one"]

// Careful: reverse is destructive -- it changes the original array.
console.log('array1:', array1);
// expected output: "array1:" Array ["three", "two", "one"]


/*ARRAY.SHIFT
 * The shift() method removes the first element from an array and returns that 
 * removed element. This method changes the length of the array.
 * Syntax: arr.shift()
 */
array1 = [1, 2, 3];

firstElement = array1.shift();

console.log(array1);
// expected output: Array [2, 3]

console.log(firstElement);
// expected output: 1


/*ARRAY.SLICE
 * The slice() method returns a shallow copy of a portion of an array
 * into anew array object selected from begin to end (end not included). 
 * The original array will not be modified.
 * Syntax: arr.slice([begin[, end]])
 */
animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

console.log(animals.slice(2));
// expected output: Array ["camel", "duck", "elephant"]

console.log(animals.slice(2, 4));
// expected output: Array ["camel", "duck"]

console.log(animals.slice(1, 5));
// expected output: Array ["bison", "camel", "duck", "elephant"]


/*ARRAY.SOME
 * The some() method tests whether at least one element in the array
 * passes the test implemented by the provided function.
 * Syntax: arr.some(callback(element[, index[, array]])[, thisArg])
 */
array = [1, 2, 3, 4, 5];

// checks whether an element is even
even = (element) => element % 2 === 0;

console.log(array.some(even));
// expected output: true


/*ARRAY.SORT
 * The sort() method sorts the elements of an array in place and returns the array.
 * The default sort order is built upon converting the elements into strings, then
 * comparing their sequences of UTF-16 code units values.
 * Syntax: arr.sort()
 */
months = ['March', 'Jan', 'Feb', 'Dec'];
months.sort();
console.log(months);
// expected output: Array ["Dec", "Feb", "Jan", "March"]

array1 = [1, 30, 4, 21, 100000];
array1.sort();
console.log(array1);
// expected output: Array [1, 100000, 21, 30, 4]


/*ARRAY.SPLICE
 * The splice() method changes the contents of an array by removing existing elements
 * and/or adding new elements.
 * Syntax: array.splice(start[, deleteCount[, item1[, item2[, ...]]]])
 */
months = ['Jan', 'March', 'April', 'June'];
months.splice(1, 0, 'Feb');
// inserts at index 1
console.log(months);
// expected output: Array ["Jan", "Feb", "March", "April", "June"]

months.splice(4, 1, 'May');
// replaces 1 element at index 4
console.log(months);
// expected output: Array ["Jan", "Feb", "March", "April", "May"]


/*ARRAY.TOLOCALESTRING
 * The toLocaleString() method returns a string representing the elements of the array.
 * The elements are converted to Strings using their toLocaleString methods and these 
 * Strings are separated by a locale-specific String (such as a comma “,”).
 * Syntax: arr.toLocaleString([locales[, options]]);
 */
array1 = [1, 'a', new Date('21 Dec 1997 14:12:00 UTC')];
localeString = array1.toLocaleString('en', { timeZone: 'UTC' });

console.log(localeString);
// expected output: "1,a,12/21/1997, 2:12:00 PM",
// This assumes "en" locale and UTC timezone - your results may vary



/*ARRAY.TOSTRING
 * The toString() method returns a string representing
 * the specified array and its elements.
 * Syntax: arr.toString()
 */
array1 = [1, 2, 'a', '1a'];

console.log(array1.toString());
// expected output: "1,2,a,1a"



/*ARRAY.UNSHIFT
 * The unshift() method adds one or more elements to the beginning of an
 * array and returns the new length of the array.
 */

array1 = [1, 2, 3];

console.log(array1.unshift(4, 5));
// expected output: 5

console.log(array1);
// expected output: Array [4, 5, 1, 2, 3]


