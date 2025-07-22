import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-task-detail',
  standalone: true,
  imports: [CommonModule],
  template: `<h1 style="color:red;">Detalle de tarea inline - id: {{taskId}}</h1>`,
})
export class TaskDetailComponent {
  private route = inject(ActivatedRoute);
  taskId: string | null = null;

  constructor() {
    this.taskId = this.route.snapshot.paramMap.get('idTask');
  }
}
