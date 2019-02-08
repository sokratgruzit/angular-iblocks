import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-aside-menu',
  templateUrl: './aside-menu.component.html',
  styleUrls: ['./aside-menu.component.css']
})
export class AsideMenuComponent implements OnInit {

  returnToView() {
    $('#floor_modal').effect('size', { to: { width: 0, height: 0 } }, 300);
    $('#flat_modal').effect('size', { to: { width: 0, height: 0 } }, 300);
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
