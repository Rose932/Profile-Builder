window.onload = function (){
    const right_container
    = document.getElementById("profile_view");

    // right_container.style.visibility = "hidden";

    var image_val, name_val, email_val, phone_val, location_val, about_val;

    // get the user's input values
    // Photo
    const image = document.getElementById("photo");
    image.addEventListener("change", function(){
        const reader = new FileReader();

        reader.addEventListener("load", () => {
            const uploaded_image = reader.result;
            localStorage.setItem("me", uploaded_image)
            document.querySelector("#me").src = localStorage.getItem("me");
        });
        reader.readAsDataURL(this.files[0]);
    });
    // Name 
    const name = document.getElementById("name");
    
    name.onchange = function (e) {
        name_val = e.target.value;
    }
    // Email
    const email = document.getElementById("email");
    email.onchange = function (e) {
        email_val = e.target.value;
    }

    // Phone
    const phone = document.getElementById("phone");
    phone.onchange = function (e) {
        phone_val = e.target.value;
    }

    // Location
    const location = document.getElementById("location");
    location.onchange = function (e) {
        location_val = e.target.value;
    }

    // About 
    const about = document.getElementById("about")
    about.onchange = function (e) {
        about_val = e.target.value;
    }

    // get the output elements
    const image_out = document.getElementById("me");
    // Name
    const name_out = document.getElementById("name_out");
    // Email
    const email_out = document.getElementById("email_out");
    // Phone
    const phone_out= document.getElementById("phone_out");
    // Location
    const location_out = document.getElementById("location_out");
    // About 
    const about_out = document.getElementById("about_out");
    
    const button = document.getElementById("view_btn")
    button.onclick = function(){
        name_out.innerHTML = name_val
        email_out.innerHTML = email_val
        phone_out.innerHTML = phone_val
        location_out.innerHTML = location_val
        about_out.innerHTML = about_val
        right_container.style.visibility = "visible";
    }

}