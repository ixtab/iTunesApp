import { Cancion } from './cancion.model';
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
@Injectable()
export class CancionService {


    constructor (public http : HttpClient)
    {


    }

    buscaCancionessHttp (url_recibida : string): Observable<Cancion[]> 
    {
        let lista_canciones : Observable<Cancion[]>;

        lista_canciones = this.http.get<Cancion[]>(url_recibida);

        return lista_canciones;
    }

}