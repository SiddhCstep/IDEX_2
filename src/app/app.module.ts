import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MenuBarComponent } from './menu-bar/menu-bar.component';
import { PageheaderComponent } from './pageheader/pageheader.component';
import { KyemeasuresComponent } from './kyemeasures/kyemeasures.component';
import { ConsumptiondataComponent } from './consumptiondata/consumptiondata.component';
import { TableComponent } from './table/table.component';
import { HomeComponent } from './home/home.component';
import { SearchequipmentComponent } from './searchequipment/searchequipment.component';
import { SearchresultComponent } from './searchresult/searchresult.component';
import { RefitsComponent } from './refits/refits.component';
import { ReviewComponent } from './review/review.component';
import { ReviewperiodComponent } from './reviewperiod/reviewperiod.component';
import { CriticalitemssummaryComponent } from './criticalitemssummary/criticalitemssummary.component';
import { CriticalitemsaddremoveComponent } from './criticalitemsaddremove/criticalitemsaddremove.component';
import { DemandmonitorComponent } from './demandmonitor/demandmonitor.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuBarComponent,
    PageheaderComponent,
    KyemeasuresComponent,
    ConsumptiondataComponent,
    TableComponent,
    HomeComponent,
    SearchequipmentComponent,
    SearchresultComponent,
    RefitsComponent,
    ReviewComponent,
    ReviewperiodComponent,
    CriticalitemssummaryComponent,
    CriticalitemsaddremoveComponent,
    DemandmonitorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
