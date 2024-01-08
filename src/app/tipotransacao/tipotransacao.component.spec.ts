import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipotransacaoComponent } from './tipotransacao.component';

describe('TipotransacaoComponent', () => {
  let component: TipotransacaoComponent;
  let fixture: ComponentFixture<TipotransacaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TipotransacaoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TipotransacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
