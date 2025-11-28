import { Component } from '@angular/core';
import { Sidebar } from '../../../componentes/sidebar/sidebar';
import { Configuracoes } from '../../../componentes/configuracoes/configuracoes';

@Component({
  selector: 'app-configuracoes-page',
  imports: [Sidebar, Configuracoes],
  templateUrl: './configuracoes-page.html',
  styleUrl: './configuracoes-page.css',
})
export class ConfiguracoesPage {

}
