import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-toggle-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './toggle-card.component.html',
  styleUrl: './toggle-card.component.scss'
})
export class ToggleCardComponent {
  @Input() content = '';
  @Input() isToggled = true;
  @Output() isToggledChange = new EventEmitter<boolean>();
  @Output() contentChange = new EventEmitter<string>();
  
  toggleSwitch() {
    this.isToggled = !this.isToggled;
    this.isToggledChange.emit(this.isToggled);
  }

  onContentChange(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    this.content = inputElement.value;
    this.contentChange.emit(this.content);
  }
  
}
