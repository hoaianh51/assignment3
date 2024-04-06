// Hide the infoContainer initially
document.getElementById("infoContainer").classList.add("hidden");

// Add event listener for form submission
document
  .getElementById("userForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission
    const emailInput = document.getElementById("email");
    if (emailInput.value.includes("@")) {
      const [username, domain] = emailInput.value.split("@");
      if (username.trim() !== "" && domain.trim() !== "") {
        console.log("Email is valid.");
        // Show the infoContainer
        document.getElementById("infoContainer").classList.remove("hidden");
        document.getElementById("userForm").classList.add("hidden");
      } else {
        console.log("Email is invalid. Please include the '@' symbol.");
      }
    } else {
      console.log("Email is invalid. Please include the '@' symbol.");
    }
  });
const showButtons = document.querySelectorAll(".show");
showButtons.forEach((button) => {
  button.addEventListener("click", function (event) {
    const skillInfo = event.target.nextElementSibling;
    console.log(skillInfo.style.display);
    if (skillInfo.style.display === "none") {
      skillInfo.style.display = "block";
      event.target.textContent = "☝View Less";
      console.log("coconut");
    } else {
      skillInfo.style.display = "none";
      event.target.textContent = "👇View More";
      console.log("nut");
    }
  });
});
