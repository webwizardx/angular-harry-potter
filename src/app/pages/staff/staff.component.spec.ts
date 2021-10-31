import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';

import { StaffComponent } from './staff.component';
import { HttpClientModule } from '@angular/common/http';

describe('StaffComponent', () => {
	let component: StaffComponent;
	let fixture: ComponentFixture<StaffComponent>;

	beforeEach(
		waitForAsync(() => {
			TestBed.configureTestingModule({
				declarations: [StaffComponent],
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
		fixture = TestBed.createComponent(StaffComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should compile', () => {
		expect(component).toBeTruthy();
	});
});
