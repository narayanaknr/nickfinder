import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PasswordGeneratorComponent } from './catrgories/password-generator/password-generator.component';
import { WebsiteNamesComponent } from './catrgories/website-names/website-names.component';
import { CombineNamesComponent } from './components/combine-names/combine-names.component';
import { CoolTextComponent } from './components/cool-text/cool-text.component';
import { FancyTextComponent } from './components/fancy-text/fancy-text.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { NicknameSymbolsComponent } from './components/nickname-symbols/nickname-symbols.component';
import { ContactsComponent } from './others/contacts/contacts.component';
import { CookiePolicyComponent } from './others/cookie-policy/cookie-policy.component';
import { TermsUseComponent } from './others/terms-use/terms-use.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomePageComponent,
  },
  { path: 'home', component: HomePageComponent },
  { path: 'fancy-text', component: FancyTextComponent },
  { path: 'combine-names', component: CombineNamesComponent },
  { path: 'nickname', component: NicknameSymbolsComponent },
  { path: 'cool-text', component: CoolTextComponent },
  { path: 'password-generator', component: PasswordGeneratorComponent },
  { path: 'website-names', component: WebsiteNamesComponent },
  { path: 'contact', component: ContactsComponent },
  { path: 'cookies', component: CookiePolicyComponent },
  { path: 'terms-conditions', component: TermsUseComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
