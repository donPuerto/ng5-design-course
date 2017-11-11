import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';


@Injectable()
export class DataService {

  private storeGoals = new BehaviorSubject([
    'The Initial Goal',
    'Another silly life goal'
  ]);

  getGoals = this.storeGoals.asObservable();
  constructor() { }

  setGoals(goal) {
    this.storeGoals.next(goal);
  }

}
