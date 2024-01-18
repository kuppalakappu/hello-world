import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentchildComponent } from './parentchild.component';

describe('ParentchildComponent', () => {
  let component: ParentchildComponent;
  let fixture: ComponentFixture<ParentchildComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ParentchildComponent]
    });
    fixture = TestBed.createComponent(ParentchildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
