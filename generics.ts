
function useState<s extends number | string >(){
  let state: s;

  function getState(){
    return state;
  }

  function setState(newState: s){
    state = newState;

  }
  return{getState, setState};
}

const newState = useState();
newState.setState(",d,jmjm");
console.log(newState.getState());
newState.setState(5252);
console.log(newState.getState());

