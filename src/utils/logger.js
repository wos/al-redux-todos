export default function logger({ getState }) {
  return next => action => {
    console.log(action.type);
    const returnValue = next(action);
    return returnValue;
  };
}
