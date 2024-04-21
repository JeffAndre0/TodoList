import {Component, Inject} from '@angular/core';
import {
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogRef,
  MatDialogTitle,
  MatDialogContent,
  MatDialogActions,
  MatDialogClose,
} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import {FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
export interface DialogData {
    task: string | null;
    responsible: string | null;
    priority: 1;
    status: number | null;
    deadline: Date | null;
  }
  

@Component({
    selector: 'task-dialog.component',
    templateUrl: 'task-dialog.component.html',
    standalone: true,
    imports: [
      MatFormFieldModule,
      MatInputModule,
      FormsModule,
      MatButtonModule,
      MatDialogTitle,
      MatDialogContent,
      MatDialogActions,
      MatDialogClose,
      MatSelectModule,
      MatDatepickerModule
    ],
  })
  export class DialogOverviewDialog {
     priority = 1
    constructor(
      public dialogRef: MatDialogRef<DialogOverviewDialog>,
      @Inject(MAT_DIALOG_DATA) public data: DialogData,
    ) {
      this.data.priority = 1;
    }
  
    onNoClick(): void {
      this.dialogRef.close();
    }
  }