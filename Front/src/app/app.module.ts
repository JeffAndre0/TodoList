import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app.routes';
import { AppComponent } from './app.component';
import { TaskService } from './task.service';
import { BoardComponent } from './board/board.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    BoardComponent

    // AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule

  ],
  providers: [TaskService],
  bootstrap: [AppComponent]
})
export class AppModule { }
