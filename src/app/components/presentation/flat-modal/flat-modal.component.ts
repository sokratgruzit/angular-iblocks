import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-flat-modal',
  templateUrl: './flat-modal.component.html',
  styleUrls: ['./flat-modal.component.css']
})
export class FlatModalComponent implements OnInit {

  constructor() { }

  ngOnInit() {
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

}
