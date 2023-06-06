import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { HttpClientModule } from '@angular/common/http'
import { IonicModule, IonicRouteStrategy, MenuController } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginPage } from './pages/account/login/login.page';
import { FramePage } from './pages/shared/frame/frame.page';
import { AuthorizedGuard } from './guards/authorized.guard';
import { ManagerGuard } from './guards/manager.guard';
import { ComponentsModule } from './components/components.module';
import { DataService } from './services/data.service';


@NgModule({
  declarations: [
    AppComponent,
    FramePage,
  ],
  imports: [
    BrowserModule,
    HttpClientModule, 
    ReactiveFormsModule,
    IonicModule.forRoot(),
    ComponentsModule, 
    AppRoutingModule,
  ],
  providers: [
    AuthorizedGuard,
    ManagerGuard,
    DataService,
    
    { 
      provide: RouteReuseStrategy, 
      useClass: IonicRouteStrategy 
    }
  ],
  bootstrap: [
    AppComponent
  ],
})
export class AppModule {}
