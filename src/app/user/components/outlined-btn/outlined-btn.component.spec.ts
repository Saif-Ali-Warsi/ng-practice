import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutlinedBtnComponent } from './outlined-btn.component';

describe('OutlinedBtnComponent', () => {
  let component: OutlinedBtnComponent;
  let fixture: ComponentFixture<OutlinedBtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OutlinedBtnComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OutlinedBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
