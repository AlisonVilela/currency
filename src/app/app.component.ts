import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private translate: TranslateService) {
    translate.addLangs(['de-DE', 'en-US', 'es-ES', 'pt-BR', 'zh-CN']);
    translate.setDefaultLang('en-US');
  }
}
