//! Guess number game - practice

'use strict';

//TODO: What I have do to make this work:

//* After filling input with number read the value --> "check!" number (+)
//* Compare input value to randomly draw number and print specific message (+)
//* If the value in an input is too high print message and if it is too low than print too low (+)
//* Displaying guessed + make this box wider + change background-color to green (+)
//* Decreasing a score after missed guess (+)
//* After loss display message "You lost, try again!" (+)
//* Declare statment if the input is empty or it is equal to 0 to print "No number, please eneter appropriate value which is number" (+)
//* Restarting game with "again!" button with new score and obtained highscore (It has to change if it is smaller or bigger than current score) (+)
//* Highscore (+)

// This will draw random number in scope 1 - 20
let unknownNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highscore = 0;

//! Functions

// Message
const getMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
// Score
const getScore = function (score) {
  document.querySelector('.score').textContent = score;
};

// Number in box
const boxStyle = function (style, content) {
  document.querySelector('.number').style.width = style;
  document.querySelector('.number').textContent = content;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  //! Version with functions
  // First if will examine if the filed is empty or not also it will be print out in message after enter 0
  if (!guess) {
    getMessage('No number!');
  } else if (guess === unknownNumber) {
    getMessage('Correct number!');
    boxStyle('35rem', guess);
    document.querySelector('body').style.backgroundColor = '#60b347';

    if (highscore < score) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
    //! Final version (condensed)
  } else if (guess !== unknownNumber) {
    if (score > 1) {
      getMessage(guess > unknownNumber ? 'Too high!' : 'Too low!');
      score--;
      getScore(score);
    } else {
      getMessage('You lost, try again!');
      getScore(0);
    }
  }
  //! First version (uncondensed)
  //   }else if (guess > unknownNumber) {
  //     if (score > 1) {
  //       document.querySelector('.message').textContent = 'Too high!';
  //       score--;
  //       document.querySelector('.score').textContent = score;
  //     } else {
  //       document.querySelector('.message').textContent = 'You lost, try again!';
  //       document.querySelector('.score').textContent = 0;
  //     }
  //   } else if (guess < unknownNumber) {
  //     if (score > 1) {
  //       document.querySelector('.message').textContent = 'Too low!';
  //       score--;
  //       document.querySelector('.score').textContent = score;
  //     } else {
  //       document.querySelector('.message').textContent = 'You lost, try again!';
  //       document.querySelector('.score').textContent = 0;
  //     }
  //   }

  document.querySelector('.again').addEventListener('click', function () {
    score = 20;
    unknownNumber = Math.trunc(Math.random() * 20 + 1);
    getMessage('Start guessing...');
    getScore(score);
    boxStyle('15rem', '?');

    document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundColor = '#222';
  });
});

//! Version without functions

//   if (!guess) {
//     document.querySelector('.message').textContent = 'No number!';

//   } else if (guess === unknownNumber) {
//     document.querySelector('.message').textContent = 'Correct number!';
//     document.querySelector('body').style.backgroundColor = '#60b347';
//     document.querySelector('.number').style.width = '35rem';
//     document.querySelector('.number').textContent = guess;

//     if (highscore < score) {
//       highscore = score;
//       document.querySelector('.highscore').textContent = highscore;
//     }
//     //! Final version (condensed)
//   } else if (guess !== unknownNumber) {
//     if (score > 1) {
//         document.querySelector('.message').textContent =
//           guess > unknownNumber ? 'Too high!' : 'Too low!';
//       score--;
//       document.querySelector('.score').textContent = score;

//     } else {
//         document.querySelector('.message').textContent = 'You lost, try again!';
//         document.querySelector('.score').textContent = 0;
//     }
//   }
//   //! First version (uncondensed)
//   //   }else if (guess > unknownNumber) {
//   //     if (score > 1) {
//   //       document.querySelector('.message').textContent = 'Too high!';
//   //       score--;
//   //       document.querySelector('.score').textContent = score;
//   //     } else {
//   //       document.querySelector('.message').textContent = 'You lost, try again!';
//   //       document.querySelector('.score').textContent = 0;
//   //     }
//   //   } else if (guess < unknownNumber) {
//   //     if (score > 1) {
//   //       document.querySelector('.message').textContent = 'Too low!';
//   //       score--;
//   //       document.querySelector('.score').textContent = score;
//   //     } else {
//   //       document.querySelector('.message').textContent = 'You lost, try again!';
//   //       document.querySelector('.score').textContent = 0;
//   //     }
//   //   }

//   document.querySelector('.again').addEventListener('click', function () {
//     score = 20;
//     unknownNumber = Math.trunc(Math.random() * 20 + 1);

//     document.querySelector('.guess').value = '';
//     document.querySelector('.message').textContent = 'Start guessing...';
//     document.querySelector('.score').textContent = score;
//     document.querySelector('body').style.backgroundColor = '#222';
//     document.querySelector('.number').style.width = '15rem';
//     document.querySelector('.number').textContent = '?';

//   });
// });
