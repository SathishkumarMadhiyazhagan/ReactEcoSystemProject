export const CREATE_TODO = 'CREATE_TODO';
export const createtodo = todo => ({
    type: CREATE_TODO,
    payload: {todo},
});

export const REMOVE_TODO = 'REMOVE_TODO';
export const removetodo = todo => ({
    type: REMOVE_TODO,
    payload: {todo},
});

export const MARK_TODO_AS_COMPLETED = "MARK_TODO_AS_COMPLETED";
export const marktodoascompleted = todo => ({
    type: MARK_TODO_AS_COMPLETED,
    payload: {todo}
});

export const LOAD_TODOS_IN_PROGRESS = 'LOAD_TODOS_IN_PROGRESS';
export const loadtodosinprogress = () => ({
    type: LOAD_TODOS_IN_PROGRESS,
    // payload: {}
});

export const LOAD_TODOS_SUCCESS = "LOAD_TODOS_SUCCESS";
export const loadtodossuccess = (todos) => ({
    type: LOAD_TODOS_SUCCESS,
    payload: {todos},
});

export const LOAD_TODOS_FAILURE = "LOAD_TODOS_FAILURE";
export const loadtodosfailure = () => ({
    type: LOAD_TODOS_FAILURE,
    // payload: {}
})
