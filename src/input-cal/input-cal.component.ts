import { Component } from '@angular/core';
import * as math from 'mathjs';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-input-cal',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './input-cal.component.html',
  styleUrl: './input-cal.component.scss'
})
export class InputCalComponent {

  expression: string = '';
  result: number | null = null;

  calculate() {
    try {
      console.log('expression: ', this.expression);
      this.result = math.evaluate(this.expression);
      const resultInput = document.getElementById(
        'result'
      ) as HTMLInputElement;
      if (this.result && resultInput) {
        resultInput.value = this.result.toString();
      }
    } catch (error) {
      this.result = null;
      alert('Invalid expression');
    }
  }

}
