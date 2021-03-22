import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TenantListComponent } from './tenant-list/tenant-list.component';
import { TenantCreateComponent } from './tenant-create/tenant-create.component';
import { FormsModule } from '@angular/forms';
import { TenantUpdateComponent } from './tenant-update/tenant-update.component';
import { TenantDetailsComponent } from './tenant-details/tenant-details.component';


@NgModule({
  declarations: [
    AppComponent,
    TenantListComponent,
    TenantCreateComponent,
    TenantUpdateComponent,
    TenantDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
