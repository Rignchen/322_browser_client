import { Router } from '@angular/router';
import { it, expect } from 'vitest';
import Category from '#types/category.js';

class MockRouter {
	navigate_route: string[] = [];
	navigate_params: Record<string, string> = {};

	navigate(route: string[], options: { queryParams: Record<string, string> }): Promise<Boolean> {
		this.navigate_route = route;
		this.navigate_params = options.queryParams;
		return new Promise((resolve) => {
			resolve(true);
		});
	}
};

it('should redirect properly', () => {
	const expected = {
		name: 'Category Name',
		icon: 'category-icon',
		route: 'category-route',
		params: {
			param1: 'category-param1',
			param2: 'category-param2',
		}
	};

	const category = new Category(expected.name, expected.icon, expected.route, expected.params);
	const router = new MockRouter();
	category.setRouter(router as unknown as Router); // Apparently this makes both typescript and angular happy
	category.goToCategory();
	expect(router.navigate_route).toEqual([expected.route]);
	expect(router.navigate_params).toEqual(expected.params);
});
