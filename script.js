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

async function validateForm() {
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
    hideSpinner()
    return;
  }

  

  errorElement.textContent = "";
 

  let formData = {
    name: name,
    contact_no: contact,
    experience: experience,
    stream: selectedDropdownValue
  };

  

  try {
    let response = await fetch("https://test.apis.dr1.co.in/hiring", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
    });

   

    if (response.ok) {
      let result = await response.json();
      console.log("Success:", result);
      successMessage.textContent = "Form submitted successfully!";
      successMessage.style.color = "green";
      successMessage.style.display = "block";
      submitButton.style.display = "none";

      setTimeout(() => {
        location.reload();
    }, 5000);


 } else {
      console.error("Server Error:", response.statusText);
      errorElement.textContent = "Submission failed. Try again.";
      errorElement.style.color = "red";
      submitButton.style.display = "block";
    }
  } catch (error) {
    console.error("Error:", error);
    errorElement.textContent = "Network error. Try again.";
    errorElement.style.color = "red";
    submitButton.style.display = "block";
  }
}


function showSpinner() {
  document.getElementById("spinner").classList.remove("hidden-spinner");
  document.getElementById("submit-text").classList.add("hide-text");
}

function hideSpinner() {
  document.getElementById("spinner").classList.add("hidden-spinner");
  document.getElementById("submit-text").classList.remove("hide-text");
}

// Example: Show the spinner when a button is clicked, then hide it after 3 seconds
document.getElementById("submit-btn").addEventListener("click", function() {
  showSpinner();
});


 
  