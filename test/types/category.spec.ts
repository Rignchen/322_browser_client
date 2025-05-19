import { Router } from '@angular/router';
import { it, expect } from 'vitest';
import Category from '#types/category.js';

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

  const router = {
    navigate: (route: string[], options: { queryParams: Record<string, string> }) => {
      expect(route).toEqual([expected.route]);
      expect(options.queryParams).toEqual(expected.params);
    }
  };

  const category = new Category(expected.name, expected.icon, expected.route, expected.params);
  category.setRouter(router as unknown as Router); // Apparently this makes both typescript and angular happy
  category.goToCategory();
});
