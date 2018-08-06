import eloRank from "elo-rank";
import axios from "axios";
const elo = new eloRank(32);

export default function(state = null, action) {
  switch (action.type) {
    case "FIRST_OVERALL_WON":
      let playerA = action.payload[0];
      const playerAID = action.payload[1];
      let playerB = action.payload[2];
      const playerBID = action.payload[3];

      const expectedScoreA = elo.getExpected(playerA, playerB);
      const expectedScoreB = elo.getExpected(playerB, playerA);

      playerA = elo.updateRating(expectedScoreA, 1, playerA);
      playerB = elo.updateRating(expectedScoreB, 0, playerB);

      console.log(
        `Player A new rating: ${playerA} - Player B new rating: ${playerB}`
      );

      axios({
        method: "post",
        url: `http://localhost:3000/api/update/${playerAID}`,
        data: { newElo: `${playerA}` },
        headers: {
          "Content-Type": "application/json"
        }
      }).then(console.log("Data posted!"));

      axios({
        method: "post",
        url: `http://localhost:3000/api/update/${playerBID}`,
        data: { newElo: `${playerB}` },
        headers: {
          "Content-Type": "application/json"
        }
      }).then(console.log("Data posted!"));

      return [
        {
          winnersNewElo: playerA
        },
        {
          losersNewElo: playerB
        }
      ];
    default:
      return state;
  }
}
