import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgLayoutComponent } from '../ng-snippets/ng-layout/ng-layout.component';
import { D3jsLayoutComponent } from '../d3js/d3js-layout/d3js-layout.component';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [
    CommonModule, 
    NgLayoutComponent,
    D3jsLayoutComponent
  ],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent {

  showContentsArray = [true, false];
  private buttonMap: { [key: string]: number } = {
    angular: 0,
    d3js: 1
  };

  selectButton(buttonName: string) {
    this.showContentsArray = [false, false, false];
    const index = this.buttonMap[buttonName];
    if (index !== undefined) {
      this.showContentsArray[index] = true;
    }
  }

}
