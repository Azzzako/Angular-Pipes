import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basics-page.component.html',
  styleUrls: ['./basics-page.component.css']
})
export class BasicsPageComponent {
  public nameLower: string = "asael"
  public nameUpper: string = "ASAEL"
  public fullName: string = "aSaEL hErNaNdEz"
  public customDate: Date = new Date()
}
