import { Component, OnInit, trigger, state, style, transition, animate } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	moduleId: module.id,
	selector: 'my-page2',
	templateUrl: 'page2.component.html',
	styleUrls: [ 'page2.component.css' ]
})

export class Page2Component implements OnInit {
	constructor(
		private router: Router) {
	}

	ngOnInit(): void {}

}