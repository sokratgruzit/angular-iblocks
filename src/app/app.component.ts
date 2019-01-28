import {
  Component,
  OnInit,
  Inject,
  Input,
  Output,
  ViewChild,
  ElementRef,
  HostListener,
  Renderer
} from '@angular/core';
import { Subject } from 'rxjs';
import { DOCUMENT } from '@angular/common';
import { style } from '@angular/animations';
declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'plugin-test';

  ngOnInit() {
    $(function() {
      $('.map').maphilight();
    });
  }
}
