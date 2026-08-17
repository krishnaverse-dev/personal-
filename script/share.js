const posts = [

  {
    title: "Share",

    text: `
If you find this website useful, interesting, or worth exploring, you can share it with others.

You can share this website with your friends, family, colleagues, or anyone who may be interested in what I am working on.

Sharing is a simple way to help someone discover this website.

If you think someone might find something useful here, feel free to send them the website.

You can share it through your preferred platform or simply copy the website link and send it to someone.

Thank you for visiting my website and taking the time to explore it.

If you find something here that you like, sharing it would be greatly appreciated.
`
  }

];


function showPosts(){

  const container =
    document.getElementById("posts");

  if(!container){

    console.error("Posts container not found");

    return;
  }


  container.innerHTML = posts.map(post => `

    <article class="post">

      <h2>${post.title}</h2>

      ${
        post.image &&
        post.image.trim() !== ""

        ? `
          <img
            src="${post.image}"
            loading="lazy"
            alt="${post.title}"
          >
        `

        : ""
      }


      <p>${post.text.trim()}</p>


      <!-- SHARE BUTTON
           POST KE BILKUL LAST ME -->

      <button
        id="shareBtn"
        class="share-main-btn"
        type="button"
      >

        <i class="fas fa-share-nodes"></i>

        <span>Share Website</span>

      </button>

    </article>

  `).join("");

}


function setupNavigation(){

  const navItems =
    document.querySelectorAll(".nav-item");


  navItems.forEach(item => {

    item.addEventListener("click", function(){

      if(this.id === "menuBtn"){

        return;

      }


      if(this.id === "skillsBtn"){

        return;

      }


      navItems.forEach(nav => {

        nav.classList.remove("active");

      });


      this.classList.add("active");

    });

  });

}

