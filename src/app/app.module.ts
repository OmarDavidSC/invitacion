
import { ComunModule } from '../app/shared/comun.module';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { AppComponent } from './app.component';
import { MenuLateralComponent } from './shared/components/menu-lateral/menu-lateral.component';
import { ModalDialog } from "./shared/components/modal/modal.component";
import { GridLoaderComponent } from "./shared/components/grid-loader/grid-loader.component";
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faFileExcel } from '@fortawesome/free-solid-svg-icons';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NgxSpinnerModule } from 'ngx-spinner';
import { ToastrModule } from 'ngx-toastr';
import { AddTokenInterceptor } from './shared/components/authentication/add-token.interceptor';
import { BandejaPrincipalComponent } from './components/bandeja-principal/bandeja-principal.component';
import { MusicaComponent } from './components/partials/musica/musica.component';
import { ContadorComponent } from './components/partials/contador/contador.component';
import { InvitationPagesComponent } from './features/pages/invitation-pages/invitation-pages.component';
import { LoadingScreemComponent } from './features/components/loading-screem/loading-screem.component';
import { HeroCoverComponent } from './features/components/hero-cover/hero-cover.component';
import { CountdownComponent } from './features/components/countdown/countdown.component';
import { EventDetailsComponent } from './features/components/event-details/event-details.component';
import { TimeLineComponent } from './features/components/time-line/time-line.component';
import { RsvpComponent } from './features/components/rsvp/rsvp.component';
import { DressCodeComponent } from './features/components/dress-code/dress-code.component';
import { GalleryComponent } from './features/components/gallery/gallery.component';
import { FooterComponent } from './features/components/footer/footer.component';
import { SectionTitleComponent } from './shared/components/section-title/section-title.component';
import { PillButtomComponent } from './shared/components/pill-buttom/pill-buttom.component';
import { MusicPlayerComponent } from './features/components/music-player/music-player.component';
import { CouplePanelComponent } from './features/components/couple-panel/couple-panel.component';
import { SaveTheDateCalendarComponent } from './features/components/save-the-date-calendar/save-the-date-calendar.component';
import { RomanticQuoteComponent } from './features/components/romantic-quote/romantic-quote.component';
import { FloralSeparatorComponent } from './shared/components/floral-separator/floral-separator.component';
import { AddToCalendarComponent } from './features/components/add-to-calendar/add-to-calendar.component';
import { PetalsOverlayComponent } from './shared/components/petals-overlay/petals-overlay.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuLateralComponent,
    GridLoaderComponent,
    ModalDialog,
    BandejaPrincipalComponent,
    MusicaComponent,
    ContadorComponent,
    InvitationPagesComponent,
    LoadingScreemComponent,
    HeroCoverComponent,
    CountdownComponent,
    EventDetailsComponent,
    TimeLineComponent,
    RsvpComponent,
    DressCodeComponent,
    GalleryComponent,
    FooterComponent,
    SectionTitleComponent,
    PillButtomComponent,
    MusicPlayerComponent,
    CouplePanelComponent,
    SaveTheDateCalendarComponent,
    RomanticQuoteComponent,
    FloralSeparatorComponent,
    AddToCalendarComponent,
    PetalsOverlayComponent,
  ],
  imports: [
    ComunModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatButtonToggleModule,
    NgxSpinnerModule,
    ToastrModule.forRoot()
  ],
  exports: [
    HttpClientModule,
    ModalDialog,
    GridLoaderComponent,
    MenuLateralComponent,
    FontAwesomeModule,
    NgxSpinnerModule,
  ],
  entryComponents: [
    ModalDialog
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS, useClass: AddTokenInterceptor, multi: true
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(library: FaIconLibrary) {
    library.addIcons(
      faFileExcel);
  }
}