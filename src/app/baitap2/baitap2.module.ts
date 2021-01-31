import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SliderComponent } from './slider/slider.component';
import { IndexContentComponent } from './index-content/index-content.component';
import { ItemComponent } from './item/item.component';
import { IndexComponent } from './index/index.component';
import { Baitap2Component } from './baitap2.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SliderComponent,
    IndexContentComponent,
    ItemComponent,
    IndexComponent,
    Baitap2Component,
  ],
  imports: [CommonModule],
  // exports: [Baitap2Component],
})
export class Baitap2Module {}





