import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartsboxComponent } from './chartsbox.component';

describe('ChartsboxComponent', () => {
  let component: ChartsboxComponent;
  let fixture: ComponentFixture<ChartsboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChartsboxComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChartsboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
