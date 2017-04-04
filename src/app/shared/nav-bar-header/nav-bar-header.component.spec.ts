import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpModule, Http } from '@angular/http';
import { TranslateModule, TranslateLoader, TranslateService } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { RouterTestingModule } from '@angular/router/testing';

import { NavBarHeaderComponent } from './nav-bar-header.component';

export function HttpLoaderFactory(http: Http) {
    return new TranslateHttpLoader(http, 'src/app/shared/i18n/', '.json');
}

describe('NavBarHeaderComponent', () => {
  let component: NavBarHeaderComponent;
  let fixture: ComponentFixture<NavBarHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavBarHeaderComponent ],
      imports: [ TranslateModule.forRoot({
        loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [Http]
        }
      }), RouterTestingModule, HttpModule ],
      providers: [ TranslateService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavBarHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
