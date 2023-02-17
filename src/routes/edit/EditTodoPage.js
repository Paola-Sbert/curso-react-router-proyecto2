import React from "react";
import { useParams } from "react-router-dom";
import { TodoForm } from '../../UI/TodoForm';
import { useTodos } from "../useTodos";

function EditTodoPage() {
    const { stateUpdaters } = useTodos();
    const { editTodo } = stateUpdaters;
    const params = useParams();
    const id = Number(params.id);

    return (
        <TodoForm 
            label='Edita tu TODO'
            submitText="Editar"
            submitEvent={(newText) => editTodo(id, newText)}
        />
    );
}

export { EditTodoPage }; 