import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TenantCreateComponent } from './tenant-create/tenant-create.component';
import { TenantDetailsComponent } from './tenant-details/tenant-details.component';
import { TenantListComponent } from './tenant-list/tenant-list.component';
import { TenantUpdateComponent } from './tenant-update/tenant-update.component';

const routes: Routes = [
  { path: 'tenants', component: TenantListComponent },
  { path: 'create-tenant', component: TenantCreateComponent },
  { path: 'update-tenant/:id', component: TenantUpdateComponent },
  { path: 'view-tenant/:id', component: TenantDetailsComponent },
  { path: '', redirectTo: 'tenants', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
