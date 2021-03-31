import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { AppRoutingModule } from '../app-routing.module';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';



@NgModule({
  declarations: [BreadcrumbsComponent,
    SidebarComponent,
    HeaderComponent,],

  exports: [BreadcrumbsComponent,
    SidebarComponent,
    HeaderComponent,
    BrowserModule,
    CommonModule
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    RouterModule,
    BrowserModule
  ]
})
export class SharedModule { }
