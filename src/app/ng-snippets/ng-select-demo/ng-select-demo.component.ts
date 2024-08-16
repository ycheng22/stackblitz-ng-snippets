import { Component } from '@angular/core';
import { NgSelectModule, NgOption } from '@ng-select/ng-select';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ng-select-demo',
  standalone: true,
  imports: [NgSelectModule, FormsModule],
  templateUrl: './ng-select-demo.component.html',
  styleUrl: './ng-select-demo.component.scss',
})
export class NgSelectDemoComponent {
  callTypes = [
    { id: 1, name: 'Mobile' },
    { id: 2, name: 'Home' },
    { id: 3, name: 'Chat' },
  ];

  selectedAccount = 'Adam';
  accounts = [
    {
      name: 'Adam',
      country: 'United States',
    },
    {
      name: 'Samantha',
      country: 'United States',
    },
    {
      name: 'Amalie',
      country: 'Argentina',
    },
    {
      name: 'Estefanía',
      country: 'Argentina',
    },
  ];

  updateData() {
    console.log('updateData.');
  }

  updateGroupData() {
    console.log('updateGroupData.');
  }

  addCustomName(name: string) {
    return { country: 'Other', name: name };
  }
}
