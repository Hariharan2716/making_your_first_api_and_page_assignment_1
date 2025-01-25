// Import the express module
const express = require('express');

// Initialize an Express app
const app = express();
// Define the /assistant/greet endpoint
app.get('/assistant/greet', (req, res) => {
  // 1. Access the name from the query parameter
  const name = req.query.name;
  
  // 2. Create a list of days of the week to use later for the cheerful message
  const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  
  // 3. Get the current day of the week (0 for Sunday, 6 for Saturday)
  const today = new Date();
  const dayName = daysOfWeek[today.getDay()];
  
  // 4. Define cheerful messages based on the day of the week
  const cheerfulMessages = {
    Sunday: 'Enjoy your relaxing Sunday!',
    Monday: 'Let\'s kick off the week with energy!',
    Tuesday: 'You\'re on a roll!',
    Wednesday: 'It\'s hump day—keep going!',
    Thursday: 'Almost there!',
    Friday: 'The weekend is just around the corner!',
    Saturday: 'Enjoy your weekend!',
  };

  // 5. Generate the personalized message
  const message = `Hello, ${name}! ${cheerfulMessages[dayName]}`;

  // 6. Send the message as the response
  res.send(message);
});
// Start the server and listen on port 3000
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
