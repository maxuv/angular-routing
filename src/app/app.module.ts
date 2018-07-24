import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routing } from './app.routing';

import { AppComponent } from './app.component';
import { IndexComponent } from './MainFrame/index/index.component';
import { NavFrameComponent } from './MainFrame/nav-frame/nav-frame.component';
import { HeaderFrameComponent } from './MainFrame/header-frame/header-frame.component';
import { FooterFrameComponent } from './MainFrame/footer-frame/footer-frame.component';
import { AboutComponent } from './about/about.component';
import { ServiceComponent } from './service/service.component';
import { BlogComponent } from './blog/blog.component';
import { ContactComponent } from './contact/contact.component';
import { DashboardComponent } from './home/homeSub/dashboard/dashboard.component';
import { BusinessComponent } from './home/homeSub/business/business.component';
import { QualityComponent } from './home/homeSub/quality/quality.component';
import { CostComponent } from './home/homeSub/cost/cost.component';
import { HomeIndexComponent } from './home/home-index/home-index.component';
import { HomeNavComponent } from './home/home-nav/home-nav.component';
import { HomeMainComponent } from './home/home-main/home-main.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    NavFrameComponent,
    HeaderFrameComponent,
    FooterFrameComponent,
    AboutComponent,
    ServiceComponent,
    BlogComponent,
    ContactComponent,
    DashboardComponent,
    BusinessComponent,
    QualityComponent,
    CostComponent,
    HomeIndexComponent,
    HomeNavComponent,
    HomeMainComponent
  ],
  imports: [
    BrowserModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
