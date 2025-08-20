import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { rows } from '../data';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgxDatatableModule],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('first-ngx-datatable');
  rows = rows;
}
