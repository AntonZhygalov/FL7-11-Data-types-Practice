var users;

function getDataFromTextArea() {
    users = JSON.parse(document.getElementById('myTextAres').value);

    var obj = new Object();

    function names(arr) {
        for (var i = 0; i < arr.length; i++) {
            if (obj.hasOwnProperty(arr[i].first_name)) {
                obj[arr[i].first_name]++;
            } else {
                obj[arr[i].first_name] = 1;
            }
        }
        return obj;
    }

    function nameUniq(obj) {
        for (var name in obj) {
            if (obj[name] < 2) {
                delete obj[name];
            }
        }
        return obj;
    }

    names(users);
    console.log(nameUniq(obj));
}