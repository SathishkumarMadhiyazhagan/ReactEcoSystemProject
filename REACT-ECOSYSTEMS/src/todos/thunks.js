import {createtodo, removetodo, marktodoascompleted, loadtodossuccess, loadtodosinprogress,
     loadtodosfailure } from "./actions";

export const loadTodos = () => async (dispatch, getState) => {
    try {
        dispatch(loadtodosinprogress());
        const response = await fetch('http://localhost:8080/todos');
        const todos = await response.json();
        dispatch(loadtodossuccess(todos));
    } catch(e) {
        dispatch(loadtodosfailure());
        dispatch(displayAlert(e));
    }

};

export const addTodosRequest = text => async (dispatch, getState) => {
    try {
        const body = JSON.stringify({text});
    const response = await fetch('http://localhost:8080/todos', {
        headers: {
            'Content-Type': 'application/json',
        },
        method:'post',
        body,
    });
    const todo = await response.json();
    dispatch(createtodo(todo))
    } catch(e) {
        dispatch(displayAlert(e))
    }
}

export const removeTodoRequest = (id) => async (dispatch, getState) => {
    try {
        const response = await fetch(`http://localhost:8080/todos/${id}`, {
            method: 'delete'
        });
        const removetodoitem = await response.json();
        dispatch(removetodo(removetodoitem));
    } catch(e) {
        dispatch(displayAlert(e));
    }
}

export const markTodoCompletedRequest = (id) => async (dispatch, getState) => {
    try {
        const response = await fetch(`http://localhost:8080/todos/${id}/completed`, {
            method:'post',
        });
        const updatedtodoitem = await response.json();
        dispatch(marktodoascompleted(updatedtodoitem));

    } catch(e) {
        dispatch(displayAlert(e));
    }
}

export const displayAlert = text => () => {
    alert(text);
}