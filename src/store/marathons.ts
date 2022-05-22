import { makeAutoObservable } from "mobx";

interface IMarathons {
  id: number;
  title: string;
  descr: string;
  startedAt: Date | null;
}

class Marathons {
  marathons: IMarathons[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  addMarathon(title: string, descr: string, startedAt: Date | null) {
    const newMarathon: IMarathons = {
      id: Date.now(),
      title,
      descr,
      startedAt,
    };
    this.marathons.push(newMarathon);
  }
}

export default new Marathons();
