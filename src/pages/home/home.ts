import { Cancion } from './../../app/cancion/cancion.model';
import { CancionService } from './../../app/cancion/cancion.service';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [CancionService]
})
export class HomePage {

  public url_itunes : string;
  public canciones : Cancion[];
  public busqueda : string;

  constructor(private cancion_service : CancionService , public navCtrl: NavController) {
    this.busqueda = "";

  }

  obtenerCanciones(jsonrecibido : any){
    console.log(jsonrecibido);
    this.canciones = <Cancion[]> jsonrecibido.results;
    console.log("canciones: "+ this.canciones[0].trackName);
  }

  buscar(){
    console.log(this.busqueda); 
    if (this.busqueda){
    this.url_itunes =this.busqueda
    this.cancion_service.buscaCancionessHttp(this.url_itunes).subscribe
    (jsonrecibido => this.obtenerCanciones(jsonrecibido));
    }
  }

  checkInitialChange(item, itemIndex, items){
    if(itemIndex == 0)
      return item.name[0];

    if(item.name[0] != items[itemIndex-1].name[0])
      return item.name[0];
    
    return null;
  }

}