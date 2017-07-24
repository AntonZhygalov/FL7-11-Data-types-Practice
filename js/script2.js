var users;

function getDataFromTextArea() {
    users = JSON.parse(document.getElementById('myTextAres').value);
    var countM = 0;
    var countF = 0;
    users.forEach(function(item) {
        if (item.gender == "Male") {
            countM++;
        } else if (item.gender == "Female") {
            countF++;
        }
    })
    
    console.log(countM);
    console.log(countF);
}