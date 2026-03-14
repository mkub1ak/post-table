import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { httpResource } from '@angular/common/http';

import { Post } from './post';
import { Table } from '../table/table';
import { ColumnConfig } from '../table/column-config';

@Component({
  selector: 'app-posts-table',
  standalone: true,
  imports: [Table],
  templateUrl: './posts-table.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PostsTable {
  protected size = signal<number>(10);
  protected index = signal<number>(0);
  protected posts = httpResource<Post[]>(
    () => ({
      url: `https://jsonplaceholder.typicode.com/posts`,
      params: {
        _start: this.index() * this.size(),
        _limit: this.size(),
      },
      method: 'GET',
      priority: 'high',
    }),
    { defaultValue: [] },
  );

  protected columnConfig: ColumnConfig<Post>[] = [
    { objProperty: 'id', colName: 'Post ID' },
    { objProperty: 'userId', colName: 'User ID' },
    { objProperty: 'title', colName: 'Title' },
    { objProperty: 'body', colName: 'Body' },
  ];

  protected onChange(event: Event) {
    const target = event.target as HTMLSelectElement;
    this.size.set(+target.value);
  }

  protected pageSize(event: Event) {
    this.index.set(0);

    const target = event.target as HTMLSelectElement;
    this.size.set(+target.value);
  }

  protected next() {
    if (this.posts.value().length) {
      this.index.update((value: number) => ++value);
    }
  }

  protected previous() {
    if (this.index() === 0) {
      return;
    }

    this.index.update((value: number) => --value);
  }
}
