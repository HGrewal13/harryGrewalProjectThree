const app = {};

// Stores the words to be selected in an array
// const words = ["wow", "cool", "kewl", "round", "circle", "triangle"];
app.words = ["toronto", "windsor", "sarnia", "london", "hamilton", "ottawa"];
// defines the number of tries the user has to get the word
app.lives = 7;
app.correctGuesses = [];
app.randoWord = Math.floor(Math.random() * app.words.length);
app.subjectCount = 1;
app.init = function () {

// Chooses a random word from the array of values
    // let randoWord = Math.floor(Math.random()*app.words.length);
    // console.log(randoWord);

    chosenWord = app.words[app.randoWord];
    console.log(chosenWord);

    // creates an array with each letter of the chosen word being a value of the array
    let answer = chosenWord.split("");
    console.log(answer);

    // Loops through each letter of the wordArray and creates a div for it to appear on html. The created div is given a class with the name of the letter (ex: letter a will give the div a class of ".a"). The div will also display the letter on screen
    answer.forEach(letter => {
        console.log(letter);
        $('.word').append(`<div class="letters ${letter}">${letter}</div>`);
        
    })

    // while(correctGuesses.length<answer.length) {
        $('button').on('click', function() {
            const letterValue = $(this).val();
            console.log(letterValue);
            let roundCounter = 0;
            answer.forEach(letter => {
                if (letter === letterValue) {
                    console.log("got it");
                    console.log(answer.indexOf(letterValue))
                    $(`div.${letter}`).addClass(`lettersGuessed`);
                    app.correctGuesses.push([`${letter}`]);
                    console.log(app.correctGuesses);
                    roundCounter ++;
                } else if (letter !== letterValue) {
                    // console.log("incorrect");
                    // lives --;
                    // console.log(`you have ${lives} left`);
                };
            });
            // WHY DOESN'T THIS 'THIS' NEED A $
            (this).disabled = true;
            $(this).addClass('disabledButton');
            // console.log(this);
            
            if (roundCounter === 0) {
                app.lives--;
                $(`.grade${app.subjectCount}.f`).addClass('visible');
                console.log("incorrect");
                app.subjectCount ++;
            } else {
                // $('.a').addClass('visible');
                // $(`.grade${app.subjectCount}.a`).addClass('visible');
                roundCounter = 0;
                // app.subjectCount ++;
            };
            
            console.log(`you have ${app.lives} left`);
            // $('.lifeCount').empty();
            // $('.lifeCount').append(`${app.lives}`);
            if (app.correctGuesses.length === answer.length) {
                setTimeout("confirm('You Win! Play Again?')", 200);
                // if (confirm('You Win!')(setTimeout("confirm('Play Again?')", 200))) {
                //     document.location.reload();
                // }
                
                // if (confirm()) {
                //     setTimeout(document.location.reload(), 400);
                // }
                // setTimeout(document.location.reload(), 400);
                // document.location.reload();
                // INSERT PLAY AGAIN BUTTON
            } else if (app.lives === 0) {
                setTimeout("confirm('You Lose! Play Again?')", 200);
            }
        });
    // };

    // $('.lifeCount').append(`${app.lives}`);
};

// While loop so: while the length for correctGuesses < answer, the functions run. When the length is the same, pop up the winning screen 
// array for correct guesses

$(document).ready(function() {
    app.init();
});



// toggleClass for animations