const moveUserStone = document.getElementById("userStone");
const moveUserScissor = document.getElementById("userScissor");
const moveUserPage = document.getElementById("userPage");
const bVersus = document.getElementById("versus");
const iaChoice = ["Stone", "Page", "Scirror"];
let scoreUser = document.getElementById("userS");
let scoreIa = document.getElementById("iaS");
let cptUser = parseInt(scoreUser.innerText);
let cptIa = parseInt(scoreIa.innerText);
let maxscore = 3;
let iaDiv = document.createElement("div");
iaDiv.setAttribute("id", "iaDiv");
let resetButton = document.createElement("button");
resetButton.setAttribute("id", "resetButton");
let victory = document.createElement("div");
victory.setAttribute("id", "victory");
let defeat = document.createElement("div");
defeat.setAttribute("id", "defeat");

// anime userdiv
moveUserStone.addEventListener("click", () => {
  moveUserStone.setAttribute("data", "uStone");
  moveUserPage.removeAttribute("data");
  moveUserScissor.removeAttribute("data");
  moveUserStone.style.transition = "2s";
  moveUserStone.style.marginTop = "175px";
  moveUserStone.style.marginLeft = "47.3%";
  if (moveUserScissor.getAttribute("style", "animation")) {
    moveUserScissor.style.marginTop = "15px";
    moveUserScissor.style.marginLeft = "64.6%";
  }
  if (moveUserPage.getAttribute("style", "animation")) {
    moveUserPage.style.marginTop = "15px";
  }
});

moveUserScissor.addEventListener("click", () => {
  moveUserScissor.setAttribute("data", "uScissor");
  moveUserStone.removeAttribute("data");
  moveUserPage.removeAttribute("data");
  moveUserScissor.style.transition = "2s";
  moveUserScissor.style.marginTop = "175px";
  moveUserScissor.style.marginLeft = "47.3%";
  if (moveUserStone.style.transition) {
    moveUserStone.style.marginTop = "15px";
    moveUserStone.style.marginLeft = "30%";
  }
  if (moveUserPage.getAttribute("style", "animation")) {
    moveUserPage.style.marginTop = "15px";
  }
});

moveUserPage.addEventListener("click", () => {
  moveUserPage.setAttribute("data", "uPage");
  moveUserStone.removeAttribute("data");
  moveUserScissor.removeAttribute("data");
  moveUserPage.style.transition = "2s";
  moveUserPage.style.marginTop = "175px";
  if (moveUserStone.getAttribute("style", "animation")) {
    moveUserStone.style.marginTop = "15px";
    moveUserStone.style.marginLeft = "30%";
  }
  if (moveUserScissor.getAttribute("style", "animation")) {
    moveUserScissor.style.marginTop = "15px";
    moveUserScissor.style.marginLeft = "64.6%";
  }
});

// disabled button
moveUserStone.addEventListener("click", () => {
  bVersus.removeAttribute("disabled");
});

moveUserPage.addEventListener("click", () => {
  bVersus.removeAttribute("disabled");
});

moveUserScissor.addEventListener("click", () => {
  bVersus.removeAttribute("disabled");
});

// ----------------------------------------------------------

bVersus.addEventListener("click", () => {
  let randomIaChoice = Math.floor(Math.random() * iaChoice.length);
  if (randomIaChoice === 0) {
    iaDiv.style.backgroundImage = "url('./img/stone.jpg')";
    iaDiv.setAttribute("data", "iaStone");
    document.getElementById("main").appendChild(iaDiv);
  } else if (randomIaChoice === 1) {
    iaDiv.style.backgroundImage = "url('./img/paper.jpg')";
    iaDiv.setAttribute("data", "iaPage");
    document.getElementById("main").appendChild(iaDiv);
  } else {
    iaDiv.style.backgroundImage = "url('./img/scissors.jpg')";
    iaDiv.setAttribute("data", "iaScissor");
    document.getElementById("main").appendChild(iaDiv);
  }

  //   Mecanics
  if (
    (moveUserStone.getAttribute("data") && randomIaChoice === 2) ||
    (moveUserPage.getAttribute("data") && randomIaChoice === 0) ||
    (moveUserScissor.getAttribute("data") && randomIaChoice === 1)
  ) {
    cptUser++;
    scoreUser.innerHTML = cptUser;
    console.log("gagné");
  }
  if (
    (moveUserStone.getAttribute("data") && randomIaChoice === 1) ||
    (moveUserPage.getAttribute("data") && randomIaChoice === 2) ||
    (moveUserScissor.getAttribute("data") && randomIaChoice === 0)
  ) {
    cptIa++;
    scoreIa.innerHTML = cptIa;
    console.log("perdu");
  }
  if (
    (moveUserStone.getAttribute("data") && randomIaChoice === 0) ||
    (moveUserPage.getAttribute("data") && randomIaChoice === 1) ||
    (moveUserScissor.getAttribute("data") && randomIaChoice === 2)
  ) {
    console.log("égalité");
  }
  if (cptIa === 3 || cptUser === 3) {
    bVersus.setAttribute("disabled", true);
    setTimeout(() => {
      document.getElementById("main").appendChild(resetButton);
      resetButton.innerText = "nouvelle partie";
      resetButton.addEventListener("click", () => {
        location.reload();
      });
    }, 2500);
  }
  if (cptUser === 3) {
    document.getElementById("main").appendChild(victory);
    setTimeout(() => {
      const removeVictory = document.getElementById("victory");
      removeVictory.parentNode.removeChild(removeVictory);
    }, 2500);
  }

  if (cptIa === 3) {
    document.getElementById("main").appendChild(defeat);
    setTimeout(() => {
      const remobeDefeat = document.getElementById("defeat");
      remobeDefeat.parentNode.removeChild(remobeDefeat);
    }, 2500);
  }
});
