/**
 * @jest-environment jsdom
 */

const { submitName } = require('./frontend/greetingApp');

// Beispieltests
test('submitName Funktion', () => {
  // Erstelle ein HTML-Element für den Test
  document.body.innerHTML = `
    <input type="text" id="nameInput" value="John">
    <h2 id="greetingMessage"></h2>
  `;

  // Rufe die Funktion auf
  submitName();

  // Überprüfe, ob die Grußnachricht korrekt gesetzt wurde
  expect(document.getElementById('greetingMessage').innerText).toBe('Hello, John!');
});