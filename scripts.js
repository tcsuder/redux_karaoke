
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

const phraseChanger = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case 'SWITCH':
      let newPosition = state.arrayPosition + 1;
      newState = {
        chorusString: state.chorusString,
        chorusArray: state.chorusArray,
        arrayPosition: newPosition,
        currentPhrase: state.chorusArray[newPosition]
      }
      return newState;
    case 'RESTART':
      newState = {
        chorusString: state.chorusString,
        chorusArray: state.chorusArray,
        arrayPosition: 0,
        currentPhrase: state.chorusArray[0]
      }
      return newState;
    default:
      return state;
  }
}

const { createStore } = Redux;
const store = createStore(phraseChanger);
console.log(store);
console.log(store.getState());

const render = () => {
  document.getElementById('words').innerHTML = store.getState().currentPhrase;
}

window.onload = function() {
  render();
}

const userClick = () => {
  const checkState = store.getState();
  if (checkState.arrayPosition === checkState.chorusArray.length - 1) {
    store.dispatch({ type: 'RESTART' } );
  } else {
    store.dispatch({ type: 'SWITCH' } );
  }
}

store.subscribe(render);
