import { Component, OnInit } from '@angular/core';
import { LayoutFloorService } from '../../../services/layout-floor.service';
import { FlatsListService } from '../../../services/flats-list.service';
import { AsideMenuComponent } from '../aside-menu/aside-menu.component';
import { HttpClient } from '@angular/common/http';
import { Properties } from '../../../models/floor.interface';
declare var $: any;

@Component({
  selector: 'app-pr-facade',
  templateUrl: './pr-facade.component.html',
  styleUrls: ['./pr-facade.component.css']
})
export class PrFacadeComponent implements OnInit {
  floorsList = [];
  flatsList = [];

  constructor(public layoutFloorService: LayoutFloorService, public flatsListService: FlatsListService) { }

  getFloors() {
    this.layoutFloorService.getAllFloorsData()
    .subscribe((data) => {
      this.floorsList = data;
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
      $('.map').maphilight();
      $('img[usemap]').rwdImageMaps();
      // $('img[usemap]').mapify();
    });

    this.getFloors();
    this.getFlatsList();
  }

  floorDetails(e, floorData) {
    const popupWidth = $('.floor_popup').width();
    const popupHeight = $('.floor_popup').height();
    let scrollY = $(window).scrollTop();

    if (scrollY === undefined) {
      scrollY = 0;
    }

    $('.floor_data').text(
      'Floor: ' + floorData.id + '; ' +
      'Some data: ' + floorData.properties.flats[0][1] + '; ' +
      'Status: ' + floorData.properties.flats[0][3] + ';'
    );

    $('.floor_popup').attr('style',
      'left:' + (e.clientX - popupWidth / 2) + 'px;' +
      'top:' + (e.clientY - popupHeight + scrollY - 10) + 'px;'
    ).fadeIn(200);
  }

  floorDetailsHide() {
    $('.floor_popup').attr('style', 'display:none');
    $('.floor_data').empty();
  }

  openModal(e, width, height, floorId) {
    this.hideTopMenu();

    const curFloor = this.floorsList.filter(obj => {
      return obj.id === floorId;
    });

    const posX = e.clientX;
    const posY = e.clientY;
    const img = document.createElement('img');

    img.setAttribute('id', 'floor_modal_image');
    img.setAttribute('usemap', '#floor');

    $('#floor_modal').append(img);

    $('#floor_modal').attr('style', 'top:10%;left:calc(50% - ' + width / 2 + 'px);')
    .effect('size', { to: { width: width, height: height } }, 300,
      function() {
        $('#floor_modal_image').attr('src', curFloor[0].properties.layoutImgUrl)
        .attr('style', 'width:' + width + 'px;height:' + height + 'px;display:block').maphilight();
      }
    );
    $('.return_to_view').fadeIn(200);
    $('.floor_modal_close').attr('style', 'display:block');
    $('.background_layer').fadeIn(350);
  }

  openAsideMenu(id, type) {
    if (type === 'floor') {
      const curFloor = this.floorsList.filter(obj => {
        return obj.id === id;
      });

      $('#aside_menu').delay(400).animate({ right: 0 }, 600);

      for (let i = 0; i < curFloor[0].properties.flats.length; i++) {
        const flats = curFloor[0].properties.flats;
        const div = document.createElement('div');
        const text = document.createTextNode(
          'Apartament number: ' + flats[i][1] + '; ' +
          'Floor number: ' + curFloor[0].properties.name + '; ' +
          'Price: ' + curFloor[0].properties.price + ' Rub;'
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

  hideTopMenu() {
    $('#top_menu').removeClass('slide_in_down').addClass('slide_out_down');
    $('.top_menu_burger').fadeIn(200);
  }

  resizeReloader() {
    window.location.reload();
  }

}
