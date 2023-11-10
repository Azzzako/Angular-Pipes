import { Component } from '@angular/core';
import { Observable, interval, tap } from 'rxjs';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrls: ['./uncommon-page.component.css']
})
export class UncommonPageComponent {

  //i18n Select
  public name: string = 'Fernando'
  public gender: 'male' | 'female' = 'male'
  public invitationMap = {
    'male': 'invitarlo',
    'female': 'invitarla'
  }

  changeClient(): void {
    this.name = "Melisa"
    this.gender = "female"
  }


  //i18n Plural && Slice
  public clientes: string[] = ["maria", "pedro", "fernando", "melisa", "natalia", "eduardo"]
  public clientesMap = {
    "=0": "No tenemos ningun cliente esperando",
    "=1": "Tenemos 1 cliente esperando",
    "other": "Actualmente Tenemos # clientes esperando"
  }


  deleteClient(): void {
    this.clientes.shift()
  }



  //JSON Pipe & KeyValue Pipe

  public person = {
    "name": "Asael",
    "age": 30,
    "address": "coyoacan"
  }


  //Async Pipe
  public myObservableTimer: Observable<number> = interval(2000)
    .pipe(
      tap(value => {
        console.log(value);
      }))

public promiseValue: Promise<string> = new Promise( (resolve, reject) => {
    setTimeout(() => {
      resolve("Tenemos data en la promesa")
    }, 3500)
  })


    }




