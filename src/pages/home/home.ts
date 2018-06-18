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

  public canciones : Cancion[];
  public busqueda : string;

  constructor(private cancion_service : CancionService , public navCtrl: NavController) {
  }

  obtenerCanciones(jsonrecibido : any){
    console.log(jsonrecibido);
    this.canciones = <Cancion[]> jsonrecibido.results;
  }

  buscar(){
    console.log(this.busqueda); 
    if (this.busqueda){
      this.cancion_service.buscaCancionessHttp(this.busqueda).subscribe
      (jsonrecibido => this.obtenerCanciones(jsonrecibido));
    }
  }

}