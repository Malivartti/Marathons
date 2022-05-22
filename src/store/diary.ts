import { makeAutoObservable } from "mobx";

interface ITodo {
  id: number;
  title: string;
  completed: boolean;
}

interface IDiary {
  id: number;
  day: number;
  title: string;
  todos: ITodo[];
  results: string;
  score: number;
}

class Diary {
  days: IDiary[] = [
    { id: 1, day: 1, title: "Day 1", todos: [], results: "Good day", score: 5 },
    { id: 2, day: 2, title: "Day 2", todos: [], results: "Good day", score: 2 },
    { id: 3, day: 3, title: "Day 3", todos: [], results: "Good day", score: 8 },
    { id: 4, day: 4, title: "Day 4", todos: [], results: "Good day", score: 1 },
    { id: 5, day: 5, title: "Day 5", todos: [], results: "Good day", score: 1 },
    { id: 6, day: 6, title: "Day 6", todos: [], results: "Good day", score: 1 },
    { id: 7, day: 7, title: "Day 7", todos: [], results: "Good day", score: 1 },
  ];

  constructor() {
    makeAutoObservable(this);
  }
}

export default new Diary();
