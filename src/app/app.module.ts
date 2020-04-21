import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ConfigService } from 'src/app/config.service';

import { interval } from 'rxjs';
import {NgForm, FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomeComponent } from './home/home.component';

import { PostsComponent } from './posts/posts.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    
    HomeComponent,
    
    PostsComponent
  ],
  imports: [
    BrowserModule,
    
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    
    
  ],
  providers: [ConfigService],
  bootstrap: [AppComponent]
})
export class AppModule { }
