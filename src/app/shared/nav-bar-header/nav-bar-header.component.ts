import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-nav-bar-header',
  templateUrl: './nav-bar-header.component.html',
  styleUrls: ['./nav-bar-header.component.scss']
})
export class NavBarHeaderComponent implements OnInit {

  constructor(private translate: TranslateService) { }

  ngOnInit() {
  }

  onClickFlag(locale) {
    this.translate.use(locale);
  }

}
