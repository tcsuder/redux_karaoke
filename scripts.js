
const chorus = "Don't want to be a fool for you, Just another player in your game for two, You may hate me but it ain't no lie, Baby bye bye bye, Bye bye, I Don't want to make it tough, I just want to tell you that I've had enough, It might sound crazy but it ain't no lie, Baby bye bye bye"

const chorusArray = chorus.split(', ');
let position = 0;

const initialState = {
  chorusString: chorus,
  chorusArray: chorusArray,
  arrayPosition: position,
  currentPhrase: chorusArray[position]
}
console.log(initialState);

const { createStore } = Redux;
const store = createStore(phraseChanger);
console.log(store);
console.log(store.getState());

const userClick = () => {
  console.log('click');
}
