import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildHeaderDetailsComponent } from './child-header-details.component';

describe('ChildHeaderDetailsComponent', () => {
  let component: ChildHeaderDetailsComponent;
  let fixture: ComponentFixture<ChildHeaderDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChildHeaderDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChildHeaderDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
