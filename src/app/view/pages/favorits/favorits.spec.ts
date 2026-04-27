import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Favorits } from './favorits';

describe('Favorits', () => {
  let component: Favorits;
  let fixture: ComponentFixture<Favorits>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Favorits]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Favorits);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
