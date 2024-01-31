function handleLoginSubmit(event) {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  window.location.href =
    "index.html?username=" + username + "&password=" + password;
  event.preventDefault();
}
function handleContactSubmit(event) {
  const email = document.getElementById("contact-email").value;
  window.location.href = "index.html?email=" + email;
  event.preventDefault();
}
function handleDetailSubmit(event) {
  const adult = document.getElementById("detail-adult").value;
  const name = document.getElementById("detail-name").value;
  const fromDate = document.getElementById("detail-from-date").value;
  const toDate = document.getElementById("detail-to-date").value;
  window.location.href = `payment.html?adult=${adult}&name=${name}&fromDate=${fromDate}&toDate=${toDate}&price`;
  event.preventDefault();
}
