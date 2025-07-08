let count = 0;
const shareBtn = document.getElementById('shareBtn');
const counter = document.getElementById('counter');
const submitBtn = document.getElementById('submitBtn');
const form = document.getElementById('registrationForm');
const message = document.getElementById('message');

const submitted = localStorage.getItem("formSubmitted");
if (submitted) {
  disableForm();
  message.textContent = "🎉 Your submission has been recorded. Thanks for being part of Tech for Girls!";
}

shareBtn.addEventListener('click', () => {
  if (count < 5) {
    const msg = "Hey Buddy, Join Tech For Girls Community!";
    const url = `https://wa.me/?text=${encodeURIComponent(msg)}`;
    window.open(url, '_blank');
    count++;
    counter.textContent = `Click count: ${count}/5`;
    if (count === 5) {
      counter.textContent = "Sharing complete. Please continue.";
      submitBtn.disabled = false;
    }
  }
});

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  if (count < 5) return;

  submitBtn.disabled = true;

  // Gather form data
  const formData = new FormData();
  formData.append("name", document.getElementById('name').value);
  formData.append("phone", document.getElementById('phone').value);
  formData.append("email", document.getElementById('email').value);
  formData.append("college", document.getElementById('college').value);
  formData.append("screenshot", document.getElementById('screenshot').files[0]);

  // ✅ REPLACE the URL below with your own Google Apps Script Web App URL
  const response = await fetch("https://script.google.com/macros/s/AKfycbz8Cf8R5XomYl5MYtPs6wIl39Yft6MsRS0v69FFFoBtblx8NYEl5C_bOuJxVlJATytd5A/exec", {
    method: "POST",
    body: formData
  });

  if (response.ok) {
    message.textContent = "🎉 Your submission has been recorded. Thanks for being part of Tech for Girls!";
    localStorage.setItem("formSubmitted", true);
    disableForm();
  } else {
    message.textContent = "❌ Submission failed. Please try again.";
    submitBtn.disabled = false;
  }
});

function disableForm() {
  [...form.elements].forEach(el => el.disabled = true);
  shareBtn.disabled = true;
}