
// localStorage.setItem('name','suletha')
// localStorage.setItem('email','suletha@gmail.com')
// console.log(localStorage.getItem('name'))
// console.log(localStorage.getItem('email'))
// localStorage.removeItem('name')

//To store the single user details
       

// const userForm = document.getElementById("my-form");
// userForm.addEventListener("submit", function (event) {
//     event.preventDefault(); 

//     const name = document.getElementById("name").value;
//     const email = document.getElementById("email").value;
//     //const age = document.getElementById("age").value;


//     const userDetails = {
//         name: name,
//         email: email,
        
//     };


//      // Convert the object to JSON and store it in local storage
//      localStorage.setItem("userDetails", JSON.stringify(userDetails));

//      // Optional: Display a success message
//      alert("User details have been stored in local storage.");

//     // You can also reset the form if needed
//     my-form.reset();
// });


//To store multiple user details as an object


const userForm = document.getElementById("my-form");

userForm.addEventListener("submit", function (event) {
    event.preventDefault(); 

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;

    const userDetails = {
        name: name,
        email: email,
    };

    // Retrieve existing user details from localStorage or initialize an empty array
    let existingUsers = JSON.parse(localStorage.getItem("userDetails")) || [];

    // Ensure that existingUsers is an array (initialize it as an empty array if null)
    if (!Array.isArray(existingUsers)) {
        existingUsers = [];
    }

    // Add the new user details to the array
    existingUsers.push(userDetails);

    try {
        // Store the updated array in localStorage
        localStorage.setItem("userDetails", JSON.stringify(existingUsers));

        // Display a success message
        alert("User details have been stored in local storage.");

        // Reset the form
        userForm.reset();
    } catch (error) {
        // Handle any errors, e.g., when local storage is not available
        console.error("An error occurred:", error);
    }
});
