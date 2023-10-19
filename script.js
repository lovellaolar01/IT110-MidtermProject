function registerUser() {
    try {
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;

       if (!name || !email || !password) {
            throw new Error("Please fill in all fields.");
        }

        const users = JSON.parse(localStorage.getItem("registeredUsers")) || [];
        const existingUser = users.find((user) => user.email === email);

        if (existingUser) {
            throw new Error("User with this email already exists.");
        }

        const user = {
            name,
            email,
            password,
        };

        users.push(user);

        localStorage.setItem("registeredUsers", JSON.stringify(users));

        
    } catch (error) {
        alert("Registration failed: " + error.message);
    } finally {
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("password").value = "";
    }
}

function checkPassword(event) {
    event.preventDefault();
    try {
        const passwordInput = document.getElementById("loginPassword");

        if (passwordInput.value === "olar") {
            alert("Login successfully");
            window.location.href = "https://lovellaolar01.github.io/Responsive-Webpage/";
        } else {
            alert("Incorrect password. Please try again.");
        }
    } catch (error) {
        console.error("An error occurred:", error);
    }
}