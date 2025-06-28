class Footer extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <style>
        .footer {
          background-color: #222;
          color: #fff;
          padding: 20px 0;
          text-align: center;
          position: relative;
          clear: both;
        }

        .social-icons {
          margin: 10px 0;
        }

        .social-icons a {
          margin: 0 10px;
          display: inline-block;
        }

        .social-icons img {
          width: 32px;
          height: 32px;
          vertical-align: middle;
          transition: transform 0.2s;
        }

        .social-icons img:hover {
          transform: scale(1.2);
        }
      </style>
      <footer class="footer">
        <p>Follow me on social media</p>
        <div class="social-icons">
          <a href="https://github.com/Follyboy" target="_blank">
            <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/github.svg" alt="LinkedIn">
          </a>
          <a href="https://www.facebook.com/adeyeri.fola.3" target="_blank">
            <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/facebook.svg" alt="Facebook">
          </a>
          <a href="https://x.com/folly_d_" target="_blank">
            <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/x.svg" alt="Twitter">
          </a>
          <a href="https://www.instagram.com/folly.d" target="_blank">
            <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/instagram.svg" alt="Instagram">
          </a>
          <a href="https://www.linkedin.com/in/folaranmi-adeyeri" target="_blank">
            <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/linkedin.svg" alt="LinkedIn">
          </a>
        </div>
        <p>&copy; 2025 Folaranmi Adeyeri</p>
      </footer>
    `;
  }
}

customElements.define('footer-component', Footer);
