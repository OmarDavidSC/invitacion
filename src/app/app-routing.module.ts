import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BandejaPrincipalComponent } from './components/bandeja-principal/bandeja-principal.component';
import { InvitationPagesComponent } from './features/pages/invitation-pages/invitation-pages.component';


const routes: Routes = [
  { path: '', redirectTo: 'invitation/', pathMatch: 'full' },
  { path: 'invitation/:slug', component: InvitationPagesComponent },
  { path: 'demo', component: BandejaPrincipalComponent },
  { path: '**', redirectTo: 'invitation/' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
