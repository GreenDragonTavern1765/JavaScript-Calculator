let lightTheme = "light.css";
let darkTheme = "dark.css";

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

// Swaps the style sheet to either dark mode or light mode
function changeTheme() {
    let darkMode = document.getElementById("dark-mode");
    let theme = document.getElementById("theme");
    if (theme.getAttribute("href") == lightTheme) {
        theme.href = darkTheme;
        darkMode.innerHTML = "Light Mode";
    } else {
        theme.href = lightTheme;
        darkMode.innerHTML = "Dark Mode";
    }
}