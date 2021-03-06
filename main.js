/*
=======================================================
** Week 2 - Project 1 **

Below are a number of problems for you to solve
using JS. The JS code can be written below each
problem.

=======================================================
*/


// 0. Connect the main.js document to the HTML page.
/*    Add to the bottom of the HTML page: <script src="main.js"></script>*/
document.getElementById("q0").innerHTML = "JS Page Connected Properly!";
document.getElementById("q0").classList.add("status-good");




// 1. Output each item in the following Array to your console within their own paragraphs:
// i overwrote when i tried to use <p> get adam to explain why we need <li> instead

var livingRoom = ['couch', 'lamp', 'rug', 'shelf'];

for (i = 0; i < livingRoom.length; i++) {
    document.getElementById('q1').innerHTML += "<li>" + livingRoom[i] + "</li>";
};



// 2. Using a loop, log numbers 22-33 within their own paragraphs.
// do I need "var i" in my loop?

var i = 22
while (i < 34) {
    document.getElementById('q2a').innerHTML += "<li>" + i + "</li>";
    i++;
};

var counter = 0;
var num = 22;

while (num < 34) {
    num++;
    counter++;
    console.log(num);
}
document.getElementById('q2b').innerHTML = counter;


// 3. Using a similar loop, log numbers 75 to 100, only in increments of five.
// is there a way to log the first 75, without changing the variable to 70?
var counter = 0;
var num = 75;
while (num < 100) {
    num += 5
    document.getElementById('q3a').innerHTML += "<li>" + num + "</li>";
    counter++;
    console.log(num)
}
document.getElementById('q3b').innerHTML = counter;


// 4. Write a while loop that displays paragraphs of "This is how a professional loops." to the HTML page 5 times.

var counter = 0;
var num = 0;
while (num < 5) {
    document.getElementById('q4a').innerHTML += "<li>This is how a professional loops.</li> ";
    num++;
    counter++;
};
document.getElementById('q4b').innerHTML = counter;



// 5. Separately, use both a for loop and while loop to do the same thing.
//     Display in unique paragraphs the sentence "At home, I have _____ cats."
//     The numbers should range from 10 to 110, in increments of 25.

for (i = 10; i < 110; i += 25) {
    document.getElementById('q5a').innerHTML += "<li>At home, I have " + i + " cats.</li>";
    console.log(i);
};

var counter = 0;
var num = 10;

while (num < 110) {
    document.getElementById('q5b').innerHTML += "<li>At home, I have " + num + " cats.</li>";
    num += 25;
    counter++;
};
document.getElementById('q5c').innerHTML = counter;


// 6. Given the following Array, display in unique paragraphs'Even' if the number is even, 'Even and greater than 10' if the
//    number is even and greater than 10, and 'Odd' if the number is odd.
//    HINT: Google 'remainder operator'
// am i suppose to add && (numArray[i] < 10) to the fist if(condition)?
var numArray = [2, 17, 9, 24, 8];

for (i = 0; i < numArray.length; i++) {
    if (((numArray[i] % 2) === 0) && (numArray[i] < 10)) {
        document.getElementById('q6').innerHTML += "<li>Even</li>";
    } else if ((numArray[i] % 2 === 0) && (numArray[i] > 10)) {
        document.getElementById('q6').innerHTML += "<li>Even and greater than 10</li>";
    } else {
        document.getElementById('q6').innerHTML += "<li> Odd</li>";
    }
};


// 7. Using the following Array, create variable called numThrees with the value [13, 23, 33, 43, 53, 63, 73]
var numArray = [13, 15, 17, 23, 25, 27, 33, 35, 37, 43, 45, 47, 53, 55, 57, 63, 65, 67, 73, 75, 77];
var numThrees = [];

for (i = 0; i < numArray.length; i++) {
    if (numArray[i] % 10 === 3) {
        numThrees += numArray[i] + ",";
    };
};
document.getElementById('q7').innerHTML = numThrees;



// 8. Write a loop that outputs the following to unique paragraphs:
// #
// ##
// ###
// ####
// #####
// ######
// #######

var hashtag = ['#', '##', '###', '####', '#####', '######', '#######'];

for (i = 0; i < hashtag.length; i++) {
    document.getElementById('q8').innerHTML += "<li>" + hashtag[i] + "</li>";
}


var string = "#"
for (var i = 0; i < 8; i++) {
    string += "#";
    console.log(string);
}
console.log(string);

// 9. FIZZ BUZZ
// Write a program that uses console.log to print each number up to 100, with a couple exceptions...
// If the number is divisible by 3, print "Fizz" instead of the number.
// If the number is divisible by 5, print "Buzz" instead of the number.
// If the number is divisible by both 3 and 5, print "FizzBuzz" instead of the number.

for (i = 0; i < 100; i++) {
    if (((i % 3) === 0) && ((i % 5) === 0)) {
        document.getElementById('q9').innerHTML += "<li> FizzBuzz </li>";
    } else if ((i % 5) === 0) {
        document.getElementById('q9').innerHTML += "<li> Buzz </li>";
    } else if ((i % 3) === 0) {
        document.getElementById('q9').innerHTML += "<li> Fizz </li>"
    }
};



