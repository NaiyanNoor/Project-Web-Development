let runs = 0;
let wickets = 0;
let balls = 0;

function updateScoreboard() {
    const overs = Math.floor(balls / 6) + (balls % 6) / 10;
    document.getElementById('score').textContent = `Score: ${runs}/${wickets}`;
    document.getElementById('overs').textContent = `Overs: ${overs.toFixed(1)}`;
}

function addRuns() {
    const runsInput = document.getElementById('runsInput').value;
    if (runsInput !== "") {
        runs += parseInt(runsInput);
        document.getElementById('runsInput').value = "";
        updateScoreboard();
    }
}

function addWicket() {
    if (wickets < 10) {
        wickets++;
        updateScoreboard();
    }
}

function addBall() {
    balls++;
    updateScoreboard();
}
