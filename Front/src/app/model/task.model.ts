export interface Task {
    id: number;
    task: string;
    responsible: string;
    priority: number;
    status: number;
    deadline: Date | null;
  }
  