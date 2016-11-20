import { Component, OnInit, trigger, state, style, transition, animate } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	moduleId: module.id,
	selector: 'my-page3',
	templateUrl: 'page3.component.html',
	styleUrls: [ 'page3.component.css' ],
})

export class Page3Component implements OnInit {
	imgOpacity: number;
	showSalesText: string;
	salesTextOpacity: number;

	constructor(
		private router: Router) {
		this.imgOpacity = 1;
		this.showSalesText = "block";
		this.salesTextOpacity = 0;
	}

	ngOnInit(): void {
		setTimeout(() => this.changeOpacity(), 2000);
		setTimeout(() => this.changeSalesTextDisplay(), 2000);
	}

	changeOpacity(): void {
		this.imgOpacity = 0.3;
		//this.showSalesText = "block";
		//this.salesTextOpacity = 1;
	}

	changeSalesTextDisplay(): void {
		//this.showSalesText = "block";
		this.salesTextOpacity = 1;
	}
}