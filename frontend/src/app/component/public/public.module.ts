import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {DropdownModule} from "ngx-dropdown";

import {PublicComponent} from './public.component';

import {FooterComponent} from './footer/footer.component';
import {HeaderComponent} from './header/header.component';

import {AboutComponent} from './home/about.component';
import {ContactComponent} from './home/contact.component';
import {HomeComponent} from './home/home.component';
import {ResourceDetailsComponent} from './home/resource-details.component';
import {SearchComponent} from './home/search/search.component';

import {LoginComponent} from './login/login.component';
import {ModalLogin} from "./login/modal.component/modal-login";
import {RegisterComponent} from './login/register.component';

import {ProfileComponent} from './user/profile.component';

import {PublicRoutingModule} from './public-routing.module';
import {ModalProfileEdit} from "./user/modal.profile.component/modal-profile-edit";
import {FormsModule} from "@angular/forms";
import {ModalBiographyEdit} from "./user/modal.biography.component/modal-biography-edit";


@NgModule({
  imports: [
    CommonModule,
    PublicRoutingModule,
    NgbModule.forRoot(),
    DropdownModule,
    FormsModule
  ],
  declarations: [
    PublicComponent,
    FooterComponent,
    HeaderComponent,
    AboutComponent,
    ContactComponent,
    HomeComponent,
    ResourceDetailsComponent,
    SearchComponent,
    LoginComponent,
    ModalLogin,
    RegisterComponent,
    ProfileComponent,
    ModalProfileEdit,
    ModalBiographyEdit
  ]
})
export class PublicModule {
}
