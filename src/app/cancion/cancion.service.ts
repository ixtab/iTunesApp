import { Cancion } from './cancion.model';
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
@Injectable()
export class CancionService {


    constructor (public http : HttpClient)
    {


    }

    buscaCancionessHttp (busqueda : string): Observable<Cancion[]> 
    {
        let lista_canciones : Observable<Cancion[]>;

        lista_canciones = this.http.get<Cancion[]>
        ("https://itunes.apple.com/search?term="+busqueda+"&media=music&limit=20");

        return lista_canciones;
    }

}