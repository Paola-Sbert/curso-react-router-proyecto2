import React from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { TodoForm } from '../../UI/TodoForm';
import { useTodos } from '../useTodos';

function EditTodoPage() {
    const location = useLocation();
    const params = useParams();
    const id = Number(params.id);

    const { state, stateUpdaters } = useTodos();
    const { loading, getTodo } = state;
    const { editTodo } = stateUpdaters;

    let todoText;

    //Para tener una mejor UX
    /*Estamos transmitiendo información del HomePage 
    con el location para que cargara más rápido la
    información*/
    if (location.state?.todo) {
        todoText = location.state.todo.text;
    } else if (loading) {
        return <p>Cargando...</p>
    } else {
        const todo = getTodo(id);
        todoText = todo.text;
    }

    return (
        <TodoForm
            label="Edita tu TODO"
            defaultTodoText={todoText}
            submitText="Editar"
            submitEvent={(newText) => editTodo(id, newText)}
        />
    );
}

export { EditTodoPage };