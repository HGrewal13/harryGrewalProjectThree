const app = {};

// Stores the words to be selected in an array
app.words = ["toronto", "windsor", "sarnia", "london", "hamilton", "ottawa"];
// defines the number of tries the user has to get the word
app.lives = 7;
app.correctGuesses = [];
app.randoWord = Math.floor(Math.random() * app.words.length);
app.subjectCount = 1;
app.init = function () {

// Chooses a random word from the array of values
    chosenWord = app.words[app.randoWord];

    // creates an array with each letter of the chosen word being a value of the array
    let answer = chosenWord.split("");

    // Loops through each letter of the wordArray and creates a div for it to appear on html. The created div is given a class with the name of the letter (ex: letter a will give the div a class of ".a"). The div will also display the letter on screen
    answer.forEach(letter => {
        $('.word').append(`<div class="letters ${letter}">${letter}</div>`);
    })

    // When a button is clicked, the value assigned to each button is stored in the variable letterValue
    $('button').on('click', function() {
        const letterValue = $(this).val();
        // roundCounter is a variable that get incremented when a letter in the array matches a letter guessed
        let roundCounter = 0;
        answer.forEach(letter => {
            if (letter === letterValue) {
                $(`div.${letter}`).addClass(`lettersGuessed`);
                app.correctGuesses.push([`${letter}`]);
                roundCounter ++;
            };
        });
        // after a button is selected, it becomes disabled, and a class is added to it which makes it transparent
        (this).disabled = true;
        $(this).addClass('disabledButton');
        
        // if roundCounter doesn't get incremented (the letter selected isn't in the word), a life is lost and the .f class becomes visible
        if (roundCounter === 0) {
            app.lives--;
            $(`.grade${app.subjectCount}.f`).addClass('visible');
            app.subjectCount ++;
        } else {
            // roundCounter is reset for the next guess
            roundCounter = 0;
        };

        // If the array containing correct guesses equals the array containing the letters of the chosen word, the user wins 
        // If the user's lives fall to 0, they lose
        if (app.correctGuesses.length === answer.length) {
            setTimeout("confirm('You Win! Play Again?')", 200);
        } else if (app.lives === 0) {
            setTimeout("confirm('You Lose! Play Again?')", 200);
        }
    });
};

$(document).ready(function() {
    app.init();
});
