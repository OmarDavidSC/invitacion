import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { InvitationData } from "../models/invitation";

@Injectable({
    providedIn: 'root',
})
export class InvitationDataService {
    constructor(
        private http: HttpClient,
    ) { }

    getInvitation(slug: string) {
        return this.http.get<InvitationData>(`assets/invitations/${slug}.json`);
    }

}