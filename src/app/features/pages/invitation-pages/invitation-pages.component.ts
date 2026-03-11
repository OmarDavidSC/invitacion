import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';
import { InvitationData } from 'src/app/shared/models/invitation';
import { InvitationDataService } from 'src/app/shared/services/invitation-data.service';

@Component({
  selector: 'app-invitation-pages',
  templateUrl: './invitation-pages.component.html',
  styleUrls: ['./invitation-pages.component.scss']
})
export class InvitationPagesComponent implements OnInit {

  data?: InvitationData;

  isLoading = true;
  isCloseLoading = false;

  private sub: Subscription;

  constructor(
    private route: ActivatedRoute,
    private invitationDataService: InvitationDataService,
    private toastService: ToastrService
  ) { }

  ngOnInit(): void {
    const slug = this.route.snapshot.paramMap.get('slug') || 'jayson-eliana';
    this.sub = this.invitationDataService.getInvitation(slug).subscribe({
      next: (data) => {
        this.data = data;
        this.isLoading = true;
      },
      error: (error) => {
        this.toastService.error('Error fetching invitation data:', error);
        this.isLoading = false;
      }
    });
  }
}
