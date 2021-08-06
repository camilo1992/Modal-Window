# Modal windows

## Use and understanding of usuful css properties 

## overlay 

1. Create a div with those two classes
```sh
'<div class="overlay hidden"></div>'
``` 
2. Define this two classes in css

```sh
`
.hidden {
  display: none;
}

.overlay {
  'position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(3px);
  z-index: 5;
  '
}
```

```ss
  z-index: 5  ----> it sets the hierarchy or order of laying the elements one over the other one
}
```

Basically we add or remove the hidden class depending on the requirements. 
Tehre is a second method to hide elements on the html

we can do it seeting the hidden class to true

```sh
html-element.classList.hidden =`true
```


## Key Events 

/**
 * key press events
 * we can add a key press evetn by using the addEventListener to the document object, 
 * there are three types of events 
 * keypress
 * keydown
 * keyup
 * 
 * 
 * We can get access to the event object through the anonimous function in the event Listener
 * it is posssible because of this fucntion is trggered after pressing a key and therefore it gives 
 * access to the event object.
 * 
 * 
 * once we get access to the event we can call the Key property so that we can identify which key was pressed
 * in this case we need to identify the key property in the event when esc is pressed that in this case is `escape`
 * 
 * 

 */


document.addEventListener(`keydown`, function (e) {
  console.log(e.key);

  if (e.key === `Escape` && !modal.classList.contains(`hidden`)) {
    closeModal();
  }

