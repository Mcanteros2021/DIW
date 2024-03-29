import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ModulesModule } from './modules/modules.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { SkeletonComponent } from './layout/skeleton/skeleton.component';
import { FooterComponent } from './layout/footer/footer.component';
import { NavigationComponent } from './layout/navigation/navigation.component';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';


@NgModule({
  declarations: [
    AppComponent,
    SkeletonComponent,
    FooterComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ModulesModule,
    SharedModule,
    CoreModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
