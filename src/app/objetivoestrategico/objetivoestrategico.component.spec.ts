import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObjetivoestrategicoComponent } from './objetivoestrategico.component';

describe('ObjetivoestrategicoComponent', () => {
  let component: ObjetivoestrategicoComponent;
  let fixture: ComponentFixture<ObjetivoestrategicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ObjetivoestrategicoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ObjetivoestrategicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
