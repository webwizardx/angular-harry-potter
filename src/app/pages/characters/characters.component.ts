import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import {
	CharactersService,
	WizardingHouses
} from 'src/app/shared/services/characters.service';
import { CharactersDataSource, CharactersItem } from './characters-datasource';

@Component({
	selector: 'app-characters',
	templateUrl: './characters.component.html',
	styleUrls: ['./characters.component.scss']
})
export class CharactersComponent implements AfterViewInit {
	@ViewChild(MatPaginator) paginator!: MatPaginator;
	@ViewChild(MatSort) sort!: MatSort;
	@ViewChild(MatTable) table!: MatTable<CharactersItem>;

	dataSource: CharactersDataSource;
	wizardingHouses: { label: string; value: WizardingHouses }[] = [
		{ value: 'gryffindor', label: 'Gryffindor' },
		{ value: 'hufflepuff', label: 'Hufflepuff' },
		{ value: 'ravenclaw', label: 'Ravenclaw' },
		{ value: 'slytherin', label: 'Slytherin' }
	];

	selectedWizardingHouse: WizardingHouses = 'gryffindor';

	displayedColumns = ['name', 'patronus', 'age', 'image'];

	constructor(private charactersService: CharactersService) {}

	ngAfterViewInit(): void {
		this.getCharacters();
	}

	getCharacters(): void {
		this.charactersService
			.getCharacters(this.selectedWizardingHouse)
			.subscribe(data => {
				this.dataSource = new CharactersDataSource(data);
				this.dataSource.sort = this.sort;
				this.dataSource.paginator = this.paginator;
				this.table.dataSource = this.dataSource;
			});
	}
}
