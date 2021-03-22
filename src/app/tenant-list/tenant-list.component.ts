import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Tenant } from '../tenant';
import { TenantService } from '../tenant.service';

@Component({
  selector: 'app-tenant-list',
  templateUrl: './tenant-list.component.html',
  styleUrls: ['./tenant-list.component.css'],
})
export class TenantListComponent implements OnInit {
  tenants: Tenant[];


  constructor(private tenantService: TenantService, private router: Router) {}

  ngOnInit(): void {
    this.getTenants();
  }

  private getTenants() {
    this.tenantService.getTenantList().subscribe((data) => {
      this.tenants = data;
    });
  }

  updateTenant(id: number) {
    this.router.navigate(['update-tenant', id]);
  }

  deleteTenant(id: number){
    this.tenantService.deleteTenant(id).subscribe((data)=>{
      console.log(data);
      this.getTenants();
      
    })
  }

  viewTenant(id:number){
    this.router.navigate(['view-tenant',id]);
  }
}
