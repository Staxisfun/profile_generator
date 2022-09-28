const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What\'s your name? ', (answer1) => {
  console.log(`Thank you for your valuable feedback: ${answer1}`);

  rl.question('What\'s your favorite game to play? ', (answer2) => {
    console.log(`Thank you for your valuable feedback: ${answer2}`);

    rl.question('What do you listen to while doing that? ', (answer3) => {
      console.log(`Thank you for your valuable feedback: ${answer3}`);

      rl.question('Which meal is your favorite? ', (answer4) => { console.log(`Thank you for your valuable feedback: ${answer4}`);

        rl.question('What\'s your favorite thing to eat for that meal? ', (answer5) => { console.log(`Thank you for your valuable feedback: ${answer5}`);

        rl.question('Which sport is your absolute favorite? ', (answer6) => {
          console.log(`Thank you for your valuable feedback: ${answer6}`);


          rl.question('What is your superpower? in a few words, tell us what you are amazing at! ', (answer7) => {
            console.log(`\n ${answer1} loves playing ${answer2} while listening to ${answer3} and eating ${answer4} especially the ${answer5}. ${answer1} loves ${answer6} and is amazing at ${answer7}.`);








        rl.close();
      });
    });
  });
});
});
});
});