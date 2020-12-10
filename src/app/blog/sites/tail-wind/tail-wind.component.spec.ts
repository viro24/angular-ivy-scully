import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TailWindComponent } from './tail-wind.component';

describe('TailWindComponent', () => {
  let component: TailWindComponent;
  let fixture: ComponentFixture<TailWindComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TailWindComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TailWindComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
