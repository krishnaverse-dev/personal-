const posts = [

  {
    title: "Web Development",
    image: "images/web-development.jpg",
    text: `
I am currently learning Web Development and exploring how websites and web applications are created.

At the beginning, web development looked complicated to me because there are many different technologies, programming languages, and tools.

As I continue learning, I am slowly understanding how HTML, CSS, JavaScript, browsers, servers, databases, and APIs work together.

I am still learning and improving my skills step by step, and this journey is helping me understand how the websites we use every day are built.
`
  },

  {
    title: "What is Web Development?",
    text: `
Web Development is the process of creating and maintaining websites and web applications.

As I am currently learning Web Development, I am trying to understand the different parts involved in building a website.

Web development generally includes:

- Frontend development
- Backend development
- Database management
- APIs
- Hosting and deployment

The frontend is what users see and interact with, while the backend handles the logic and data behind the website.

I am learning how these different parts work together to create a complete web application.
`
  },

  {
    title: "What I am Learning in HTML",
    text: `
HTML is one of the first technologies I started learning in Web Development.

HTML stands for HyperText Markup Language.

I am learning how HTML is used to create the basic structure of a webpage.

Some HTML elements I am currently learning include:

- Headings
- Paragraphs
- Links
- Images
- Buttons
- Lists
- Tables
- Forms
- Div elements
- Semantic elements

HTML gives a webpage its basic structure.

The more I practice, the more comfortable I am becoming with creating webpage layouts using HTML.
`
  },

  {
    title: "What I am Learning in CSS",
    text: `
After learning the basic structure of HTML, I started exploring CSS.

CSS stands for Cascading Style Sheets.

I am learning how CSS can be used to control the appearance and layout of webpages.

Some things I am currently learning include:

- Colors
- Fonts
- Spacing
- Borders
- Backgrounds
- Flexbox
- Grid
- Positioning
- Responsive design
- Animations

CSS is helping me understand how a basic HTML page can be transformed into a properly designed website.

I am still practicing responsive layouts so that websites can work well on both mobile and desktop screens.
`
  },

  {
    title: "What I am Learning in JavaScript",

    text: `
JavaScript is one of the technologies I am currently focusing on in my Web Development learning journey.

JavaScript allows webpages to become interactive and dynamic.

I am currently learning concepts such as:

- Variables
- Functions
- Arrays
- Objects
- Loops
- Conditions
- Events
- DOM manipulation
- Buttons and interactions
- Local storage
- Basic APIs

At first, JavaScript felt difficult because there are many new concepts to understand.

With regular practice, I am gradually learning how JavaScript can control webpage elements and create interactive features.
`
  },

  {
    title: "How Does a Website Work?",
    text: `
One of the things I am currently trying to understand is how a website actually works behind the scenes.

When I enter a website address into a browser, the browser communicates with servers to request the required files and data.

A simple website may involve:

Step 1: User enters a website address

Step 2: Browser sends a request

Step 3: Server processes the request

Step 4: Website files or data are returned

Step 5: Browser loads HTML, CSS, and JavaScript

Step 6: The webpage becomes visible and interactive

Learning this process is helping me understand that a website is more than just the page we see on the screen.
`
  },

  {
    title: "Frontend Development",
    text: `
I am also learning about Frontend Development.

Frontend development focuses on the part of a website that users can see and interact with.

The main technologies I am learning for frontend development are:

- HTML
- CSS
- JavaScript

I am practicing how to create:

- Navigation bars
- Buttons
- Cards
- Forms
- Responsive layouts
- Mobile interfaces
- Interactive components

My current goal is to become comfortable with the basics before moving into more advanced frontend frameworks and tools.
`
  },

  {
    title: "Backend Development",
    text: `
Backend Development is another area I am beginning to explore.

The backend is responsible for handling the logic and data behind a web application.

I am learning that backend development can involve:

- Servers
- APIs
- Databases
- Authentication
- User accounts
- Data processing
- Application logic

I am still at the learning stage, so I am focusing on understanding the basic concepts before building more complicated backend systems.

My goal is to eventually understand how the frontend and backend communicate with each other.
`
  },

  {
    title: "Learning Databases",
    text: `
Databases are another important part of Web Development that I am currently learning.

A database is used to store and manage information.

For example, a web application may need to store:

- User information
- Posts
- Comments
- Products
- Messages
- Settings

I am learning the basic difference between SQL and NoSQL databases and trying to understand how websites store, retrieve, update, and delete information.

There is still a lot for me to learn, but understanding databases is becoming an important part of my Web Development journey.
`
  },

  {
    title: "Responsive Web Design",
    text: `
Responsive Web Design is something I am currently practicing.

A website should work properly on different screen sizes, including:

- Mobile phones
- Tablets
- Laptops
- Desktop computers

I am learning how CSS media queries, flexible layouts, Flexbox, Grid, and responsive units can be used to create websites that adapt to different screens.

Since many people use websites on mobile devices, I am trying to make my projects mobile-friendly from the beginning.
`
  },

  {
    title: "Tools I am Learning",
    text: `
While learning Web Development, I am also becoming familiar with different tools used by developers.

Some tools I am currently exploring include:

- VS Code
- Web browsers
- Browser Developer Tools
- Git
- GitHub
- HTML
- CSS
- JavaScript
- Developer documentation

These tools help me write code, test websites, find errors, manage projects, and publish my work.

I am still discovering new tools as I continue learning.
`
  },

  {
    title: "My Web Development Learning Journey",
    text: `
I am still learning Web Development, so I don't consider myself an expert.

There are many things I still need to understand and practice.

My current learning journey includes:

- Learning HTML
- Practicing CSS
- Understanding JavaScript
- Building small projects
- Learning responsive design
- Exploring frontend development
- Understanding backend concepts
- Learning databases
- Using Git and GitHub
- Improving my problem-solving skills

Sometimes I make mistakes while coding, but those mistakes are also helping me understand how things work.

For me, Web Development is a continuous learning process.

I am taking it step by step and trying to improve with every project I build.
`
  },

  {
    title: "What I Want to Learn Next",
    text: `
There is still a lot I want to learn in Web Development.

My future learning goals include:

- Advanced JavaScript
- Frontend frameworks
- Backend development
- REST APIs
- Databases
- Authentication systems
- Git and GitHub
- Web hosting
- Performance optimization
- Web security
- Full-stack development

I don't want to rush through everything.

My current focus is to understand the fundamentals properly, build projects, make mistakes, fix them, and gradually become better at Web Development.

This is still a learning journey for me, and I am excited to see how far I can take it.
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