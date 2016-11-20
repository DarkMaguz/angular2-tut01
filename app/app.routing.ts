import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Page1Component }		from './components/page1/page1.component';
import { Page2Component }		from './components/page2/page2.component';
import { Page3Component }		from './components/page3/page3.component';

const appRoutes: Routes = [
{
	path: 'page1',
	component: Page1Component
},
{
	path: 'page2',
	component: Page2Component
},
{
	path: 'page3',
	component: Page3Component
},
{
	path: '',
	redirectTo: '/page1',
	pathMatch: 'full'
}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
