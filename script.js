// Player data 
const players = [
            {"name": "Cooper Kupp", "position": "WR", "passyrds": 0, "rushyrds": 5.8, "recyards": 90.2, "receptions": 8.3, "targets": 10.9, "td": 0.8, "attempts": 1.0},
            {"name": "Justin Jefferson", "position": "WR", "passyrds": 0, "rushyrds": 1.4, "recyards": 106.4, "receptions": 7.5, "targets": 10.8, "td": 0.5, "attempts": 0.2},
            {"name": "Ja'Marr Chase", "position": "WR", "passyrds": 0, "rushyrds": 0.7, "recyards": 87.2, "receptions": 7.3, "targets": 11.2, "td": 0.8, "attempts": 0},
            {"name": "Deandre Hopkins", "position": "WR", "passyrds": 0, "rushyrds": 1.9, "recyards": 79.7, "receptions": 7.1, "targets": 10.7, "td": 0.3, "attempts": 0},
            {"name": "Tyreek Hill", "position": "WR", "passyrds": 0, "rushyrds": 1.9, "recyards": 100.6, "receptions": 7.0, "targets": 10.0, "td": 0.5, "attempts": 1.9},
            {"name": "Chris Godwin", "position": "WR", "passyrds": 0, "rushyrds": 0.3, "recyards": 68.2, "receptions": 6.9, "targets": 9.5, "td": 0.2, "attempts": 0.2},
            {"name": "Stefon Diggs", "position": "WR", "passyrds": 0, "rushyrds": 0, "recyards": 89.3, "receptions": 6.8, "targets": 9.6, "td": 0.7, "attempts": 0},
            {"name": "Amon-Ra-St. Brown", "position": "WR", "passyrds": 0, "rushyrds": 5.9, "recyards": 72.6, "receptions": 6.6, "targets": 9.1, "td": 0.4, "attempts": 0.6},
            {"name": "Keenan Allen", "position": "WR", "passyrds": 0, "rushyrds": 0, "recyards": 75.2, "receptions": 6.6, "targets": 8.9, "td": 0.4, "attempts": 0},
            {"name": "Travis Kelce", "position": "TE", "passyrds": 0, "rushyrds": 0, "recyards": 78.7, "receptions": 6.5, "targets": 8.9, "td": 0.7, "attempts": 0},           
            {"name": "Austin Ekeler", "position": "RB", "passyrds": 0, "rushyrds": 53.8, "recyards": 42.5, "receptions": 6.3, "targets": 7.5, "td": 1.1, "attempts": 12},
            {"name": "Ceedee Lamb", "position": "WR", "passyrds": 0, "rushyrds": 2.8, "recyards": 80.0, "receptions": 6.3, "targets": 9.2, "td": 0.5, "attempts": 0.6},
            {"name": "Michael Pittman", "position": "WR", "passyrds": 0, "rushyrds": 1.9, "recyards": 57.8, "receptions": 6.2, "targets": 8.8, "td": 0.3, "attempts": 0.2},
            {"name": "Davante Adams", "position": "WR", "passyrds": 0, "rushyrds": 0, "recyards": 89.2, "receptions": 5.9, "targets": 10.6, "td": 0.8, "attempts": 0},
            {"name": "Josh Jacobs", "position": "RB", "passyrds": 0, "rushyrds": 97.2, "recyards": 23.5, "receptions": 3.1, "targets": 3.8, "td": 0.7, "attempts": 20},
            {"name": "Derrick Henry", "position": "RB", "passyrds": 0, "rushyrds": 96.1, "recyards": 24.9, "receptions": 2.1, "targets": 2.6, "td": 0.8, "attempts": 21.8},
            {"name": "Nick Chubb", "position": "RB", "passyrds": 0, "rushyrds": 89.7, "recyards": 14.1, "receptions": 1.7, "targets": 2.3, "td": 0.8, "attempts": 17.8},
            {"name": "Saquon Barkley", "position": "RB", "passyrds": 0, "rushyrds": 82.0, "recyards": 21.1, "receptions": 3.6, "targets": 2.3, "td": 0.6, "attempts": 18.4},
            {"name": "Jonathan Taylor", "position": "RB", "passyrds": 0, "rushyrds": 78.3, "recyards": 13.0, "receptions": 2.5, "targets": 3.6, "td": 0.4, "attempts": 17.5},
            {"name": "Miles Sanders", "position": "RB", "passyrds": 0, "rushyrds": 74.6, "recyards": 4.6, "receptions": 1.2, "targets": 1.5, "td": 0.6, "attempts": 15.2},
            {"name": "Dameon Pierce", "position": "RB", "passyrds": 0, "rushyrds": 72.2, "recyards": 12.7, "receptions": 2.3, "targets": 3.0, "td": 0.4, "attempts": 17.0},
            {"name": "Christian McCaffrey", "position": "RB", "passyrds": 0, "rushyrds": 67.0, "recyards": 43.6, "receptions": 5.0, "targets": 6.4, "td": 0.8, "attempts": 14.4},
            {"name": "Tony Pollard", "position": "RB", "passyrds": 0, "rushyrds": 62.9, "recyards": 23.2, "receptions": 2.4, "targets": 3.4, "td": 0.8, "attempts": 12.1},
            {"name": "James Conner", "position": "RB", "passyrds": 0, "rushyrds": 60.2, "recyards": 23.1, "receptions": 3.5, "targets": 4.5, "td": 0.6, "attempts": 14.1},
            {"name": "Kenneth Walker", "position": "RB", "passyrds": 0, "rushyrds": 70.0, "recyards": 11.0, "receptions": 1.8, "targets": 2.3, "td": 0.6, "attempts": 15.2},
            {"name": "Jamaal Williams", "position": "RB", "passyrds": 0, "rushyrds": 62.7, "recyards": 4.3, "receptions": 0.7, "targets": 0.9, "td": 1.0, "attempts": 15.4},
            {"name": "Dalvin Cook", "position": "RB", "passyrds": 0, "rushyrds": 69.0, "recyards": 17.4, "receptions": 2.3, "targets": 3.3, "td": 0.6, "attempts": 15.5},
            {"name": "T.J. Hockenson", "position": "TE", "passyrds": 0, "rushyrds": 0, "recyards": 53.8, "receptions": 5.1, "targets": 7.6, "td": 0.4, "attempts": 0},
            {"name": "Mark Andrews", "position": "TE", "passyrds": 0, "rushyrds": 0, "recyards": 56.8, "receptions": 4.9, "targets": 7.5, "td": 0.3, "attempts": 0},
            {"name": "Evan Engram", "position": "TE", "passyrds": 0, "rushyrds": 0, "recyards": 45.1, "receptions": 4.3, "targets": 5.8, "td": 0.2, "attempts": 0},
            {"name": "George Kittle", "position": "TE", "passyrds": 0, "rushyrds": 0, "recyards": 51.0, "receptions": 4.0, "targets": 5.7, "td": 0.7, "attempts": 0},
            {"name": "Pat Freiermuth", "position": "TE", "passyrds": 0, "rushyrds": 0, "recyards": 45.8, "receptions": 3.9, "targets": 6.1, "td": 0.1, "attempts": 0},
            {"name": "Dallas Goedert", "position": "TE", "passyrds": 0, "rushyrds": 0, "recyards": 58.5, "receptions": 4.6, "targets": 5.8, "td": 0.3, "attempts": 0},
            {"name": "Patrick Mahomes", "position": "QB", "passyrds": 308.8, "rushyrds": 21.1, "recyards": 0, "receptions": 0, "targets": 0, "td": 2.6, "attempts": 4.1},
            {"name": "Justin Fields", "position": "QB", "passyrds": 149.5, "rushyrds": 76.2, "recyards": 0, "receptions": 0, "targets": 0, "td": 1.7, "attempts": 10.7},
            {"name": "Josh Allen", "position": "QB", "passyrds": 267.7, "rushyrds": 47.6, "recyards": 0, "receptions": 0, "targets": 0, "td": 2.6, "attempts": 7.8},
            {"name": "Geno Smith", "position": "QB", "passyrds": 251.9, "rushyrds": 21.5, "recyards": 0, "receptions": 0, "targets": 0, "td": 1.8, "attempts": 4.0},
            {"name": "Jalen Hurts", "position": "QB", "passyrds": 246.7, "rushyrds": 50.7, "recyards": 0, "receptions": 0, "targets": 0, "td": 2.3, "attempts": 11.0},
            {"name": "Joe Burrow", "position": "QB", "passyrds": 279.7, "rushyrds": 16.1, "recyards": 0, "receptions": 0, "targets": 0, "td": 2.5, "attempts": 4.7},
            {"name": "Jared Goff", "position": "QB", "passyrds": 261.1, "rushyrds": 4.3, "recyards": 0, "receptions": 0, "targets": 0, "td": 1.7, "attempts": 1.7},
            {"name": "Kirk Cousins", "position": "QB", "passyrds": 267.5, "rushyrds": 5.7, "recyards": 0, "receptions": 0, "targets": 0, "td": 1.8, "attempts": 1.8},
            {"name": "Tom Brady", "position": "QB", "passyrds": 276.1, "rushyrds": -0.06, "recyards": 0, "receptions": 0, "targets": 0, "td": 1.5, "attempts": 1.7},
            {"name": "Tua Tagovailoa", "position": "QB", "passyrds": 272.9, "rushyrds": 5.4, "recyards": 0, "receptions": 0, "targets": 0, "td": 1.9, "attempts": 1.8},
            {"name": "Justin Herbert", "position": "QB", "passyrds": 278.8, "rushyrds": 8.6, "recyards": 0, "receptions": 0, "targets": 0, "td": 1.5, "attempts": 3.2},
            {"name": "Trevor Lawrence", "position": "QB", "passyrds": 241.9, "rushyrds": 17.1, "recyards": 0, "receptions": 0, "targets": 0, "td": 1.8, "attempts": 3.6},
            {"name": "Daniel Jones", "position": "QB", "passyrds": 200.3, "rushyrds": 44.3, "recyards": 0, "receptions": 0, "targets": 0, "td": 1.4, "attempts": 7.5},
            {"name": "Russell Wilson", "position": "QB", "passyrds": 234.9, "rushyrds": 18.5, "recyards": 0, "receptions": 0, "targets": 0, "td": 1.3, "attempts": 3.7},
            {"name": "Kenny Pickett", "position": "QB", "passyrds": 184.9, "rushyrds": 18.2, "recyards": 0, "receptions": 0, "targets": 0, "td": 0.8, "attempts": 4.2},
            {"name": "Russell Wilson", "position": "QB", "passyrds": 234.9, "rushyrds": 18.5, "recyards": 0, "receptions": 0, "targets": 0, "td": 1.3, "attempts": 3.7},
            {"name": "Aaron Rodgers", "position": "QB", "passyrds": 217.4, "rushyrds": 5.5, "recyards": 0, "receptions": 0, "targets": 0, "td": 1.6, "attempts": 2.0},
            {"name": "Derek Carr", "position": "QB", "passyrds": 234.8, "rushyrds": 6.8, "recyards": 0, "receptions": 0, "targets": 0, "td": 1.6, "attempts": 1.6},
            {"name": "Mac Jones", "position": "QB", "passyrds": 214.1, "rushyrds": 7.3, "recyards": 0, "receptions": 0, "targets": 0, "td": 1.1, "attempts": 3.4},
            {"name": "Ryan Tannehill", "position": "QB", "passyrds": 211.3, "rushyrds": 8.2, "recyards": 0, "receptions": 0, "targets": 0, "td": 1.3, "attempts": 2.8},
            {"name": "Jimmy Garoppolo", "position": "QB", "passyrds": 221.5, "rushyrds": 3.0, "recyards": 0, "receptions": 0, "targets": 0, "td": 1.6, "attempts": 2.1},
            {"name": "Kyler Murray", "position": "QB", "passyrds": 215.3, "rushyrds": 38.0, "recyards": 0, "receptions": 0, "targets": 0, "td": 1.5, "attempts": 6.1},
            {"name": "Marcus Mariota", "position": "QB", "passyrds": 170.1, "rushyrds": 33.7, "recyards": 0, "receptions": 0, "targets": 0, "td": 1.5, "attempts": 6.5},
            {"name": "Matthew Stafford", "position": "QB", "passyrds": 231.9, "rushyrds": 1.0, "recyards": 0, "receptions": 0, "targets": 0, "td": 1.2, "attempts": 1.4},
            {"name": "Dak Prescott", "position": "QB", "passyrds": 238.3, "rushyrds": 15.2, "recyards": 0, "receptions": 0, "targets": 0, "td": 2.0, "attempts": 3.8},
];

