// List of 50 fun emojis
const emojis = [
    "🏃‍♂️", "🏊‍♀️", "🚴‍♂️", "🧗‍♀️", "🏋️‍♂️", "🧘‍♀️", "🏌️‍♂️", "🏇", "🏄‍♂️", "🏂",
    "🎿", "🛹", "🛼", "🏓", "🏸", "🏒", "🏑", "🏏", "🏐", "🏉",
    "🏈", "⚽", "🏀", "🎾", "🎳", "🥋", "🤸‍♀️", "🤾‍♂️", "🤽‍♀️", "🥊",
    "🥌", "🎯", "🎲", "🎮", "🧩", "🎭", "🎨", "🎤", "🎧", "🎸",
    "🎹", "🥁", "🎷", "🎺", "🎻", "🧵", "🧶", "🏹", "🏆", "🏅"
];

// Function to get a random emoji
function getRandomEmoji() {
    const randomIndex = Math.floor(Math.random() * emojis.length);
    return emojis[randomIndex];
}

// Export the function
export default getRandomEmoji;
