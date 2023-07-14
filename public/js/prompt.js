const { generatePrompt } = require('./controllers/promptController');

// Prompt generation and display
const prompt = generatePrompt();
console.log(prompt);

// Add your application's logic here