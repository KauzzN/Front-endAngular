import { Component } from '@angular/core';
import { Header } from "../../../componentes/header/header";
import { HudCadastro } from '../../../componentes/hud-cadastro/hud-cadastro';

@Component({
  selector: 'app-cadastro',
  imports: [Header, HudCadastro],
  templateUrl: './cadastro.html',
  styleUrl: './cadastro.css',
})
export class Cadastro {

}
