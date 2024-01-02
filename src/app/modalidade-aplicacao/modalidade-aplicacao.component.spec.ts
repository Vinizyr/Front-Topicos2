import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalidadeAplicacaoComponent } from './modalidade-aplicacao.component';

describe('ModalidadeAplicacaoComponent', () => {
  let component: ModalidadeAplicacaoComponent;
  let fixture: ComponentFixture<ModalidadeAplicacaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ModalidadeAplicacaoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModalidadeAplicacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
