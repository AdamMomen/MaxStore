import { NgModule } from '@angular/core';
import { UserComponent } from './components/user/user.component';
import { ProductsComponent } from './components/products/products.component';
import { CategroyComponent } from './components/categroy/categroy.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { ProductComponent } from './components/product/product.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
// I might use it later
import { ReactiveFormsModule } from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    ProductsComponent,
    CategroyComponent,
    SideBarComponent,
    ProductComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MDBBootstrapModule.forRoot()

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
