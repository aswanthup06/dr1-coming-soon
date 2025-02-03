// Toggle Dropdown Visibility
function toggleDropdown() {
    document.querySelector(".dropdown").classList.toggle("active");
  }
  
  // Select Option and Update Display
  function selectOption(value) {
    document.getElementById("selected-value").innerText = value;
    document.querySelector(".dropdown").classList.remove("active");
  }
  
  // Close Dropdown When Clicking Outside
  document.addEventListener("click", function (event) {
    if (!document.querySelector(".dropdown").contains(event.target)) {
      document.querySelector(".dropdown").classList.remove("active");
    }
  });
  