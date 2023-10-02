
// localStorage.setItem('name','suletha')
// localStorage.setItem('email','suletha@gmail.com')
// console.log(localStorage.getItem('name'))
// console.log(localStorage.getItem('email'))
// localStorage.removeItem('name')

  
       

const userForm = document.getElementById("my-form");
userForm.addEventListener("submit", function (event) {
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
