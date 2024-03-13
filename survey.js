const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What is your name? Nicknames are also accepted.', (answer) => {
  let surveyName = answer;
  rl.question('What\'s an activity you like doing?', (answer) => {
    let surveyActivity = answer;
    rl.question('What do you listen to while you do that?', (answer) => {
      let surveyListen = answer;
      rl.question('Which meal is your favourite (eg: dinner, brunch, etc.)?', (answer) => {
        let surveyMeal = answer;
        rl.question('What\'s your favourite thing to eat for that meal?', (answer) => {
          let surveyFood = answer;
          rl.question('Which sport is your absolute favourite?', (answer) => {
            let surveySport = answer;
            rl.question('Who is your favourite player in that sport?', (answer) => {
              let surveyPlayer = answer;
              console.log(`Thank you for your valuable feedback: ${surveyName} loves listening to ${surveyListen} while ${surveyActivity}, devouring ${surveyFood} for ${surveyMeal}, prefers ${surveySport} over any other sport, and their favourite player is ${surveyPlayer}!.}`);
              rl.close();
            })
          })
        })
      })
    })
  })
});


//Questions
// What's your name? Nicknames are also acceptable :)
// What's an activity you like doing?
// What do you listen to while doing that?
// Which meal is your favourite (eg: dinner, brunch, etc.)
// What's your favourite thing to eat for that meal?
// Which sport is your absolute favourite?
// Who is your favourite player in that sport?