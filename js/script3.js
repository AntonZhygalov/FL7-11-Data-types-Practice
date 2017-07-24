var users;

function getDataFromTextArea() {
    users = JSON.parse(document.getElementById('myTextAres').value);
    function color(arr) {
        var myArray = [];
        for (var i = 0; i < users.length; i++) {
            if (myArray.indexOf(users[i].favorite_color) === -1) {
                myArray.push(users[i].favorite_color);
            }
        }
        return myArray.length;
    }
    console.log(color(users));
}