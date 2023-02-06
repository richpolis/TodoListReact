import React from "react";
import { TodoContext } from "../TodoContext";
import './TodoForm.css';

function TodoForm(){

    const [newTodoValue, setNewTodoValue] = React.useState('');

    const { addTodo, setOpenModal } = React.useContext(TodoContext);

    const onChange = (event) => {
        setNewTodoValue(event.target.value);
    };

    const onCancel = () => {
        setOpenModal(false);
    };

    const onSubmit = (event) => {
        event.preventDefault();
        addTodo(newTodoValue);
        setOpenModal(false);
        // También estaría bien resetear nuestro formulario
        setNewTodoValue('')
    };


    return (
        <form onSubmit={onSubmit}>
            <label>Escribe tu nuevo TODO: </label>
            <textarea 
                placeholder="Cortar la cebolla para el almuerzo"
                value={newTodoValue} 
                onChange={onChange}
            ></textarea>
            <div className="TodoForm-buttonContainer">
                <button 
                    className="TodoForm-button TodoForm-button--cancel"
                    type="button" 
                    onClick={onCancel}
                >Cancelar</button>
                <button 
                    type="submit" 
                    className="TodoForm-button TodoForm-button--add"
                >Guardar</button>
            </div>
        </form>
    );
}

export { TodoForm };