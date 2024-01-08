import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnidadeorcamentariaComponent } from './unidadeorcamentaria.component';

describe('UnidadeorcamentariaComponent', () => {
  let component: UnidadeorcamentariaComponent;
  let fixture: ComponentFixture<UnidadeorcamentariaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UnidadeorcamentariaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UnidadeorcamentariaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
