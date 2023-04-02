function sendEmail() {
  var params = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    message: document.getElementById("message").value,
  };

  const serviceId = "service_i1hzhnr";
  const templateId = "template_cxgn57g";

  emailjs
    .send(serviceId, templateId, params)
    .then((res) => {
      document.querySelector(".sent-message").classList.add("d-block");
      document.getElementById("name").value = "";
      document.getElementById("email").value = "";
      document.getElementById("subject").value = "";
      document.getElementById("message").value = "";
      setTimeout(() => {
        document.querySelector(".sent-message").classList.remove("d-block");
      }, 2000);
    })
    .catch((err) => {
      console.log(err);
    });
}
