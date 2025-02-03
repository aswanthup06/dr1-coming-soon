let selectedDropdownValue = "";

// Toggle Dropdown Visibility
function toggleDropdown() {
    document.querySelector(".dropdown").classList.toggle("active");
  }
  
  // Select Option and Update Display
  function selectOption(value) {
    document.getElementById("selected-value").innerText = value;
    selectedDropdownValue = value;
    document.querySelector(".dropdown").classList.remove("active");
}
  
  // Close Dropdown When Clicking Outside
  document.addEventListener("click", function (event) {
    if (!document.querySelector(".dropdown").contains(event.target)) {
      document.querySelector(".dropdown").classList.remove("active");
    }
  });


  function validateForm() {
 

    let name = document.getElementById("name").value.trim();
    let contact = document.getElementById("contact").value.trim();
    let experience = document.getElementById("experience").value.trim();
    let errorElement = document.getElementById("empty-error");
    let successMessage = document.getElementById("success-message");
    let submitButton = document.getElementById("submit-btn");

    if (name === "" || contact === "" || experience === "" || selectedDropdownValue === "") {
      errorElement.textContent = "All fields are mandatory";
      errorElement.style.color = "red"; 
      successMessage.style.display = "none";
      return; 
  }

  errorElement.textContent = "";
  successMessage.style.display = "block";
  submitButton.style.display = "none";


  console.log("Name:", name);
  console.log("Contact:", contact);
  console.log("Experience:", experience);
  console.log("Dropdown Value:", selectedDropdownValue);
}
 
  