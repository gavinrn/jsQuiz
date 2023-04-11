      // Quiz questions
      const questions = [
        {
          question: "What is the capital of France?",
          options: ["Paris", "London", "Berlin", "Madrid"],
          answer: "Paris"
        },
        {
          question: "Which of the following is not a programming language?",
          options: ["JavaScript", "HTML", "CSS", "JPEG"],
          answer: "JPEG"
        },
        {
          question: "What is the result of 3 + 4 * 5?",
          options: ["23", "35", "43", "None of the above"],
          answer: "23"
        },
        {
          question: "Which keyword is used to declare a constant in JavaScript?",
          options: ["var", "let", "const", "none of the above"],
          answer: "const"
        }
      ];

      let currentQuestion = 0;

      // Display the current question
      function displayQuestion() {
        const questionContainer = document.getElementById("question");
        const question = questions[currentQuestion];

        // Clear the question container
        questionContainer.innerHTML = "";

        // Add the question text to the container
        const questionText = document.createElement("h2");
        questionText.textContent = question.question;
        questionContainer.appendChild(questionText);

        // Add the answer options as buttons to the container
        question.options.forEach((option) => {
          const answerButton = document.createElement("button");
          answerButton.classList.add("answer");
          answerButton.textContent = option;
          answerButton.addEventListener("click", () => {
            checkAnswer(option, question.answer);
          });
          questionContainer.appendChild(answerButton);
        });
      }

      let counter = 60;
      let score = 0;
      // Check if the user's answer is correct
      function checkAnswer(userAnswer, correctAnswer) {

        var timerElement = document.querySelector('#timer');
        const questionContainer = document.getElementById("question");
        if (userAnswer === correctAnswer) {
          questionContainer.innerHTML = "<h2>Correct!</h2>";
          score++;
        } else {
          questionContainer.innerHTML = "<h2>Incorrect!</h2>";
          counter = counter - 10;
        }

    //     setInterval(function() {
    //         // this code will execute every second

    //         timerElement.textContent = counter;
    //         counter--;
    //         }, 1000);
    //   }

        // Move on to the next question after a short delay
        setTimeout(() => {
            // timerElement.textContent = counter;
            // counter--;
            currentQuestion++;
          if (currentQuestion < questions.length && counter > 0) {
            displayQuestion();
          } else {
            questionContainer.innerHTML = "<h2>Quiz complete!</h2>";
            counter = 0;
            const myEnd = document.querySelector('#end');
            myEnd.innerHTML = `<form>
            <label for="initials">Initials:</label>
            <input type="text" id="initials">
            <br>
            <button type="button" onclick="addScore()">Add Initials</button>
          </form>
          <div id="scoreboard"></div>`;



          }
        }, 1000);

    }

      var button = document.querySelector('.start-button');
      function removeButton() {

        button.remove();
      }
      // Display the first question

      button.addEventListener('click', function() {
        displayQuestion();


            setInterval(function() {
        // this code will execute every second
        var timerElement = document.querySelector('#timer');
        timerElement.textContent = counter;
            counter--;
            if (counter < 0) {
                timerElement.textContent = null;
            }
        }, 1000);

    })

    var scores = [];
    let localInt = localStorage.length;
    function addScore() {
        for (var i = 0; i < localStorage.length; i++) {
            var key = localStorage.key(i);
            var value = localStorage.getItem(key);
            scores.push(value);
        }
        var initials = document.getElementById('initials').value;
    //   var score = document.getElementById('score').value;
    var appended = initials + ": " + score;
    scores.push(appended);
      localStorage.setItem(localInt, appended);

      updateScoreboard();
    }

    function updateScoreboard() {
      var scoreboardElement = document.getElementById('scoreboard');
      var scoreboardHTML = '';
      for (var i = 0; i < scores.length; i++) {
        scoreboardHTML += '<div>' + scores[i]+ '</div>';
      }
      scoreboardElement.innerHTML = scoreboardHTML;
    }