// RO SHAM BO!
// We're going to create a paper, rock, scissors game that prompts you for your choice and allows the computer to
// randomly choose. You will use an alert to define the winner.

// 10. Use a variable called "human" to prompt the user to type their choice.
// 11. Define a variable called "computer" and use Math.random to allow the computer to randomly select a number.
//     For reference:
//     Math.random gives you a random number between 0 and 1, which is different each time you call it.
// 12. Let's start our conditional statement.
//     If the random computer number falls between 0 and .33, the computer is "rock"
//     If the random computer number falls between .34 and .66, the computer is "paper"
//     If the random computer number falls between .67 and 1, the computer is "scissors"
// 13. Using both "human" and the computer choice, begin another conditional statement to compare them.
// 14. After comparing, determine who has won; the computer or the human!
// 15. Give yourself a high five for completing your first javascript game!
// BONUS: What happens if your user enters something other than "rock", "paper", or "scissors?". Change your default case
//     to print a snarky message to the console if the input doesn't match any of the options.






// ADVANCED TRACK
// 16. Write a conditional statement to find the largest of the numbers in the array provided.
var num = [-5, -2, -6, 0, -1];
var largestNum = -5;

for (i = 1; i < num.length; i++) {
    if (num[i] > largestNum) {
        largestNum = num[i];
    }
}


var numSort = [-5, -2, -6, 0, -1];
numSort.sort(function(a, b) {
    return a - b
});



// HEADS OR TAILS?
// 17. Use the following variable for your coin flip action:

//     We're using Math.random again, along with Math.floor.
//     Remember, Math.random gives you a random number between 0 and 1.
//     Calling Math.floor on that number will truncate the decimal, and give you a
//     random number within the bounds of your array. (In this case, our array will only contain two items.)


var coin = Math.floor(Math.random() * 2);
var flip = ["head", "tail"];
var outcome;

for (var i = 0; i < flip.length; i++) {
    if (coin === 0) {
        outcome = flip[0];
    } else if (coin === 1) {
        outcome = flip[1];
    }
}
console.log(outcome);

document.getElementById('q17').innerHTML = "</li" > +outcome + "</li>";




// 18. Use a do/while loop to keep flipping the coin until you get tails.



do {
    var coin = Math.floor(Math.random() * 2);

    if (coin === 0) {
        var side = "heads";

    } else {
        var side = "tails";
    }
    console.log(side);
    document.getElementById('q18').innerHTML += "</li>" + side + "</li>";

} while (coin === 0);




// CHESS BOARD
// 19. Write a program that creates a string that represents an 8×8 grid, using newline characters to separate lines.
// At each position of the grid there is either a space or a “#” character. The characters should form a chess board.

//Passing this string to console.log should show something like this:

//  # # # #
// # # # #
//  # # # #
// # # # #
//  # # # #
// # # # #
//  # # # #
// # # # #
var string = "#";
var chessBoardOne = "";
var chessBoardTwo = "";

for (var i = 0; i < 4; i++) {
    chessBoardOne = " # # # #";
    console.log(chessBoardOne);
    chessBoardTwo = "# # # # ";
    console.log(chessBoardTwo);
};

var chessBoard = "";
var size = 8;

for (var i = 0; i < 64; i++) {

    if (i % 2 === 0) {
        chessBoard += " ";
        document.getElementById('q19').innerHTML += "&nbsp&nbsp";

    } else if (i % 8 === 0) {
        chessBoard += "\n" ;
        document.getElementById('q19').innerHTML += "<p></p>";

    } else if (i % 16 === 0) {
      chessBoard += " ";
      document.getElementById('q19').innerHTML +=  "&nbsp&nbsp";
    }else {
      chessBoard += "#";
      document.getElementById('q19').innerHTML += "#";
    }
};


// 20. When you have a program that generates this pattern, define a variable size = 8 and change the program
// sso that it works for any size, outputting a grid of the given width and height.

var chessBoard = "";
var chessBoardHTML = "";
var size = 12;

for(var height = 0; height < size; height++) {
  for(var width = 0; width < size; width++)
  if ((width + height) % 2 === 0) {
    chessBoard += " ";
    chessBoardHTML += "&nbsp&nbsp";
  }else {
    chessBoard += "#";
    chessBoardHTML += "#";
  }
    chessBoard += "\n";
    chessBoard += "<p></p>";
  }

console.log(chessBoard);
document.getElementById('q20').innerHTMLs = "<li>" + chessBoard + "</li>"





/* SANDBOX TRACK

Solving all of these problems is a great step in the right direction,
but the next step is coming up with your own arrangements to solve
new problems. Practice creating your own problems to solve and their solutions -
you can even challenge your classmates!

Also, consider how you can add/remove CSS styles to create added presentation with the results.

*/
