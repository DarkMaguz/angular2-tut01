import { Component, OnInit, trigger, state, style, transition, animate } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	moduleId: module.id,
	selector: 'my-page1',
	templateUrl: 'page1.component.html',
	styleUrls: [ 'page1.component.css' ],
	animations: [
		trigger('flyInOut', [
			state('in', style({transform: 'translateX(0)'})),
			transition('void => *', [
				style({transform: 'translateX(-100%)'}),
				animate(200)
			]),
			transition('* => void', [
				animate(200, style({transform: 'translateX(100%)'}))
			])
		])
	]
})

export class Page1Component implements OnInit {
	state: string

	constructor(
		private router: Router) {
		this.state = "in"
	}

	ngOnInit(): void {}

}