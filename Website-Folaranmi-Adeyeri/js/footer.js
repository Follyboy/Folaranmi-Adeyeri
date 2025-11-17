class Footer extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <footer class="bg-gray-900 border-t border-gray-800 py-12">
        <div class="max-w-6xl mx-auto px-4 text-center text-gray-400">
          <!-- Social Links (repeat for easy access) -->
          <div class="flex justify-center space-x-6 mb-6">
            <!-- GitHub Link -->
            <a href="https://github.com/Follyboy" target="_blank" rel="noopener noreferrer" title="GitHub" class="text-gray-400 hover:text-indigo-400 transition-transform hover:scale-110">
              <svg class="w-7 h-7" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.165 6.839 9.49.5.092.682-.217.682-.483 0-.237-.009-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.951 0-1.093.39-1.988 1.03-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.805c.85 0 1.7.114 2.503.337 1.909-1.296 2.747-1.026 2.747-1.026.546 1.378.203 2.397.1 2.65.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.85 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.001 10.001 0 0022 12c0-5.523-4.477-10-10-10z" clip-rule="evenodd"></svg>
            </a>
            <a href="https://linkedin.com/in/folaranmi-adeyeri" target="_blank" rel="noopener noreferrer" title="LinkedIn" class="text-gray-400 hover:text-indigo-400 transition-transform hover:scale-110">
              <svg class="w-7 h-7" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.783-1.75-1.75s.784-1.75 1.75-1.75 1.75.783 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clip-rule="evenodd"></svg>
            </a>
            <a href="mailto:folar.adeyeri@gmail.com" title="Email" class="text-gray-400 hover:text-indigo-400 transition-transform hover:scale-110">
              <svg class="w-7 h-7" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6zm-2 0l-8 5-8-5h16zm0 12H4V8l8 5 8-5v10z"></svg>
            </a>
          </div>
          <p>&copy; <span id="current-year"></span> Folaranmi Adeyeri. All rights reserved.</p>
          <p class="text-sm mt-2">Designed & Built with ❤️</p>
        </div>
      </footer>
    `;

    const currentYearEl = this.querySelector('#current-year');
    if (currentYearEl) {
      currentYearEl.textContent = new Date().getFullYear();
    } else {
      console.warn('Footer "current-year" element not found.');
    }
  }
}
customElements.define('footer-component', Footer);
