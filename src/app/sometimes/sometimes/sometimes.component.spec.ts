import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SometimesComponent } from './sometimes.component';

describe('SometimesComponent', () => {
  let component: SometimesComponent;
  let fixture: ComponentFixture<SometimesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SometimesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SometimesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
