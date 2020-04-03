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
    <button class="like-button">❤️</button>
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

const header = document.querySelector(`#header`)

header.addEventListener("click", event => toggleColor(event.target))

/***** Deliverable 2 *****/

let playerForm = document.querySelector(`#new-player-form`)

playerForm.addEventListener("submit", event => {
  event.preventDefault()
  const number = event.target.number.value
  const name = event.target.name.value
  const nickname = event.target.nickname.value
  const photo = event.target.photo.value
  const likes = "1000"

  const newPlayer = {
    number, name, nickname, photo, likes
  }

  renderPlayer(newPlayer)
})

/***** Deliverable 3 *****/

playerContainer.addEventListener("click", event =>{
  if(event.target.className === "like-button"){
    const likes = event.target.parentElement.querySelector(`.likes`)
    let likeCounter = parseInt(likes.textContent)
    likeCounter += 1
    likes.innerHTML = `${likeCounter} likes`
  }


})