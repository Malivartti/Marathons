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
  days: IDiary[] = [];

  constructor() {
    makeAutoObservable(this);
  }
}

export default new Diary();
