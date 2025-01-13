### **Random Card Generator**

### **Overview**  
The **Random Card Generator** is a Node.js CLI program that generates a random playing card (e.g., `Ace of Hearts`, `Queen of Spades`). The user can keep generating cards by pressing **Enter** or exit the program by typing `"exit"`.

---

### **Features**  
- **Random Card Generation:** Generates a card with a random rank (Ace, 2–10, Jack, Queen, King) and suit (Hearts, Diamonds, Clubs, Spades).  
- **Continuous Loop:** Keeps running until the user exits.  
- **Exit Option:** User can type `"exit"` to quit the program.

---

### **Instructions**  
1. Install Node.js: [https://nodejs.org/](https://nodejs.org/)  
2. Open a terminal and run:
   ```bash
   npm install prompt-sync
   ```
3. Save the file as `cardGenerator.js` and run the program:
   ```bash
   node cardGenerator.js
   ```

---

### **Sample Output**  
```
🎴 Welcome to the Random Card Generator!  
Press Enter to generate a new card, or type 'exit' to quit.  

Press Enter for a card or type 'exit':  
🎴 Your card: Queen of Hearts  

Press Enter for a card or type 'exit':  
🎴 Your card: 7 of Spades  

Press Enter for a card or type 'exit': exit  
Goodbye!  
```  