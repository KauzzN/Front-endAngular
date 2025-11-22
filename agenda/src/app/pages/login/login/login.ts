import { Component } from '@angular/core';
import { HudLogin } from '../../../componentes/hud-login/hud-login';
import { Header } from '../../../componentes/header/header';


@Component({
  selector: 'app-login',
  imports: [HudLogin, Header],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {

}
