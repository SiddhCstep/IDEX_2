import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConsumptiondataComponent } from './consumptiondata/consumptiondata.component';
import { CriticalitemsaddremoveComponent } from './criticalitemsaddremove/criticalitemsaddremove.component';
import { CriticalitemssummaryComponent } from './criticalitemssummary/criticalitemssummary.component';
import { DemandmonitorComponent } from './demandmonitor/demandmonitor.component';
import { HomeComponent } from './home/home.component';
import { KyemeasuresComponent } from './kyemeasures/kyemeasures.component';
import { PageheaderComponent } from './pageheader/pageheader.component';
import { RefitsComponent } from './refits/refits.component';
import { ReviewComponent } from './review/review.component';
import { ReviewperiodComponent } from './reviewperiod/reviewperiod.component';
import { SearchequipmentComponent } from './searchequipment/searchequipment.component';
import { SearchresultComponent } from './searchresult/searchresult.component';
import { TableComponent } from './table/table.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home',
    component: HomeComponent
  },

  {
    path: 'pageheader',
    component: PageheaderComponent,
    children: [
      {
        path: 'kyemeasures',
        component: KyemeasuresComponent,
        children: [
          {
            path: 'consumptiondata',
            component: ConsumptiondataComponent,
            children: [
              {
                path: 'table',
                component: TableComponent
              },
            ]
          },
        ]
      },

    ]
  },
  {

    path: 'searchequipment',
    component: SearchequipmentComponent,
    children: [
      {
        path: 'searchresult',
        component: SearchresultComponent
      },
    ]
  },
  {
    path: 'home',
    component: HomeComponent
  },

  {
    path: 'refits',
    component: RefitsComponent
  },
  {
    path: 'review',
    component: ReviewComponent,
  },
  {
    path:'reviewperiod',
    component: ReviewperiodComponent
  },
  {
    path: 'criticalitemssummary',
    component: CriticalitemssummaryComponent 
  },
  {
    path: 'criticalitemsaddremove',
    component: CriticalitemsaddremoveComponent
  },
  {
    path: 'demandmonitor',
    component: DemandmonitorComponent
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }