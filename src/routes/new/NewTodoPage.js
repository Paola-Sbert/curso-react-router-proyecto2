import React from "react";
import { TodoForm } from '../../UI/TodoForm';

function NewTodoPage() {
    return (
        <TodoForm 
            label='Escribe tu nuevo TODO'
            submitText="Añadir"
            submitEvent={() => console.log('Llamar a addTodo')}
        />
    );
}

export { NewTodoPage };