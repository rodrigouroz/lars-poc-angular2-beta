import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {Table, Column, Cell} from 'fixed-data-table';
import {DataColumn} from './data-column';

class CellProps {
    public field: string;
    public data: any;
    public rowIndex: number;
}

class TextCell extends React.Component<CellProps, any> {
  
  constructor(props: CellProps) {
      super(props);
  }
  
  render() {
    return (
      <Cell>
        {this.props.data[this.props.rowIndex][this.props.field]}
      </Cell>
    );
  }
}

class TableProps {
    public width: number;
    public height: number;
    public rowHeight: number;
    public headerHeight: number;
}

export class FixedDataTableWrapper extends React.Component<TableProps, any> {
    constructor(props: TableProps, public rows: Array<any>, public columns: Array<DataColumn>) {
        super(props);
    }
    render() {
        return  <Table
                    rowHeight={this.props.rowHeight}
                    rowsCount={this.rows.length}
                    width={this.columns.length * 200}
                    height={this.props.height}
                    headerHeight={this.props.headerHeight}>
                        <Column
                            header={<Cell>Name</Cell>}
                            cell={props => (
                                <TextCell
                                    data={this.rows}
                                    field="name"
                                    rowIndex={props.rowIndex}
                                />
                            )}
                            width={200}
                        />
                        <Column
                            header={<Cell>Description</Cell>}
                            cell={props => (
                                <TextCell
                                    data={this.rows}
                                    field="description"
                                    rowIndex={props.rowIndex}
                                />
                            )}
                            width={200}
                        />
                </Table>;
    }
    display(where) {
        ReactDOM.render(this.render(), document.getElementById(where));
    }
}