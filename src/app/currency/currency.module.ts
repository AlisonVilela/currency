import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { CurrencyRoutingModule } from './currency.routing.module';

import { ConverterComponent } from './component/convert/converter.component';
import { CurrencyService } from './service/currency.service';
import { WorldComponent } from './component/world/world.component';

@NgModule({
  imports: [
    NgbModule.forRoot(),
    CommonModule,
    FormsModule,
    CurrencyRoutingModule,
    TranslateModule
  ],
  declarations: [
    ConverterComponent,
    WorldComponent
  ],
  exports: [
    ConverterComponent
  ],
  providers: [
    CurrencyService
  ]
})
export class CurrencyModule { }
