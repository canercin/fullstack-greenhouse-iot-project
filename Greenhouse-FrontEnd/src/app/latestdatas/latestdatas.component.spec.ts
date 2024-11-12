import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LatestdatasComponent } from './latestdatas.component';

describe('LatestdatasComponent', () => {
  let component: LatestdatasComponent;
  let fixture: ComponentFixture<LatestdatasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LatestdatasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LatestdatasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
