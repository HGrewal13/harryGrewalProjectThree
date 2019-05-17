// Stores the words to be selected in an array
const words = ["wow", "cool", "kewl", "round", "circle", "triangle"];
// defines the number of tries the user has to get the word
let lives = 8;
let correctGuesses = [];

// Chooses a random word from the array of values
let randoWord = Math.floor(Math.random()*words.length);
// console.log(randoWord);

chosenWord = words[randoWord];
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
                correctGuesses.push([`${letter}`]);
                console.log(correctGuesses);
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
            lives--;
            console.log("incorrect");
        } else {
            roundCounter = 0;
        };
        
        console.log(`you have ${lives} left`);
        $('.lifeCount').empty();
        $('.lifeCount').append(`${lives}`);
        if (correctGuesses.length === answer.length) {
            alert('you win!');
            // INSERT PLAY AGAIN BUTTON
        } else if (lives === 0) {
            alert('You Lose');
        }
    });
// };

$('.lifeCount').append(`${lives}`);


// While loop so: while the length for correctGuesses < answer, the functions run. When the length is the same, pop up the winning screen 
// array for correct guesses

