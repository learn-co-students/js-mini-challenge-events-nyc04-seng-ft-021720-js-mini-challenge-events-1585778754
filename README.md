# JS Mini Challenge: Event Handling

In this challenge, we're going to keep working on Ian's Liverpool fan page and give our users the ability to:

- Toggle the header color
- Add new players
- 'Like' a player 

We've got some starter code already written for us (this should look somewhat familiar from the previous challenge). Your job is to add some additional functionality to make our app more dynamic by handling user interactions.

There's a section in this Readme file for your notes on each deliverable. As you go through the deliverables, write down some notes in this file on how you solved each problem. It'll help reinforce what you learned and give you a head start next time you see a similar problem.

## Deliverable 1: Toggle Header

**When a user clicks the header**, the color should toggle between black and red. 

To get you started, there's a helper function already written takes in an element and toggles its color that you can use. You can try it out in your console:

```js
toggleColor(document.querySelector("h1#header"))
```

Try calling it a few times to see the color switch back and forth. 

Once you have it working in the console, write an event listener that will use this helper function to change the color of the header when a user clicks on it.

**YOUR NOTES**
```
Call a query selector on the header and add an event listener to it that states whenever the header is 'clicked', it will call toggleColor(element), where it toggles the style.color for whatever element is passed into that function.
```

## Deliverable 2: Create Player

Our app already has a few players in it (check out the starter code in `index.js` to see how the initial render is set up), but we want our users to have the ability to add additional players by entering the player's details in the `form#new-player-form`.

**When a user submits the form**, the new player should be displayed on the bottom of the page (you can use the `renderPlayer` helper function from the starter code if you like). The data won't persist (when you refresh the page, the new player won't show up) - we'll see how to fix this later in the mod. For now, focus on getting the player on the page when the form is submitted!

Some things to keep in mind:
- If you see the page refresh, consider adding some code to *prevent* the *default* behavior of a form submitting.
- Make sure you're using the form *submit* event, not the *click* event.
- You can use the `name` attribute of the input elements as an easy way to reference the input fields within the form. For example: `document.querySelector("#new-player-form").nickname` will look inside the `form#new-player-form` and return the `input` element with the `name='nickname'` attribute
- Once you have access to an input field, you still need to retrieve its *value* to see what the user entered in the form!

**YOUR NOTES**
```
I added an event listener on the entire form, that listens to when a submit is entered. I use a preventDefault that prevents it from doing it's normal action(a request, prevents it from refreshing!). I set the values in the form to variables and create a newPlayer object from it which I then run the renderPlayer function with the new object.

```

## Deliverable 3: Like Button

**When a user clicks the like button for a player**, that player's likes should increase by 1. 

You can decide if you'd like to use *event delegation* to handle this, or if you'd like to attach *individual event listeners* to each like button. Regardless of the approach you take, the like button feature should work for all players (including new players that get added when a user fills out the form).

**YOUR NOTES**
```
I decided to add the event listener on the entire player-container because I realized it may prove to be difficult to attach an 'individual event listener' to a like button once a new player is added. 

I use if statements to determine whether an action should be run or not. If the classname of the target element is 'like-button' it selects the parent node of that element and then I select the .like class. I could've just used previousSibling to maybe reduce a line or two of code but I felt that using parent node and explicitly pointing it to the .likes class might prove to be better if I ever decide to add an extra ptag or another element in there.

I check to see if if it has any likes, if it doesn't it changes the inner text to 1 like. If it already has at least 1 like, it splits the sentence into an array so I can modify the number in the sentence. I join it and then insert it back into the innerText. 

```
