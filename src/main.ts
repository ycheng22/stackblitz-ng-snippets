import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { MatDividerModule } from '@angular/material/divider';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MultiSelectComponent } from './app/multi-select/multi-select.component';
import { NgSelectDemoComponent } from './app/ng-select-demo/ng-select-demo.component';
import { InputCalComponent } from './app/input-cal/input-cal.component';
import { ToggleCardComponent } from './app/toggle-card/toggle-card.component';
import { TextareaDemoComponent } from './app/textarea-demo/textarea-demo.component';
import { AgGridDemoComponent } from './app/ag-grid-demo/ag-grid-demo.component';


@Component({
  selector: 'app-root',
  standalone: true,
  providers: [],
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
  templateUrl: './main.html',
})
export class App {
  name = 'Angular';
  testText = 'test';
  isToggled = true;
  showContentsArray = [true, false];

  handleToggleChange(isToggled: boolean) {
    console.log("testText: ", this.testText);
  }
}

bootstrapApplication(App);
