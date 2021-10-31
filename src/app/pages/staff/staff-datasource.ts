import { DataSource } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';

export interface StaffItem {
	name: string;
	patronus: string;
	age: number;
	image: string;
}

export class StaffDataSource extends DataSource<StaffItem> {
	data: StaffItem[] = [];
	paginator: MatPaginator | undefined;
	sort: MatSort | undefined;

	constructor(data: StaffItem[]) {
		super();

		this.data = data;
	}

	connect(): Observable<StaffItem[]> {
		if (this.paginator && this.sort) {
			return merge(
				observableOf(this.data),
				this.paginator.page,
				this.sort.sortChange
			).pipe(
				map(() => {
					return this.getPagedData(
						this.getSortedData([...this.data])
					);
				})
			);
		} else {
			throw Error(
				'Please set the paginator and sort on the data source before connecting.'
			);
		}
	}

	disconnect(): void {}

	private getPagedData(data: StaffItem[]): StaffItem[] {
		if (this.paginator) {
			const startIndex =
				this.paginator.pageIndex * this.paginator.pageSize;
			return data.splice(startIndex, this.paginator.pageSize);
		} else {
			return data;
		}
	}

	private getSortedData(data: StaffItem[]): StaffItem[] {
		if (!this.sort || !this.sort.active || this.sort.direction === '') {
			return data;
		}

		return data.sort((a, b) => {
			const isAsc = this.sort?.direction === 'asc';
			switch (this.sort?.active) {
				case 'name':
					return compare(a.name, b.name, isAsc);
				case 'patronus':
					return compare(a.patronus, b.patronus, isAsc);
				case 'age':
					return compare(a.age, b.age, isAsc);
				default:
					return 0;
			}
		});
	}
}

function compare(
	a: string | number,
	b: string | number,
	isAsc: boolean
): number {
	return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
