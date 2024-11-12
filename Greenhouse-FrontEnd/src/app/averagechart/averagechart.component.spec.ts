import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AveragechartComponent } from './averagechart.component';

describe('AveragechartComponent', () => {
  let component: AveragechartComponent;
  let fixture: ComponentFixture<AveragechartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AveragechartComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AveragechartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
