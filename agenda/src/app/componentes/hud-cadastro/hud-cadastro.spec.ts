import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HudCadastro } from './hud-cadastro';

describe('HudCadastro', () => {
  let component: HudCadastro;
  let fixture: ComponentFixture<HudCadastro>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HudCadastro]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HudCadastro);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
