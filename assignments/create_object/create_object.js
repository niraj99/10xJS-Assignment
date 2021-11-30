function CreateObject(arr) {
    // Write your code here
    var myObject = {};
    for (var i = 0; i < arr.length; i += 2) {
        myObject[arr[i]] = arr[i + 1]
    }
    return myObject
}

module.exports = CreateObject;
