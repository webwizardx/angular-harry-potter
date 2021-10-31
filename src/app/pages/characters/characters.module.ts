import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CharactersRoutingModule } from './characters-routing.module';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { CharactersComponent } from './characters.component';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
	declarations: [CharactersComponent],
	imports: [
		CommonModule,
		CharactersRoutingModule,
		MatTableModule,
		MatPaginatorModule,
		MatSortModule,
		MatSelectModule,
		FormsModule,
		SharedModule
	]
})
export class CharactersModule {}
