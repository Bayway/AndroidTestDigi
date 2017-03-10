function sayhello() {
    document.getElementById("data").innerHTML = 'Hi, ' + document.getElementById('name').value + '!';
    console.log("Test");
}

function clear() {
    document.getElementById("data").innerHTML = "";
    document.getElementById("name").value = "";
}