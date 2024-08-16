import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { MatDividerModule } from '@angular/material/divider';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MultiSelectComponent } from '../multi-select/multi-select.component';
import { NgSelectDemoComponent } from '../ng-select-demo/ng-select-demo.component';
import { InputCalComponent } from '../input-cal/input-cal.component';
import { ToggleCardComponent } from '../toggle-card/toggle-card.component';
import { TextareaDemoComponent } from '../textarea-demo/textarea-demo.component';
import { AgGridDemoComponent } from '../ag-grid-demo/ag-grid-demo.component';

@Component({
  selector: 'app-ng-layout',
  standalone: true,
  imports: [
    CommonModule,
    MatDividerModule,
    ReactiveFormsModule,
    MultiSelectComponent,
    NgSelectDemoComponent,
    InputCalComponent,
    ToggleCardComponent,
    TextareaDemoComponent,
    AgGridDemoComponent,
  ],
  templateUrl: './ng-layout.component.html',
  styleUrl: './ng-layout.component.css'
})
export class NgLayoutComponent {
  name = 'Angular';
  testText = 'test';
  isToggled = true;
  
  handleToggleChange(isToggled: boolean) {
    console.log("testText: ", this.testText);
  }

}
