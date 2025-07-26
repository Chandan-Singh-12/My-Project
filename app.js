console.log("hello world");
// This is a simple game application
// Initialize the game
function initGame() {
    console.log("Game initialized");
}
// Start the game
function startGame() {
    console.log("Game started");
}
// End the game
function endGame() {
    console.log("Game ended");
}       
// Run the game
initGame();
startGame();
// Simulate some game actions
setTimeout(() => {
    console.log("Game action performed");
}, 2000);
setTimeout(() => {  
    endGame();
}, 5000);
// Export functions for potential use in other modules
module.exports = {
    initGame,
    startGame,
    endGame
};      
