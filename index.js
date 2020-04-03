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
document.querySelector('#header').addEventListener('click', function(event){
  toggleColor(event.target);
});

function toggleColor(element) {
  if (element.style.color === "red") {
    element.style.color = "black"
  } else {
    element.style.color = "red"
  }
}


/***** Deliverable 2 *****/
document.querySelector('#new-player-form').addEventListener('submit', function(event){
  event.preventDefault();
  // create a player object
  const player = {
    name: event.target.elements.name.value,
    number: event.target.elements.number.value,
    nickname: event.target.elements.nickname.value,
    photo: event.target.elements.photo.value,
    likes: 0
  };
  // render the player
  renderPlayer(player);
  // clear the form
  event.target.reset();
});

/***** Deliverable 3 *****/

playerContainer.addEventListener('click',function(event){
  if (event.target.className == 'like-button'){
    event.preventDefault();
    // find the like element
    const likeElement = event.target.previousElementSibling;
    // get the number of likes
    let numOfLikes = parseInt(likeElement.textContent.slice(0, -6));
    // increment it
    numOfLikes += 1;
    // rewrite the likes
    likeElement.textContent = numOfLikes + ' likes';
  }
});

