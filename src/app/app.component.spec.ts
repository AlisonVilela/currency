import { TestBed, async } from '@angular/core/testing';

import { AppComponent } from './app.component';
import { NavBarHeaderComponent } from './shared/nav-bar-header/nav-bar-header.component';
import { NavBarFooterComponent } from './shared/nav-bar-footer/nav-bar-footer.component';
import { AlertComponent } from './shared/alert/component/alert.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpModule, Http } from '@angular/http';
import { TranslateModule, TranslateLoader, TranslateService } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { RouterTestingModule } from '@angular/router/testing';

import { AlertService } from './shared/alert/service/alert.service';

export function HttpLoaderFactory(http: Http) {
    return new TranslateHttpLoader(http, 'base/src/assets/i18n/', '.json');
}

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ HttpModule, NgbModule.forRoot(), RouterTestingModule, TranslateModule.forRoot({
        loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [Http]
        }
      })],
      declarations: [
        AppComponent,
        NavBarHeaderComponent,
        NavBarFooterComponent,
        AlertComponent
      ],
      providers: [ AlertService ]
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
