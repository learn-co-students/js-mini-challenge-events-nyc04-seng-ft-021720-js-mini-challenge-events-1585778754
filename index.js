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
const head = document.querySelector("h1")
head.addEventListener("click", function() {
  if (head.style.color === "red") {
    head.style.color = "black"
  } else {
   head.style.color = "red"
  }
})

/***** Deliverable 2 *****/
const newPlayerForm = document.querySelector("#new-player-form")
newPlayerForm.addEventListener("submit", function(e) {
  // always prevent the default action
  e.preventDefault()
  console.log(e.target) 

  const number = e.target.number.value
  const name = e.target.name.value
  const nickname = e.target.nickname.value
  const photo = e.target.photo.value
  const likes = 1000

  // this: 
  const newPlayer = {
    number,
    name,
    nickname,
    photo,
    likes
  }
console.log(newPlayer)
renderPlayer(newPlayer)

})

/***** Deliverable 3 *****/
const playerList = document.querySelector("#player-list")
console.log(playerList)

playerList.addEventListener("click", e => {
  if (e.target.dataset.action === "like") {
    const player = e.target.closest(".player")
    const likes = player.querySelector(".likes")
    likes.textContent = parseInt(likes.textContent) + 1
  }
})