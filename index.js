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
// find header, assign it to variable
const header = document.querySelector("h1#header")

function toggleColor(element) {
  if (element.style.color === "red") {
    element.style.color = "black"
  } else {
    element.style.color = "red"
  }
}

// add event listener to header, call toggleColor to change the color
header.addEventListener("click", function(){
  toggleColor(header);
});

/***** Deliverable 2 *****/

// assigns form to variable
let newForm = document.querySelector("form#new-player-form")

// add event listener to new form variable
newForm.addEventListener("submit", function formSubmitHelper(e){
  // prevents submit from rendering a new page
  e.preventDefault();

  // assigning target input values into variables--using these non-descriptive variable names
  // to allow for use of shorthand syntax below
    const number = e.target.number.value
    const name = e.target.name.value
    const nickname = e.target.nickname.value
    const photo = e.target.photo.value

  // creating new player object using aforementioned shorthand syntax
    let newPlayer = {
      name,
      number,
      nickname,
      photo
    }
  // calling helper function to add player
    renderPlayer(newPlayer)
})

/***** Deliverable 3 *****/
// assigning player-container to a variable
let button = document.querySelector('.player-container')

// adding event listener to button variable
button.addEventListener("click", function(e){
  
  // conditional logic for event delegation
  if (e.target.className === 'like-button'){

    // move up DOM tree to find parentNode
    const selectedPlayer = e.target.closest(".player")
    
    // and back down DOM tree to find siblingNode's text value.
    let likesText = selectedPlayer.querySelector('.likes').innerText
    
    // more conditional logic to make undefined like into an incrementable value
      if (likesText === "undefined likes"){
        
        //replacing undefined with incrementable value. Grammatical mistake for the sake of it looking right later.  
        selectedPlayer.querySelector('.likes').innerText = "1 likes"
      
      // if likesText is defined already, increment the value
      } else {

        // split innerText into an array to allow incrementing of number
        let likesCountArr = selectedPlayer.querySelector('.likes').innerText.split(" ");
        
        // increment number
        likesCountArr[0]++
        
        // rejoin newly incremented array into a string
        let newLikesCount = likesCountArr.join(" ")
        
        //replace inner text of likes with new, incremented string 
        selectedPlayer.querySelector('.likes').innerText = newLikesCount
      }
  }

})