function setupMenu(){

  const menuBtn =
    document.getElementById("menuBtn");

  const menuClose =
    document.getElementById("menuClose");

  const menuOverlay =
    document.getElementById("menuOverlay");

  const menuSheet =
    document.getElementById("menuSheet");


  if(
    !menuBtn ||
    !menuClose ||
    !menuOverlay ||
    !menuSheet
  ){

    return;

  }


  function openMenu(){

    if(typeof window.closeSkillsMenu === "function"){

      window.closeSkillsMenu();

    }


    menuOverlay.classList.add("open");

    menuSheet.classList.add("open");

    menuSheet.setAttribute(
      "aria-hidden",
      "false"
    );

  }


  function closeMenu(){

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


  window.closeMainMenu = closeMenu;

}

function setupSkillsMenu(){

  const skillsBtn =
    document.getElementById("skillsBtn");

  const skillsClose =
    document.getElementById("skillsClose");

  const skillsOverlay =
    document.getElementById("skillsOverlay");

  const skillsSheet =
    document.getElementById("skillsSheet");


  if(
    !skillsBtn ||
    !skillsClose ||
    !skillsOverlay ||
    !skillsSheet
  ){

    console.error(
      "Skills menu elements not found"
    );

    return;

  }


  function openSkillsMenu(){

    /* Close main menu first */

    if(typeof window.closeMainMenu === "function"){

      window.closeMainMenu();

    }


    skillsOverlay.classList.add("open");

    skillsSheet.classList.add("open");

    skillsSheet.setAttribute(
      "aria-hidden",
      "false"
    );

  }


  window.closeSkillsMenu = function(){

    skillsOverlay.classList.remove("open");

    skillsSheet.classList.remove("open");

    skillsSheet.setAttribute(
      "aria-hidden",
      "true"
    );

  };


  skillsBtn.addEventListener(
    "click",
    function(){

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
    window.closeSkillsMenu
  );


  skillsOverlay.addEventListener(
    "click",
    window.closeSkillsMenu
  );

}

function setupShare(){

  const shareBtn =
    document.getElementById("shareBtn");

  const shareClose =
    document.getElementById("shareClose");

  const shareOverlay =
    document.getElementById("shareOverlay");

  const shareSheet =
    document.getElementById("shareSheet");


  if(
    !shareBtn ||
    !shareClose ||
    !shareOverlay ||
    !shareSheet
  ){

    console.error(
      "Share elements not found"
    );

    return;

  }

  const websiteURL =
    window.location.href;


  const shareTitle =
    "TEK RAJ KOIRALA";


  const shareText =
    "explore";


  function openShare(){

    if(typeof window.closeMainMenu === "function"){

      window.closeMainMenu();

    }


    if(typeof window.closeSkillsMenu === "function"){

      window.closeSkillsMenu();

    }


    shareOverlay.classList.add("open");

    shareSheet.classList.add("open");

    shareSheet.setAttribute(
      "aria-hidden",
      "false"
    );

  }

  function closeShare(){

    shareOverlay.classList.remove("open");

    shareSheet.classList.remove("open");

    shareSheet.setAttribute(
      "aria-hidden",
      "true"
    );

  }

  shareBtn.addEventListener(
    "click",
    openShare
  );


  shareClose.addEventListener(
    "click",
    closeShare
  );


  shareOverlay.addEventListener(
    "click",
    closeShare
  );

  const socialButtons =
    document.querySelectorAll(
      ".social-option"
    );


  socialButtons.forEach(button => {

    button.addEventListener(
      "click",
      async function(){

        const type =
          this.dataset.share;

        if(type === "whatsapp"){

          const url =
            "https://wa.me/?text=" +
            encodeURIComponent(
              shareText + "\n\n" + websiteURL
            );

          window.open(
            url,
            "_blank",
            "noopener,noreferrer"
          );

          return;
        }

        if(type === "facebook"){

          const url =
            "https://www.facebook.com/sharer/sharer.php?u=" +
            encodeURIComponent(websiteURL);

          window.open(
            url,
            "_blank",
            "noopener,noreferrer"
          );

          return;
        }

        if(type === "telegram"){

          const url =
            "https://t.me/share/url?url=" +
            encodeURIComponent(websiteURL) +
            "&text=" +
            encodeURIComponent(shareText);

          window.open(
            url,
            "_blank",
            "noopener,noreferrer"
          );

          return;
        }


        if(type === "x"){

          const url =
            "https://twitter.com/intent/tweet?text=" +
            encodeURIComponent(shareText) +
            "&url=" +
            encodeURIComponent(websiteURL);

          window.open(
            url,
            "_blank",
            "noopener,noreferrer"
          );

          return;
        }

        if(type === "linkedin"){

          const url =
            "https://www.linkedin.com/sharing/share-offsite/?url=" +
            encodeURIComponent(websiteURL);

          window.open(
            url,
            "_blank",
            "noopener,noreferrer"
          );

          return;
        }

        if(type === "email"){

          const subject =
            encodeURIComponent(
              "TEK RAJ KOIRALA Website"
            );

          const body =
            encodeURIComponent(
              shareText +
              "\n\n" +
              websiteURL
            );

          window.location.href =
            "mailto:?subject=" +
            subject +
            "&body=" +
            body;

          return;
        }

        if(type === "copy"){

          try{

            await navigator.clipboard.writeText(
              websiteURL
            );

            this.querySelector("span").textContent =
              "Copied!";

            setTimeout(() => {

              this.querySelector("span").textContent =
                "Copy Link";

            }, 1600);

          }
          catch(error){

            prompt(
              "Copy this website link:",
              websiteURL
            );

          }

          return;
        }

        if(type === "native"){

          if(navigator.share){

            try{

              await navigator.share({

                title:shareTitle,

                text:shareText,

                url:websiteURL

              });

            }
            catch(error){

            }

          }
          else{

            try{

              await navigator.clipboard.writeText(
                websiteURL
              );

              alert(
                "Website link copied!"
              );

            }
            catch(error){

              prompt(
                "Copy this website link:",
                websiteURL
              );

            }

          }

        }

      }
    );

  });

}

function setupEscape(){

  document.addEventListener(
    "keydown",
    function(event){

      if(event.key !== "Escape"){

        return;

      }
      if(typeof window.closeMainMenu === "function"){

        window.closeMainMenu();
      }

      if(typeof window.closeSkillsMenu === "function"){

        window.closeSkillsMenu();

      }


      const shareOverlay =
        document.getElementById(
          "shareOverlay"
        );

      const shareSheet =
        document.getElementById(
          "shareSheet"
        );


      if(shareOverlay && shareSheet){

        shareOverlay.classList.remove("open");

        shareSheet.classList.remove("open");

        shareSheet.setAttribute(
          "aria-hidden",
          "true"
        );

      }

    }
  );

}

document.addEventListener(
  "DOMContentLoaded",
  function(){

    showPosts();

    setupNavigation();

    setupMenu();

    setupSkillsMenu();

    setupShare();

    setupEscape();

  }
);