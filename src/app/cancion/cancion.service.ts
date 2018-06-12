import { Cancion } from './cancion.model';
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { urlToNavGroupStrings } from 'ionic-angular/navigation/url-serializer';

@Injectable()
export class CancionService {


    constructor (public http : HttpClient)
    {


    }

    getListaCancionessHttp (url_recibida : string): Observable<Cancion[]> 
    {
        let lista_canciones : Observable<Cancion[]>;

        lista_canciones = this.http.get<Cancion[]>(url_recibida);

        return lista_canciones;
    }

}