import { createContext, useContext } from 'react';
export const TodoContext = createContext({
  //array for structure
  
  Todo: [
    {
      id: 1,
      todo: 'todo msg',
      completed: false,
    }
  ],

  //functions names (we will write its functionality in app.js)
  addTodo: (todo) => {},
  updateTodo: (id, todo) => {},
  deleteTodo: (id) => {},
  toggleComplete: (id) => {},
});

export const useTodo = () => {
  return useContext(TodoContext);
};

export const TodoProvider = TodoContext.Provider

