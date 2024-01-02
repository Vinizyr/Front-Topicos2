import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoTransacaoComponent } from './tipo-transacao.component';

describe('TipoTransacaoComponent', () => {
  let component: TipoTransacaoComponent;
  let fixture: ComponentFixture<TipoTransacaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TipoTransacaoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TipoTransacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
