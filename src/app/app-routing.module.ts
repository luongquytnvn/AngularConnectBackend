import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CustomerComponent} from './customer/customer.component';
import {CustomerCreateComponent} from './customer-create/customer-create.component';
import {CustomerEditComponent} from './customer-edit/customer-edit.component';
import {CustomerDeleteComponent} from './customer-delete/customer-delete.component';

const routes: Routes = [{
  path: 'customers',
  component: CustomerComponent
}, {
  path: 'customers/create',
  component: CustomerCreateComponent
}, {
  path: '',
  redirectTo: '/customers',
  pathMatch: 'full'
} , {
  path: 'customers/edit/:id',
  component: CustomerEditComponent
}, {
  path: 'customers/delete/:id',
  component: CustomerDeleteComponent
}
];


@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule {
  }
