import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	moduleId: module.id,
	selector: 'my-page1',
	templateUrl: 'page1.component.html',
	styleUrls: [ 'page1.component.css' ]
})

export class Page1Component implements OnInit {
	constructor(
		private router: Router) {
	}

	ngOnInit(): void {}

}