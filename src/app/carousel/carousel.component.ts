import { Component } from '@angular/core';

@Component({
	selector : 'carousel',
	templateUrl : './carousel.component.html',
	styleUrls : ['./carousel.component.scss']
})

export class CarouselComponent {

	week = [
		{ 
			day : 'Monday',
			items : [
				{
					id : '1',
					title : 'Item',
					description : 'Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression.'
				}
			]
		},
		{ 
			day : 'Tuesday',
			items : [
				{
					id : '1',
					title : 'Item',
					description : 'Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression.'
				}
			]
		},
		{ 
			day : 'Wednesday',
			items : [
				{
					id : '1',
					title : 'Item',
					description : 'Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression.'
				}
			]
		},
		{ 
			day : 'Thursday',
			items : [
				{
					id : '1',
					title : 'Item',
					description : 'Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression.'
				}
			]
		},
		{ 
			day : 'Friday',
			items : [
				{
					id : '1',
					title : 'Item',
					description : 'Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression.'
				}
			]
		},
		{ 
			day : 'Saturday',
			items : [
				{
					id : '1',
					title : 'Item',
					description : 'Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression.'
				}
			]
		},
		{ 
			day : 'Sunday',
			items : [
			{
					id : '1',
					title : 'Item',
					description : 'Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression.'
				}
			]
		}
	];

	visibleItems = 3;
	currentIndex=0;
	translatePercentage = 0;

	constructor (){
	}

	slideRight() {
		this.currentIndex++;
		if(!this.firstVisibleItems() && this.currentIndex < this.week.length) {
			if(this.translatePercentage >= -100 * this.visibleItems){
				this.translatePercentage -= 100;
			}
		}
		if(this.currentIndex >= this.week.length) {
			this.currentIndex = this.week.length-1;	//set currentIndex to the last index
		}
	}

	slideLeft() {
		this.currentIndex --;
		if(this.currentIndex < 0 ) {
			this.currentIndex = 0 ; 
			this.translatePercentage = 0;
		}
		if(this.translatePercentage < 0){
			this.translatePercentage += 100;
		}
	}

	private firstVisibleItems() :boolean { //first items shown in the carousel. These correspond to the values 0, 1, 2 of the week array
		return this.currentIndex < this.visibleItems; 
	}
}

