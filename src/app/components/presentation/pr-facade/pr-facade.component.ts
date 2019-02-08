import { Component, OnInit } from '@angular/core';
import { LayoutFloorService } from '../../../services/layout-floor.service';
import { FlatsListService } from '../../../services/flats-list.service';
import { AsideMenuComponent } from '../aside-menu/aside-menu.component';
import { HttpClient } from '@angular/common/http';
declare var $: any;

@Component({
  selector: 'app-pr-facade',
  templateUrl: './pr-facade.component.html',
  styleUrls: ['./pr-facade.component.css']
})
export class PrFacadeComponent implements OnInit {
  floorsList = [];
  flatsCoordsList = [];
  flatsList = [];

  constructor(public layoutFloorService: LayoutFloorService, public flatsListService: FlatsListService) { }

  getFloors() {
    this.layoutFloorService.getAllFloorsData()
    .subscribe((data) => {
      this.floorsList = data;
    });
  }

  getFlatsCoords(buildingId, floorId) {
    this.layoutFloorService.getAllFloorsData()
    .subscribe((data) => {
      this.flatsCoordsList = data[0].properties.flats;
    });
  }

  getFlatsList() {
    this.flatsListService.getAllFlatsData()
    .subscribe((data) => {
      this.flatsList = data;
    });
  }

  ngOnInit() {
    $(function () {
      $('#floor_modal_image').maphilight();
      $('.map').maphilight();
      $('img[usemap]').rwdImageMaps();
      // $('img[usemap]').mapify();
    });

    this.getFloors();
    this.getFlatsCoords(1, 1);
    this.getFlatsList();
  }

  floorDetails(e, floorData, width, height) {
    const curAreaCoords = e.target.coords.split(',');
    let xMax = 0;
    let yMax = 0;

    for (let i = 0; i < Math.trunc(curAreaCoords.length / 2); i++) {
      if (+curAreaCoords[2 * i] > xMax) {
        xMax = +curAreaCoords[2 * i];
      }

      if (+curAreaCoords[2 * i + 1] > yMax) {
        yMax = +curAreaCoords[2 * i + 1];
      }
    }

    const posX = xMax;
    const posY = yMax;

    $('.floor_data').text(
      'Floor: ' + floorData.id + '; ' +
      'Some data: ' + floorData.properties.flats[0][1] + '; ' +
      'Status: ' + floorData.properties.flats[0][3] + ';'
    );

    $('.floor_popup').attr('style', 'left:' + posX + 'px;top:' + posY + 'px;').fadeIn(200);
  }

  floorDetailsHide() {
    $('.floor_popup').attr('style', 'display:none');
    $('.floor_data').empty();
  }

  openModal(e, width, height, floorId) {
    this.hideTopMenu();

    const posX = e.clientX;
    const posY = e.clientY;

    $('#floor_modal_image').attr('src', '../../../../assets/img/1_floor.png')
    .attr('style', 'width:' + width + 'px;height:' + height + 'px;display:block');

    $('#floor_modal').attr('style', 'top:10%;left:calc(50% - ' + width / 2 + 'px);')
    .effect('size', { to: { width: width, height: height } }, 300,
      function() {
        $(this).show();
      }
    );
    $('.return_to_view').fadeIn(200);
    $('.floor_modal_close').attr('style', 'display:block');
    $('.background_layer').fadeIn(350);
  }

  closeModal(e) {
    $('#floor_modal').effect('size', { to: { width: 0, height: 0 } }, 300,
      function() {
        $(this).hide();
      }
    );
    $('.floor_modal_close').attr('style', '');
    $('.return_to_view').fadeOut(200);
    $('.background_layer').fadeOut(350);

    this.closeAsideMenu();
  }

  openFlatModal(id, type) {
    this.hideTopMenu();

    const curFlat = this.flatsList.filter(obj => {
      return obj.id === id;
    });

    $('#floor_modal').effect('size', { to: { width: 0, height: 0 } }, 300);
    $('#flat_modal').effect('size', { to: { width: curFlat[0].imageWidth, height: curFlat[0].imageHeight } }, 300)
    .attr('style',
      'top:10%;' +
      'left:calc(50% - ' + curFlat[0].imageWidth / 2 + 'px);'
    );

    $('#flat_modal_image').attr('src', curFlat[0].layoutImgUrl)
    .attr('style',
      'width:' + curFlat[0].imageWidth + 'px;' +
      'height:' + curFlat[0].imageHeight + 'px;'
    );

    this.openAsideMenu(id, type);
  }

  openAsideMenu(id, type) {
    if (type === 'floor') {
      $('#aside_menu').delay(400).animate({ right: 0 }, 600);

      for (let i = 0; i < this.flatsList.length; i++) {
        const curFloor = this.flatsList[i];
        const div = document.createElement('div');
        const text = document.createTextNode(
          'Apartament numger: ' + curFloor.apartmentNumber + '; ' +
          'Floor number: ' + curFloor.floor + '; ' +
          'Price: ' + curFloor.price + curFloor.currency + ';'
        );

        div.appendChild(text);
        div.setAttribute('class', 'flats_list');

        $('.aside_menu_content').append(div);
      }
    } else if (type === 'flat') {
      const curFlat = this.flatsList.filter(obj => {
        return obj.id === id;
      });

      $('.flats_list').remove();
      $('.flat_data').remove();

      const div = document.createElement('div');
      const text = document.createTextNode(
        'Apartament numger: ' + curFlat[0].apartmentNumber + '; ' +
        'Floor number: ' + curFlat[0].floor + '; ' +
        'Price: ' + curFlat[0].price + curFlat[0].currency + ';'
      );

      div.appendChild(text);
      div.setAttribute('class', 'flat_data');

      $('.aside_menu_content').append(div);

    }
  }

  closeAsideMenu() {
    $('#aside_menu').animate({ right: '-250px' }, 350);

    $('.flats_list').remove();
    $('.flat_data').remove();
  }

  closeFlatModal() {
    $('#flat_modal').effect('size', { to: { width: 0, height: 0 } }, 300);
    $('.background_layer').fadeOut(350);

    this.closeAsideMenu();
  }

  hideTopMenu() {
    $('#top_menu').removeClass('slide_in_down').addClass('slide_out_down');
    $('.top_menu_burger').fadeIn(200);
  }

  resizeReloader() {
    window.location.reload();
  }

}
