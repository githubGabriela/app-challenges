"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var CarouselComponent = (function () {
    function CarouselComponent() {
        this.week = [
            {
                day: 'Monday',
                items: [
                    {
                        id: '1',
                        title: 'Item',
                        description: 'Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression.'
                    }
                ]
            },
            {
                day: 'Tuesday',
                items: [
                    {
                        id: '1',
                        title: 'Item',
                        description: 'Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression.'
                    }
                ]
            },
            {
                day: 'Wednesday',
                items: [
                    {
                        id: '1',
                        title: 'Item',
                        description: 'Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression.'
                    }
                ]
            },
            {
                day: 'Thursday',
                items: [
                    {
                        id: '1',
                        title: 'Item',
                        description: 'Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression.'
                    }
                ]
            },
            {
                day: 'Friday',
                items: [
                    {
                        id: '1',
                        title: 'Item',
                        description: 'Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression.'
                    }
                ]
            },
            {
                day: 'Saturday',
                items: [
                    {
                        id: '1',
                        title: 'Item',
                        description: 'Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression.'
                    }
                ]
            },
            {
                day: 'Sunday',
                items: [
                    {
                        id: '1',
                        title: 'Item',
                        description: 'Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression.'
                    }
                ]
            }
        ];
        this.visibleItems = 3;
        this.currentIndex = 0;
        this.translatePercentage = 0;
    }
    CarouselComponent.prototype.slideRight = function () {
        this.currentIndex++;
        if (!this.firstVisibleItems() && this.currentIndex < this.week.length) {
            if (this.translatePercentage >= -100 * this.visibleItems) {
                this.translatePercentage -= 100;
            }
        }
        if (this.currentIndex >= this.week.length) {
            this.currentIndex = this.week.length - 1; //set currentIndex to the last index
        }
    };
    CarouselComponent.prototype.slideLeft = function () {
        this.currentIndex--;
        if (this.currentIndex < 0) {
            this.currentIndex = 0;
            this.translatePercentage = 0;
        }
        if (this.translatePercentage < 0) {
            this.translatePercentage += 100;
        }
    };
    CarouselComponent.prototype.firstVisibleItems = function () {
        return this.currentIndex < this.visibleItems;
    };
    return CarouselComponent;
}());
CarouselComponent = __decorate([
    core_1.Component({
        selector: 'carousel',
        templateUrl: './carousel.component.html',
        styleUrls: ['./carousel.component.scss']
    }),
    __metadata("design:paramtypes", [])
], CarouselComponent);
exports.CarouselComponent = CarouselComponent;
//# sourceMappingURL=carousel.component.js.map