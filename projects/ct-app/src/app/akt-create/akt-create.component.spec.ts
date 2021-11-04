import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AktCreateComponent } from './akt-create.component';

describe('AktCreateComponent', () => {
  let component: AktCreateComponent;
  let fixture: ComponentFixture<AktCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AktCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AktCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
