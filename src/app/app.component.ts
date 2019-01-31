import {
  AfterViewInit,
  ChangeDetectionStrategy,
  HostBinding,
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
import { NavigationEnd, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { DOCUMENT } from '@angular/common';
import { style } from '@angular/animations';
import { DomSanitizer } from '@angular/platform-browser';
declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'plugin-test';

  ngOnInit() {
  }
}
