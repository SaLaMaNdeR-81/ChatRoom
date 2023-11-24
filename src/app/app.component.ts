import { Component } from '@angular/core';

import { TokenService } from './@Core/Service/Token.Service';
import { TitleService } from './@Core/Service/Title.Service';
import { ThemeService } from './@Core/Service/Theme.Service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  IsLoged : boolean = false
  Theme : any = this.ThemeService.CheckTheme();

  constructor(private TokenService:TokenService , private TitleService:TitleService ,private ThemeService:ThemeService ){

    this.CheckLog()
    this.TitleService.ResetTitle()
    this.ThemeService.CheckTheme()

  }

  // ======================

  CheckLog(){
    if(this.TokenService.CheckToken()){
      this.IsLoged = true
    }
  }

  // ======================

}
