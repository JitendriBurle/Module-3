document.getElementById("login-btn").addEventListener("click", () => {
    let email = document.getElementById("email").value;
    let pass = document.getElementById("password").value;

    let user = JSON.parse(localStorage.getItem("user"));

    if (!user) {
        alert("No user found! Please sign up first.");
        return;
    }

    if (user.email === email && user.password === pass) {
        localStorage.setItem("loggedIn", "true");
        window.location.href = "todos.html";
    } else {
        alert("Invalid credentials");
    }
});
