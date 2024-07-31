import { useState } from 'react'
import React from 'react'
import './NewTodoForm.css'
import { connect } from 'react-redux'
//import { createtodo } from './actions'
import { addTodosRequest } from './thunks'
import { gettodos } from './selectors'

const NewTodoForm = ({todos, onCreatePressed}) => {
    const [inputValue, setTnputValue] = useState('')
  return (
    <div className='new-todo-form'>
        <input type='text' className='new-todo-input' value={inputValue}
         onChange={(e) => setTnputValue(e.target.value)}
         placeholder='TYPE NEW TODO' />
        <button
        onClick={() => {
          const isDuplicateText  = todos.some(todo => todo.text === inputValue);
          if(!isDuplicateText) {
            onCreatePressed(inputValue),
            setTnputValue('');
          }
        }}
        className='new-todo-button'>Create Todo</button>
    </div>
  )
}

const mapStateToProps = state => ({
  todos: gettodos(state),
});

const mapDispatchToProps = dispatch => ({
  onCreatePressed: (text) => dispatch(addTodosRequest(text)),
});

export default connect(mapStateToProps, mapDispatchToProps)(NewTodoForm);