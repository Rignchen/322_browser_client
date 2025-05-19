import { describe, it, expect } from 'vitest';
import { formatFilters } from '#types/fetch.js'

describe('formatFilters', () => {
	it('should be empty if all parameters are null', () => {
		const result = formatFilters(null, [], [], [null, null]);
		expect(result).toBe('');
	});
	it('should format name properly', () => {
		const result = formatFilters('test', [], [], [null, null]);
		expect(result).toBe('?name_like=test');
	});
	describe('should format difficulty properly', () => {
		it('with one value', () => {
			const result = formatFilters(null, ['Beginner'], [], [null, null]);
			expect(result).toBe('?difficulty[]=Beginner');
		});
		it('with multiple values', () => {
			const result = formatFilters(null, ['Beginner', 'Intermediate'], [], [null, null]);
			expect(result).toBe('?difficulty[]=Beginner&difficulty[]=Intermediate');
		});
	});
	describe('should format terrain properly', () => {
		it('with one value', () => {
			const result = formatFilters(null, [], ['Mountain'], [null, null]);
			expect(result).toBe('?terrain[]=Mountain');
		});
		it('with multiple values', () => {
			const result = formatFilters(null, [], ['Mountain', 'Forest'], [null, null]);
			expect(result).toBe('?terrain[]=Mountain&terrain[]=Forest');
		});
	});
	describe('should format duration properly', () => {
		it('with only min value', () => {
			const result = formatFilters(null, [], [], [42, null]);
			expect(result).toBe('?duration_gte=42');
		});
		it('with only max value', () => {
			const result = formatFilters(null, [], [], [null, 69]);
			expect(result).toBe('?duration_lte=69');
		});
		it('with both values', () => {
			const result = formatFilters(null, [], [], [42, 69]);
			expect(result).toBe('?duration_gte=42&duration_lte=69');
		});
	});
	it('should format all parameters together', () => {
		const result = formatFilters('test', ['Beginner', 'Intermediate'], ['Mountain', 'Forest'], [42, 69]);
		expect(result).toBe('?name_like=test&difficulty[]=Beginner&difficulty[]=Intermediate&terrain[]=Mountain&terrain[]=Forest&duration_gte=42&duration_lte=69');
	});
});
