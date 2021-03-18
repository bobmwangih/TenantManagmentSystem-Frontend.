import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Tenant } from '../tenant';
import { TenantService } from '../tenant.service';

@Component({
  selector: 'app-tenant-create',
  templateUrl: './tenant-create.component.html',
  styleUrls: ['./tenant-create.component.css']
})
export class TenantCreateComponent implements OnInit {

  tenant:Tenant= new Tenant();
  constructor(private tenantService: TenantService,
    private router: Router) { }


  ngOnInit(): void {
  }

  saveTenant(){
    this.tenantService.saveTenant(this.tenant).subscribe(data =>{
      console.log(data);
      this.goToTenantList();
    },
    error => console.log(error));
    
  }

  goToTenantList(){
    this.router.navigate(['/tenants']);
  }

  onSubmit(){
   this.saveTenant();
    
  }
}
