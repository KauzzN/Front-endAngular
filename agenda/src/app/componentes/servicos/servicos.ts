import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface ServiceModel {
  id: number;
  name: string;
  description: string;
  category: string;
  duration: number;
  price: number;
  isActive: boolean;
}

@Component({
  selector: 'app-servicos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './servicos.html',
  styleUrls: ['./servicos.css']
})
export class Servicos {

  services: ServiceModel[] = [
    { id: 1, name: 'Corte de Cabelo', description: 'Corte tradicional ou moderno', category: 'Cabelo', duration: 45, price: 70, isActive: true },
    { id: 2, name: 'Barba', description: 'Aparar e modelar barba', category: 'Barba', duration: 30, price: 30, isActive: true },
    { id: 3, name: 'Corte + Barba', description: 'Combo completo', category: 'Combo', duration: 75, price: 90, isActive: true },
    { id: 4, name: 'Hidratação Capilar', description: 'Tratamento hidratante profundo', category: 'Tratamentos', duration: 60, price: 120, isActive: true },
    { id: 5, name: 'Platinado/Luzes', description: 'Coloração especial', category: 'Coloração', duration: 120, price: 200, isActive: false }
  ];

  constructor() {}

  toggleStatus(service: ServiceModel): void {
    service.isActive = !service.isActive;
  }

  onEdit(service: ServiceModel): void {
    console.log('Editar:', service);
  }

  onDelete(service: ServiceModel): void {
    if (confirm(`Deseja remover ${service.name}?`)) {
      this.services = this.services.filter(s => s.id !== service.id);
    }
  }
}
