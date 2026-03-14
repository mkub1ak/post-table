import { ChangeDetectionStrategy, Component,input } from '@angular/core';
import { HttpResourceRef } from '@angular/common/http';
import { ColumnConfig } from './column-config';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [],
  templateUrl: './table.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Table<T> {
  public rows = input.required<HttpResourceRef<T[]>>();
  public config = input.required<ColumnConfig<T>[]>();
}
