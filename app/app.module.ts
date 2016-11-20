import { NgModule }			from '@angular/core';
import { BrowserModule }	from '@angular/platform-browser';

import { AppComponent }		from './app.component';
import { routing }			from './app.routing';

import { Page1Component }	from './components/page1/page1.component';
import { Page2Component }	from './components/page2/page2.component';
import { Page3Component }	from './components/page3/page3.component';

@NgModule({
	imports: [
		BrowserModule,
		routing
	],
	declarations: [
		AppComponent,
		Page1Component,
		Page2Component,
		Page3Component
	],
	bootstrap: [
		AppComponent
	]
})
export class AppModule { }
