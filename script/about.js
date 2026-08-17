const posts = [
  {
    title: "About",
    text: `
My name is Tek Raj Koirala, and this is my personal website. Here, I have shared information about my skills, experience, projects, and professional journey.

Thank you for taking the time to visit my website. I truly appreciate your interest and hope you find the information useful and interesting.

Thank you for visiting!
`
  }

];


function showPosts() {

  const container = document.getElementById("posts");

  if (!container) {
    console.error("Posts container not found");
    return;
  }

  container.innerHTML = posts.map(post => `

    <article class="post">

      <h2>${post.title}</h2>

      ${
        post.image && post.image.trim() !== ""
          ? `<img src="${post.image}" loading="lazy" alt="${post.title}">`
          : ""}

      <p>${post.text.trim()}</p>

    </article>

  `).join("");
}


function setupNavigation() {

  const navItems = document.querySelectorAll(".nav-item");

  navItems.forEach(item => {

    item.addEventListener("click", function () {

      if (this.id === "menuBtn") 
        {return;}


      if (this.id === "skillsBtn") 
        {return;}


      navItems.forEach(nav => {
        nav.classList.remove("active");
      });

      this.classList.add("active");

      const navName = this.dataset.nav;

      if (navName === "home") {

        const posts = document.getElementById("posts");

        if (posts) {

          posts.scrollTo({
            top: 0,
            behavior: "smooth"
          });

        }

      }

    });

  });

}

function setupMenu() {

  const menuBtn = document.getElementById("menuBtn");
  const menuClose = document.getElementById("menuClose");
  const menuOverlay = document.getElementById("menuOverlay");
  const menuSheet = document.getElementById("menuSheet");


  if (
    !menuBtn ||
    !menuClose ||
    !menuOverlay ||
    !menuSheet
  ) {
    return;
  }

  function openMenu() {

    menuOverlay.classList.add("open");

    menuSheet.classList.add("open");

    menuSheet.setAttribute(
      "aria-hidden",
      "false"
    );

  }

  function closeMenu() {

    menuOverlay.classList.remove("open");

    menuSheet.classList.remove("open");

    menuSheet.setAttribute(
      "aria-hidden",
      "true"
    );

  }

  menuBtn.addEventListener(
    "click",
    openMenu
  );

  menuClose.addEventListener(
    "click",
    closeMenu
  );

  menuOverlay.addEventListener(
    "click",
    closeMenu
  );

  document.addEventListener(
    "keydown",
    function (event) {

      if (event.key === "Escape") {

        closeMenu();

        closeSkillsMenu();

      }

    }
  );

}

function setupSkillsMenu() {

  const skillsBtn =
    document.getElementById("skillsBtn");

  const skillsClose =
    document.getElementById("skillsClose");

  const skillsOverlay =
    document.getElementById("skillsOverlay");

  const skillsSheet =
    document.getElementById("skillsSheet");


  if (
    !skillsBtn ||
    !skillsClose ||
    !skillsOverlay ||
    !skillsSheet
  ) {
    console.error("Skills menu elements not found");
    return;
  }

  function openSkillsMenu() {

    skillsOverlay.classList.add("open");

    skillsSheet.classList.add("open");

    skillsSheet.setAttribute(
      "aria-hidden",
      "false"
    );

  }

  window.closeSkillsMenu = function () {

    skillsOverlay.classList.remove("open");

    skillsSheet.classList.remove("open");

    skillsSheet.setAttribute(
      "aria-hidden",
      "true"
    );

  };

  skillsBtn.addEventListener(
    "click",
    function () {
      document
        .querySelectorAll(".nav-item")
        .forEach(nav => {
          nav.classList.remove("active");
        });

      skillsBtn.classList.add("active");
      openSkillsMenu();

    }
  );

  skillsClose.addEventListener(
    "click",
    closeSkillsMenu
  );

  skillsOverlay.addEventListener(
    "click",
    closeSkillsMenu
  );

}

document.addEventListener(
  "DOMContentLoaded",
  function () {

    showPosts();

    setupNavigation();

    setupMenu();

    setupSkillsMenu();

  }
);
