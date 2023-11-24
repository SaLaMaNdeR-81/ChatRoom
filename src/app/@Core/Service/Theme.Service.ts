import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  private readonly THEMENNAME :string = "Theme" ;
  private readonly ThemeDefault :string = "Default" ;

  Theme :any = localStorage.getItem(this.THEMENNAME)

  public CheckTheme(){

    if(this.Theme){
      document.body.setAttribute(this.THEMENNAME , this.Theme)
    }else{
      this.ReSetTheme()
    }

  }

  public ChangeTheme(Theme:string):void {
    localStorage.setItem(this.THEMENNAME , Theme)
    document.body.setAttribute(this.THEMENNAME , Theme)
  }

  public ReSetTheme():void {
    localStorage.setItem(this.THEMENNAME , this.ThemeDefault)
    document.body.setAttribute(this.THEMENNAME , this.ThemeDefault)
  }

}
