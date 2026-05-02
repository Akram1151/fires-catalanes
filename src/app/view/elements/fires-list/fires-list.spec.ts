import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiresList } from './fires-list';

describe('FiresList', () => {
  let component: FiresList;
  let fixture: ComponentFixture<FiresList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FiresList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FiresList);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
