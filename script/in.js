const posts = [

  {
    title: "Let’s Build Something Together",
    text: `
Have a project, a task, or an idea that needs someone to work on it?

You can talk to me.

I am open to working with people who are looking for someone reliable, practical, and willing to take responsibility for the work.

You can tell me what you need, what you are trying to achieve, and what kind of work is involved.

We can discuss it together and find out how I can contribute.

I don't believe in making big promises before understanding the actual work.

First, I like to understand the requirement.
Then we discuss the possibilities.
And if it is something I can take responsibility for, we move forward together.

I am also open to learning when a project requires something new.

Every project can be an opportunity to do something useful, solve a problem, learn something, and create a better result.

So, if you have work for me, a project to discuss, or simply an idea you want to explore, don't hesitate to reach out.

Tell me what you have in mind.

Let's see what we can accomplish together.
`
  },

  {
    title: "Have Something in Mind?",
    text: `
Sometimes you have a project in mind but you are not sure who can help you with it.

You can simply tell me about it.

Explain what you want to do, what problem you are trying to solve, or what result you are looking for.

We can talk about the work, understand the requirements, and see whether I can be the right person for it.

I prefer honest communication over unrealistic promises.

If I can do the work, I will tell you.

If I need to learn something before taking it on, I will tell you that too.

And if the work is not suitable for me, I would rather be honest about it than make a promise I cannot keep.

My goal is simple:

Understand the work.
Find a practical approach.
Work sincerely.
And try to deliver a useful result.

If you have an idea, project, or opportunity, let's talk about it.
`
  },

  {
    title: "Give Me an Opportunity",
    text: `
I am always interested in meaningful work and new opportunities.

You don't have to wait until you have a perfectly defined project.

If you have an idea, a task, a problem, or something that needs to be done, you can share it with me.

We can start with a simple conversation.

Tell me what you need.
I will understand the requirement.
Then we can decide whether we can work on it together.

I believe experience is valuable, but so is the willingness to learn.

There will always be something new to understand, something different to try, or a better way to solve a problem.

That is why I am open to both work that matches my experience and opportunities where I can learn something new along the way.

If you think we could work together, I would be glad to hear from you.

Your idea could be the beginning of our next project.
`
  },

  {
    title: "Let’s Talk About Your Work",
    text: `
Need someone to work with you on a project?

Let's start with a conversation.

You can share the details of your work, your requirements, or even an unfinished idea.

There is no need to have everything figured out before contacting me.

We can discuss what needs to be done and understand whether I can contribute to it.

I value clear communication, honest expectations, and responsible work.

I am not here to claim that I can do everything.

Instead, I want to understand the work first and then give you an honest answer.

If I can help, let's work together.

If the project requires learning something new, we can discuss that too.

Sometimes the best projects start with a simple conversation.

So if you have something in mind, feel free to reach out.

Let's talk.
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