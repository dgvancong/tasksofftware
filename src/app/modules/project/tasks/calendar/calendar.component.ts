import { Component, OnInit } from '@angular/core';
import { NzCalendarMode } from 'ng-zorro-antd/calendar';


@Component({
  selector: 'app-calendar',
  standalone: false,
  templateUrl: './calendar.component.html',
  styleUrl: './calendar.component.scss'
})
export class CalendarComponent implements OnInit {

  date = new Date(2012, 11, 21);
  mode: NzCalendarMode = 'month';

  panelChange(change: { date: Date; mode: string }): void {
    console.log(change.date, change.mode);
  }
  ngOnInit(): void {

  }

}
