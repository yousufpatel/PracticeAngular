import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForLoopDemoComponent } from './for-loop-demo.component';

describe('ForLoopDemoComponent', () => {
  let component: ForLoopDemoComponent;
  let fixture: ComponentFixture<ForLoopDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForLoopDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForLoopDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
