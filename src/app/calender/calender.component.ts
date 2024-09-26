import { Component } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {provideNativeDateAdapter} from '@angular/material/core';
import {MatDatepickerModule} from '@angular/material/datepicker';

@Component({
  selector: 'app-calender',
  standalone: true,
  imports: [MatCardModule, MatDatepickerModule],
  templateUrl: './calender.component.html',
  styleUrl: './calender.component.css',
  providers: [provideNativeDateAdapter()]
})
export class CalenderComponent {
  selected:any=new Date()
}
