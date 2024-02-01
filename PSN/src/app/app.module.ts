import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { CardComponent } from './components/card/card.component';
import { MenuBarComponent } from './components/menu-bar/menu-bar.component';
import { CardLabelComponent } from './components/card/card-label/card-label.component';
import { CardPriceComponent } from './components/card/card-price/card-price.component';
import { MenuSonyComponent } from './components/menu-sony/menu-sony.component';
import { CardPhotoComponent } from './components/card/card-photo/card-photo.component';
import { LinksBarComponent } from './components/menu-bar/links-bar/links-bar.component';
import { LogoBarComponent } from './components/menu-bar/logo-bar/logo-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CardComponent,
    MenuBarComponent,
    CardLabelComponent,
    CardPriceComponent,
    MenuSonyComponent,
    CardPhotoComponent,
    LinksBarComponent,
    LogoBarComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
