import { Component } from '@angular/core';
import { Horarios } from "../../../componentes/horarios/horarios";
import { Sidebar } from "../../../componentes/sidebar/sidebar";

@Component({
  selector: 'app-agenda',
  imports: [Horarios, Sidebar],
  templateUrl: './agenda.html',
  styleUrl: './agenda.css',
})
export class Agenda {

}
