//START
function game() {

    //VARIABLES AND MORE
    var player = {
        health: 30,
        grade: "A",
        name: "Student"
    };
    var userName = function(name){
        player.name = name;
        console.log("Are you ready for your test today, " + name + "?");
    };

    //TESTS SCORES AND MORE
    var vocabTest = {
        taken: false,
        grade: 0
    };
    var mathTest = {
        taken: false,
        grade: 0
    };
    var scienceTest = {
        taken: false,
        grade: 0
    };
    var historyTest = {
        taken: false,
        grade: 0
    };
    var gradeAverage = (scienceTest.grade + vocabTest.grade + mathTest.grade + scienceTest.grade) / 4;

    //

    // ALL QUESTIONS
    var vocabQuestion1 = function(answer){
        if (answer === "nite"){
            console.log("You bubble in your answer.");
            vocabTest.grade += 20;
        }
        else {
            console.log("You bubble in your answer.");
        }
    };
    var vocabQuestion2 = function(answer){
        if (answer === "layte"){
            console.log("You bubble in your answer.");
            vocabTest.grade += 20;
        }
        else {
            console.log("You bubble in your answer.");
        }
    };
    var vocabQuestion3 = function(answer){
        if (answer === "propper"){
            console.log("You bubble in your answer.");
            vocabTest.grade += 20;
        }
        else {
            console.log("You bubble in your answer.");
        }
    };
    var vocabQuestion4 = function(answer){
        if (answer === "popsicle"){
            console.log("You bubble in your answer.");
            vocabTest.grade += 20;
        }
        else {
            console.log("You bubble in your answer.");
        }
    };
    var vocabQuestion5 = function(answer){
        if (answer === "false"){
            console.log("You bubble in your answer.");
            vocabTest.grade += 20;
        }
        else {
            console.log("You bubble in your answer.");
        }
    };
    var mathQuestion1 = function(answer){
        if (answer === "b"){
            console.log("You bubble in your answer.");
            mathTest.grade += 20;
        }
        else {
            console.log("You bubble in your answer.");
        }
    };
    var mathQuestion2 = function(answer){
        if (answer === "a"){
            console.log("You bubble in your answer.");
            mathTest.grade += 20;
        }
        else {
            console.log("You bubble in your answer.");
        }
    };
    var mathQuestion3 = function(answer){
        if (answer === "a"){
            console.log("You bubble in your answer.");
            mathTest.grade += 20;
        }
        else {
            console.log("You bubble in your answer.");
        }
    };
    var mathQuestion4 = function(answer){
        if (answer === "b"){
            console.log("You bubble in your answer.");
            mathTest.grade += 20;
        }
        else {
            console.log("You bubble in your answer.");
        }
    };
    var mathQuestion5 = function(answer){
        if (answer === "c"){
            console.log("You bubble in your answer.");
            mathTest.grade += 20;
        }
        else {
            console.log("You bubble in your answer.");
        }
    };

    var historyQuestion1 = function(answer){
        if (answer === "true"){
            console.log("You bubble in your answer.");
            historyTest.grade += 20;
        }
        else {
            console.log("You bubble in your answer.");
        }
    };
    var historyQuestion2 = function(answer){
        if (answer === "c"){
            console.log("You bubble in your answer.");
            historyTest.grade += 20;
        }
        else {
            console.log("You bubble in your answer.");
        }
    };
    var historyQuestion3 = function(answer){
        if (answer === "b"){
            console.log("You bubble in your answer.");
            historyTest.grade += 20;
        }
        else {
            console.log("You bubble in your answer.");
        }
    };
    var historyQuestion4 = function(answer){
        if (answer === "a"){
            console.log("You bubble in your answer.");
            historyTest.grade += 20;
        }
        else {
            console.log("You bubble in your answer.");
        }
    };
    var historyQuestion5 = function(answer){
        if (answer === "c"){
            console.log("You bubble in your answer.");
            historyTest.grade += 20;
        }
        else {
            console.log("You bubble in your answer.");
        }
    };
    var scienceQuestion1 = function(answer){
        if (answer === "c"){
            console.log("You bubble in your answer.");
        }
        else {
            console.log("You bubble in your answer.");
            scienceTest.grade += 20;
        }
    };
    var scienceQuestion2 = function(answer){
        if (answer === "b"){
            console.log("You bubble in your answer.");
            scienceTest.grade += 20;
        }
        else {
            console.log("You bubble in your answer.");
        }
    };
    var scienceQuestion3 = function(answer){
        if (answer === "b"){
            console.log("You bubble in your answer.");
            scienceTest.grade += 20;
        }
        else {
            console.log("You bubble in your answer.");
        }
    };
    var scienceQuestion4 = function(answer){
        if (answer === "b"){
            console.log("You bubble in your answer.");
            scienceTest.grade += 20;
        }
        else {
            console.log("You bubble in your answer.");
        }
    };
    var scienceQuestion5 = function(answer){
        if (answer === "b"){
            console.log("You bubble in your answer.");
            scienceTest.grade += 20;
        }
        else {
            console.log("You bubble in your answer.");
        }
    };

    //WAIT FUNCTION
    function sleep(milliseconds) {
        var start = new Date().getTime();
        for (var i = 0; i < 1e7; i++) {
            if ((new Date().getTime() - start) > milliseconds){
                break;
            }
        }
    }

    //Restart game Command
    var gameRestart = function(answer) {
        if (answer === "Y"){
            game();
        }
        else {
            console.log("Thanks for playing!");
            sleep(5000);
            throw new Error("Refresh the page!");
        }
    };
    console.log("Welcome!");
    sleep(2000);
    userName(prompt("What is your name?"));
    sleep(2000);
    console.log("DO NOT USE CAPITAL LETTERS");
    sleep(2000);
    console.log("You want to be an adventurer when you grow up.");
    sleep(2000);
    console.log("However, right now you have to go to school.");
    sleep(2000);
    console.log("You have four tests you have to retake because you were absent.");
    sleep(2000);
    console.log("You didn't study for any of them, but you have to take them at least one.");
    sleep(2000);
    console.log("Hopefully you don't fail out of your classes today.");
    sleep(2000);
    var takeTest = prompt("Which test do you take first? (Vocab/Math/Science/History)");
    sleep(2000);
    switch(takeTest){
        case "vocab":
            console.log("You begin the test with high hopes.");
            sleep(2000);
            console.log("You write your name at the top of the paper and begin.");
            sleep(2000);
            console.log("Suddenly, you remember that the teacher isn't good at spelling.");
            sleep(2000);
            vocabQuestion1(prompt("What is the antonym of Day."));
            sleep(2000);
            vocabQuestion2(prompt("What is the antonym of Early."));
            sleep(2000);
            vocabQuestion3(prompt("What is the proper spelling of proper?"));
            vocabQuestion4(prompt("How do you spell 'Popsicle'"));
            sleep(2000);
            sleep(2000);
            vocabQuestion5(prompt("What is the antonym of correct?"));
            sleep(2000);
            console.log("You got a...");
            sleep(2000);
            if (vocabTest.grade < 59){
                console.log("You got a F (" + vocabTest.grade + ")");
            }
            else if (vocabTest.grade < 69){
                console.log("You got a D (" + vocabTest.grade + ")");
            }
            else if (vocabTest.grade < 79){
                console.log("You got a C (" + vocabTest.grade + ")");
            }
            else if (vocabTest.grade < 89){
                console.log("You got a B (" + vocabTest.grade + ")");
            }
            else {
                console.log("You got an A! (" + vocabTest.grade + ")");
            }
            sleep(5000);
            //HISTORY
            console.log("You begin the test with high hopes.");
            sleep(2000);
            console.log("You write your name at the top of the paper and begin.");
            sleep(2000);
            console.log("Suddenly, you remember that the teacher isn't good at history.");
            sleep(2000);
            console.log("Is Apple music useless?");
            sleep(1000);
            console.log("True");
            sleep(1000);
            console.log("False");
            sleep(1000);
            historyQuestion1(prompt("What is your answer?"));
            sleep(2000);
            console.log("What is the most important invention in history?");
            sleep(1000);
            console.log("a) The Wheel");
            sleep(1000);
            console.log("b) The Bow");
            sleep(1000);
            console.log("c) Toilet paper");
            sleep(1000);
            historyQuestion2(prompt("What is your answer?"));
            sleep(2000);
            console.log("Who is the most famous American President?");
            sleep(1000);
            console.log("a) George Washington");
            sleep(1000);
            console.log("b) Franklin Pierce");
            sleep(1000);
            console.log("c) Abraham Lincoln");
            sleep(1000);
            historyQuestion3(prompt("What is your answer?"));
            sleep(2000);
            console.log("Who made the Statue of Liberty?");
            sleep(1000);
            console.log("a) France");
            sleep(1000);
            console.log("b) Spain");
            sleep(1000);
            console.log("c) Germany");
            sleep(1000);
            historyQuestion4(prompt("What is your answer?"));
            sleep(2000);
            console.log("Who built the pyramids?");
            sleep(1000);
            console.log("a) The Egyptians");
            sleep(1000);
            console.log("b) The Earth");
            sleep(1000);
            console.log("c) Aliens");
            sleep(1000);
            historyQuestion5(prompt("What is your answer?"));
            sleep(2000);
            console.log("You got a...");
            sleep(2000);
            if (historyTest.grade < 59){
                console.log("You got a F (" + historyTest.grade + ")");
            }
            else if (historyTest.grade < 69){
                console.log("You got a D (" + historyTest.grade + ")");
            }
            else if (historyTest.grade < 79){
                console.log("You got a C (" + historyTest.grade + ")");
            }
            else if (historyTest.grade < 89){
                console.log("You got a B (" + historyTest.grade + ")");
            }
            else {
                console.log("You got an A! (" + historyTest.grade + ")");
            }
            sleep(5000);
            //MATH
            console.log("You begin the test with high hopes.");
            sleep(2000);
            console.log("You write your name at the top of the paper and begin.");
            sleep(2000);
            console.log("Suddenly, you remember that the teacher isn't good at math.");
            sleep(2000);
            console.log("What is 9 + 9?");
            sleep(1000);
            console.log("a) 18");
            sleep(1000);
            console.log("b) 99");
            sleep(1000);
            console.log("c) 1");
            sleep(1000);
            mathQuestion1(prompt("What is the answer?"));
            sleep(2000);
            console.log("What is: f(x) = 5x - 199?");
            sleep(1000);
            console.log("a) dumb");
            sleep(1000);
            console.log("b) A straight line heading upwards.");
            sleep(1000);
            console.log("c) A straight line heading downwards.");
            sleep(1000);
            mathQuestion2(prompt("What is your answer?"));
            sleep(2000);
            console.log("What is: f(x) = 5x - 45  if f(x) = 9");
            sleep(1000);
            console.log("a) f(9) = 59 - 45");
            sleep(1000);
            console.log("b) f(9) = 0");
            sleep(1000);
            console.log("c) f(9) = 90");
            sleep(1000);
            mathQuestion3(prompt("What is your answer?"));
            sleep(2000);
            console.log("What is the square root of 9?");
            sleep(1000);
            console.log("a) 3");
            sleep(1000);
            console.log("b) A type of rectangular garden invaders");
            sleep(1000);
            console.log("c) 9 in a square pattern");
            sleep(1000);
            mathQuestion4(prompt("What is your answer?"));
            sleep(2000);
            console.log("What is the airspeed velocity of an unladen south european swallow?");
            sleep(1000);
            console.log("a) 11 feet per year");
            sleep(1000);
            console.log("b) 11 meters every once in a while");
            sleep(1000);
            console.log("c) 24 miles an hour");
            sleep(1000);
            mathQuestion5(prompt("What is your answer?"));
            sleep(2000);
            console.log("You got a...");
            sleep(2000);
            if (mathTest.grade < 59){
                console.log("You got a F (" + mathTest.grade + ")");
            }
            else if (mathTest.grade < 69){
                console.log("You got a D (" + mathTest.grade + ")");
            }
            else if (mathTest.grade < 79){
                console.log("You got a C (" + mathTest.grade + ")");
            }
            else if (mathTest.grade < 89){
                console.log("You got a B (" + mathTest.grade + ")");
            }
            else {
                console.log("You got an A! (" + mathTest.grade + ")");
            }
            sleep(5000);
            //SCIENCE
            console.log("You begin the test with high hopes.");
            sleep(2000);
            console.log("You write your name at the top of the paper and begin.");
            sleep(2000);
            console.log("Suddenly, you remember that the teacher isn't good at science.");
            sleep(2000);
            console.log("You add three pints of acid into a beaker, and burn your hand. Why?");
            sleep(1000);
            console.log("a) You are not wearing gloves.");
            sleep(1000);
            console.log("b) Someone smacked your container while you were pouring.");
            sleep(1000);
            console.log("c) You had too much acid in your beaker.");
            sleep(1000);
            scienceQuestion1(prompt("What is your answer?"));
            sleep(2000);
            console.log("What element is carbon?");
            sleep(1000);
            console.log("a) H");
            sleep(1000);
            console.log("b) C");
            sleep(1000);
            console.log("c) K");
            sleep(1000);
            scienceQuestion2(prompt("What is your answer?"));
            sleep(2000);
            console.log("What is the boiling point of water?");
            sleep(1000);
            console.log("a) 212 C");
            sleep(1000);
            console.log("b) 100 C");
            sleep(1000);
            console.log("c) 0 C");
            sleep(1000);
            scienceQuestion3(prompt("What is your answer?"));
            sleep(2000);
            console.log("What state of matter takes a shape but has definite volume");
            sleep(1000);
            console.log("a) Gas");
            sleep(1000);
            console.log("b) Liquid");
            sleep(1000);
            console.log("c) Solid");
            sleep(1000);
            scienceQuestion4(prompt("What is your answer?"));
            sleep(2000);
            console.log("What is the chemical composition of a pencil?");
            sleep(1000);
            console.log("a) LoL");
            sleep(1000);
            console.log("b) PbC");
            sleep(1000);
            console.log("c) ToPk");
            sleep(1000);
            scienceQuestion5(prompt("What is your answer?"));
            sleep(2000);
            console.log("You got a...");
            sleep(2000);
            if (scienceTest.grade < 59){
                console.log("You got a F (" + scienceTest.grade + ")");
            }
            else if (scienceTest.grade < 69){
                console.log("You got a D (" + scienceTest.grade + ")");
            }
            else if (scienceTest.grade < 79){
                console.log("You got a C (" + scienceTest.grade + ")");
            }
            else if (scienceTest.grade < 89){
                console.log("You got a B (" + scienceTest.grade + ")");
            }
            else {
                console.log("You got an A! (" + scienceTest.grade + ")");
            }
            sleep(5000);
            break;

        //MATH TEST FIRST
        case "math":
            console.log("You begin the test with high hopes.");
            sleep(2000);
            console.log("You write your name at the top of the paper and begin.");
            sleep(2000);
            console.log("Suddenly, you remember that the teacher isn't good at math.");
            sleep(2000);
            console.log("What is 9 + 9?");
            sleep(1000);
            console.log("a) 18");
            sleep(1000);
            console.log("b) 99");
            sleep(1000);
            console.log("c) 1");
            sleep(1000);
            mathQuestion1(prompt("What is the answer?"));
            sleep(2000);
            console.log("What is: f(x) = 5x - 199?");
            sleep(1000);
            console.log("a) dumb");
            sleep(1000);
            console.log("b) A straight line heading upwards.");
            sleep(1000);
            console.log("c) A straight line heading downwards.");
            sleep(1000);
            mathQuestion2(prompt("What is your answer?"));
            sleep(2000);
            console.log("What is: f(x) = 5x - 45  if f(x) = 9");
            sleep(1000);
            console.log("a) f(9) = 59 - 45");
            sleep(1000);
            console.log("b) f(9) = 0");
            sleep(1000);
            console.log("c) f(9) = 90");
            sleep(1000);
            mathQuestion3(prompt("What is your answer?"));
            sleep(2000);
            console.log("What is the square root of 9?");
            sleep(1000);
            console.log("a) 3");
            sleep(1000);
            console.log("b) A type of rectangular garden invaders");
            sleep(1000);
            console.log("c) 9 in a square pattern");
            sleep(1000);
            mathQuestion4(prompt("What is your answer?"));
            sleep(2000);
            console.log("What is the airspeed velocity of an unladen south european swallow?");
            sleep(1000);
            console.log("a) 11 feet per year");
            sleep(1000);
            console.log("b) 11 meters every once in a while");
            sleep(1000);
            console.log("c) 24 miles an hour");
            sleep(1000);
            mathQuestion5(prompt("What is your answer?"));
            sleep(2000);
            console.log("You got a...");
            sleep(2000);
            if (mathTest.grade < 59){
                console.log("You got a F (" + mathTest.grade + ")");
            }
            else if (mathTest.grade < 69){
                console.log("You got a D (" + mathTest.grade + ")");
            }
            else if (mathTest.grade < 79){
                console.log("You got a C (" + mathTest.grade + ")");
            }
            else if (mathTest.grade < 89){
                console.log("You got a B (" + mathTest.grade + ")");
            }
            else {
                console.log("You got an A! (" + mathTest.grade + ")");
            }
            sleep(5000);
            //VOCAB
            console.log("You begin the test with high hopes.");
            sleep(2000);
            console.log("You write your name at the top of the paper and begin.");
            sleep(2000);
            console.log("Suddenly, you remember that the teacher isn't good at spelling.");
            sleep(2000);
            vocabQuestion1(prompt("What is the antonym of Day."));
            sleep(2000);
            vocabQuestion2(prompt("What is the antonym of Early."));
            sleep(2000);
            vocabQuestion3(prompt("What is the proper spelling of proper?"));
            vocabQuestion4(prompt("How do you spell 'Popsicle'"));
            sleep(2000);
            sleep(2000);
            vocabQuestion5(prompt("What is the antonym of correct?"));
            sleep(2000);
            console.log("You got a...");
            sleep(2000);
            if (vocabTest.grade < 59){
                console.log("You got a F (" + vocabTest.grade + ")");
            }
            else if (vocabTest.grade < 69){
                console.log("You got a D (" + vocabTest.grade + ")");
            }
            else if (vocabTest.grade < 79){
                console.log("You got a C (" + vocabTest.grade + ")");
            }
            else if (vocabTest.grade < 89){
                console.log("You got a B (" + vocabTest.grade + ")");
            }
            else {
                console.log("You got an A! (" + vocabTest.grade + ")");
            }
            sleep(5000);
            //HISTORY
            console.log("You begin the test with high hopes.");
            sleep(2000);
            console.log("You write your name at the top of the paper and begin.");
            sleep(2000);
            console.log("Suddenly, you remember that the teacher isn't good at history.");
            sleep(2000);
            console.log("Is Apple music useless?");
            sleep(1000);
            console.log("True");
            sleep(1000);
            console.log("False");
            sleep(1000);
            historyQuestion1(prompt("What is your answer?"));
            sleep(2000);
            console.log("What is the most important invention in history?");
            sleep(1000);
            console.log("a) The Wheel");
            sleep(1000);
            console.log("b) The Bow");
            sleep(1000);
            console.log("c) Toilet paper");
            sleep(1000);
            historyQuestion2(prompt("What is your answer?"));
            sleep(2000);
            console.log("Who is the most famous American President?");
            sleep(1000);
            console.log("a) George Washington");
            sleep(1000);
            console.log("b) Franklin Pierce");
            sleep(1000);
            console.log("c) Abraham Lincoln");
            sleep(1000);
            historyQuestion3(prompt("What is your answer?"));
            sleep(2000);
            console.log("Who made the Statue of Liberty?");
            sleep(1000);
            console.log("a) France");
            sleep(1000);
            console.log("b) Spain");
            sleep(1000);
            console.log("c) Germany");
            sleep(1000);
            historyQuestion4(prompt("What is your answer?"));
            sleep(2000);
            console.log("Who built the pyramids?");
            sleep(1000);
            console.log("a) The Egyptians");
            sleep(1000);
            console.log("b) The Earth");
            sleep(1000);
            console.log("c) Aliens");
            sleep(1000);
            historyQuestion5(prompt("What is your answer?"));
            sleep(2000);
            console.log("You got a...");
            sleep(2000);
            if (historyTest.grade < 59){
                console.log("You got a F (" + historyTest.grade + ")");
            }
            else if (historyTest.grade < 69){
                console.log("You got a D (" + historyTest.grade + ")");
            }
            else if (historyTest.grade < 79){
                console.log("You got a C (" + historyTest.grade + ")");
            }
            else if (historyTest.grade < 89){
                console.log("You got a B (" + historyTest.grade + ")");
            }
            else {
                console.log("You got an A! (" + historyTest.grade + ")");
            }
            sleep(5000);
            //SCIENCE
            console.log("You begin the test with high hopes.");
            sleep(2000);
            console.log("You write your name at the top of the paper and begin.");
            sleep(2000);
            console.log("Suddenly, you remember that the teacher isn't good at science.");
            sleep(2000);
            console.log("You add three pints of acid into a beaker, and burn your hand. Why?");
            sleep(1000);
            console.log("a) You are not wearing gloves.");
            sleep(1000);
            console.log("b) Someone smacked your container while you were pouring.");
            sleep(1000);
            console.log("c) You had too much acid in your beaker.");
            sleep(1000);
            scienceQuestion1(prompt("What is your answer?"));
            sleep(2000);
            console.log("What element is carbon?");
            sleep(1000);
            console.log("a) H");
            sleep(1000);
            console.log("b) C");
            sleep(1000);
            console.log("c) K");
            sleep(1000);
            scienceQuestion2(prompt("What is your answer?"));
            sleep(2000);
            console.log("What is the boiling point of water?");
            sleep(1000);
            console.log("a) 212 C");
            sleep(1000);
            console.log("b) 100 C");
            sleep(1000);
            console.log("c) 0 C");
            sleep(1000);
            scienceQuestion3(prompt("What is your answer?"));
            sleep(2000);
            console.log("What state of matter takes a shape but has definite volume");
            sleep(1000);
            console.log("a) Gas");
            sleep(1000);
            console.log("b) Liquid");
            sleep(1000);
            console.log("c) Solid");
            sleep(1000);
            scienceQuestion4(prompt("What is your answer?"));
            sleep(2000);
            console.log("What is the chemical composition of a pencil?");
            sleep(1000);
            console.log("a) LoL");
            sleep(1000);
            console.log("b) PbC");
            sleep(1000);
            console.log("c) ToPk");
            sleep(1000);
            scienceQuestion5(prompt("What is your answer?"));
            sleep(2000);
            console.log("You got a...");
            sleep(2000);
            if (scienceTest.grade < 59){
                console.log("You got a F (" + scienceTest.grade + ")");
            }
            else if (scienceTest.grade < 69){
                console.log("You got a D (" + scienceTest.grade + ")");
            }
            else if (scienceTest.grade < 79){
                console.log("You got a C (" + scienceTest.grade + ")");
            }
            else if (scienceTest.grade < 89){
                console.log("You got a B (" + scienceTest.grade + ")");
            }
            else {
                console.log("You got an A! (" + scienceTest.grade + ")");
            }
            sleep(5000);
            break;

        //SCIENCE TEST FIRST
        case "science":
            console.log("You begin the test with high hopes.");
            sleep(2000);
            console.log("You write your name at the top of the paper and begin.");
            sleep(2000);
            console.log("Suddenly, you remember that the teacher isn't good at science.");
            sleep(2000);
            console.log("You add three pints of acid into a beaker, and burn your hand. Why?");
            sleep(1000);
            console.log("a) You are not wearing gloves.");
            sleep(1000);
            console.log("b) Someone smacked your container while you were pouring.");
            sleep(1000);
            console.log("c) You had too much acid in your beaker.");
            sleep(1000);
            scienceQuestion1(prompt("What is your answer?"));
            sleep(2000);
            console.log("What element is carbon?");
            sleep(1000);
            console.log("a) H");
            sleep(1000);
            console.log("b) C");
            sleep(1000);
            console.log("c) K");
            sleep(1000);
            scienceQuestion2(prompt("What is your answer?"));
            sleep(2000);
            console.log("What is the boiling point of water?");
            sleep(1000);
            console.log("a) 212 C");
            sleep(1000);
            console.log("b) 100 C");
            sleep(1000);
            console.log("c) 0 C");
            sleep(1000);
            scienceQuestion3(prompt("What is your answer?"));
            sleep(2000);
            console.log("What state of matter takes a shape but has definite volume");
            sleep(1000);
            console.log("a) Gas");
            sleep(1000);
            console.log("b) Liquid");
            sleep(1000);
            console.log("c) Solid");
            sleep(1000);
            scienceQuestion4(prompt("What is your answer?"));
            sleep(2000);
            console.log("What is the chemical composition of a pencil?");
            sleep(1000);
            console.log("a) LoL");
            sleep(1000);
            console.log("b) PbC");
            sleep(1000);
            console.log("c) ToPk");
            sleep(1000);
            scienceQuestion5(prompt("What is your answer?"));
            sleep(2000);
            console.log("You got a...");
            sleep(2000);
            if (scienceTest.grade < 59){
                console.log("You got a F (" + scienceTest.grade + ")");
            }
            else if (scienceTest.grade < 69){
                console.log("You got a D (" + scienceTest.grade + ")");
            }
            else if (scienceTest.grade < 79){
                console.log("You got a C (" + scienceTest.grade + ")");
            }
            else if (scienceTest.grade < 89){
                console.log("You got a B (" + scienceTest.grade + ")");
            }
            else {
                console.log("You got an A! (" + scienceTest.grade + ")");
            }
            sleep(5000);
            //VOCAB
            console.log("You begin the test with high hopes.");
            sleep(2000);
            console.log("You write your name at the top of the paper and begin.");
            sleep(2000);
            console.log("Suddenly, you remember that the teacher isn't good at spelling.");
            sleep(2000);
            vocabQuestion1(prompt("What is the antonym of Day."));
            sleep(2000);
            vocabQuestion2(prompt("What is the antonym of Early."));
            sleep(2000);
            vocabQuestion3(prompt("What is the proper spelling of proper?"));
            vocabQuestion4(prompt("How do you spell 'Popsicle'"));
            sleep(2000);
            sleep(2000);
            vocabQuestion5(prompt("What is the antonym of correct?"));
            sleep(2000);
            console.log("You got a...");
            sleep(2000);
            if (vocabTest.grade < 59){
                console.log("You got a F (" + vocabTest.grade + ")");
            }
            else if (vocabTest.grade < 69){
                console.log("You got a D (" + vocabTest.grade + ")");
            }
            else if (vocabTest.grade < 79){
                console.log("You got a C (" + vocabTest.grade + ")");
            }
            else if (vocabTest.grade < 89){
                console.log("You got a B (" + vocabTest.grade + ")");
            }
            else {
                console.log("You got an A! (" + vocabTest.grade + ")");
            }
            sleep(5000);
            //HISTORY
            console.log("You begin the test with high hopes.");
            sleep(2000);
            console.log("You write your name at the top of the paper and begin.");
            sleep(2000);
            console.log("Suddenly, you remember that the teacher isn't good at history.");
            sleep(2000);
            console.log("Is Apple music useless?");
            sleep(1000);
            console.log("True");
            sleep(1000);
            console.log("False");
            sleep(1000);
            historyQuestion1(prompt("What is your answer?"));
            sleep(2000);
            console.log("What is the most important invention in history?");
            sleep(1000);
            console.log("a) The Wheel");
            sleep(1000);
            console.log("b) The Bow");
            sleep(1000);
            console.log("c) Toilet paper");
            sleep(1000);
            historyQuestion2(prompt("What is your answer?"));
            sleep(2000);
            console.log("Who is the most famous American President?");
            sleep(1000);
            console.log("a) George Washington");
            sleep(1000);
            console.log("b) Franklin Pierce");
            sleep(1000);
            console.log("c) Abraham Lincoln");
            sleep(1000);
            historyQuestion3(prompt("What is your answer?"));
            sleep(2000);
            console.log("Who made the Statue of Liberty?");
            sleep(1000);
            console.log("a) France");
            sleep(1000);
            console.log("b) Spain");
            sleep(1000);
            console.log("c) Germany");
            sleep(1000);
            historyQuestion4(prompt("What is your answer?"));
            sleep(2000);
            console.log("Who built the pyramids?");
            sleep(1000);
            console.log("a) The Egyptians");
            sleep(1000);
            console.log("b) The Earth");
            sleep(1000);
            console.log("c) Aliens");
            sleep(1000);
            historyQuestion5(prompt("What is your answer?"));
            sleep(2000);
            console.log("You got a...");
            sleep(2000);
            if (historyTest.grade < 59){
                console.log("You got a F (" + historyTest.grade + ")");
            }
            else if (historyTest.grade < 69){
                console.log("You got a D (" + historyTest.grade + ")");
            }
            else if (historyTest.grade < 79){
                console.log("You got a C (" + historyTest.grade + ")");
            }
            else if (historyTest.grade < 89){
                console.log("You got a B (" + historyTest.grade + ")");
            }
            else {
                console.log("You got an A! (" + historyTest.grade + ")");
            }
            sleep(5000);
            //MATH
            console.log("You begin the test with high hopes.");
            sleep(2000);
            console.log("You write your name at the top of the paper and begin.");
            sleep(2000);
            console.log("Suddenly, you remember that the teacher isn't good at math.");
            sleep(2000);
            console.log("What is 9 + 9?");
            sleep(1000);
            console.log("a) 18");
            sleep(1000);
            console.log("b) 99");
            sleep(1000);
            console.log("c) 1");
            sleep(1000);
            mathQuestion1(prompt("What is the answer?"));
            sleep(2000);
            console.log("What is: f(x) = 5x - 199?");
            sleep(1000);
            console.log("a) dumb");
            sleep(1000);
            console.log("b) A straight line heading upwards.");
            sleep(1000);
            console.log("c) A straight line heading downwards.");
            sleep(1000);
            mathQuestion2(prompt("What is your answer?"));
            sleep(2000);
            console.log("What is: f(x) = 5x - 45  if f(x) = 9");
            sleep(1000);
            console.log("a) f(9) = 59 - 45");
            sleep(1000);
            console.log("b) f(9) = 0");
            sleep(1000);
            console.log("c) f(9) = 90");
            sleep(1000);
            mathQuestion3(prompt("What is your answer?"));
            sleep(2000);
            console.log("What is the square root of 9?");
            sleep(1000);
            console.log("a) 3");
            sleep(1000);
            console.log("b) A type of rectangular garden invaders");
            sleep(1000);
            console.log("c) 9 in a square pattern");
            sleep(1000);
            mathQuestion4(prompt("What is your answer?"));
            sleep(2000);
            console.log("What is the airspeed velocity of an unladen south european swallow?");
            sleep(1000);
            console.log("a) 11 feet per year");
            sleep(1000);
            console.log("b) 11 meters every once in a while");
            sleep(1000);
            console.log("c) 24 miles an hour");
            sleep(1000);
            mathQuestion5(prompt("What is your answer?"));
            sleep(2000);
            console.log("You got a...");
            sleep(2000);
            if (mathTest.grade < 59){
                console.log("You got a F (" + mathTest.grade + ")");
            }
            else if (mathTest.grade < 69){
                console.log("You got a D (" + mathTest.grade + ")");
            }
            else if (mathTest.grade < 79){
                console.log("You got a C (" + mathTest.grade + ")");
            }
            else if (mathTest.grade < 89){
                console.log("You got a B (" + mathTest.grade + ")");
            }
            else {
                console.log("You got an A! (" + mathTest.grade + ")");
            }
            sleep(5000);
            break;

        //HISTORY TEST FIRST
        case "history":
            console.log("You begin the test with high hopes.");
            sleep(2000);
            console.log("You write your name at the top of the paper and begin.");
            sleep(2000);
            console.log("Suddenly, you remember that the teacher isn't good at history.");
            sleep(2000);
            console.log("Is Apple music useless?");
            sleep(1000);
            console.log("True");
            sleep(1000);
            console.log("False");
            sleep(1000);
            historyQuestion1(prompt("What is your answer?"));
            sleep(2000);
            console.log("What is the most important invention in history?");
            sleep(1000);
            console.log("a) The Wheel");
            sleep(1000);
            console.log("b) The Bow");
            sleep(1000);
            console.log("c) Toilet paper");
            sleep(1000);
            historyQuestion2(prompt("What is your answer?"));
            sleep(2000);
            console.log("Who is the most famous American President?");
            sleep(1000);
            console.log("a) George Washington");
            sleep(1000);
            console.log("b) Franklin Pierce");
            sleep(1000);
            console.log("c) Abraham Lincoln");
            sleep(1000);
            historyQuestion3(prompt("What is your answer?"));
            sleep(2000);
            console.log("Who made the Statue of Liberty?");
            sleep(1000);
            console.log("a) France");
            sleep(1000);
            console.log("b) Spain");
            sleep(1000);
            console.log("c) Germany");
            sleep(1000);
            historyQuestion4(prompt("What is your answer?"));
            sleep(2000);
            console.log("Who built the pyramids?");
            sleep(1000);
            console.log("a) The Egyptians");
            sleep(1000);
            console.log("b) The Earth");
            sleep(1000);
            console.log("c) Aliens");
            sleep(1000);
            historyQuestion5(prompt("What is your answer?"));
            sleep(2000);
            console.log("You got a...");
            sleep(2000);
            if (historyTest.grade < 59){
                console.log("You got a F (" + historyTest.grade + ")");
            }
            else if (historyTest.grade < 69){
                console.log("You got a D (" + historyTest.grade + ")");
            }
            else if (historyTest.grade < 79){
                console.log("You got a C (" + historyTest.grade + ")");
            }
            else if (historyTest.grade < 89){
                console.log("You got a B (" + historyTest.grade + ")");
            }
            else {
                console.log("You got an A! (" + historyTest.grade + ")");
            }
            sleep(5000);
            //SCIENCE
            console.log("You begin the test with high hopes.");
            sleep(2000);
            console.log("You write your name at the top of the paper and begin.");
            sleep(2000);
            console.log("Suddenly, you remember that the teacher isn't good at science.");
            sleep(2000);
            console.log("You add three pints of acid into a beaker, and burn your hand. Why?");
            sleep(1000);
            console.log("a) You are not wearing gloves.");
            sleep(1000);
            console.log("b) Someone smacked your container while you were pouring.");
            sleep(1000);
            console.log("c) You had too much acid in your beaker.");
            sleep(1000);
            scienceQuestion1(prompt("What is your answer?"));
            sleep(2000);
            console.log("What element is carbon?");
            sleep(1000);
            console.log("a) H");
            sleep(1000);
            console.log("b) C");
            sleep(1000);
            console.log("c) K");
            sleep(1000);
            scienceQuestion2(prompt("What is your answer?"));
            sleep(2000);
            console.log("What is the boiling point of water?");
            sleep(1000);
            console.log("a) 212 C");
            sleep(1000);
            console.log("b) 100 C");
            sleep(1000);
            console.log("c) 0 C");
            sleep(1000);
            scienceQuestion3(prompt("What is your answer?"));
            sleep(2000);
            console.log("What state of matter takes a shape but has definite volume");
            sleep(1000);
            console.log("a) Gas");
            sleep(1000);
            console.log("b) Liquid");
            sleep(1000);
            console.log("c) Solid");
            sleep(1000);
            scienceQuestion4(prompt("What is your answer?"));
            sleep(2000);
            console.log("What is the chemical composition of a pencil?");
            sleep(1000);
            console.log("a) LoL");
            sleep(1000);
            console.log("b) PbC");
            sleep(1000);
            console.log("c) ToPk");
            sleep(1000);
            scienceQuestion5(prompt("What is your answer?"));
            sleep(2000);
            console.log("You got a...");
            sleep(2000);
            if (scienceTest.grade < 59){
                console.log("You got a F (" + scienceTest.grade + ")");
            }
            else if (scienceTest.grade < 69){
                console.log("You got a D (" + scienceTest.grade + ")");
            }
            else if (scienceTest.grade < 79){
                console.log("You got a C (" + scienceTest.grade + ")");
            }
            else if (scienceTest.grade < 89){
                console.log("You got a B (" + scienceTest.grade + ")");
            }
            else {
                console.log("You got an A! (" + scienceTest.grade + ")");
            }
            sleep(5000);
            //VOCAB
            console.log("You begin the test with high hopes.");
            sleep(2000);
            console.log("You write your name at the top of the paper and begin.");
            sleep(2000);
            console.log("Suddenly, you remember that the teacher isn't good at spelling.");
            sleep(2000);
            vocabQuestion1(prompt("What is the antonym of Day."));
            sleep(2000);
            vocabQuestion2(prompt("What is the antonym of Early."));
            sleep(2000);
            vocabQuestion3(prompt("What is the proper spelling of proper?"));
            sleep(2000);
            vocabQuestion4(prompt("How do you spell 'Popsicle'"));
            sleep(2000);
            sleep(2000);
            vocabQuestion5(prompt("What is the antonym of correct?"));
            sleep(2000);
            console.log("You got a...");
            sleep(2000);
            if (vocabTest.grade < 59){
                console.log("You got a F (" + vocabTest.grade + ")");
            }
            else if (vocabTest.grade < 69){
                console.log("You got a D (" + vocabTest.grade + ")");
            }
            else if (vocabTest.grade < 79){
                console.log("You got a C (" + vocabTest.grade + ")");
            }
            else if (vocabTest.grade < 89){
                console.log("You got a B (" + vocabTest.grade + ")");
            }
            else {
                console.log("You got an A! (" + vocabTest.grade + ")");
            }
            sleep(5000);
            break;
    }
    gameRestart(prompt("Restart? (y/n)"));
    sleep(2000);
    console.log("You get through the tests and leave for the day.");
    sleep(5000);
    console.log("You check your grades a week later.");
    sleep(2000);
    console.log("You have a... ");
    sleep(2000);
    if (gradeAverage < 59) {
        console.log("F Average in school...");
    }
    else if (gradeAverage < 69) {
        console.log("D Average in school...");
    }
    else if (gradeAverage < 79) {
        console.log("C average in school.");
    }
    else if (gradeAverage < 89) {
        console.log("B Average in school, not bad!");
    }
    else {
        console.log("A Average in school, nice job.");
    }
    sleep(5000);

}