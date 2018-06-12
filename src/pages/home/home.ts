import { Cancion } from './../../app/cancion/cancion.model';
import { CancionService } from './../../app/cancion/cancion.service';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  styles: ['hr{border: 1px solid grey;}', 'ul{list-style:none;}', "audio{margin-left: -25px;}"],
  providers: [CancionService]
})
export class HomePage {

  public url_itunes : string;
  public lista_canciones : Cancion[];
  public busqueda : string;

  constructor(private cancion_service : CancionService , public navCtrl: NavController) {

   

  }

  consumirListaCanciones(ok : any){
    console.log(ok);
    this.lista_canciones = <Cancion[]> ok.results;
  }

  buscar(){
    console.log(this.busqueda); 
    this.url_itunes = "https://itunes.apple.com/search?term="+this.busqueda+"&media=music&limit=20"
    this.cancion_service.getListaCancionessHttp(this.url_itunes).subscribe
    (ok => this.consumirListaCanciones(ok));
  }

}