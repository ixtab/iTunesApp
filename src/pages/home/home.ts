import { Cancion } from './../../app/cancion/cancion.model';
import { CancionService } from './../../app/cancion/cancion.service';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  styles: ['hr{border: 1px solid grey;}', 'ul{list-style:none;}'],
  providers: [CancionService]
})
export class HomePage {

  public lista_canciones : Cancion[];

  constructor(cancion_service : CancionService , public navCtrl: NavController) {

    cancion_service.getListaCancionessHttp().subscribe
    (ok => this.consumirListaCanciones(ok));

  }

  consumirListaCanciones(ok : any){
    this.lista_canciones = <Cancion[]> ok.results;
  }

}
