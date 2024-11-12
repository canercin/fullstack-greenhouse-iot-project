import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlldatasComponent } from './alldatas.component';

describe('AlldatasComponent', () => {
  let component: AlldatasComponent;
  let fixture: ComponentFixture<AlldatasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlldatasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AlldatasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
