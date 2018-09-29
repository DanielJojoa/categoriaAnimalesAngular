import { CategoriaAnimal } from './../models/Categoriaanimal';
import { Params } from '@angular/router';
import { GLOBAL } from './global';
import {Injectable} from '@angular/core' ;
import {Http, Response, Headers} from '@angular/http';
import { map } from 'rxjs/operators';


@Injectable()
export class CategoriaAnimalService {
    public url: string;
    public prueba;
    constructor ( private _http: Http) {
        this.url   = GLOBAL.url;
    }
    public selectedTipoAnimal: CategoriaAnimal;
    getCategoriaAnimales() {
      /*  return this._http.get(this.url + 'query').pipe(map(res => res.json()));*/
        const params = 'null';
        const headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded'});
        return this._http.post(this.url + 'query', params, {headers: headers}).pipe(map(res => res.json()));
    }
    addNewCategoriAnimal(newCategoriaAnimal) {

        const json = JSON.stringify(newCategoriaAnimal);
        const params = 'json=' + json ;
        const headers = new Headers({'Content-Type': 'application/x-www-form-urlencoded'});

        return this._http.post(this.url + 'new', params, { headers: headers }).pipe(map(res => res.json()));

    }
    editCategoriAnimal( catanimal ) {

        const json = JSON.stringify(catanimal);
        console.log(json);
        const params = 'json=' + json;
        const headers = new Headers({'Content-Type': 'application/x-www-form-urlencoded'});
        return this._http.post(this.url + 'edit', params, { headers: headers }).pipe(map(res => res.json()));

    }
    removeCategoriaAnimal(removeCategoriaAnimal) {

        const json = JSON.stringify(removeCategoriaAnimal);
        console.log(json);
        const params = 'json=' + json;
        const headers = new Headers({'Content-Type': 'application/x-www-form-urlencoded'});

        return this._http.post(this.url + 'delete', params, { headers: headers }).pipe(map(res => res.json()));


    }


}