const statSelect = document.getElementById('statistic');
const playerStatsTable = document.getElementById('player-stats');
const selectedStatistic = document.getElementById('selected-statistic');

function sortPlayers(sortStat) {
    // Sort players by stat
    players.sort((a, b) => b[sortStat] - a[sortStat]);

    // Clear table
    playerStatsTable.innerHTML = '';

    // Inputted stat text
    const selectedOption = statSelect.options[statSelect.selectedIndex];
    selectedStatistic.textContent = selectedOption.text;

    // Statistic cell based on sortStat
    for (const player of players) {
        if (player[sortStat] !== 0) {
            const row = document.createElement('tr');
            const nameCell = document.createElement('td');
            const positionCell = document.createElement('td');
            const statCell = document.createElement('td');

            nameCell.textContent = player.name;
            positionCell.textContent = player.position;
            statCell.textContent = player[sortStat];

            row.appendChild(nameCell);
            row.appendChild(positionCell);
            row.appendChild(statCell);

            playerStatsTable.appendChild(row);
        }
    }
}

const form = document.querySelector('form');
form.addEventListener('submit', function (e) {
    e.preventDefault();
    const selectedStat = statSelect.value;
    sortPlayers(selectedStat);
});

sortPlayers('passyrds'); // Default sorting by passing yards
