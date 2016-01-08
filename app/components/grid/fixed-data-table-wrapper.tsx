import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {Table, Column, Cell, TableProps} from 'fixed-data-table';
import {DataColumn} from './data-column';

class CellProps {
    public field: string;
    public data: any;
}

class TextCell extends React.Component<CellProps, any> {
  
  constructor(props: CellProps) {
      super(props);
  }
  
  render() {
    return (
      <Cell>
        {this.props.data[this.props.field]}
      </Cell>
    );
  }
}

export class FixedDataTableWrapper extends React.Component<TableProps, any> {
    constructor(props: TableProps, public rows: Array<any>, public columns: Array<DataColumn>, private objectChanged: Function) {
        super(props);
    }
    render() {
        
        return  <Table
                    rowHeight={this.props.rowHeight}
                    rowsCount={this.props.rowsCount}
                    width={this.props.width}
                    maxHeight={this.props.height}
                    headerHeight={this.props.headerHeight}
                    onRowClick={this.rowClicked.bind(this)}
                    rowClassNameGetter={this.rowClassNameGetter}>
                        {this.columns.map ((column: DataColumn, index: number) => {
                            return <Column
                                key={index}
                                header={<Cell>{column.description}</Cell>}
                                cell={props => (
                                    <TextCell
                                        data={this.rows[props.rowIndex]}
                                        field={column.field}
                                    />
                                )}
                                width={column.width}
                            />
                        })}
                </Table>;
    }
    display(where) {
        ReactDOM.render(this.render(), document.getElementById(where));
    }
    
    rowClassNameGetter() {
        return "clickable";
    }
    
    rowClicked(event, index: number) {
        this.objectChanged(this.rows[index]);
    }
}