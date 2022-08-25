import {
    filterInputData,
    formatInputData,
} from '@components/SavingsPlanner/utils';

describe('Input formating/filtering', () => {
    test('Input filtering should remove non-numreic chars from the string', () => {
        expect(filterInputData('$1,000.00')).toBe('1,000.00');
        expect(filterInputData('$1,00sdvsdvsvds')).toBe('1,00');
    });

    test('Input formatting should format string in 1,000.00 format', () => {
        expect(formatInputData('$1000.00')).toBe('1,000.00');
        expect(formatInputData('$100,,,0.00')).toBe('1,000.00');
        expect(formatInputData('$1000....00')).toBe('1,000.00');
        expect(formatInputData('$1000....0000')).toBe('1,000.00');
    });
});
