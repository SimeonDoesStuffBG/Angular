import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-input',
  templateUrl: './my-input.component.html',
  styleUrls: ['./my-input.component.scss']
})
export class MyInputComponent implements OnInit {

  @Input() type:string="text";
  @Input() name:string='';
  @Input() placeholder:string=""; 

  constructor() { }

  ngOnInit(): void {
  }

}
