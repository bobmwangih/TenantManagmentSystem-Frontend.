import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Paid } from '../paid';
import { Tenant } from '../tenant';
import { TenantService } from '../tenant.service';

@Component({
  selector: 'app-tenant-create',
  templateUrl: './tenant-create.component.html',
  styleUrls: ['./tenant-create.component.css']
})
export class TenantCreateComponent implements OnInit {

  tenant:Tenant= new Tenant();
  paid:Paid[];
  constructor(private tenantService: TenantService,
    private router: Router) { }


  ngOnInit(): void {
    this.getMonths();
  }

  saveTenant(){
    this.tenant.monthsPaid=this.paid.filter(t=>t.isSelected==true).map(x=>x.month).join(" ").toString();
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

  getMonths(){
    this.paid=[
      {month:"jan",isSelected:false},
      {month:"feb",isSelected:false},
      {month:"mar",isSelected:false},
      {month:"april",isSelected:false},
      {month:"may",isSelected:false},
      {month:"june",isSelected:false},
      {month:"july",isSelected:false},
      {month:"aug",isSelected:false},
      {month:"sept",isSelected:false},
      {month:"oct",isSelected:false},
      {month:"nov",isSelected:false},
      {month:"dec",isSelected:false},
    ]
  };

}
