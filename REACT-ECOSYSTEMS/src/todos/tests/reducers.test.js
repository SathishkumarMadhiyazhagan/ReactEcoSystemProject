import { expect } from 'chai';
import {todos} from '../reducers';

describe('the todos reducers', () => {
    it('Add a new todo when CREAT_TODO action is received', () => {
        const faketodo = {text: 'hello', isCompleted: false};
        const fakeaction = {
            type: 'CREATE_TODO',
            payload: {
                todo: faketodo,
            }
        }
        const originalstate = {isLoading: false, data: []};

        const expected = {
            isLoading: false,
            data: [faketodo]
        }
        const actual = todos(originalstate, fakeaction);

        expect(actual).to.deep.equal(expected)
    })
})