import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscoverMagazineComponent } from './discover-magazine.component';

describe('DiscoverMagazineComponent', () => {
  let component: DiscoverMagazineComponent;
  let fixture: ComponentFixture<DiscoverMagazineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DiscoverMagazineComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiscoverMagazineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
