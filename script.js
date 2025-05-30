window.addEventListener("scroll", () => {
    const skillsSection = document.querySelector(".skills-section");
    const skillsPosition = skillsSection.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.2;
  
    if (skillsPosition < screenPosition) {
      // Animation des barres de compétences
      document.querySelectorAll(".progress").forEach(el => {
        const targetWidth = el.getAttribute("data-percentage");
        el.style.width = targetWidth;
      });
  
      // Animation du cercle
      const circle = document.querySelector(".progress-circle");
      if (circle && !circle.classList.contains("animated")) {
        circle.classList.add("animated");
        circle.style.animation = "fillCircle 2s forwards";
      }
    }
   
  function hamburg() {
    const navbar = document.querySelector(".dropdown");
    navbar.style.transform = "translateY(0px)";
  }

  function cancel() {
    const navbar = document.querySelector(".dropdown");
    navbar.style.transform = "translateY(-500px)";
  }


  });
  
  // Force l’animation même sans scroll manuel
  window.dispatchEvent(new Event("scroll"));
  