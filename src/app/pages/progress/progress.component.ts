import { Component, OnInit } from '@angular/core';
import { ValueTransformer } from '@angular/compiler/src/util';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styles: []
})
export class ProgressComponent implements OnInit {

  
  progreso1: number= 20;
  progreso2: number = 45;
  constructor() { }

  ngOnInit() {
  }
  
 
}
