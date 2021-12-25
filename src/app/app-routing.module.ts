import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CombineNamesComponent } from './components/combine-names/combine-names.component';
import { CoolTextComponent } from './components/cool-text/cool-text.component';
import { FancyTextComponent } from './components/fancy-text/fancy-text.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { NicknameSymbolsComponent } from './components/nickname-symbols/nickname-symbols.component';

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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
