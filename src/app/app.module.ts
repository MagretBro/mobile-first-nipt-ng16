import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FirstScreenComponent } from './components/first-screen/first-screen.component';
import { MoreAboutNiptComponent } from './components/more-about-nipt/more-about-nipt.component';
import { MainComponent } from './components/main/main.component';
import { BenefitionComponent } from './components/benefition/benefition.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FirstScreenComponent,
    MoreAboutNiptComponent,
    MainComponent,
    BenefitionComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
