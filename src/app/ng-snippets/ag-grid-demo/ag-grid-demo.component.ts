import { Component } from '@angular/core';
import { AgGridAngular } from "@ag-grid-community/angular";
import { ColDef, GridApi, ModuleRegistry, ITooltipParams, RefreshCellsParams, ValueFormatterParams, 
  ValueParserParams,
  GridReadyEvent,
  CellValueChangedEvent,
  RowClassParams} from "@ag-grid-community/core";
import { ClientSideRowModelModule } from "@ag-grid-community/client-side-row-model";
ModuleRegistry.registerModules([ClientSideRowModelModule]);
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-ag-grid-demo',
  standalone: true,
  imports: [AgGridAngular, CommonModule],
  templateUrl: './ag-grid-demo.component.html',
  styleUrl: './ag-grid-demo.component.scss'
})
export class AgGridDemoComponent {
  rowData = [
    { make: "Tesla", model: "Model Y", price: 64950, electric: true, date: '2023-01-01' },
    { make: "Ford", model: "F-Series", price: 33850, electric: false, date: '2023-01-01'},
    { make: "Toyota", model: "Corolla", price: 29600, electric: false, date: '2023-01-01'},
  ];

  // colDefs: ColDef[] = [
  //   { field: "make" },
  //   { field: "model" },
  //   { field: "price" },
  //   { field: "electric" }
  // ];
  public colDefs: ColDef[] = [
    {
      headerName: 'Make',
      field: 'make',
      width: 150,
      editable: true,
      cellEditor: "agSelectCellEditor",
      cellEditorParams: () => {
        let values = ['Ford', 'Tesla', 'Toyota'];
        return { values };
      },
    },
    {
      headerName: 'Model',
      field: 'model',
      width: 150,
      editable: false,
    },
    {
      headerName: 'Price',
      field: 'price',
      width: 150,
      valueFormatter: this.currencyFormatter,
      editable: false,
    },
    {
      headerName: 'Electric',
      field: 'electric',
      width: 150,
      editable: true,
    },
    {
      headerName: 'Date',
      field: 'date',
      width: 150,
      editable: true,
      cellEditor: "agDateStringCellEditor",
    }
  ];
  paginationPageSize = 25;
  paginationPageSizeSelector: number[] = [25, 50, 100];
  themeClass = "ag-theme-quartz";
  gridApi: GridApi | null = null;
  targetColor = 'rgb(34 197 94)';//green

  defaultColDef: ColDef = { //apply the following properties to all columns
    sortable: true,
    editable: true,
    filter: "agTextColumnFilter",
    floatingFilter: true,
    suppressHeaderMenuButton: true,
    wrapHeaderText: true,
    tooltipValueGetter: (p: ITooltipParams) => p.value,
  };

  onCellValueChanged(params: CellValueChangedEvent) {
    // if no value change then return
    if (!params || params.oldValue === params.newValue) {
        return;
    }

    if (params.colDef && params.colDef.field && params.newValue) {
      if (params.colDef.field == 'make') {
        console.log("params.newValue: ", params.newValue);
      }
    }
  }

  onGridReady(params: GridReadyEvent) {
    this.gridApi = params.api;
  }

  getRowStyle = (params: RowClassParams) : { background?: string } => {
    if (this.rowHasTarget(params)) {
      return { background: this.targetColor };
    }
    return {};
  };

  rowHasTarget = (params: RowClassParams): boolean => {
    return params.data.make == 'Ford';
  }

  currencyFormatter(params: ValueFormatterParams) {
    return params.value == null ? "" : "$" + params.value;
  }



}
