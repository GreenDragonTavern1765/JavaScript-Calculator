// Clears the screen when the user clicks the "c" button
function clearScreen() {
    document.getElementById("result").value = "";
}

// Displays the entered value on the screen when user clicks on button
function liveScreen(value) {
    let res = document.getElementById("result");
    if (res.value == "undefined") {
        res.value = "";
    } res.value += value;
}