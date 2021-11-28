const initialState = {

  todo: [
    { id: "todo-0", name: "Eat", completed: true },
    { id: "todo-1", name: "Sleep", completed: false },
    { id: "todo-2", name: "Repeat", completed: false }
  ]
};

function todo(state = initialState, action) {
  switch (action.type) {
    case "CREATE_TO_DO":
      return {
        ...state,
        tasks: ''
      };

    default:
      return state;
  }
}

export default todo;
