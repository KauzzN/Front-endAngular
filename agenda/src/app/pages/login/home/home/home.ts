import { Component } from '@angular/core';
import { Sidebar } from '../../../../componentes/sidebar/sidebar';
import { Dashboard } from '../../../../componentes/dashboard/dashboard';


@Component({
  selector: 'app-home',
  imports: [Sidebar, Dashboard],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

}
