var generateBtn = document.querySelector("#generatePrompt");
generateBtn.addEventListener("click", generatePrompt);
var promptArea = document.querySelector('.promptArea')
console.log('yo peeps')
// Prompt generation and display
console.log(prompt);

// Array of prompts
const prompts = [
  "Reflect on a recent challenge you faced and describe how it helped you grow.",
  "Write about a moment of pure joy that you experienced recently. What made it so special?",
  "Write a letter to your future self, sharing your hopes, dreams, and aspirations.",
  "Describe a person who inspires you and why.",
  "Imagine you have the power to change one thing about the world. What would it be and why?",
  "Describe a dream or aspiration you've always had but haven't pursued yet. What steps could you take to make it a reality?",
  // Add more prompts here...
];

// Function to generate a random prompt
function generatePrompt() {
  // Generate a random index within the prompts array length
  const randomIndex = Math.floor(Math.random() * prompts.length);

  // Return the randomly selected prompt
  promptArea.textContent = prompts[randomIndex];
}
console.log(`User's response: ${userInput}`);
