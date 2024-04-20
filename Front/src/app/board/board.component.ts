import { Component, OnInit } from '@angular/core';
import { Task } from '../model/task.model';
import { TaskService } from '../task.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogOverviewDialog } from '../task-dialog/task-dialog.component';

@Component({
  selector: 'app-board',
  // standalone: true,
  // imports: [NgFor, NgForm, NgModel],
  templateUrl: './board.component.html',
  styleUrl: './board.component.css'
})
export class BoardComponent implements OnInit {
  newTask = { task: '', responsible: '',priority:0,deadline:Date.now(), status: 1 }; // Novo objeto de tarefa
  tasksTodo: Task[] = [];
  tasksDoing: Task[] = [];
  tasksDone: Task[] = [];

  constructor(private taskService: TaskService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.loadTasks();
  }

  loadTasks(): void {
    this.taskService.getTasks().subscribe(
      tasks => {
        this.tasksTodo = []
        this.tasksDoing = []
        this.tasksDone = []
        tasks.forEach(task => {
        if (task.status === 3){
          this.tasksDone.push(task)
        } else if (task.status === 2){
          this.tasksDoing.push(task)
        } else {
          this.tasksTodo.push(task)
        }})
        
      },
      error => {
        console.error('Error loading tasks:', error);
      }
    );
  }

  openAddTaskPopup(): void {
    const dialogRef = this.dialog.open(DialogOverviewDialog, {
      data: { titulo: 'Adicionar Tarefa' }
    });

    
    dialogRef.afterClosed().subscribe(result => {
      if (result === true) {
        this.addTask();
      }
    });
}



addTask() {
  // Aqui você pode enviar o objeto this.newTask para a API
  
  console.log('Nova tarefa:', this.newTask);
  // this.newTask = { task: '', responsible: '',priority:0,deadline:Date.now(), status: 1 };
}
}
