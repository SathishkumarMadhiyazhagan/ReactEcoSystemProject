import { expect } from "chai";
import { getcompletedtodos } from '../selectors';

describe('The getCompletedTodo Selector', () => {
    it('Returns only completed todos', () => {
        const faketodos = [{ 
            text: 'say hello',
            isCompleted: true,
        }, { 
            text: 'say goodbye',
            isCompleted: false,
        }, { 
            text: 'Climb Mount Everest',
            isCompleted: false,
        }];

        const expected = [{
            text: 'say hello',
            isCompleted: true,
        }]
        const actual = getcompletedtodos.resultFunc(faketodos);
        expect(actual).to.deep.equal(expected);
    })
})