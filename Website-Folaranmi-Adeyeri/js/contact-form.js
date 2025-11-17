class Contact extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <section id="contact" class="py-20 bg-gray-800/50">
        <div class="max-w-3xl mx-auto px-4 text-center">
          <h2 class="section-heading"><span>Get In Touch</span></h2>
          <p class="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            I'm currently open to new opportunities and collaborations. Whether you have a question, a project proposal, or just want to say hi, feel free to use the form below.
          </p>

          <div class="max-w-lg mx-auto">
            <form id="contactForm" class="flex flex-col gap-4">
              <input type="text" name="name" placeholder="Your Name" required
                     class="w-full px-4 py-3 rounded-lg bg-gray-700 text-gray-100 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 placeholder-gray-400">
              <input type="email" name="email" placeholder="Your Email" required
                     class="w-full px-4 py-3 rounded-lg bg-gray-700 text-gray-100 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 placeholder-gray-400">
              <textarea name="message" placeholder="Your Message" rows="5" required
                        class="w-full px-4 py-3 rounded-lg bg-gray-700 text-gray-100 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 placeholder-gray-400"></textarea>
              <button type="submit" class="btn btn-primary text-lg">
                Send Message
              </button>
            </form>
            <p id="formResponse" class="font-semibold mt-4"></p>
          </div>
        </div>
      </section>
    `;

    // 2. Add the JS logic (from old js/contact.js)
    const form = this.querySelector('#contactForm');
    const responseMsg = this.querySelector('#formResponse');

    if (form && responseMsg) {
      form.addEventListener('submit', async function (e) {
        e.preventDefault();
        const formData = new FormData(form);

        responseMsg.textContent = "Sending...";
        responseMsg.style.color = '#9CA3AF'; // Tailwind text-gray-400
        const submitButton = form.querySelector('button[type="submit"]');
        if(submitButton) submitButton.disabled = true;

        try {
          const response = await fetch('https://formspree.io/f/movwywdy', {
            method: 'POST',
            headers: { 'Accept': 'application/json' },
            body: formData
          });

          if (response.ok) {
            responseMsg.textContent = "✅ Thank you! Your message has been sent.";
            responseMsg.style.color = '#34D399'; // Tailwind green-400
            form.reset();
          } else {
            responseMsg.textContent = "❌ Oops! Something went wrong. Please try again.";
            responseMsg.style.color = '#F87171'; // Tailwind red-400
          }
        } catch (error) {
          console.error('Form submission error:', error);
          responseMsg.textContent = "❌ There was an error sending the message.";
          responseMsg.style.color = '#F87171'; // Tailwind red-400
        } finally {
          if(submitButton) submitButton.disabled = false;
        }
      });
    } else {
      console.warn('Contact form elements not found. Form will not work.');
    }
  }
}
customElements.define('contact-component', Contact);
