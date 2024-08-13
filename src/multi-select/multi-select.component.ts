import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormControl } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';

export interface FilesFilterModel {
  type: string[];
  status: string[];
}

@Component({
  selector: 'app-multi-select',
  standalone: true,
  providers: [],
  imports: [
    ReactiveFormsModule,
    MatInputModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatOptionModule,
    MultiSelectComponent,
  ],
  templateUrl: './multi-select.component.html',
  styleUrl: './multi-select.component.css',
})
export class MultiSelectComponent implements OnInit {
  filesFilter: FilesFilterModel = {
    type: [],
    status: [],
  };
  selectedFilters: FilesFilterModel = {
    type: [],
    status: [],
  };
  typeControl = new FormControl();
  statusControl = new FormControl();

  ngOnInit(): void {
    this.populateFilter();
    this.initializeControls();
  }

  populateFilter() {
    this.filesFilter.type = ['t1', 't2', 't3'];
    this.filesFilter.status = ['s1', 's2', 's3'];
  }

  initializeControls() {
    this.typeControl.setValue(['All', ...this.filesFilter.type.sort()]);
    this.statusControl.setValue(['All', ...this.filesFilter.status.sort()]);
    this.updateSelectedFilters();
  }

  updateSelectedFilters() {
    this.selectedFilters.type = this.typeControl.value;
    this.selectedFilters.status = this.statusControl.value;
  }

  // togglePerOne(filterFlag: string, filesFlag: string, controlFlag: string) {
  //   if (this[filterFlag].selected) {
  //     this[filterFlag].deselect();
  //     this.updateSelectedFilters();
  //     return false;
  //   }
  //   if (this[controlFlag].value.length == this.filesFilter[filesFlag].length) {
  //     this[filterFlag].select();
  //   }

  //   this.updateSelectedFilters();
  //   return;
  // }

  // toggleAllSelection(
  //   filterFlag: string,
  //   filesFlag: string,
  //   controlFlag: string
  // ) {
  //   if (this[filterFlag].selected) {
  //     this[controlFlag].patchValue(['All', ...this.filesFilter[filesFlag]]);
  //   } else {
  //     this[controlFlag].patchValue([]);
  //   }

  //   this.updateSelectedFilters();
  // }
}
