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
        console.log("success", response); // Test if sending was succesful
      },
      function (error) {
        console.log("failed"); // Test if sending was unsuccesful
      }
    );
  return false; // prevent page from refreshing
}
