System.register(['react', 'react-dom', 'fixed-data-table'], function(exports_1) {
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var React, ReactDOM, fixed_data_table_1;
    var CellProps, TextCell, FixedDataTableWrapper;
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
                    return (React.createElement(fixed_data_table_1.Cell, null, this.props.data[this.props.field]));
                };
                return TextCell;
            })(React.Component);
            FixedDataTableWrapper = (function (_super) {
                __extends(FixedDataTableWrapper, _super);
                function FixedDataTableWrapper(props, rows, columns, objectChanged) {
                    _super.call(this, props);
                    this.rows = rows;
                    this.columns = columns;
                    this.objectChanged = objectChanged;
                }
                FixedDataTableWrapper.prototype.render = function () {
                    var _this = this;
                    return React.createElement(fixed_data_table_1.Table, {"rowHeight": this.props.rowHeight, "rowsCount": this.props.rowsCount, "width": this.props.width, "maxHeight": this.props.height, "headerHeight": this.props.headerHeight, "onRowClick": this.rowClicked.bind(this), "rowClassNameGetter": this.rowClassNameGetter}, this.columns.map(function (column, index) {
                        return React.createElement(fixed_data_table_1.Column, {"key": index, "header": React.createElement(fixed_data_table_1.Cell, null, column.description), "cell": function (props) { return (React.createElement(TextCell, {"data": _this.rows[props.rowIndex], "field": column.field})); }, "width": column.width});
                    }));
                };
                FixedDataTableWrapper.prototype.display = function (where) {
                    ReactDOM.render(this.render(), document.getElementById(where));
                };
                FixedDataTableWrapper.prototype.rowClassNameGetter = function () {
                    return "clickable";
                };
                FixedDataTableWrapper.prototype.rowClicked = function (event, index) {
                    this.objectChanged(this.rows[index]);
                };
                return FixedDataTableWrapper;
            })(React.Component);
            exports_1("FixedDataTableWrapper", FixedDataTableWrapper);
        }
    }
});
//# sourceMappingURL=fixed-data-table-wrapper.js.map