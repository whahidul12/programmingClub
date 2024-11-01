document
  .getElementById("contact-form")
  .addEventListener("submit", async function (event) {
    event.preventDefault();

    const form = event.target;
    const formData = new FormData(form);

    try {
      const response = await fetch(form.action, {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        document.getElementById("form-response").textContent =
          "Thank you for your message!";
        form.reset();
      } else {
        document.getElementById("form-response").textContent =
          "Oops! Something went wrong. Please try again later.";
      }
    } catch (error) {
      document.getElementById("form-response").textContent =
        "Oops! Something went wrong. Please try again later.";
    }
  });
