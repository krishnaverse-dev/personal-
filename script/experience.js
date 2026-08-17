const posts = [

  {
    title: "Fabrication Experience",
    text: `
I have around 10 years of hands-on experience in Fabrication work.

Over the years, I have worked with different types of metal fabrication and developed practical knowledge through real-world projects and day-to-day workshop experience.

My experience includes:

- Measuring and marking materials
- Cutting and preparing metal
- Welding and fitting
- Sheet metal fabrication
- Structural fabrication
- Assembly and installation
- Grinding and finishing
- Using fabrication tools and equipment
- Understanding basic technical drawings
- Material handling and preparation
- Quality checking
- Following workplace safety practices

Ten years of working in fabrication has taught me much more than just technical skills. It has helped me develop accuracy, patience, problem-solving ability, teamwork, and the habit of completing work carefully.

Working with materials and turning them into useful structures and components has been a major part of my professional experience.

Fabrication is one of the fields where I have built strong practical, hands-on experience over many years.
`
  },

  {
    title: "Electrician Experience",
    text: `
I have around 5 years of practical experience working in the electrical field.

During these years, I have gained hands-on experience with electrical installation, wiring, maintenance, basic troubleshooting, and electrical equipment.

My experience includes:

- Electrical wiring
- Lighting installation
- Switch and socket installation
- Cable installation
- Circuit breaker installation
- Distribution board work
- Electrical maintenance
- Fault finding and troubleshooting
- Basic electrical testing
- Using electrical tools and equipment
- General electrical safety practices

Working in the electrical field has taught me the importance of accuracy, careful connections, proper testing, and safety.

Electrical work requires attention to detail because even a small mistake can affect the performance and safety of an entire system.

My 5 years of practical experience have given me a solid understanding of everyday electrical work and helped me become more confident in handling different electrical tasks.
`
  },

  {
    title: "Learning Web Development",
    text: `
Web Development is a new direction that I am currently exploring and learning.

Unlike Fabrication and Electrical work, where I have years of hands-on experience, Web Development is something I am still learning step by step.

What started as an interest has gradually become something I really enjoy exploring.

Currently, I am learning and practicing:

- HTML
- CSS
- JavaScript
- Responsive Web Design
- Frontend Development
- Git and GitHub
- APIs
- Databases
- Web Development Tools
- Basic Backend Concepts

One of the things I enjoy most about Web Development is exploring different Tools & Technologies and understanding how they work together.

I like experimenting with code, creating small projects, trying different designs, finding errors, and figuring out how to fix them.

I am still a learner in this field, and I don't consider myself an expert yet.

My focus right now is to build a strong foundation, practice regularly, learn from mistakes, and gradually improve my skills through real projects.

My previous experience has taught me practical problem-solving and working with tools, while Web Development is giving me an opportunity to develop a completely different kind of technical skill.

For me, this is the beginning of a new learning journey, and I am excited to see where it takes me.
`
  },

  {
    title: "My Professional Journey",
    text: `
My professional journey has taken me through three different areas of practical and technical work.

Fabrication — 10 Years

I have spent around 10 years working in Fabrication, gaining extensive hands-on experience with metal work, welding, fitting, cutting, assembly, and workshop processes.


Electrical Work — 5 Years

I also have around 5 years of experience in electrical work, including wiring, installation, maintenance, troubleshooting, and working with electrical equipment.


Web Development — Currently Learning

Web Development is my newest area of interest.

I am currently learning HTML, CSS, JavaScript, responsive design, Git, GitHub, APIs, databases, and other modern web technologies.

I am still developing my skills in this field and learning through practice and personal projects.


Each of these areas has taught me something different.

Fabrication taught me practical work and precision.

Electrical work taught me careful problem-solving and safety.

Web Development is now teaching me programming, technology, creativity, and a completely new way of solving problems.

I am continuing to learn, experiment, and build new skills one step at a time.
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