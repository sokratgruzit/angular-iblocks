import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PrFacadeComponent } from './components/presentation/pr-facade/pr-facade.component';
import { PrChessComponent } from './components/presentation/pr-chess/pr-chess.component';
import { PrFlatGridComponent } from './components/presentation/pr-flat-grid/pr-flat-grid.component';
import { PrFloorsComponent } from './components/presentation/pr-floors/pr-floors.component';
import { PrFloorViewComponent } from './components/presentation/pr-floor-view/pr-floor-view.component';
import { PrPlanningsComponent } from './components/presentation/pr-plannings/pr-plannings.component';
import { TopMenuComponent } from './components/presentation/top-menu/top-menu.component';
import { AsideMenuComponent } from './components/presentation/aside-menu/aside-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    PrFacadeComponent,
    TopMenuComponent,
    AsideMenuComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
