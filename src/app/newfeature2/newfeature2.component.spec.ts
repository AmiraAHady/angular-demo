import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Newfeature2Component } from './newfeature2.component';

describe('Newfeature2Component', () => {
  let component: Newfeature2Component;
  let fixture: ComponentFixture<Newfeature2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Newfeature2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Newfeature2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
