import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
      },
      (error) => console.log(error)
    );
  }

  onSubmit() {
    this.tenantService.updateTenant(this.id, this.tenant).subscribe(
      (data) => {
        this.goToTenantList();
      },
      (error) => console.log(error)
    );
  }

  goToTenantList() {
    this.router.navigate(['/tenants']);
  }
}
