import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Comarques } from './comarques';

describe('Comarques', () => {
  let component: Comarques;
  let fixture: ComponentFixture<Comarques>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Comarques]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Comarques);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
