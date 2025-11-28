import { Component } from '@angular/core';
import { Sidebar } from '../../../componentes/sidebar/sidebar';
import { ClientesList } from '../../../componentes/clientes-list/clientes-list';

@Component({
  selector: 'app-clientes',
  standalone: true,
  imports: [Sidebar, ClientesList],
  templateUrl: './clientes.html',
  styleUrl: './clientes.css',
})
export class Clientes {

}
