import { Grid, GridItem, TodoListItem } from 'components';

export const TodoList = ({ todos, handleDelete, handleEdit }) => {
  return (
    <Grid>
      {todos.map((todo, index) => (
        <GridItem key={todo.id}>
          <TodoListItem
            text={todo.text}
            todoNumber={index + 1}
            handleDelete={handleDelete}
            id={todo.id}
            handleEdit={handleEdit}
          />
        </GridItem>
      ))}
    </Grid>
  );
};
