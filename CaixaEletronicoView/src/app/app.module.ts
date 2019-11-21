import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';
import { CoreMudule } from './core/core.module';
import { HomeModule } from './home/home.module';
import { RetiradaModule } from './retirada/retirada.module';
import { VMessageMudule } from './shared/components/vmessage/vmessage.module';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    CoreMudule,
    AppRoutingModule,
    HomeModule,
    RetiradaModule,
    VMessageMudule
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
