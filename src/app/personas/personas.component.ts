import { Component, OnInit } from '@angular/core';
import { Persona } from '../model/persona';

@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.scss']
})
export class PersonasComponent implements OnInit {

  persona: Persona=new Persona

  constructor() { }

  ngOnInit(): void {
  }

  goGuardar(){

  }

}
