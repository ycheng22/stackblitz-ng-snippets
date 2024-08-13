import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { MultiSelectComponent } from './app/multi-select/multi-select.component';
import { NgSelectDemoComponent } from './app/ng-select-demo/ng-select-demo.component';
import { InputCalComponent } from './app/input-cal/input-cal.component';
import { ToggleCardComponent } from './app/toggle-card/toggle-card.component';
import { MatDividerModule } from '@angular/material/divider';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  providers: [],
  imports: [
    MatDividerModule,
    ReactiveFormsModule,
    MultiSelectComponent,
    NgSelectDemoComponent,
    InputCalComponent,
    ToggleCardComponent,
  ],
  templateUrl: './main.html',
})
export class App {
  name = 'Angular';
  testText = 'test';
  isToggled = true;

  handleToggleChange(isToggled: boolean) {
    console.log("testText: ", this.testText);
  }
}

bootstrapApplication(App);
