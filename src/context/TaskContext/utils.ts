import { ITask } from "./type";
import dayjs from "dayjs";


const substractDay = (date: Date, dayCount: number) => dayjs(date).subtract(dayCount, "d").toDate();

export const initialTasks: ITask[] = [
  {
    id: 1,
    createdAt: new Date(),
    title: "Visit David",
    message: "Lorem Ipsum Dolor Sit meteet",
    complete: false,
    category: "red"
  },
  {
    id: 2,
    createdAt: new Date(),
    title: "Goceries For Dinner",
    message: "Lorem Ipsum Dolor Sit meteet",
    complete: false,
    category: "blue"
  },
  {
    id: 3,
    createdAt: new Date(),
    title: "Fix Dad's iPad",
    message: "Lorem Ipsum Dolor Sit meteet",
    complete: true,
    category: "yellow"
  },
  {
    id: 4,
    createdAt: substractDay(new Date(), 1),
    title: "Fix Dad's iPad",
    message: "Lorem Ipsum Dolor Sit meteet",
    complete: false,
    category: "red"
  },
  {
    id: 5,
    createdAt: substractDay(new Date(), 1),
    title: "Fix Dad's iPad",
    message: "Lorem Ipsum Dolor Sit meteet",
    complete: false,
    category: "blue"
  },
  {
    id: 6,
    createdAt: substractDay(new Date(), 2),
    title: "Fix Dad's iPad",
    message: "Lorem Ipsum Dolor Sit meteet",
    complete: false,
    category: "yellow"
  },
  {
    id: 7,
    createdAt: substractDay(new Date(), 2),
    title: "Fix Dad's iPad",
    message: "Lorem Ipsum Dolor Sit meteet",
    complete: false,
    category: "red"
  },
  {
    id: 8,
    createdAt: substractDay(new Date(), 2),
    title: "Fix Dad's iPad",
    message: "Lorem Ipsum Dolor Sit meteet",
    complete: false,
    category: "blue"
  },
  {
    id: 9,
    createdAt: substractDay(new Date(), 4),
    title: "Fix Dad's iPad",
    message: "Lorem Ipsum Dolor Sit meteet",
    complete: false,
    category: "yellow"
  },
  {
    id: 10,
    createdAt: substractDay(new Date(), 4),
    title: "Fix Dad's iPad",
    message: "Lorem Ipsum Dolor Sit meteet",
    complete: false,
    category: "red"
  },
];

