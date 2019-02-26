import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { Routes, RouterModule } from '@angular/router';
import { LandingPageComponent } from './variable/landing-page/landing-page.component';
import { PricingPageComponent } from './variable/pricing-page/pricing-page.component';
import { ContactPageComponent } from './variable/contact-page/contact-page.component';
import { SupplyChainComponent } from './variable/product-page/supply-chain/supply-chain.component';
import { SelfCheckoutComponent } from './variable/product-page/self-checkout/self-checkout.component';
import { ComingSoonComponent } from './constant/coming-soon/coming-soon.component';
import { AnalyticComponent } from './variable/product-page/analytic/analytic.component';
import { PrivacyandtermsComponent } from './constant/privacyandterms/privacyandterms.component';
import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';
import { UserResolver } from '../app/auth/user/user.resolver';
import { AuthGuard } from './auth/auth.guard';

import { AuthService } from './auth/auth.service';
import { UserService } from './auth/user.service';
import { UserComponent } from './auth/user/user.component';

export const rootRouterConfig:  Routes = [
  { path: '', component:LandingPageComponent,  data: { animation: '' } },
  { path: 'pricing', component:PricingPageComponent,  data: { animation: 'pricing' } },
  { path:'contact', component:ContactPageComponent,  data: { animation: 'contact' }},
  { path:'supply-chain', component:SupplyChainComponent,  data: { animation: 'supply-chain' }},
  { path:'payments', component:SelfCheckoutComponent,  data: { animation: 'payments' }},
  { path:'coming-soon', component:ComingSoonComponent,  data: { animation: 'coming-soon' }},
  { path:'analytic', component:AnalyticComponent,  data: { animation: 'analytic' }},
  { path:'privacy', component:PrivacyandtermsComponent,  data: { animation: 'privacy' }},
  { path: 'signin', component: SigninComponent,canActivate: [AuthGuard] },
  { path: 'signup', component:SignupComponent, canActivate: [AuthGuard] },
  { path: 'user', component: UserComponent,  resolve: { data: UserResolver}},


 ];

@NgModule({
  imports: [   BrowserAnimationsModule, RouterModule.forRoot(rootRouterConfig, { useHash: false }),
  RouterModule.forRoot(rootRouterConfig, {
    scrollPositionRestoration: 'enabled',
    anchorScrolling: 'enabled',
  }),],
  exports: [RouterModule]
})
export class AppRoutingModule { }
