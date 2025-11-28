import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-configuracoes',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './configuracoes.html',
  styleUrls: ['./configuracoes.css']
})
export class Configuracoes {

  theme = 'dark';
  notificacoes = {
    email: true,
    sms: false,
    sistema: true
  };

  dadosEmpresa = {
    nome: 'Barbearia Premium',
    email: 'contato@barbearia.com',
    telefone: '(00) 00000-0000',
    endereco: 'Rua Exemplo, 123 - Centro'
  };

  salvar() {
    console.log("Configurações salvas!");
  }
}
