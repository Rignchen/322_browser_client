import { describe, it, expect } from 'vitest';
import Walk, { filterAccessibility } from '#types/walk.js';

describe('instantiate a walk', () => {
	it('should create a walk with empty values', () => {
		const walk = new Walk();
		const expected = [
			['id', 0],
			['name', ''],
			['image_url', ''],
			['description', ''],
			['duration', 0],
			['distance_km', 0],
			['elevation_gain_m', 0],
			['terrain', ''],
			['path', []],
			['accessibility', []],
			['difficulty', ''],
			['map_link', ''],
		];
		expect(walk).toBeInstanceOf(Walk);
		expect(Object.entries(walk)).toEqual(expected);
	});
	it('Should correctly fill the walk with data', () => {
		const data = {
			id: 1,
			name: 'Walk 1',
			image_url: 'https://example.com/image.jpg',
			description: 'A beautiful walk',
			duration: 120,
			distance_km: 5,
			elevation_gain_m: 200,
			terrain: 'mountain',
			path: [
				{ lat: 1.0, lng: 2.0 },
				{ lat: 3.0, lng: 4.0 },
			],
			accessibility: ['A', 'B'],
			difficulty: 'Beginner',
			map_link: 'https://example.com/map',
		};
		const walk = (new Walk).fromObject(data);
		expect(walk).toBeInstanceOf(Walk);
		expect(Object.entries(walk)).toEqual(Object.entries(data));
	});
});

describe('filter walks on accessibility', () => {
	it('should not change the data if no accessibility is selected', () => {
		const data = [
			new Walk().fromObject({ id: 1, name: 'Walk 1', accessibility: ['A', 'B'] }),
			new Walk().fromObject({ id: 2, name: 'Walk 2', accessibility: ['C'] }),
			new Walk().fromObject({ id: 3, name: 'Walk 3', accessibility: ['A', 'C'] }),
		];
		const result = filterAccessibility(data, []);
		expect(result).toEqual(data);
	});
	describe('should keep only the walks that have all of the selected accessibility values', () => {
		it('with one value', () => {
			const data = [
				new Walk().fromObject({ id: 1, name: 'Walk 1', accessibility: ['A', 'B'] }),
				new Walk().fromObject({ id: 2, name: 'Walk 2', accessibility: ['C'] }),
				new Walk().fromObject({ id: 3, name: 'Walk 3', accessibility: ['A', 'C'] }),
			];
			const result = filterAccessibility(data, ['A']);
			expect(result).toEqual([data[0], data[2]]);
		});
		it('with multiple values', () => {
			const data = [
				new Walk().fromObject({ id: 1, name: 'Walk 1', accessibility: ['A', 'B'] }),
				new Walk().fromObject({ id: 2, name: 'Walk 2', accessibility: ['C'] }),
				new Walk().fromObject({ id: 3, name: 'Walk 3', accessibility: ['A', 'C'] }),
			];
			const result = filterAccessibility(data, ['A', 'C']);
			expect(result).toEqual([data[2]]);
		});
	});
});
