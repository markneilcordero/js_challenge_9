## **Random Card Generator Documentation**

### **Welcome!**  
Ever wanted to draw a random card with a simple command? The **Random Card Generator** is a Node.js program that picks a random playing card for you—like `Ace of Hearts` or `7 of Spades`. Just press **Enter** to draw a card, and the program will keep going until you decide to exit.

---

### **What’s Inside**  
- **Random Card Generation:** The program randomly picks a card's **rank** (e.g., Ace, King, 7) and **suit** (Hearts, Diamonds, Clubs, Spades).  
- **Simple Loop:** The program continues drawing cards until you type `"exit"`.  
- **User Control:** Quit anytime by typing `"exit"`.

---

### **Getting Started**

1. **Install Node.js:**  
   If you don’t have Node.js installed, download it here: [https://nodejs.org/](https://nodejs.org/).

2. **Install Dependencies:**  
   In your terminal, run:
   ```bash
   npm install prompt-sync
   ```

3. **Run the Program:**  
   Save the following script as `index.js`, then start the program:
   ```bash
   node index.js
   ```

---

### **Sample Code**  
Here's a simple **Node.js Card Generator** program you can use:
```javascript
const prompt = require('prompt-sync')();

const ranks = ["Ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King"];
const suits = ["Hearts", "Diamonds", "Clubs", "Spades"];

console.log("🎴 Welcome to the Random Card Generator!");
console.log("Press Enter to draw a card, or type 'exit' to quit.\n");

while (true) {
  const userInput = prompt("Press Enter for a card or type 'exit': ").toLowerCase();

  if (userInput === "exit") {
    console.log("\nGoodbye!");
    break;
  }

  const randomRank = ranks[Math.floor(Math.random() * ranks.length)];
  const randomSuit = suits[Math.floor(Math.random() * suits.length)];

  console.log(`🎴 Your card: ${randomRank} of ${randomSuit}\n`);
}
```

---

### **Sample Output**  
Here’s what it looks like when you run the program:  
```
🎴 Welcome to the Random Card Generator!  
Press Enter to draw a card, or type 'exit' to quit.  

Press Enter for a card or type 'exit':  
🎴 Your card: Queen of Hearts  

Press Enter for a card or type 'exit':  
🎴 Your card: 7 of Spades  

Press Enter for a card or type 'exit': exit  
Goodbye!  
```

---

### **What You Can Do Next**  
- Add jokers or custom cards if you’d like to make it unique!  
- Change the output format for more fun—add emojis, colors, or sound effects.  

---

Enjoy drawing random cards! 🃏
