import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElementodespesaComponent } from './elementodespesa.component';

describe('ElementodespesaComponent', () => {
  let component: ElementodespesaComponent;
  let fixture: ComponentFixture<ElementodespesaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ElementodespesaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ElementodespesaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
