const prompt = require('prompt-sync')({ sigint: true });

function generateRandomCard()
{
    const suits = ["Hearts", "Diamonds", "Clubs", "Spades"];
    const ranks = ["Ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "10", "Jack", "Queen", "King"];

    const randomSuit = suits[Math.floor(Math.random() * suits.length)];
    const randomRank = ranks[Math.floor(Math.random() * ranks.length)];

    return `${randomRank} of ${randomSuit}`;
}

console.log("\n Welcome to the Random Card Generator!");
console.log("Press Enter to generate a new card, or type 'exit' to quit.\n");

while (true)
{
    const userInput = prompt("Press Enter for a card or type 'exit': ").trim().toLowerCase();

    if (userInput === "exit")
    {
        console.log("\nGoodbye!\n");
        break;
    }

    console.log(`🎴 Your card: ${generateRandomCard()}\n`);
}