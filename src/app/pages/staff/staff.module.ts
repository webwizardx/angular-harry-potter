import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StaffRoutingModule } from './staff-routing.module';
import { StaffComponent } from './staff.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
	declarations: [StaffComponent],
	imports: [
		CommonModule,
		StaffRoutingModule,
		MatTableModule,
		MatPaginatorModule,
		MatSortModule,
		SharedModule
	]
})
export class StaffModule {}
