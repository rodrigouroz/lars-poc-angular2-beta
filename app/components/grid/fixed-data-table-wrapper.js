System.register(['react', 'react-dom', 'fixed-data-table'], function(exports_1) {
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var React, ReactDOM, fixed_data_table_1;
    var CellProps, TextCell, TableProps, FixedDataTableWrapper;
    return {
        setters:[
            function (React_1) {
                React = React_1;
            },
            function (ReactDOM_1) {
                ReactDOM = ReactDOM_1;
            },
            function (fixed_data_table_1_1) {
                fixed_data_table_1 = fixed_data_table_1_1;
            }],
        execute: function() {
            CellProps = (function () {
                function CellProps() {
                }
                return CellProps;
            })();
            TextCell = (function (_super) {
                __extends(TextCell, _super);
                function TextCell(props) {
                    _super.call(this, props);
                }
                TextCell.prototype.render = function () {
                    return (React.createElement(fixed_data_table_1.Cell, null, this.props.data[this.props.rowIndex][this.props.field]));
                };
                return TextCell;
            })(React.Component);
            TableProps = (function () {
                function TableProps() {
                }
                return TableProps;
            })();
            FixedDataTableWrapper = (function (_super) {
                __extends(FixedDataTableWrapper, _super);
                function FixedDataTableWrapper(props, rows, columns) {
                    _super.call(this, props);
                    this.rows = rows;
                    this.columns = columns;
                }
                FixedDataTableWrapper.prototype.render = function () {
                    var _this = this;
                    return React.createElement(fixed_data_table_1.Table, {"rowHeight": this.props.rowHeight, "rowsCount": this.rows.length, "width": this.columns.length * 200, "height": this.props.height, "headerHeight": this.props.headerHeight}, React.createElement(fixed_data_table_1.Column, {"header": React.createElement(fixed_data_table_1.Cell, null, "Name"), "cell": function (props) { return (React.createElement(TextCell, {"data": _this.rows, "field": "name", "rowIndex": props.rowIndex})); }, "width": 200}), React.createElement(fixed_data_table_1.Column, {"header": React.createElement(fixed_data_table_1.Cell, null, "Description"), "cell": function (props) { return (React.createElement(TextCell, {"data": _this.rows, "field": "description", "rowIndex": props.rowIndex})); }, "width": 200}));
                };
                FixedDataTableWrapper.prototype.display = function (where) {
                    ReactDOM.render(this.render(), document.getElementById(where));
                };
                return FixedDataTableWrapper;
            })(React.Component);
            exports_1("FixedDataTableWrapper", FixedDataTableWrapper);
        }
    }
});
//# sourceMappingURL=fixed-data-table-wrapper.js.map