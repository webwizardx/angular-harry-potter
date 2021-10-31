import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
	{
		path: 'characters',
		loadChildren: () =>
			import('./pages/characters/characters.module').then(
				m => m.CharactersModule
			)
	},
	{
		path: 'students',
		loadChildren: () =>
			import('./pages/students/students.module').then(
				m => m.StudentsModule
			)
	},
	{
		path: 'staff',
		loadChildren: () =>
			import('./pages/staff/staff.module').then(m => m.StaffModule)
	}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule {}
