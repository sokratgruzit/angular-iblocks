import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-aside-menu',
  templateUrl: './aside-menu.component.html',
  styleUrls: ['./aside-menu.component.css']
})
export class AsideMenuComponent implements OnInit {

  returnToView() {
    $('#floor_modal').removeClass('zoom_in_object').addClass('zoom_out_object');
    $('#flat_modal').removeClass('zoom_in_object').addClass('zoom_out_object');
    $('#flat_modal_image').attr('style', 'display:none');
    $('.return_to_view').fadeOut(200);
    $('.background_layer').fadeOut(350);

    this.closeAsideMenu();
  }

  closeAsideMenu() {
    $('#aside_menu').animate({ right: '-250px' }, 350);

    $('.flats_list').remove();
    $('.flat_data').remove();
  }

  constructor() { }

  ngOnInit() {
  }
}
