import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HudLogin } from './hud-login';

describe('HudLogin', () => {
  let component: HudLogin;
  let fixture: ComponentFixture<HudLogin>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HudLogin]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HudLogin);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
