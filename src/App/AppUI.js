import React from 'react';
import { TodoContext } from '../TodoContext/TodoContext';
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { CreateTodoButton } from '../CreateTodoButton';

function AppUI() {

  const {
    error,
    loading,
    searchedTodos,
    completeTodo,
    deleteTodo,
  } = React.useContext(TodoContext)  

  return (
    <React.Fragment>
      <TodoCounter />
      <TodoSearch />
      <TodoList>
        {error && <p>Desespérate, hubo un error...</p>}
        {loading && <p>Estamos cargando, no desesperes...</p>}
        {(!loading && !searchedTodos.length) && <p>¡Crea tu primer TODO!</p>}
            
        {searchedTodos.map(todo => (
            <TodoItem
                key={todo.title}
                title={todo.title}
                completed={todo.completed}
                onComplete={() => completeTodo(todo.title)}
                onDelete={() => deleteTodo(todo.title)}
            />
        ))}
      </TodoList>  
      <CreateTodoButton />
    </React.Fragment>
  );
}

export { AppUI };