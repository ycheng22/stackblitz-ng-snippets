import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { LayoutComponent } from './app/layout/layout.component';

@Component({
  selector: 'app-root',
  standalone: true,
  providers: [],
  imports: [LayoutComponent],
  templateUrl: './main.html',
})
export class App {
}

bootstrapApplication(App);
