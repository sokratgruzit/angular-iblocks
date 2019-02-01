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
    $('#top_menu').toggleClass('slide_in_down slide_out_down');
  }

  hideTopMenu() {
    $('#top_menu').toggleClass('slide_in_down slide_out_down');
  }

}
