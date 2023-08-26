
import { Component, ElementRef, ViewChild } from '@angular/core';


import { GifsService } from '../../services/gifs.service';



@Component({
  selector: 'gifs-search-box',
  template: `
  <h5>Buscar: </h5>
  <input
  type="text"
  class="form-control"
  placeholder="Buscar gifs..."
  (keyup.enter)="HandleSubmit()"
  #searchInput
  >
  `
})

export class SearchBoxComponent  {

   //injectamos el servicio en el constructor
   constructor (private gifsService : GifsService) {}

  @ViewChild('searchInput')
  public tagInput! : ElementRef<HTMLInputElement>;

  HandleSubmit ():void {

    const newTag = this.tagInput.nativeElement.value;
    this.gifsService.searchTag(newTag);

    this.tagInput.nativeElement.value = '';
  }





}

