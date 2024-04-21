import { Component, OnInit } from '@angular/core';
import { Task } from '../model/task.model';
import { TaskService } from '../task.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogOverviewDialog } from '../task-dialog/task-dialog.component';
import { DialogChangeStatus } from '../taskmove-dialog/taskmove-dialog.component';
import { ConfirmacaoDialogComponent } from '../confirmacao-dialog/confirmacao-dialog.component';
@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrl: './board.component.css',
})
export class BoardComponent implements OnInit {
  newTask = { task: '', responsible: '', priority: 0, deadline: Date.now(), status: 1 };
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
          if (task.status === 3) {
            this.tasksDone.push(task)
          } else if (task.status === 2) {
            this.tasksDoing.push(task)
          } else {
            this.tasksTodo.push(task)
          }
        })

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
      if (result) {
        this.addTask(result);
      }
    });
  }
  showMoveColumnDialog(task: Task, status: number): void {
    const dialogRef = this.dialog.open(DialogChangeStatus, {
      data: task
    });
    if (task.deadline) {
      task.deadline = new Date(task.deadline);
    }

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.updateTask(result);
      }
    });
  }

  addTask(newtask: Task) {
    this.taskService.postTask(newtask).subscribe(response => {
      console.log("Nova tarefa criada")
      this.loadTasks();
    })

  }
  updateTask(newtask: Task) {
    this.taskService.putTask(newtask).subscribe(response => {
      console.log("Tarefa Atualizada")
      this.loadTasks();
    })
  }


  deleteTask(deltask: number) {
    const dialogRef = this.dialog.open(ConfirmacaoDialogComponent, {
      data: { titulo: 'Remover Tarefa' }
    });

    dialogRef.afterClosed().subscribe(result => {

      if (result) {
        this.taskService.deleteTask(deltask).subscribe(response => {
          console.log("Tarefa Removida")
          this.loadTasks();
        });
      }
    });

  }

  isDeadlineExpired(deadline: Date): boolean {
    if (!deadline) {
      return false;
    }
    const today = new Date();
    const deadlineDate = new Date(deadline);
    return deadlineDate < today;
  }

}
