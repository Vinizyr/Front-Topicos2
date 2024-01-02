import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrupoDespesaComponent } from './grupo-despesa.component';

describe('GrupoDespesaComponent', () => {
  let component: GrupoDespesaComponent;
  let fixture: ComponentFixture<GrupoDespesaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GrupoDespesaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GrupoDespesaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
