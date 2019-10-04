import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleComonentComponent } from './simple-comonent.component';

describe('SimpleComonentComponent', () => {
  let component: SimpleComonentComponent;
  let fixture: ComponentFixture<SimpleComonentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimpleComonentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleComonentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
