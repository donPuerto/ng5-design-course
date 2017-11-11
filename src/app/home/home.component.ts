import { Component, OnInit } from '@angular/core';
import { trigger, style, transition, animate, keyframes, query, stagger} from '@angular/animations';
import { DataService } from '../data.service';




@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    trigger('goals', [
      transition('* => *', [
        query(':enter', style({opacity: 0}), {optional: true}),
        query(':enter', stagger('300ms', [
          animate('.6s ease-in', keyframes([
            style({opacity: 0, transform: 'translateY(-75%)', offset: 0}),
            style({opacity: .5, transform: 'translateY(35px)', offset: .3}),
            style({opacity: 1, transform: 'translateY(0)', offset: 1}),
          ]))]), {optional: true}),
        query(':leave', stagger('300ms', [
          animate('.6s ease-out', keyframes([
            style({opacity: 1, transform: 'translateY(0)', offset: 0}),
            style({opacity: .5, transform: 'translateY(35px)', offset: .3}),
            style({opacity: 0, transform: 'translateY(-75%)', offset: 1}),
          ]))]), {optional: true}),
      ])
    ])
  ]
})

export class HomeComponent implements OnInit {

  itemCount: Number = 0;
  btnText: String = 'Add an Item';
  goalText: String = '';
  goals = [];

  constructor(private _data: DataService) { }

  ngOnInit() {
    // upload data
   this._data.getGoals.subscribe(res => this.goals = res);
   this._data.setGoals(this.goals);
   this.itemCount = this.goals.length;
   
  }

  // method
  addItem () {
    this.goals.push(this.goalText);
    this.goalText = '';
    this.itemCount = this.goals.length;
  }

  removeItem(payload)  {
    console.log(payload);
    this.goals.splice(payload, 1);
  }

}
