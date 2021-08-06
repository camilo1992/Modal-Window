/**
 * We can acceess the classes on an HTML element through the classList property
 * we can add or remove a piece of the class property `mutate css properties` in order to close a modal window `alter the interface`.
 *  or
 * we can do it through the ccs property `style` `and change the display propperty to block in this case`
 *
 * Also is realy useful to use function exressions within the eventlistners. it help us to create order and factoring.
 *
 * querySelectorAll help us to select all the html elements with the same class.
 *
 */

'use strict';

const modal = document.querySelector(`.modal`);
const btnCloseModal = document.querySelector(`.close-modal`);
const hidden = document.querySelector(`.hiden`);
const overlay = document.querySelector(`.overlay`);
const btnsOpenModal = document.querySelectorAll(`.show-modal`);

const openModal = function () {
  modal.classList.remove(`hidden`);
  overlay.classList.remove(`hidden`);
};

const closeModal = function () {
  modal.classList.add(`hidden`);
  overlay.classList.add(`hidden`);
};

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener(`click`, openModal);

btnCloseModal.addEventListener(`click`, closeModal);
overlay.addEventListener(`click`, closeModal);

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
  //   console.log(`a key was pressed`);
  console.log(e.key);

  if (e.key === `Escape` && !modal.classList.contains(`hidden`)) {
    closeModal();
  }
});
