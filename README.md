# Tech-For-Girls-Registration


<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Tech for Girls Registration</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <div class="container">
    <h1>Tech for Girls Registration</h1>
    <form id="registrationForm">
      <label>Name:</label>
      <input type="text" id="name" required />

      <label>Phone Number:</label>
      <input type="number" id="phone" required />

      <label>Email ID:</label>
      <input type="email" id="email" required />

      <label>College/Department:</label>
      <input type="text" id="college" required />

      <label>Upload Screenshot:</label>
      <input type="file" id="screenshot" accept="image/*" required />

      <button type="button" id="shareBtn">Share on WhatsApp</button>
      <p id="counter">Click count: 0/5</p>

      <button type="submit" id="submitBtn" disabled>Submit Registration</button>
    </form>
    <p id="message"></p>
  </div>
  <script src="script.js"></script>
</body>
</html>
