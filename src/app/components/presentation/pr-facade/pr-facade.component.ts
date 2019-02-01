import { Component, OnInit } from '@angular/core';
import { LayoutFloorService } from '../../../services/layout-floor.service';
declare var $: any;

@Component({
  selector: 'app-pr-facade',
  templateUrl: './pr-facade.component.html',
  styleUrls: ['./pr-facade.component.css']
})
export class PrFacadeComponent implements OnInit {
  floorsList = [];
  flatsList = [];

  constructor(public layoutFloorService: LayoutFloorService) { }

  getFloors() {
    this.layoutFloorService.getAllFloorsData()
    .subscribe((data) => {
      this.floorsList = data;
    });
  }

  getFlats(buildingId, floorId) {
    this.layoutFloorService.getAllFloorsData()
    .subscribe((data) => {
      this.flatsList = data[0].properties.flats;
    });
  }

  ngOnInit() {
    $(function () {
      $('.floor_modal_image').maphilight();
      $('.map').maphilight();
      $('img[usemap]').rwdImageMaps();
      // $('img[usemap]').mapify();
    });

    this.getFloors();
    this.getFlats(1, 1);
  }

  floorDetails(e, floorData) {
    const posX = e.clientX;
    const posY = e.clientY;

    $('.floor_data').text(
      'Floor: ' +
      floorData.id +
      '; ' +
      'Some data: ' +
      floorData.properties.flats[0][1] +
      '; ' +
      'Status: ' +
      floorData.properties.flats[0][3] +
      ';'
    );

    $('.floor_popup')
      .attr('style', 'left:' + posX + 'px;top:' + posY + 'px;')
      .show();
  }

  floorDetailsHide() {
    $('.floor_popup').hide();
    $('.floor_data').empty();
  }

  openModal(e, width, height) {
    const posX = e.clientX;
    const posY = e.clientY;
    console.log(width, height);

    $('.floor_modal_image').attr('src', '../../../../assets/img/1_floor.png');
    $('.floor_modal_image')
    .attr('style',
    'width:' + width +
    'px;height:' + height + 'px;');

    $('#floor_modal')
    .attr('style',
      'width:' + width + 'px;height:' + height +
      'px;left:calc(50% - ' + width / 2 + 'px);'
    );

    $('#floor_modal').toggleClass('zoom_in_floor zoom_out_floor');
    $('.floor_modal_close').attr('style', 'display:block');
    $('.background_layer').fadeIn(350);
  }

  closeModal(e) {
    $('#floor_modal').toggleClass('zoom_in_floor zoom_out_floor');
    $('.floor_modal_close').attr('style', '');
    $('.background_layer').fadeOut(350);
  }

  resizeReloader() {
    window.location.reload();
  }


}
