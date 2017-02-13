//Functions
//similar to methods in Ruby
//functions stand alone, methods are behaviours of an objects

//named function

// function eatDot() {
//   console.log("MUNCH!");
// }
//
// anonymous function (assigned to a variable instead of a name)
//
// var eatDot = function() {
//   console.log("MUNCH!");
// }

 var highScores = [];
 function addHighScore(highScoreList, playerInitials, score) {
    var record = { player: playerInitials, score: score };
    highScoreList.push(record); // add record to array
    }

 highScores

 addHighScore(highScores, 'SDL', 2000);
 highScores
[ { player: 'SDL', score: 2000 } ]
addHighScore(highScores, 'JSL', 10000);
 highScores
[ { player: 'SDL', score: 2000 },
  { player: 'JSL', score: 10000 } ]

  function addScore(currentScore, eaten) {
    switch (eaten) {
    case 'dot':
      scoreToAdd = 10;
      break;
    case 'powerPellet':
      scoreToAdd = 50;
      break;
    case 'firstGhost':
      scoreToAdd = 200;
      break;
    case 'secondGhost':
      scoreToAdd = 400;
      break;
    }

    return currentScore + scoreToAdd;
  }

  var score = 0;

  score = addScore(score, 'dot');
  score = addScore(score, 'dot');
  score = addScore(score, 'dot');
  score = addScore(score, 'powerPellet');
  score = addScore(score, 'firstGhost');
  console.log('Your score: ' + score);
