import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { HomePageComponent } from './pages/home/home.component';
import { SearchBoxComponent } from './components/search-box/search-box.component';
import { GifsCardComponent } from './components/gifs-card/gifs-card.component';




@NgModule({
  declarations: [
    HomePageComponent,
    SearchBoxComponent,
    GifsCardComponent

  ],
  imports: [
    CommonModule
  ],
  exports:[
    HomePageComponent,
    GifsCardComponent
  ]
})
export class GifsModule { }
