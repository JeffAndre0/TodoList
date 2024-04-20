import { RouterModule, Routes } from '@angular/router';
import { BoardComponent } from './board/board.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
    { path: 'board', component: BoardComponent },
    { path: '', redirectTo: '/board', pathMatch: 'full' },
    { path: '**', redirectTo: '/board' }
];


@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
  })
  export class AppRoutingModule {}
  