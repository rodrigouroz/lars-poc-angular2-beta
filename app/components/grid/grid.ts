import {Component, View, EventEmitter, OnChanges} from 'angular2/core';
import {FixedDataTableWrapper} from './fixed-data-table-wrapper';
import {DataColumn} from './data-column';

@Component({
  selector: 'grid',
  templateUrl: 'app/components/grid/grid.html',
  inputs: ['rows: rows', 'columns: columns'],
  outputs: ['change']
})

export class Grid implements OnChanges {

  change: EventEmitter<any> = new EventEmitter();

  columns: Array<DataColumn>;
  rows: Array<any>;

  edit(element) {
    this.change.emit(element);
  }
  
  ngOnChanges() {
      if (this.rows) {
        let table: FixedDataTableWrapper = new FixedDataTableWrapper({
            width: 500,
            height: 500,
            rowHeight: 50,
            headerHeight: 50
        }, this.rows, this.columns);
        
        table.display('fixed-data-table');    
      }
      
  }
}
