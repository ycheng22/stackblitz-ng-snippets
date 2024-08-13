import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { MultiSelectComponent } from './multi-select/multi-select.component';
import { NgSelectDemoComponent } from './ng-select-demo/ng-select-demo.component';
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
  ],
  templateUrl: './main.html',
})
export class App {
  name = 'Angular';
}

bootstrapApplication(App);
