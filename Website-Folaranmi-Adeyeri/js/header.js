class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <style>
        nav {
          background-color: #1c1c1c;
          padding: 10px 0;
          margin-bottom: 0;
          position: sticky;
          top: 0;
          z-index: 1000;
        }

        .nav-container {
          display: flex;
          justify-content: center;
          align-items: center;
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }

        .hamburger {
          display: none;
          flex-direction: column;
          cursor: pointer;
          z-index: 1101;
          width: 30px;
          height: 25px;
          justify-content: center;
        }

        .hamburger span {
          height: 3px;
          width: 100%;
          background: white;
          margin: 4px 0;
          transition: all 0.3s ease;
          border-radius: 2px;
        }

        /* When menu is open */
        .hamburger.active span:nth-child(1) {
          transform: rotate(45deg) translate(5px, 5px);
        }

        .hamburger.active span:nth-child(2) {
          opacity: 0;
        }

        .hamburger.active span:nth-child(3) {
          transform: rotate(-45deg) translate(6px, -6px);
        }

        .tabs {
          list-style: none;
          display: flex;
          gap: 30px;
          padding: 0;
          margin: 0;
        }

        .tabs li a {
          color: white;
          text-decoration: none;
          font-weight: bold;
          padding: 10px 15px;
          transition: background 0.3s, color 0.3s;
        }

        .tabs li a:hover {
          background-color: #444;
          border-radius: 5px;
        }

        @media (max-width: 850px) {
          .tabs {
            flex-direction: column;
            position: fixed;
            top: 0;
            left: -250px; /* ← slide from the left */
            width: 250px;
            height: 100%;
            background-color: #1c1c1c;
            padding-top: 20px;
            transition: left 0.3s ease;
            gap: 0;
            z-index: 1100;
          }

          .tabs.show {
            left: 0; /* ← when shown, move into view */
          }

          .nav-container {
            justify-content: space-between;
          }

          .tabs li {
            margin: 10px 0;
            text-align: center;
          }

          .hamburger {
            display: flex;
          }
        }
      </style>

      <nav>
        <div class="nav-container">
          <div class="hamburger" id="hamburger">
            <span></span>
            <span></span>
            <span></span>
          </div>
          <ul class="tabs" id="navTabs">
            <li><a href="index.html">Home</a></li>
            <li><a href="projects.html">Projects</a></li>
            <li><a href="education.html">Education</a></li>
            <li><a href="contact.html">Contact</a></li>
          </ul>
        </div>
      </nav>
    `;

    const hamburger = this.querySelector("#hamburger");
    const navTabs = this.querySelector("#navTabs");

    hamburger.addEventListener("click", () => {
      navTabs.classList.toggle("show");
      hamburger.classList.toggle("active");
    });
  }
}

customElements.define('header-component', Header);



