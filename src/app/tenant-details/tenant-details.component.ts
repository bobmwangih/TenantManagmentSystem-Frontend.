import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Tenant } from '../tenant';
import { TenantService } from '../tenant.service';

@Component({
  selector: 'app-tenant-details',
  templateUrl: './tenant-details.component.html',
  styleUrls: ['./tenant-details.component.css']
})
export class TenantDetailsComponent implements OnInit {

  id:number;
  tenant:Tenant;

  constructor(private route: ActivatedRoute,private tenantService:TenantService) { }

  ngOnInit(): void {
    this.id= this.route.snapshot.params['id'];
    this.tenant = new Tenant();
    this.tenantService.getTenantById(this.id).subscribe((data)=>{
      this.tenant = data;
    })
  }

}
