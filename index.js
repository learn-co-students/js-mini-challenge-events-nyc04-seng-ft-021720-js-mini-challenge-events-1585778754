/***** Beginning of Starter Code ****/

const playerContainer = document.querySelector(".player-container")

// render one player to the DOM
function renderPlayer(player) {
  // create an element for the outer div
  const playerDiv = document.createElement("div")
  // set attributes on the outer div
  playerDiv.className = "player"
  playerDiv.dataset.number = player.number

  let button = document.createElement("button")
  button.className = "like-button"
  button.innerHTML = "❤️"
  button.addEventListener("click", function(e){
    let likeInt = parseInt(e.target.parentNode.querySelector(".likes").innerHTML.split(" ")[0])
    likeInt ++
    e.target.parentNode.querySelector(".likes").innerHTML = `${likeInt} likes`
  })
  playerDiv.innerHTML = `
    <h3>${player.name} (<em>${player.nickname}</em>)</h3>
    <img src="${player.photo}" alt="${player.name}">
    <p class="likes">${player.likes} likes</p>
  `
  playerDiv.append(button)
  playerContainer.append(playerDiv)
}

PLAYERS.forEach(renderPlayer)

function toggleColor(element) {
  if (element.style.color === "red") {
    element.style.color = "black"
  } else {
    element.style.color = "red"
  }
}

let header = document.querySelector("h1#header")
header.addEventListener("click", function(e){
  toggleColor(e.target)
})

document.querySelector("#new-player-form").addEventListener("submit", function(e){
  e.preventDefault()
  const newPlayer = {
    number: `${e.target.number.value}`,
    name: `${e.target.name.value}`,
    nickname: `${e.target.nickname.value}`,
    photo: `${e.target.photo.value}`,
    likes: 1000
  }
  renderPlayer(newPlayer)
})
