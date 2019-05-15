const words = ["wow", "cool", "kewl", "round", "circle", "triangle"];

// Chooses a random word from the array of values
let randoWord = Math.floor(Math.random()*words.length);
console.log(randoWord);

chosenWord = words[randoWord];
console.log(chosenWord);

// creates an array with each letter of the chosen word being a value of the array
let wordArray = chosenWord.split("");
console.log(wordArray);

// Loops through each letter of the wordArray and creates a div for it to appear on html
wordArray.forEach(letter => {
    console.log(letter);
    $('.word').append(`<div class="letters ${letter}">${letter}</div>`);
    
})

$('button').on('click', function() {
    const letterValue = $(this).val();
    console.log(letterValue);
    wordArray.forEach(letter => {
        if (letter === letterValue) {
            console.log("got it");
            console.log(wordArray.indexOf(letterValue))
            $(`div.${letter}`).addClass(`lettersGuessed`);
        } else if (letter !== letterValue) {
            console.log("incorrect");
        };
    });
        
    // const correctGuess = wordArray.filter(letter => {
    //     // return letter === "o";
        
    //     return wordArray.indexOf(letter);
    // });
    // console.log(correctGuess);
});




