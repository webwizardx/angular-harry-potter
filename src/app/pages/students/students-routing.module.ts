import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RequestsComponent } from './requests/requests.component';
import { StudentsComponent } from './students.component';

const routes: Routes = [
	{
		path: '',
		component: StudentsComponent
	},
	{
		path: 'requests',
		component: RequestsComponent
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class StudentsRoutingModule {}
