import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';

import { RequestsComponent } from './requests.component';
import { HttpClientModule } from '@angular/common/http';

describe('RequestsComponent', () => {
	let component: RequestsComponent;
	let fixture: ComponentFixture<RequestsComponent>;

	beforeEach(
		waitForAsync(() => {
			TestBed.configureTestingModule({
				declarations: [RequestsComponent],
				imports: [
					NoopAnimationsModule,
					ReactiveFormsModule,
					MatButtonModule,
					MatCardModule,
					MatInputModule,
					MatRadioModule,
					MatSelectModule,
					HttpClientModule
				]
			}).compileComponents();
		})
	);

	beforeEach(() => {
		fixture = TestBed.createComponent(RequestsComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should compile', () => {
		expect(component).toBeTruthy();
	});
});
