import { Component } from '@angular/core';
import { Servicos } from '../../../componentes/servicos/servicos';
import { Sidebar } from '../../../componentes/sidebar/sidebar';

@Component({
  selector: 'app-servicos-page',
  imports: [Servicos, Sidebar],
  templateUrl: './servicos-page.html',
  styleUrl: './servicos-page.css',
})
export class ServicosPage {

}
