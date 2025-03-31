import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WalkDetailComponent } from './walk-detail.component';

describe('WalkDetailComponent', () => {
  let component: WalkDetailComponent;
  let fixture: ComponentFixture<WalkDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WalkDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WalkDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
