import { Component, OnInit } from '@angular/core';
import { BuildingService } from '../../../services/building.service';
declare var $: any;

@Component({
  selector: 'app-top-menu',
  templateUrl: './top-menu.component.html',
  styleUrls: ['./top-menu.component.css']
})
export class TopMenuComponent implements OnInit {
  buildingData = [];

  constructor(public buildingService: BuildingService) { }

  getBuildingData() {
    this.buildingService.getAllBuildingData()
    .subscribe((data) => {
      this.buildingData = data;
    });
  }

  ngOnInit() {
    this.getBuildingData();
  }

  showTopMenu() {
    $('#top_menu').addClass('slide_in_down').removeClass('slide_out_down');
    $('.top_menu_burger').fadeOut(200);
  }

  hideTopMenu() {
    $('#top_menu').removeClass('slide_in_down').addClass('slide_out_down');
    $('.top_menu_burger').fadeIn(200);
  }

}
