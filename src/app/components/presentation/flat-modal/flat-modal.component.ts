import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FlatsListService } from '../../../services/flats-list.service';
import { HttpClient } from '@angular/common/http';
declare var $: any;

@Component({
  selector: 'app-flat-modal',
  templateUrl: './flat-modal.component.html',
  styleUrls: ['./flat-modal.component.css']
})
export class FlatModalComponent implements OnInit {
  flatsList = [];

  constructor(public flatsListService: FlatsListService) { }

  getFlatsList() {
    this.flatsListService.getAllFlatsData()
    .subscribe((data) => {
      this.flatsList = data;
    });
  }

  ngOnInit() {
    this.getFlatsList();
  }

  openFlatModal(id, type) {
    this.hideTopMenu();

    const leftPos  = $('#flat_modal').position().left;
    const bottomPos  = $('#flat_modal').position().top;
    const curFlat = this.flatsList.filter(obj => {
      return obj.id === id;
    });

    $('#floor_modal').css({
      'transform': 'scale(.2)',
      'transition': '1s',
      'top': '-' + bottomPos  + 'px',
      'left': '-' + leftPos + 'px'}
    );
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

  closeFlatModal() {
    $('#flat_modal').effect('size', { to: { width: 0, height: 0 } }, 300);
    $('.background_layer').fadeOut(350);

    this.closeAsideMenu();
  }

  closeAsideMenu() {
    $('#aside_menu').animate({ right: '-250px' }, 350);

    $('.flats_list').remove();
    $('.flat_data').remove();
  }

  hideTopMenu() {
    $('#top_menu').removeClass('slide_in_down').addClass('slide_out_down');
    $('.top_menu_burger').fadeIn(200);
  }

}
