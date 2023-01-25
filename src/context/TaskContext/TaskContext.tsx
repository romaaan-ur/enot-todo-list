import React, { FC, useContext, useState } from "react";

import dayjs from "dayjs";
import isToday from "dayjs/plugin/isToday";

import { ITaskContext, ITask, IPastTasks } from "./type";
import { initialTasks } from "./utils";

dayjs.extend(isToday);

const TasksContext = React.createContext<ITaskContext | null>(null);

export const useTasks = () => useContext(TasksContext) as ITaskContext;

interface Props {
  children: React.ReactNode;
}

export const TaskProvider: FC<Props> = ({ children }) => {
  const [tasks, setTasks] = useState<ITask[]>(initialTasks);

  const getTodayTasks = () =>
    tasks
      .filter(({ createdAt }) => dayjs(createdAt).isToday())
      .sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());

  const getListTasks = () => {
    const listTasks: IPastTasks[] = [];

    const pastTasks = tasks
      .filter(({ createdAt }) => !dayjs(createdAt).isToday())
      .sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());

    pastTasks.forEach((task) => {
      const formatDate = dayjs(task.createdAt).format("DD/MM");

      const existItem = listTasks.findIndex(
        (item) => item.formatDate === formatDate
      );

      if (existItem >= 0) {
        listTasks[existItem].tasks.push(task);
      } else {
        listTasks.push({ formatDate, tasks: [task] });
      }
    });

    return listTasks;
  };

  const togglecompleteTask = (id: number) => {
    tasks.forEach((task) => {
      if (task.id === id) {
        task.complete = !task.complete;
        setTasks([...tasks]);
      }
    });
  };

  const addTask = (task: ITask) => setTasks((prev) => [...prev, task]);

  return (
    <TasksContext.Provider
      value={{
        tasks,
        getTodayTasks,
        togglecompleteTask,
        getListTasks,
        addTask,
      }}
    >
      {children}
    </TasksContext.Provider>
  );
};
