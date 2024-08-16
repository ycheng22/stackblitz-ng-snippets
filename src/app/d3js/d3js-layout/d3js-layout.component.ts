import { Component } from '@angular/core';
import { BarComponent } from '../bar/bar.component';
import { PieComponent } from '../pie/pie.component';
import { ScatterComponent } from '../scatter/scatter.component';

@Component({
  selector: 'app-d3js-layout',
  standalone: true,
  imports: [
    BarComponent,
    PieComponent,
    ScatterComponent,
    
  ],
  templateUrl: './d3js-layout.component.html',
  styleUrl: './d3js-layout.component.css'
})
export class D3jsLayoutComponent {

}
