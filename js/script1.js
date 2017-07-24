var votes = ["angular", "angular", "react", "react", "react", "angular", "ember", "react", "vanilla"];
var obj = new Object();

function vote(arr) {
    for (var i = 0; i < arr.length; i++) {
        if (obj.hasOwnProperty(arr[i])) {
            obj[arr[i]]++;
        } else {
            obj[arr[i]] = 1;
        }
    }
    return obj;
}

var result = vote(votes);
console.log(result);