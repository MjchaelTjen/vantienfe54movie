import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import FormsModule để có thể sử dụng two-way binding
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DemoComponent } from './demo/demo.component';

// import { Baitap1Module } from './baitap1/baitap1.module';
// import { Baitap2Module } from './baitap2/baitap2.module';
// import { Baitap4Module } from './baitap4/baitap4.module';
// import { ComponentsModule } from './components/components.module';
// import { DirectivesModule } from './directives/directives.module';
// import { InteractionModule } from './interaction/interaction.module';
// import { Baitap8Module } from './baitap8/baitap8.module';

// import { DataBindingComponent } from './data-binding/data-binding.component';
// import { StructuralDirectivesComponent } from './structural-directives/structural-directives.component';
// import { AttributeDirectivesComponent } from './attribute-directives/attribute-directives.component';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './core/interceptors/auth.interceptor';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  // Nơi khai báo các component được quản lý bởi module
  // AppComponent đang được AppModule quản lý
  declarations: [
    AppComponent,
    DemoComponent,
    // DataBindingComponent,
    // StructuralDirectivesComponent,
    // AttributeDirectivesComponent,
  ],
  // Nơi khai báo các module sẽ được sử dụng
  // HomeModule: HeaderComponent, FooterComponent, ContentComponent
  // => Để sử dụng các Component của HomeModule trong AppModule cần phải gắn HomeModule vào trong imports
  // Những module do angular cung cấp sẵn: RouterModule, FormsModule, HttpClientModule,....
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,

    // Baitap1Module,
    // Baitap2Module,
    // Baitap4Module,
    // ComponentsModule,
    // DirectivesModule,
    // InteractionModule,
    // Baitap8Module,
  ],
  // Nơi khai báo các cái services cần sử dụng
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}
  ],
  // Khai báo AppComponent là component khởi chạy đầu tiên của module
  // Các module khác do mình tự tạo sẽ không có phần này
  bootstrap: [AppComponent],
})
export class AppModule {}
