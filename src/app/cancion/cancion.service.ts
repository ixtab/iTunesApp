import { Cancion } from './cancion.model';
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";

@Injectable()
export class CancionService {

    static url_itunes : string = "https://itunes.apple.com/search?term=dead+can+dance&media=music&limit=20"

    constructor (private http : HttpClient)
    {


    }

    getListaCancionessHttp (): Observable<Cancion[]> 
    {
        let lista_canciones : Observable<Cancion[]>;

        lista_canciones = this.http.get<Cancion[]>
        (CancionService.url_itunes);

        return lista_canciones;
    }

}