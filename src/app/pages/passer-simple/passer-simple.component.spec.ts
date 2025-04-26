import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PasserSimpleComponent } from './passer-simple.component';

describe('PasserSimpleComponent', () => {
  let component: PasserSimpleComponent;
  let fixture: ComponentFixture<PasserSimpleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PasserSimpleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PasserSimpleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
