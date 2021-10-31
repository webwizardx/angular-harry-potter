import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { StudentsService } from 'src/app/shared/services/students.service';
import { StudentsDataSource, StudentsItem } from './students-datasource';

@Component({
	selector: 'app-students',
	templateUrl: './students.component.html',
	styleUrls: ['./students.component.scss']
})
export class StudentsComponent implements AfterViewInit {
	@ViewChild(MatPaginator) paginator!: MatPaginator;
	@ViewChild(MatSort) sort!: MatSort;
	@ViewChild(MatTable) table!: MatTable<StudentsItem>;
	dataSource: StudentsDataSource;

	displayedColumns = ['name', 'patronus', 'age', 'image'];

	constructor(private StaffService: StudentsService) {}

	ngAfterViewInit(): void {
		this.getStaff();
	}

	getStaff(): void {
		this.StaffService.getStudents().subscribe(data => {
			this.dataSource = new StudentsDataSource(data);
			this.dataSource.sort = this.sort;
			this.dataSource.paginator = this.paginator;
			this.table.dataSource = this.dataSource;
		});
	}
}
