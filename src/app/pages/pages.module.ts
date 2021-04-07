import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


import { ComponentsModule } from '../components/components.module';
import { ProgressComponent } from './progress/progress.component';
import { Grafica1Component } from './grafica1/grafica1.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PagesComponent } from './pages.component';
import { SharedModule } from '../shared/shared.module';
import { AppRoutingModule } from '../app-routing.module';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { PromesaComponent } from './promesa/promesa.component';
import { RxjsComponent } from './rxjs/rxjs.component';




@NgModule({
  declarations: [ProgressComponent,
    Grafica1Component,
    DashboardComponent,
    PagesComponent,
    AccountSettingsComponent,
    PromesaComponent,
    RxjsComponent,
  ],


  exports: [ProgressComponent,
    Grafica1Component,
    DashboardComponent,
    PagesComponent,
    AccountSettingsComponent,
  ],


  imports: [
    CommonModule,
    SharedModule,
    AppRoutingModule,
    FormsModule,
    ComponentsModule,
    
  ]
})
export class PagesModule { }
