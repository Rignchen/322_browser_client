import { Router } from '@angular/router';

export default class Category {
  name: string = '';
  icon: string = '';
  route: string = '';
  params: Record<string, string> = {};
  private router: Router | undefined;

  constructor(
    name: string = '',
    icon: string = '',
    route: string = '',
    params: Record<string, string> = {},
    router?: Router
  ) {
    this.name = name;
    this.icon = icon;
    this.route = route;
    this.params = params;
    this.router = router;
  }

  setRouter(router: Router): void {
    this.router = router;
  }

  goToCategory(): void {
    if (!this.router) {
      console.error('Router is not set for category:', this.name);
      return;
    }
    this.router.navigate([this.route], { queryParams: this.params });
  }
}
