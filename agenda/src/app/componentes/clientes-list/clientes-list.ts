import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-clientes-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './clientes-list.html',
  styleUrls: ['./clientes-list.css']
})
export class ClientesList {
  clientes = [
    {
      nome: 'João Silva',
      visitas: 24,
      total: 1680,
      email: 'joao@email.com',
      telefone: '(11) 98765-4321',
      servico: 'Corte de Cabelo',
      ultima: '15/11/2025',
      proxima: '20/11/2025 14:30'
    },
    {
      nome: 'Maria Santos',
      visitas: 12,
      total: 360,
      email: 'maria@email.com',
      telefone: '(11) 98765-4322',
      servico: 'Barba',
      ultima: '10/11/2025'
    },
    {
      nome: 'Pedro Costa',
      visitas: 8,
      total: 720,
      email: 'pedro@email.com',
      telefone: '(11) 98765-4323',
      servico: 'Corte + Barba',
      ultima: '12/11/2025',
      proxima: '18/11/2025 16:00'
    },
    {
      nome: 'Ana Oliveira',
      visitas: 15,
      total: 1050,
      email: 'ana@email.com',
      telefone: '(11) 98765-4324',
      servico: 'Corte de Cabelo',
      ultima: '14/11/2025'
    }
  ];
}
