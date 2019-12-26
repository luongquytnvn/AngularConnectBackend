import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {RouterModule} from '@angular/router';
import {ReactiveFormsModule} from '@angular/forms';
import {AppRoutingModule} from './app-routing.module';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import {CustomerComponent} from './customer/customer.component';
import {CustomerCreateComponent} from './customer-create/customer-create.component';
import {CustomerEditComponent} from './customer-edit/customer-edit.component';
import {CustomerDeleteComponent} from './customer-delete/customer-delete.component';

@NgModule({
  imports: [
    BrowserModule,
    RouterModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    CustomerComponent,
    CustomerCreateComponent,
    CustomerEditComponent,
    CustomerDeleteComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
