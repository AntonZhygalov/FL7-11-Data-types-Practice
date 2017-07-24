var users;

function getDataFromTextArea() {
    users = JSON.parse(document.getElementById('myTextAres').value);
    var obj = new Object();

    function color(arr) {
        for (var i = 0; i < arr.length; i++) {
            if (obj.hasOwnProperty(arr[i].favorite_color)) {
                obj[arr[i].favorite_color]++;
            } else {
                obj[arr[i].favorite_color] = 1;
            }
        }
        return obj;
    }
    console.log(color(users));
}