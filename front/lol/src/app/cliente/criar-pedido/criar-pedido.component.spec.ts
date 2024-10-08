import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriarPedidoComponent } from './criar-pedido.component';

describe('CriarPedidoComponent', () => {
  let component: CriarPedidoComponent;
  let fixture: ComponentFixture<CriarPedidoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CriarPedidoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CriarPedidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
