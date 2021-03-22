import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Paid } from '../paid';
import { Tenant } from '../tenant';
import { TenantService } from '../tenant.service';

@Component({
  selector: 'app-tenant-update',
  templateUrl: './tenant-update.component.html',
  styleUrls: ['./tenant-update.component.css'],
})
export class TenantUpdateComponent implements OnInit {
  id: number;
  tenant: Tenant = new Tenant();
  paid:Paid[];

  constructor(
    private tenantService: TenantService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    
    this.tenantService.getTenantById(this.id).subscribe(
      (data) => {
        this.tenant = data;
        let miezi = data.monthsPaid.split(" ");
        this.getMonths().forEach(x=>{
          if(miezi.includes(x.month)){
            x.isSelected = true;
          }
        });
      },
      (error) => console.log(error)
    );

  }

  updateTenant(){
    this.tenant.monthsPaid=this.paid.filter(t=>t.isSelected==true).map(x=>x.month).join(" ").toString();
    this.tenantService.updateTenant(this.id, this.tenant).subscribe(
      (data) => {
        this.goToTenantList();
      },
      (error) => console.log(error)
    );
  }

  onSubmit() {
    this.updateTenant();
  }

  goToTenantList() {
    this.router.navigate(['/tenants']);
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
    ];
return this.paid;
  };
}
