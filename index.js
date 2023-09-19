
function myEach(collection, callback) {
    const newCollection = Array.isArray(collection)? collection : Object.values(collection);
    for (const element of newCollection) {
        callback(element)
    }
    return collection
}

function myMap(collection, callback) {
    const newCollection = Array.isArray(collection)? collection : Object.values(collection);
    let array = []
    for (const element of newCollection) {
        const newElement = callback(element)
        array.push(newElement)
    }
    return array
}

function myReduce(collection, callback, acc) {
    const newCollection = Array.isArray(collection)? [...collection] : Object.values(collection);
    typeof acc === "undefined"? acc = newCollection.shift() : acc = acc
        for (const val of newCollection) {
            const value = callback(acc, val, newCollection)
            acc = value
        }
        return acc
}

function myFind(collection, predicate) {
    const newCollection = Array.isArray(collection)? collection : Object.values(collection);
    for (const element of newCollection) {
        if (predicate(element) === true) {
            return element
        }
    }
}

function myFilter(collection, predicate) {
    const newCollection = Array.isArray(collection)? collection : Object.values(collection);
    let array = []
    for (const element of newCollection) {
        if (predicate(element) === true) {
            array.push(element)
        }
    }
    return array
}

function mySize(collection) {
    const newCollection = Array.isArray(collection)? collection : Object.values(collection);
    let counter = 0
    for (const element in newCollection) {
        counter++
    }
    return counter
}

function myFirst(array, n) {
    let array2 = []
    if (typeof n === "undefined") {
        return array[0]
    } else {
        for (let i=0; i < n; i++) {
            array2.push(array[i])
        }
        return array2
    }
}

function myLast(array, n) {
    let array2 = []
    if (typeof n === "undefined") {
        return array[array.length-1]
    } else {
        for (let i=(array.length-n); i < array.length; i++) {
            array2.push(array[i])
        }
        return array2
    }
}

function myKeys(obj) {
    let arr = []
    for (const key in obj) {
        arr.push(key)
    }
    return arr
}

function myValues(obj) {
    let arr = []
    for (const key in obj) {
        arr.push(obj[key])
    }
    return arr
}