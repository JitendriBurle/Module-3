document.getElementById("signup-btn").addEventListener("click", () => {
    let user = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        password: document.getElementById("password").value,
    };

    localStorage.setItem("user", JSON.stringify(user));
    alert("Signup successful!");
});
