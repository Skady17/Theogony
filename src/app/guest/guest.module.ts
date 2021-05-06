import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GuestRoutingModule } from './guest-routing.module';
import { HomeComponent } from './home/home.component';
import { LibraryComponent } from './library/library.component';
import { ForumComponent } from './forum/forum.component';


@NgModule({
  declarations: [
    HomeComponent,
    LibraryComponent,
    ForumComponent
  ],
  imports: [
    CommonModule,
    GuestRoutingModule
  ]
})
export class GuestModule { }
