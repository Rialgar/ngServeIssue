import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlwaysComponent } from './always.component';

describe('AlwaysComponent', () => {
  let component: AlwaysComponent;
  let fixture: ComponentFixture<AlwaysComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlwaysComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlwaysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
