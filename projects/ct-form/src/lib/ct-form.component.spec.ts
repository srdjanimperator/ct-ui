import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CtFormComponent } from './ct-form.component';

describe('CtFormComponent', () => {
  let component: CtFormComponent;
  let fixture: ComponentFixture<CtFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CtFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CtFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
