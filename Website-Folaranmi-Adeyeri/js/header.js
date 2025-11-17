class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <header id="main-header" class="sticky top-0 z-50 w-full backdrop-blur-lg bg-gray-900/80 border-b border-gray-800 transition-all duration-300">
        <div class="max-w-6xl mx-auto px-4">
          <nav class="flex justify-between items-center h-20">
            <!-- Logo/Name -->
            <a href="#" class="text-2xl font-bold text-white hover:text-indigo-400 transition-colors relative h-8 flex items-center whitespace-nowrap">
              <span id="logo-full" class="absolute inset-0">Folaranmi Adeyeri</span>
              <span id="logo-initials" class="absolute inset-0">FA</span>
            </a>
            <!-- Nav Links (Desktop) -->
            <ul class="hidden md:flex space-x-8">
              <li><a href="#about" class="font-medium text-gray-300 hover:text-indigo-400 transition-colors">About</a></li>
              <li><a href="#projects" class="font-medium text-gray-300 hover:text-indigo-400 transition-colors">Projects</a></li>
              <li><a href="#contact" class="font-medium text-gray-300 hover:text-indigo-400 transition-colors">Contact</a></li>
            </ul>
            <!-- Mobile Menu Button -->
            <button id="mobile-menu-button" class="md:hidden text-gray-300 hover:text-white focus:outline-none">
              <svg id="icon-menu" class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
              <svg id="icon-close" class="w-7 h-7 hidden" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
            </button>
          </nav>
        </div>

        <!-- Mobile Menu (Hidden by default) -->
        <div id="mobile-menu" class="hidden md:hidden absolute top-20 left-0 w-full bg-gray-900/95 backdrop-blur-lg shadow-lg z-40">
          <ul class="flex flex-col items-center space-y-6 py-6">
            <li><a href="#about" class="mobile-nav-link font-medium text-lg text-gray-300 hover:text-indigo-400 transition-colors">About</a></li>
            <li><a href="#projects" class="mobile-nav-link font-medium text-lg text-gray-300 hover:text-indigo-400 transition-colors">Projects</a></li>
            <li><a href="#contact" class="mobile-nav-link font-medium text-lg text-gray-300 hover:text-indigo-400 transition-colors">Contact</a></li>
          </ul>
        </div>
      </header>
    `;

    const menuButton = this.querySelector('#mobile-menu-button');
    const mobileMenu = this.querySelector('#mobile-menu');
    const iconMenu = this.querySelector('#icon-menu');
    const iconClose = this.querySelector('#icon-close');
    const navLinks = this.querySelectorAll('.mobile-nav-link');

    if (menuButton && mobileMenu && iconMenu && iconClose) {
      const toggleMenu = () => {
        mobileMenu.classList.toggle('hidden');
        iconMenu.classList.toggle('hidden');
        iconClose.classList.toggle('hidden');
      };

      menuButton.addEventListener('click', toggleMenu);

      // Close menu when a nav link is clicked (for single-page nav)
      navLinks.forEach(link => {
        link.addEventListener('click', () => {
          if (!mobileMenu.classList.contains('hidden')) {
            toggleMenu();
          }
        });
      });
    } else {
      console.warn('Header mobile menu elements not found. Navigation might not work.');
    }

    // Header scroll effect
    const header = this.querySelector('#main-header');
    if (header) {
      // The scroll event is on the window, but it affects the header
      window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
          header.classList.add('scrolled');
        } else {
          header.classList.remove('scrolled');
        }
      });
    } else {
      console.warn('Main header element not found. Scroll effect will not work.');
    }
  }
}

customElements.define('header-component', Header);
