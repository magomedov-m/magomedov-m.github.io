import { useState } from "react";

function Form(props) {
    function handleChange(event) {
        setName(event.target.value)
    }
    const [name, setName] = useState('');
    function handleSubmit(event) {
        event.preventDefault();
        props.addTask(name);
        setName('');
    }
    return (
        <form onSubmit={handleSubmit}>
            <h2 className='label-wrapper'>
                <label htmlFor='new-todo-input' className='label__lg'>
                    Что нужно выполнить?
                </label>
            </h2>
            <input type='text'
                id='new-todo-input'
                className='input input__lg'
                name='text'
                autoComplete='off'
                value={name}
                onChange={handleChange}/>
            <button type='submit' className='btn btn__primary btn__lg'>
                Добавить
            </button>
        </form>
    ); 
}

export default Form;