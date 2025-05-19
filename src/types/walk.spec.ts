import { describe, it, expect } from 'vitest';
import Walk from './walk';

describe('filter walks on accessibility', () => {
	it('should not change the data if no accessibility is selected', () => {
		const data = [
			new Walk().fromObject({ id: 1, name: 'Walk 1', accessibility: ['A', 'B'] }),
			new Walk().fromObject({ id: 2, name: 'Walk 2', accessibility: ['C'] }),
			new Walk().fromObject({ id: 3, name: 'Walk 3', accessibility: ['A', 'C'] }),
		];
		const result = Walk.filterAccessibility(data, []);
		expect(result).toEqual(data);
	});
	describe('should keep only the walks that have all of the selected accessibility values', () => {
		it('with one value', () => {
			const data = [
				new Walk().fromObject({ id: 1, name: 'Walk 1', accessibility: ['A', 'B'] }),
				new Walk().fromObject({ id: 2, name: 'Walk 2', accessibility: ['C'] }),
				new Walk().fromObject({ id: 3, name: 'Walk 3', accessibility: ['A', 'C'] }),
			];
			const result = Walk.filterAccessibility(data, ['A']);
			expect(result).toEqual([data[0], data[2]]);
		});
		it('with multiple values', () => {
			const data = [
				new Walk().fromObject({ id: 1, name: 'Walk 1', accessibility: ['A', 'B'] }),
				new Walk().fromObject({ id: 2, name: 'Walk 2', accessibility: ['C'] }),
				new Walk().fromObject({ id: 3, name: 'Walk 3', accessibility: ['A', 'C'] }),
			];
			const result = Walk.filterAccessibility(data, ['A', 'C']);
			expect(result).toEqual([data[2]]);
		});
	});
});
