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

  constructor(public layoutFloorService: LayoutFloorService) { }

  getFloors() {
    this.layoutFloorService.getAllFloorsData()
      .subscribe((data) => {
        this.floorsList = data;
      });
  }

  ngOnInit() {
    $(function () {
      $('.map').maphilight();
      $('img[usemap]').rwdImageMaps();
      // $('img[usemap]').mapify();
    });

    this.getFloors();
  }

  floorDetails(e, floorData) {
    const posX = e.clientX;
    const posY = e.clientY;

    $('.floor_data').text(
      'Floor: ' +
      floorData.id +
      '; ' +
      'Some data: ' +
      floorData.properties.roomsInfo[0][1] +
      '; ' +
      'Status: ' +
      floorData.properties.roomsInfo[0][2] +
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

  openModal(e) {
    const posX = e.clientX;
    const posY = e.clientY;

    const img = $('.floor_modal_image').attr('src', '../../../../assets/img/1_floor.png');
    $('<img>').attr('src', $(img).attr('src')).on('load', function () {
      $('#floor_modal')
        .css({
          'width': this.width,
          'height': this.height,
          'left': 'calc(50% - ' + this.width / 2 + 'px)'
        });
    });

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
