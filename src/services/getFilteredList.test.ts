import { getFilteredList } from './getFilteredList';

describe('parse name', () => {
    test('parse tank name', () => {
        expect(getFilteredList(10,'a', 2, true, () => {})).toBe('a');
    });
})
