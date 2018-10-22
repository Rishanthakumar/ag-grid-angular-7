import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-red-component',
  templateUrl: './red-component.component.html',
  styleUrls: ['./red-component.component.scss']
})
export class RedComponentComponent {
  params: any;

  constructor() { }

  agInit(params) {
    this.params = params;
  }
}
