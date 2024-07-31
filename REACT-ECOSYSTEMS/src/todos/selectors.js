import { createSelector } from "reselect";
// import { todos } from "./reducers";
export const gettodos = (state) => {
    return state.todos.data;
}

export const gettodosloading = state => {
    return state.todos.isLoading;
}

export const getincompletetodos = createSelector(
    gettodos,
    (todos) => todos.filter(todo => !todo.isCompleted),
);

export const getcompletedtodos = createSelector(
    gettodos,
    (todos) => todos.filter(todo => todo.isCompleted)
)