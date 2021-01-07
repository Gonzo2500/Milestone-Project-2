function sendMail(contactForm) {
  emailjs
    .send("gmail", "template_ott67ib", {
      from_name: contactForm.Name.value,
      from_email: contactForm.email.value,
      training_class: contactForm.training.value,
      training_level: contactForm.level.value,
      message: contactForm.message.value,
    })
    .then(
      function (response) {
        alert("Thank you! The Gemba team will answer soon."); // Test if sending was succesful
      },
      function (error) {
        alert("There seems to be a problem. Please try again later."); // Test if sending was unsuccesful
      }
    );
  return false; // prevent page from refreshing
}
