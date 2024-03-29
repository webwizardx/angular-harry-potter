import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';

import { CharactersComponent } from './characters.component';
import { HttpClientModule } from '@angular/common/http';

describe('CharactersComponent', () => {
	let component: CharactersComponent;
	let fixture: ComponentFixture<CharactersComponent>;

	beforeEach(
		waitForAsync(() => {
			TestBed.configureTestingModule({
				declarations: [CharactersComponent],
				imports: [
					NoopAnimationsModule,
					MatPaginatorModule,
					MatSortModule,
					MatTableModule,
					HttpClientModule
				]
			}).compileComponents();
		})
	);

	beforeEach(() => {
		fixture = TestBed.createComponent(CharactersComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should compile', () => {
		expect(component).toBeTruthy();
	});
});
