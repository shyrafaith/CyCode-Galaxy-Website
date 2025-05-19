document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();
  
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
    const formMessage = document.getElementById("formMessage");
  
    if (!name || !email || !message) {
      formMessage.style.color = "red";
      formMessage.textContent = "Please fill in all fields.";
      return;
    }
  
    formMessage.style.color = "green";
    formMessage.textContent = "Message sent successfully!";
    
    // Clear fields
    this.reset();
  });
  