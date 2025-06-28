document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contactForm');
  const responseMsg = document.getElementById('formResponse');

  form.addEventListener('submit', async function (e) {
    e.preventDefault();

    const formData = new FormData(form);

    try {
      const response = await fetch('https://formspree.io/f/movwywdy', {
        method: 'POST',
        headers: { 'Accept': 'application/json' },
        body: formData
      });

      if (response.ok) {
        responseMsg.textContent = "✅ Thank you! Your message has been sent to Folaranmi Adeyeri.";
        form.reset();
      } else {
        responseMsg.textContent = "❌ Oops! Something went wrong. Please try again.";
      }
    } catch (error) {
      responseMsg.textContent = "❌ There was an error sending the message.";
    }
  });
});
