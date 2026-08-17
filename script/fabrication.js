
const posts = [

  {
    title: "Fabrication",
    image: "images/fabricator.jpg",
    text: `
In today’s manufacturing-driven world, fabrication plays a vital role in transforming raw materials into functional products used across industries.

From construction and automotive to electronics and industrial machinery, fabrication is the backbone of modern production.

But what exactly is fabrication, and how does it work? Let’s explore the complete fabrication process step by step.
`
  },

  {
    title: "What does fabrication work mean?",
    text: `
Fabrication work means the process of converting raw materials into finished or semi-finished products using various industrial techniques such as cutting, bending, assembling, welding, machining, and finishing.

Unlike simple assembly, fabrication involves reshaping and modifying materials to meet specific design and functional requirements.

Fabrication work is commonly associated with metals, but it can also apply to plastics, glass, wood, composites, and electronic components.
`
  },

  {
    title: "What are the Types of Fabrication?",
    text: `
Fabrication methods vary depending on the material, application, design, and industry.

1. Metal Fabrication

Metal fabrication involves transforming metals like steel, stainless steel, aluminum, copper, and iron into usable components.

It is widely used in:

(i) Construction
(ii) Automotive manufacturing
(iii) Aerospace
(iv) Heavy machinery
(v) Industrial equipment


2. Structural Fabrication

Structural fabrication focuses on creating load-bearing structures such as beams, frames, columns, platforms, and supports.

It is commonly used in:

(i) Bridges
(ii) Buildings
(iii) Factories
(iv) Industrial structures


3. Sheet Metal Fabrication

Sheet metal fabrication uses thin metal sheets to create:

(i) Enclosures
(ii) Cabinets
(iii) Ducts
(iv) Panels
(v) Machine covers

These products are usually manufactured through cutting, bending, punching, and forming processes.


4. Industrial Fabrication

Industrial fabrication produces large-scale equipment, machines, customized tools, pipelines, tanks, and components used in manufacturing plants and heavy industries.
`
  },

  {
    title: "How Does Fabrication Work?",
    image: "images/process.png",
    text: `
Fabrication usually follows a well-structured process to ensure accuracy, strength, durability, and quality.

The complete fabrication process includes several important steps.

Step 1: Design and Engineering

The process begins with technical drawings or CAD (Computer-Aided Design) models.

These designs specify:

- Dimensions
- Materials
- Tolerances
- Functional requirements

The design acts as the blueprint for the complete fabrication process.


Step 2: Material Selection

Raw materials are selected according to the project requirements.

Important factors include:

- Strength requirements
- Environmental conditions
- Cost efficiency
- Durability
- Corrosion resistance

Common materials include steel, stainless steel, aluminum, and different alloys.


Step 3: Cutting

Cutting is used to shape raw materials into the required sizes and dimensions.

Common cutting methods include:

- Laser cutting
- Plasma cutting
- Waterjet cutting
- Sawing
- Shearing

Accurate cutting helps reduce material wastage and ensures precise dimensions.


Step 4: Forming and Bending

During the forming and bending stage, flat or straight materials are reshaped according to the required design.

Common equipment and techniques include:

- Press brakes
- Roll forming machines
- Forging techniques

Proper forming allows components to fit together correctly and can improve structural performance.
`
  },

  {
    title: "Fabrication Assembly and Welding",
    text: `
Step 5: Assembly and Welding

After cutting and forming, individual components are joined together to create the final structure or product.

Common joining methods include:

- Welding
- Bolting
- Riveting
- Adhesives

Welding is one of the most commonly used joining methods because it can provide strong and reliable connections.

Different welding techniques may be selected depending on the material, thickness, design, and application.


Step 6: Machining

Machining is used to refine fabricated components and achieve high levels of precision.

Common machining operations include:

- Drilling
- Turning
- Milling
- Tapping

Machining helps components meet tight tolerances and exact specifications.
`
  },

  {
    title: "Finishing and Surface Treatment",
    image: "images/products.png",
    text: `
Step 7: Finishing and Surface Treatment

Finishing improves the appearance, durability, and corrosion resistance of fabricated products.

Common finishing and surface treatment techniques include:

- Painting
- Powder coating
- Polishing
- Galvanizing
- Anodizing

The appropriate finishing method depends on the material, environmental conditions, appearance requirements, and intended application.


Step 8: Quality Inspection

The final stage of fabrication involves inspection and testing.

Quality inspection checks:

- Dimensional accuracy
- Structural strength
- Safety compliance
- Surface quality
- Overall product quality

Quality control helps identify defects and ensures that fabricated components meet the required specifications and standards.
`
  },

  {
    title: "Tools and Equipment Used in Fabrication",
    text: `
Fabrication relies on specialized tools, machines, and equipment to achieve accuracy, efficiency, and consistency.

Common fabrication equipment includes:

- CNC machines
- Laser cutters
- Plasma cutters
- Welding machines
- Press brakes
- Grinding tools
- Polishing tools
- Drilling machines
- Milling machines
- Cutting machines

Advanced fabrication facilities often use automation and robotics to improve production efficiency, precision, safety, and consistency.
`
  },

  {
    title: "Applications of Fabrication",
    text: `
Fabrication processes are used across many industries and sectors.

Major applications include:

- Construction and infrastructure
- Automotive and transportation
- Oil and gas industries
- Power plants
- Energy sector
- Electronics and appliances
- Industrial machinery
- Furniture
- Consumer goods
- Manufacturing industries

Almost every physical product or structure we use today has undergone some form of fabrication during its manufacturing process.
`
  },

  {
    title: "Advantages of Fabrication",
    text: `
Fabrication plays a vital role in modern manufacturing because it offers flexibility, efficiency, precision, and reliability.

1. Customization and Design Flexibility

Fabrication allows products and components to be custom-made according to specific requirements.

Manufacturers can customize:

- Size
- Shape
- Material
- Dimensions
- Design
- Surface finish

This makes fabrication suitable for applications where standard products cannot meet specific requirements.


2. High Strength and Durability

Fabricated components can be designed to withstand heavy loads, pressure, vibration, and demanding environmental conditions.

Advanced joining and forming techniques help create strong and long-lasting structures.


3. Cost-Effective Production

Fabrication can help reduce overall production costs by:

- Minimizing material waste
- Enabling bulk production
- Reducing rework
- Reducing manufacturing errors
- Improving production efficiency


4. Precision and Accuracy

Modern fabrication uses CNC machines, automated equipment, and advanced manufacturing technologies.

These technologies help achieve tight tolerances, accurate dimensions, consistent quality, and minimal defects.


5. Faster Production Time

Automated cutting, welding, forming, and machining processes can reduce production time.

This allows manufacturers to complete projects faster and improve overall production efficiency.
`
  },

  {
    title: "Future of Fabrication",
    text: `
The future of fabrication is being shaped by advanced technologies, automation, artificial intelligence, and sustainable manufacturing.

Important future trends include:

- Automation and robotics
- AI-driven design
- AI-based quality inspection
- Additive manufacturing
- Hybrid fabrication
- Advanced CNC systems
- Sustainable manufacturing
- Eco-friendly materials
- Smart manufacturing systems

As technology continues to develop, fabrication is expected to become more automated, precise, efficient, and environmentally friendly.
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