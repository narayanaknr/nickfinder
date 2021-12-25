import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { HomePageComponent } from './components/home-page/home-page.component';
import { FancyTextComponent } from './components/fancy-text/fancy-text.component';
import { CombineNamesComponent } from './components/combine-names/combine-names.component';
import { NicknameSymbolsComponent } from './components/nickname-symbols/nickname-symbols.component';
import { GroupedSymbolsComponent } from './catrgories/grouped-symbols/grouped-symbols.component';
import { BoyNamesComponent } from './catrgories/boy-names/boy-names.component';
import { GirlNamesComponent } from './catrgories/girl-names/girl-names.component';
import { PasswordGeneratorComponent } from './catrgories/password-generator/password-generator.component';
import { WebsiteNamesComponent } from './catrgories/website-names/website-names.component';
import { ContactsComponent } from './others/contacts/contacts.component';
import { TermsUseComponent } from './others/terms-use/terms-use.component';
import { CookiePolicyComponent } from './others/cookie-policy/cookie-policy.component';
import { CoolTextComponent } from './components/cool-text/cool-text.component';
import { FooterComponent } from './components/footer/footer.component';
import { RecentNicknamesComponent } from './common/recent-nicknames/recent-nicknames.component';
import { PapularityTrendsComponent } from './common/papularity-trends/papularity-trends.component';

@NgModule({
  declarations: [AppComponent, HomePageComponent, FancyTextComponent, CombineNamesComponent, NicknameSymbolsComponent, GroupedSymbolsComponent, BoyNamesComponent, GirlNamesComponent, PasswordGeneratorComponent, WebsiteNamesComponent, ContactsComponent, TermsUseComponent, CookiePolicyComponent, CoolTextComponent, FooterComponent, RecentNicknamesComponent, PapularityTrendsComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
