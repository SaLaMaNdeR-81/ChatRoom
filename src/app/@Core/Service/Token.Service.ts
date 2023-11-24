import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  private readonly TOKENNAME :string = "Token" ;

  public CheckToken(){
    return localStorage.getItem(this.TOKENNAME)
  }

  public SetAdvancedToken(Token:any):void{
    localStorage.setItem(this.TOKENNAME , Token)
  }

  public SetToken(Token:string):void{
    localStorage.setItem(this.TOKENNAME , Token)
  }

  public RemoveToken():void{
    localStorage.removeItem(this.TOKENNAME)
  }
  
}
