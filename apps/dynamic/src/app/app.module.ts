import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { WrapperModule } from '@my-org/wrapper';
import { NxTestComponent } from './nx-test.component';


@NgModule({
  declarations: [AppComponent, NxWelcomeComponent, NxTestComponent],
  imports: [
    BrowserModule,
    WrapperModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
