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
const header = document.querySelector('#header')


header.addEventListener('click', function(){
  toggleColor(header)

}
)


function toggleColor(element) {
  if (element.style.color === "red") {
    element.style.color = "black"
  } else {
    element.style.color = "red"
  }
}



/***** Deliverable 2 *****/


const formInput = document.querySelector('#new-player-form')

formInput.addEventListener('submit',function(e){
  e.preventDefault()
  const number = e.target.number.value
  const name = e.target.name.value
  const nickname = e.target.nickname.value 
  const photo = e.target.photo.value 

  let newPlayer = {
    number,
    name,
    nickname,
    photo 
  }
  renderPlayer(newPlayer)
}
)




/***** Deliverable 3 *****/
let likeButton = document.querySelector('.player-container')

likeButton.addEventListener('click', function(e){

  if(e.target.className === 'like-button'){
    let parentNode = e.target.parentNode
    let sentence = parentNode.querySelector('.likes').innerText
    if(sentence === 'undefined likes'){
      parentNode.querySelector('.likes').innerText = '1 likes'
    }
    else{
    let likesArray = sentence.split(" ");
    likesArray[0]++
    let updatedLikes = likesArray.join(" ")
    parentNode.querySelector('.likes').innerText = updatedLikes

    }
  }

})
