import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriaanimalComponent } from './categoriaanimal.component';

describe('CategoriaanimalComponent', () => {
  let component: CategoriaanimalComponent;
  let fixture: ComponentFixture<CategoriaanimalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoriaanimalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoriaanimalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
