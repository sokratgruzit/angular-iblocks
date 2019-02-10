import { Component, OnInit } from '@angular/core';
import { LayoutFloorService } from '../../../services/layout-floor.service';
import { HttpClient } from '@angular/common/http';
declare var $: any;

@Component({
  selector: 'app-floor-modal',
  templateUrl: './floor-modal.component.html',
  styleUrls: ['./floor-modal.component.css']
})
export class FloorModalComponent implements OnInit {
  flatsCoordsList = [];

  constructor(public layoutFloorService: LayoutFloorService) { }

  getFlatsCoords(buildingId, floorId) {
    this.layoutFloorService.getAllFloorsData()
    .subscribe((data) => {
      this.flatsCoordsList = data[0].properties.flats;
    });
  }

  ngOnInit() {
    this.getFlatsCoords(1, 1);
  }

  closeModal(e) {
    $('#floor_modal').effect('size', { to: { width: 0, height: 0 } }, 300,
      function() {
        const img = document.createElement('img');

        $('#floor_modal div:nth-child(2)').remove();
      }
    );
    $('.floor_modal_close').attr('style', '');
    $('.return_to_view').fadeOut(200);
    $('.background_layer').fadeOut(350);

    this.closeAsideMenu();
  }

  closeAsideMenu() {
    $('#aside_menu').animate({ right: '-250px' }, 350);

    $('.flats_list').remove();
    $('.flat_data').remove();
  }

}
