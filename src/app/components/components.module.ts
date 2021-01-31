import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';
import { CardComponent } from './card/card.component';
import { ErrorMessageComponent } from './error-message/error-message.component';

@NgModule({
  declarations: [ButtonComponent, CardComponent, ErrorMessageComponent],
  imports: [CommonModule],
  exports: [ButtonComponent, CardComponent, ErrorMessageComponent],
})
export class ComponentsModule {}
