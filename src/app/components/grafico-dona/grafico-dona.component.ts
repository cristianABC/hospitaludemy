import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-grafico-dona',
  templateUrl: './grafico-dona.component.html',
  styles: []
})
export class GraficoDonaComponent implements OnInit {
  @Input() public ChartLabels: Label[] = [];
  @Input() public ChartData: MultiDataSet = [];
  @Input() public ChartType: ChartType = '';
  constructor() { }

  ngOnInit() {
  }
 
}
