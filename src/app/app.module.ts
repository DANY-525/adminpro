import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';
import { PagesModule } from './pages/pages.module';
import { CommonModule } from "@angular/common";



@NgModule({
  declarations: [
    AppComponent,
   
    NopagefoundComponent,
    NopagefoundComponent,
   
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
