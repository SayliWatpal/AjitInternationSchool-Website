
const menuToggle = document.getElementById("menu-toggle");
const navbar = document.getElementById("navbar");

if (menuToggle && navbar) {
  menuToggle.addEventListener("click", () => {
    navbar.classList.toggle("active");
  });

  const navLinks = document.querySelectorAll(".navbar a");
  navLinks.forEach(link => {
    link.addEventListener("click", () => {
      navbar.classList.remove("active");
    });
  });
}

const links = document.querySelectorAll(".nav-link");
const currentPage = window.location.pathname.split("/").pop();

links.forEach(link => {
    if(link.getAttribute("href") === currentPage){
        link.classList.add("active");
    }
});

document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const formData = new FormData();
    formData.append("entry.24211047", document.getElementById("name").value);
    formData.append("entry.2049927103", document.getElementById("email").value);
    formData.append("entry.347530787", document.getElementById("phone").value);
    formData.append("entry.1152254244", document.getElementById("message").value);

    fetch("https://docs.google.com/forms/d/e/1FAIpQLSc4_5SsG1qRcqVqmfWQdmbyESeXHg0Ujcqqkf1pYyilQOjpMg/formResponse", {
        method: "POST",
        body: formData,
        mode: "no-cors"
    });

    // Delay to make it feel natural
    setTimeout(() => {
    document.getElementById("successMsg").style.display = "block";
    document.getElementById("contactForm").reset();
}, 500);

});