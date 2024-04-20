import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Task } from './model/task.model';
@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private apiUrl = 'http://localhost:5062/v1/tasks';

  constructor(private http: HttpClient) { }

  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this.apiUrl);
  }

  
  postTask(task: Task): Observable<Task> {
  return this.http.post<Task>(`${this.apiUrl}`, task);
  }

  putTask(task: Task): Observable<Task> {
  return this.http.put<Task>(`${this.apiUrl}/${task.id}`, task);
  }
}
