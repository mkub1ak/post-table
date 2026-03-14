/**
 * configures table column -
 * how T data source objects are mapped to table cells
 *
 * @see https://www.ag-grid.com/angular-data-grid/column-definitions/
 * as a reference.
 */
export interface ColumnConfig<T> {
  // columns header value
  colName: string;
  // object's property name to be cell's value
  objProperty: keyof T;
}
