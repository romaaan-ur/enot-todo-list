export type TaskCategory = "red" | "blue" | "yellow";

export interface ITask {
  id: number;
  createdAt: Date;
  title: string;
  message: string;
  complete: boolean;
  category: TaskCategory;
}

export interface IPastTasks {
  formatDate: string;
  tasks: ITask[];
}

export interface ITaskContext {
  tasks: ITask[];
  getTodayTasks: () => ITask[];
  togglecompleteTask: (id: number) => void;
  getListTasks: () => IPastTasks[];
  addTask: (task: ITask) => void;
}
