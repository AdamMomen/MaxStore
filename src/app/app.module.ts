import { NgModule } from '@angular/core';
import { UserComponent } from './components/user/user.component';
import { ProductsComponent } from './components/products/products.component';
import { CategroyComponent } from './components/categroy/categroy.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { ProductComponent } from './components/product/product.component';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SimpleSidenavModule } from 'simple-sidenav';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    ProductsComponent,
    CategroyComponent,
    SideBarComponent,
    ProductComponent,
    BrowserModule,
    AppRoutingModule,
    SimpleSidenavModule,
    BrowserAnimationsModule
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
