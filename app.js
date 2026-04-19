// Btiers Leaderboard Application Code

class Leaderboard {
    constructor() {
        this.players = [];
    }

    addPlayer(name, score) {
        this.players.push({ name: name, score: score });
        this.sortPlayers();
    }

    sortPlayers() {
        this.players.sort((a, b) => b.score - a.score);
    }

    getTopPlayers(limit) {
        return this.players.slice(0, limit);
    }

    display() {
        console.log("Leaderboard:");
        this.players.forEach((player, index) => {
            console.log(`${index + 1}. ${player.name}: ${player.score}`);
        });
    }
}

// Example usage:
const leaderboard = new Leaderboard();
leaderboard.addPlayer('Alice', 120);
leaderboard.addPlayer('Bob', 150);
leaderboard.addPlayer('Charlie', 100);
leaderboard.display();