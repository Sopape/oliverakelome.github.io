const form = document.getElementById("contactForm");

function showAlert(id) {
  document.getElementById(id).classList.remove("alert-hidden");
}

function closeAlert(id) {
  document.getElementById(id).classList.add("alert-hidden");
}

form.addEventListener("submit", function (e) {
  e.preventDefault();

  fetch(form.action, {
    method: form.method,
    body: new FormData(form),
    headers: { 'Accept': 'application/json' }
  })
  .then(response => {
    if (response.ok) {
      form.reset();
      showAlert("customAlertSuccess");
    } else {
      showAlert("customAlertError");
    }
  })
  .catch(error => {
    showAlert("customAlertError");
  });
});