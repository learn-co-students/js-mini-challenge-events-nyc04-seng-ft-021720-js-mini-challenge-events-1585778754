/***** Beginning of Starter Code ****/

const playerContainer = document.querySelector(".player-container")

// render one player to the DOM
function renderPlayer(player) {
  // create an element for the outer div
  const playerDiv = document.createElement("div")

  // set attributes on the outer div
  playerDiv.className = "player"
  playerDiv.dataset.number = player.number

  // use innerHTML to create any child elements of the div
  playerDiv.innerHTML = `
    <h3>${player.name} (<em>${player.nickname}</em>)</h3>
    <img src="${player.photo}" alt="${player.name}">
    <p class="likes">${player.likes} likes</p>
    <button data-action="like" class="like-button">❤️</button>
  `

  // append the element to the container
  playerContainer.append(playerDiv)
}

// for each player in the array, render to the DOM
PLAYERS.forEach(renderPlayer)

/***** End of Starter Code ****/




/***** Deliverable 1 *****/
function toggleColor(element) {
  if (element.style.color === "red") {
    element.style.color = "black"
  } else {
    element.style.color = "red"
  }
}

const header = document.querySelector("h1#header")

header.addEventListener("click", function implementToggleColor(event) {
  toggleColor(event.target);
})

/***** Deliverable 2 *****/

const playerForm = document.getElementById('new-player-form')

playerForm.addEventListener("submit", function addPlayerByForm(event) {
  event.preventDefault();
  
  const name = event.target.name.value
  const nickname = event.target.nickname.value
  const photo = event.target.photo.value
  const number = event.target.number.value
  const newPlayerObj = {
    name: name,
    nickname: nickname,
    photo: photo,
    number: number,
    likes: 0
  };
  
  renderPlayer(newPlayerObj);
});

/***** Deliverable 3 *****/
//using playerContainer from starter code
//added data-action to starter code
playerContainer.addEventListener('click', e =>{
  if(e.target.dataset.action === "like") {
    const playerObj = e.target.closest('.player')
    const playerNumber = parseInt(playerObj.dataset.number)
    const targetPlayer = searchByNumber(playerNumber, PLAYERS)
    targetPlayer.likes += 1;
    playerObj.querySelector('.likes').innerHTML = `${targetPlayer.likes} likes`
    
  }
})

function searchByNumber (playerNumber, playerArray) {
  for (let i = 0; i < playerArray.length; i++) {
    if (playerArray[i].number === playerNumber) {
      return playerArray[i];
    }
  }
}
