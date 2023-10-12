import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.scss']
})
export class AlumnosComponent implements OnInit {

  alumnos: any[] = [
    {
      id: 1,
      nombre: 'Juan Pérez',
      edad: 20,
      promedio: 9
    },
    {
      id: 2,
      nombre: 'María García',
      edad: 18,
      promedio: 8
    },
    {
      id: 3,
      nombre: 'Pedro González',
      edad: 19,
      promedio: 7
    }
  ];


  constructor() {
  }
  
  ngOnInit(): void {
  }

}
