import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipolancamentoComponent } from './tipolancamento.component';

describe('TipolancamentoComponent', () => {
  let component: TipolancamentoComponent;
  let fixture: ComponentFixture<TipolancamentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TipolancamentoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TipolancamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
