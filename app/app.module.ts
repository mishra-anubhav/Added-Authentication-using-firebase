import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from '../environments/environment';
import { UserComponent } from '../app/auth/user/user.component';
import { UserResolver } from '../app/auth/user/user.resolver';
import { AuthGuard } from './auth/auth.guard';
import { AuthService } from './auth/auth.service';
import { UserService } from './auth/user.service';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './constant/header/header.component';
import { FooterComponent } from './constant/footer/footer.component';
import { CopyrightComponent } from './constant/copyright/copyright.component';
import { LandingPageComponent } from './variable/landing-page/landing-page.component';
import { SelfCheckoutComponent } from './variable/product-page/self-checkout/self-checkout.component';
import { SupplyChainComponent } from './variable/product-page/supply-chain/supply-chain.component';
import { AnalyticComponent } from './variable/product-page/analytic/analytic.component';
import { PricingPageComponent } from './variable/pricing-page/pricing-page.component';
import { ContactPageComponent } from './variable/contact-page/contact-page.component';
import { ComingSoonComponent } from './constant/coming-soon/coming-soon.component';
import { PrivacyandtermsComponent } from './constant/privacyandterms/privacyandterms.component';
import { SalesComponent } from './contact/sales/sales.component';
import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CopyrightComponent,
    LandingPageComponent,
    SelfCheckoutComponent,
    SupplyChainComponent,
    AnalyticComponent,
    PricingPageComponent,
    ContactPageComponent,
    ComingSoonComponent,
    PrivacyandtermsComponent,
    SalesComponent,
    SigninComponent,
    UserComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features
  ],
  providers: [AuthService, UserService, UserResolver, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
