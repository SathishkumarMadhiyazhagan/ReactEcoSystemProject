import React, {useEffect} from 'react';
import TodoListItem from './TodoListItem'
//import './TodoList.css'
import NewTodoForm from './NewTodoForm';
import { connect } from 'react-redux';
import { removetodo, marktodoascompleted } from './actions';
import { displayAlert,loadTodos, removeTodoRequest, markTodoCompletedRequest } from './thunks';
import { isLoading } from './reducers';
import styled from 'styled-components';
import { gettodos, gettodosloading, getcompletedtodos, getincompletetodos } from './selectors';

const ListWrapper = styled.div`
  max-width: 700px;
  margin: auto;
`;

const TodoList = ({/*todos,*/ completedTodos, incompletedTodos, onRemovePressed, onCompletedPressed, isLoading, startLoadingTodos
  //onDisplayAlertClicked
}) => {
  useEffect(() => {
    startLoadingTodos();
  }, [])
  const loadingmessage = <div>Loading......</div>;
  const content = (
    <ListWrapper>
        <NewTodoForm />
        <h3>IncompletedTodos</h3>
        {incompletedTodos.map(todo => <TodoListItem todo={todo} onRemovePressed={onRemovePressed}
         onCompletedPressed={onCompletedPressed} 
         //onDisplayAlertClicked={onDisplayAlertClicked}
         />)}
         <h3>CompletedTodos</h3>
         {completedTodos.map(todo => <TodoListItem todo={todo} onRemovePressed={onRemovePressed}
         onCompletedPressed={onCompletedPressed} 
         //onDisplayAlertClicked={onDisplayAlertClicked}
         />)}
    </ListWrapper>
  );

  return isLoading ? loadingmessage : content;
}

const mapStateToProps = state => ({
  isLoading: gettodosloading(state),
  // todos: gettodos(state),
  completedTodos: getcompletedtodos(state),
  incompletedTodos: getincompletetodos(state)
});

const mapDispatchToProps = dispatch => ({
  startLoadingTodos: () => dispatch(loadTodos()),
  onRemovePressed: id => dispatch(removeTodoRequest(id)),
  onCompletedPressed: id => dispatch(markTodoCompletedRequest(id)),
  //onDisplayAlertClicked: text => dispatch(displayAlert(text)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
