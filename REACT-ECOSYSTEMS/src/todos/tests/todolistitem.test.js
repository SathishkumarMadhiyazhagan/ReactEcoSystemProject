import { expect } from "chai";
import { getBorderStyleForDate } from "../TodoListItem";

describe('getBorderStyleForDate', () => {
    it('Return none when the date is less than five days ago', () => {
        const today = Date.now();
        const recentDate = new Date(Date.now() - 86400000 * 3);

        const expected = 'none';
        const actual = getBorderStyleForDate(recentDate, today);

        expect(actual).to.deep.equal(expected);
    });

    it('Return a border when the date is more than five days ago', () => {
        const today = Date.now();
        const recentDate = new Date(Date.now() - 86400000 * 5);

        const expected = '2px solid red';
        const actual = getBorderStyleForDate(recentDate, today);

        expect(actual).to.deep.equal(expected);
    });
})