import { EditForm, Form, Text, TodoList } from 'components';
import { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';

const todosKeyLS = 'todosKey';

export const Todos = () => {
  const [todos, setTodos] = useState(
    () => JSON.parse(window.localStorage.getItem(todosKeyLS)) || [],
  );
  const [isEditing, setIsEditing] = useState(false);
  const [currentTodo, setCurrentTodo] = useState({});

  useEffect(() => {
    window.localStorage.setItem(todosKeyLS, JSON.stringify(todos));
  }, [todos]);

  const handleSubmit = text => {
    setTodos(prevValues => [...prevValues, { id: nanoid(), text: text }]);
  };

  const handleDelete = todoId => {
    setTodos(prevTodos => {
      return prevTodos.filter(todo => todo.id !== todoId);
    });
  };

  const handleEdit = todo => {
    setCurrentTodo(todo);
    setIsEditing(true);
  };

  const updateTodo = text => {
    if (text === currentTodo.text) return;
    setTodos(
      todos.map(todo =>
        todo.id === currentTodo.id ? { ...currentTodo, text } : todo,
      ),
    );
    cancelUpdate();
  };

  const cancelUpdate = () => {
    setIsEditing(false);
    setCurrentTodo({});
  };

  return (
    <>
      {isEditing ? (
        <EditForm
          updateTodo={updateTodo}
          cancelUpdate={cancelUpdate}
          defaultValue={currentTodo.text}
        />
      ) : (
        <Form onSubmit={handleSubmit} />
      )}
      {todos.length > 0 ? (
        <TodoList
          todos={todos}
          handleDelete={handleDelete}
          handleEdit={handleEdit}
        />
      ) : (
        <Text textAlign="center">There are no any todos ...</Text>
      )}
    </>
  );
};
