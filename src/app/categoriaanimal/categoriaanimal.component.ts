import { CategoriaAnimalService } from './../services/categorianimal.service';
import { CategoriaAnimal } from './../models/Categoriaanimal';
import { Component, OnInit, NgModule } from '@angular/core';
import { Router, ActivatedRoute, Params} from '@angular/router';
import { identity } from 'rxjs';
import { GLOBAL } from '../services/global';

@Component({
  selector: 'app-categoriaanimal',
  templateUrl: './categoriaanimal.component.html',
  styleUrls: ['./categoriaanimal.component.css'],
  providers: [ CategoriaAnimalService]
})
export class CategoriaanimalComponent implements OnInit {
  public categoriasAnimales: any[] = [];
  public categoria: CategoriaAnimal;
  public agregarCA;
  public editarCA;
  public tituloPrincipal;
  public tituloBotonSubmit;
  public stActualizar = '';
  public fueBorrada = '';
  constructor( private _catanimal: CategoriaAnimalService, private _router: Router) { }

  ngOnInit() {
  this.agregarCA = false;
  this.tituloPrincipal = 'Agregar nueva categoría de animal';
  this.tituloBotonSubmit = 'Agregar';
  this.getData();
  }

  addNewCA () {
    this.categoria = new CategoriaAnimal();
    this.agregarCA = true;
    this.editarCA = false;
    this.tituloPrincipal = 'Agregar nueva categoría de animal';
    this.tituloBotonSubmit =  'Agregar';
  }
  editCA(categoria) {
    this.editarCA = true;
    this.agregarCA = true;
    this.categoria = categoria;
    this.tituloBotonSubmit = 'Editar';
    this.tituloPrincipal = 'Editar categoría de animal';
  }
  restartValues() {
    this.editarCA = false;
    this.agregarCA = false;
    this.categoria = new CategoriaAnimal();
    this.stActualizar = '';
    this.fueBorrada = '';
    this.getData();
  }

  onSubmit() {
    if (this.editarCA === false ) {
      this._catanimal.addNewCategoriAnimal(this.categoria).subscribe(
        response => {
          console.log(response);
          this.getData();
        }, error => {
          console.log(error);
        }
      );
    } else {
      this._catanimal.editCategoriAnimal(this.categoria).subscribe(
        response => {

          if (response.status === 'success') {
            this.getData();
            this.stActualizar = 'true';
          } else {
            this.stActualizar = 'false';
          }

        }, error => {
          console.log(error);
        }
      );
    }

  }
  borrarCategotiaAnimal(categoria) {
    if (confirm('Desea eliminar la categoría ' + categoria.nombrecategoriaanimal + ' ?' )) {

    this._catanimal.removeCategoriaAnimal(categoria).subscribe(
      response => {
        if (response.status === 'success') {
          this.fueBorrada = 'true';
        }
        this.getData();

         }, error => {
        console.log(error);
      }
    );
  }
  }
  getData() {
    this._catanimal.getCategoriaAnimales().subscribe(
      response => {
        if ( response.status === 'success') {
           this.categoriasAnimales = response.data;
           this._router.navigate(['/']);
        }
      }, error => {
        this.categoriasAnimales = error.data;
        console.log('status error');
        console.log('error' + error);
      }
    );
  }

}
