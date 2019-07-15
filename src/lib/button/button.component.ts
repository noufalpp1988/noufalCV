import { Component, OnInit, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'lib-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  @Output() handleClick: EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

}
