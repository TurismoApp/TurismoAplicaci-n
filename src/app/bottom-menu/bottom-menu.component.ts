import { Component, OnInit } from '@angular/core';
import { menuBottomOptions } from '~/types/menuBottom.types';
import { Router } from '@angular/router';

@Component({
	selector: 'ns-bottom-menu',
	templateUrl: './bottom-menu.component.html',
	styleUrls: ['./bottom-menu.component.css']
})

export class BottomMenuComponent implements OnInit {

	public menu: menuBottomOptions = "listActivity";
	constructor(private route: Router) { }

	ngOnInit() { }

	menuDirections(option: menuBottomOptions) {
		this.menu = option;
		this.route.navigateByUrl(option);
	}
}