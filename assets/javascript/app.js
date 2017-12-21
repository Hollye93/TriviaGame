//prompt user to click start button that takes you to the html page with the questions 
//timer starts after 2 seconds of being on html page with trivia questions 
//you click on the answer to the question
//there is a 15 second timer
//calculate how many correct and incorrect answers
//link to a seperate page that shows number of questions enter incorrectly and number of questions answer correctly
//start over
    var number = 100;

    //  Variable that will hold our interval ID when we execute
    //  the "run" function
    var intervalId;


    //  The run function sets an interval
    //  that runs the decrement function once a second.
    function run() {
      intervalId = setInterval(decrement, 1000);
    }

    //  The decrement function.
    function decrement() {

      //  Decrease number by one.
      number--;

      //  Show the number in the #show-number tag.
      $("#show-number").html("<h2>" + number + "</h2>");


      //  Once number hits zero...
      if (number === 0) {

        //  ...run the stop function.
        stop();

        //  Alert the user that time is up.
        alert("Time Up!");
      }
    }

    //  The stop function
    function stop() {

      //  Clears our intervalId
      //  We just pass the name of the interval
      //  to the clearInterval function.
      clearInterval(intervalId);
    }

    //  Execute the run function.
    run();