// setting the strings in an array and selecting them
let rps = ["r", "p", "s"]
let computerInput = rps[Math.floor(Math.random() * 3)]
// Defying the btns
const pBtn = document.getElementById("p");
const rBtn = document.getElementById("r");
const sBtn = document.getElementById("s");
// the button for popping up
const btn = document.querySelectorAll("button")[4];
btn.addEventListener("click", function() {
  let main = document.getElementById("main")
  main.classList.toggle('blur');
  let popup = document.getElementById("popup")
  popup.classList.toggle('active');
})
// now for closing it down
const btn1 = document.querySelectorAll("button")[5];
btn1.addEventListener("click", function() {
  let main = document.getElementById("main")
  main.classList.toggle('blur');
  let popup = document.getElementById("popup")
  popup.classList.toggle('active');
})

// all the buttons with thier algorithim
  pBtn.addEventListener("click", function() {

    if (computerInput === 'r') {
      console.log("User wins");

      let status = document.getElementById('win-status');
      status.value = "You won!!";
    } else if (computerInput === 's') {
      console.log("Computer wins");

      let status = document.getElementById('win-status');
      status.value = "The house won";
    } else if (computerInput === 'p') {
      console.log("Hey it's a draw")
      let status = document.getElementById('win-status');
      status.value = "It's a draw";
    }

    let btn2 = document.getElementById("buttons");
    btn2.classList.toggle('btn-invisible');

    let btnAlt = document.getElementById("buttons-alternative");
    btnAlt.classList.add('btn-visible');

    let yourPick = document.getElementById("you-btn");
    yourPick.innerHTML = "<button id='p' class='paper-btn btn' type='button' name='button' value='p' style='width:240px; height: 240px; padding:0; margin-left:0;'> <img style='width:50%;' src='images/icon-paper.svg' alt=''></button>";

    let housePick = document.getElementById('house-btn');
    if (computerInput === 'r') {
      housePick.innerHTML = "<button id='r' class='rock-btn btn' type='button' name='button' value='r' style='width:240px; height: 240px; padding:0; margin-left:0;'> <img style='width:50%;' src='images/icon-rock.svg' alt=''></button>";
    } else if (computerInput === 'p') {
      housePick.innerHTML = "<button id='p' class='paper-btn btn' type='button' name='button' value='p' style='width:240px; height: 240px; padding:0; margin-left:0;'> <img style='width:50%;' src='images/icon-paper.svg' alt=''></button>";
    } else if (computerInput === 's') {
      housePick.innerHTML = "<button id='s' class='scissors-btn btn' type='button' name='button' value='s' style='width:240px; height: 240px; padding:0; margin-left:0;'> <img style='width:50%;' src='images/icon-scissors.svg' alt=''></button>";
    }

  })
  rBtn.addEventListener("click", function() {

    if (computerInput === 's') {
      console.log("User wins");

      let status = document.getElementById('win-status');
      status.value = "You won!!";
    } else if (computerInput === 'p') {
      console.log("Computer wins");

      let status = document.getElementById('win-status');
      status.value = "The house won";
    } else if (computerInput === 'r') {
      console.log("Hey it's a draw")
      let status = document.getElementById('win-status');
      status.value = "It's a draw";
    }

    let btn2 = document.getElementById("buttons");
    btn2.classList.toggle('btn-invisible');

    let btnAlt = document.getElementById("buttons-alternative");
    btnAlt.classList.add('btn-visible');

    let yourPick = document.getElementById("you-btn");
    yourPick.innerHTML = "<button id='r' class='rock-btn btn' type='button' name='button' value='r' style='width:240px; height: 240px; padding:0; margin-left:0;'> <img style='width:50%;' src='images/icon-rock.svg' alt=''></button>";
    console.log(this);

    let housePick = document.getElementById('house-btn');
    if (computerInput === 'r') {
      housePick.innerHTML = "<button id='r' class='rock-btn btn' type='button' name='button' value='r' style='width:240px; height: 240px; padding:0; margin-left:0;'> <img style='width:50%;' src='images/icon-rock.svg' alt=''></button>";
    } else if (computerInput === 'p') {
      housePick.innerHTML = "<button id='p' class='paper-btn btn' type='button' name='button' value='p' style='width:240px; height: 240px; padding:0; margin-left:0;'> <img style='width:50%;' src='images/icon-paper.svg' alt=''></button>";
    } else if (computerInput === 's') {
      housePick.innerHTML = "<button id='s' class='scissors-btn btn' type='button' name='button' value='s' style='width:240px; height: 240px; padding:0; margin-left:0;'> <img style='width:50%;' src='images/icon-scissors.svg' alt=''></button>";
    }


  })
  sBtn.addEventListener("click", function() {
    if (computerInput === 'p') {
      console.log("User wins");

      let status = document.getElementById('win-status');
      status.value = "You won!!";
    } else if (computerInput === 'r') {
      console.log("Computer wins");

      let status = document.getElementById('win-status');
      status.value = "The house won";
    } else if (computerInput === 's') {
      console.log("Hey it's a draw")
      let status = document.getElementById('win-status');
      status.value = "It's a draw";
    }

    let btn2 = document.getElementById("buttons");
    btn2.classList.toggle('btn-invisible');

    let btnAlt = document.getElementById("buttons-alternative");
    btnAlt.classList.add('btn-visible');

    let yourPick = document.getElementById("you-btn");
    yourPick.innerHTML = "<button id='s' class='scissors-btn btn' type='button' name='button' value='s' style='width:240px; height: 240px; padding:0; margin-left:0;'> <img style='width:50%;' src='images/icon-scissors.svg' alt=''></button>";
    console.log(this);

    let housePick = document.getElementById('house-btn');
    if (computerInput === 'r') {
      housePick.innerHTML = "<button id='r' class='rock-btn btn' type='button' name='button' value='r' style='width:240px; height: 240px; padding:0; margin-left:0;'> <img style='width:50%;' src='images/icon-rock.svg' alt=''></button>";
    } else if (computerInput === 'p') {
      housePick.innerHTML = "<button id='p' class='paper-btn btn' type='button' name='button' value='p' style='width:240px; height: 240px; padding:0; margin-left:0;'> <img style='width:50%;' src='images/icon-paper.svg' alt=''></button>";
    } else if (computerInput === 's') {
      housePick.innerHTML = "<button id='s' class='scissors-btn btn' type='button' name='button' value='s' style='width:240px; height: 240px; padding:0; margin-left:0;'> <img style='width:50%;' src='images/icon-scissors.svg' alt=''></button>";
    }

  })
