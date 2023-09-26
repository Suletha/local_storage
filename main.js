const userForm = document.getElementById("my-form");
my-form.addEventListener("submit", function (event) {
    event.preventDefault(); 

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    //const age = document.getElementById("age").value;


    const userDetails = {
        name: name,
        email: email,
        
    };


     // Convert the object to JSON and store it in local storage
     localStorage.setItem("userDetails", JSON.stringify(userDetails));

     // Optional: Display a success message
     alert("User details have been stored in local storage.");

    // You can also reset the form if needed
    my-form.reset();
});

  
       