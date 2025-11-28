import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

type Appointment = {
  id: number;
  date: string; // ISO date yyyy-mm-dd
  time: string; // hh:mm
  client: string;
  service: string;
  status: 'Confirmado' | 'Pendente' | 'Cancelado';
  durationMin?: number;
};

@Component({
  selector: 'app-horarios',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './horarios.html',
  styleUrls: ['./horarios.css'],
})
export class Horarios {
  today = new Date();
  viewYear = this.today.getFullYear();
  viewMonth = this.today.getMonth(); // 0-indexed
  weeks: number[][] = []; // matrix for days
  selectedDate: Date = this.today;

  // Mock appointments - substitui por dados reais da API
  appointments: Appointment[] = [
    { id: 1, date: this.toISO(this.today), time: '09:00', client: 'João Silva', service: 'Corte de Cabelo', status: 'Confirmado', durationMin: 45 },
    { id: 2, date: this.toISO(this.today), time: '10:00', client: 'Maria Santos', service: 'Barba', status: 'Confirmado', durationMin: 30 },
    { id: 3, date: this.toISO(this.today), time: '14:30', client: 'Pedro Costa', service: 'Corte + Barba', status: 'Pendente', durationMin: 60 },
    { id: 4, date: this.toISO(this.today), time: '16:00', client: 'Ana Oliveira', service: 'Corte de Cabelo', status: 'Confirmado', durationMin: 45 },
    // outro dia do mês
    { id: 5, date: this.toISO(new Date(this.viewYear, this.viewMonth, 28)), time: '11:00', client: 'Cliente X', service: 'Coloração', status: 'Confirmado', durationMin: 90 },
  ];

  // Horários padrão para visualização (pode vir da API)
  timeSlots = [
    '08:00','09:00','10:00','11:00','12:00','13:00',
    '14:00','15:00','16:00','17:00','18:00','19:00'
  ];

  constructor() {
    this.buildCalendar(this.viewYear, this.viewMonth);
  }

  toISO(d: Date) {
    return d.toISOString().slice(0, 10);
  }

  buildCalendar(year: number, month: number) {
    // cria matriz de semanas contendo número do dia (0 se vazio)
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const startWeekDay = firstDay.getDay(); // 0 (dom) - 6 (sab)
    const totalDays = lastDay.getDate();

    const matrix: number[][] = [];
    let week: number[] = new Array(7).fill(0);
    let dayCounter = 1;

    // primeira semana
    for (let i = startWeekDay; i < 7; i++) {
      week[i] = dayCounter++;
    }
    matrix.push([...week]);

    // semanas do meio
    while (dayCounter <= totalDays) {
      week = new Array(7).fill(0);
      for (let i = 0; i < 7 && dayCounter <= totalDays; i++) {
        week[i] = dayCounter++;
      }
      matrix.push([...week]);
    }

    this.weeks = matrix;
  }

  prevMonth() {
    if (this.viewMonth === 0) {
      this.viewMonth = 11;
      this.viewYear--;
    } else {
      this.viewMonth--;
    }
    this.buildCalendar(this.viewYear, this.viewMonth);
  }

  nextMonth() {
    if (this.viewMonth === 11) {
      this.viewMonth = 0;
      this.viewYear++;
    } else {
      this.viewMonth++;
    }
    this.buildCalendar(this.viewYear, this.viewMonth);
  }

  selectDay(dayNum: number | 0) {
    if (!dayNum) return;
    this.selectedDate = new Date(this.viewYear, this.viewMonth, dayNum);
  }

  // retorna agendamentos do dia selecionado
  get appointmentsOfSelected() {
    return this.appointments
      .filter(a => a.date === this.toISO(this.selectedDate))
      .sort((a,b)=> a.time.localeCompare(b.time));
  }

  // para a visualização por horário: verifica se há compromisso no horário
  slotStatus(slot: string) {
    const iso = this.toISO(this.selectedDate);
    const found = this.appointments.find(a => a.date === iso && a.time === slot);
    return found ? { state: 'Ocupado', appointment: found } : { state: 'Livre', appointment: null };
  }

  monthLabel() {
    return new Date(this.viewYear, this.viewMonth).toLocaleString('pt-BR', { month: 'long', year: 'numeric' });
  }

  // destaque se o dia tem algum evento
  hasEvent(day: number) {
    if (!day) return false;
    const iso = new Date(this.viewYear, this.viewMonth, day).toISOString().slice(0,10);
    return this.appointments.some(a => a.date === iso);
  }

  isSelected(day: number) {
    if (!day) return false;
    return this.selectedDate.getFullYear() === this.viewYear &&
           this.selectedDate.getMonth() === this.viewMonth &&
           this.selectedDate.getDate() === day;
  }
}
