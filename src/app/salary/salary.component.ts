import { Component } from '@angular/core';

@Component({
  selector: 'salary',
  templateUrl: './salary.component.html',
  styleUrls: ['./salary.component.css']
})
export class SalaryComponent {
  
  longBtns: string[] = ["AC", "CE"];

  buttons: string[] = ["7", "6", "9", "/", "4", "5", "6", "*", "1", "2", "3", "-", ".", "0", "=", "+",];

}
