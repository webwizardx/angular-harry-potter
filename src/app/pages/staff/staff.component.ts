import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { StaffService } from 'src/app/shared/services/staff.service';
import { StaffDataSource, StaffItem } from './staff-datasource';

@Component({
	selector: 'app-staff',
	templateUrl: './staff.component.html',
	styleUrls: ['./staff.component.scss']
})
export class StaffComponent implements AfterViewInit {
	@ViewChild(MatPaginator) paginator!: MatPaginator;
	@ViewChild(MatSort) sort!: MatSort;
	@ViewChild(MatTable) table!: MatTable<StaffItem>;

	dataSource: StaffDataSource;

	displayedColumns = ['name', 'patronus', 'age', 'image'];

	constructor(private StaffService: StaffService) {}

	ngAfterViewInit(): void {
		this.getStaff();
	}

	getStaff(): void {
		this.StaffService.getStaff().subscribe(data => {
			this.dataSource = new StaffDataSource(data);
			this.dataSource.sort = this.sort;
			this.dataSource.paginator = this.paginator;
			this.table.dataSource = this.dataSource;
		});
	}
}
