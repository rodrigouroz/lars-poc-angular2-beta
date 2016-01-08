import {Component, EventEmitter} from 'angular2/core';
import {FixedDataTableWrapper} from './fixed-data-table-wrapper';
import {DataColumn} from './data-column';

@Component({
  selector: 'grid',
  templateUrl: 'app/components/grid/grid.html',
  inputs: ['rows: rows', 'columns: columns'],
  outputs: ['change']
})

export class Grid {

  change: EventEmitter<any> = new EventEmitter();

  columns: Array<DataColumn>;
  private _rows: Array<any>;

  edit(element) {
    this.change.emit(element);
  }
  
  get rows(): Array<any> {
      return this._rows;
  }
  
  tableWidth(): number {
      let width: number = 0;
      for (let i = 0; i < this.columns.length; i++) {
          width += this.columns[i].width;
      }
      
      return width;
  }
  
  set rows(newRows: Array<any>) {
      this._rows = newRows;
      
      if (this._rows) {
        let table: FixedDataTableWrapper = new FixedDataTableWrapper({
            width: this.tableWidth(),
            height: 500,
            rowHeight: 50,
            headerHeight: 50,
            rowsCount: this._rows.length
        }, this._rows, this.columns, this.edit.bind(this));
        
        table.display('fixed-data-table');    
      }
  }

}
