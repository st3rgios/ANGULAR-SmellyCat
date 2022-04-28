import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { AdoptKittensComponent } from './adopt-kittens/adopt-kittens.component';
import { BlogComponent } from './blog/blog.component';
import { ContactComponent } from './contact/contact.component';
import { KittyStoriesComponent } from './kitty-stories/kitty-stories.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { SupportComponent } from './support/support.component';
import { TermsConditionsComponent } from './terms-conditions/terms-conditions.component';

const routes: Routes = [
  { path: 'Adopt-Kittens', component: AdoptKittensComponent},
  { path: 'Kitty-Stories', component: KittyStoriesComponent},
  { path: 'About-Us', component: AboutUsComponent},
  { path: 'Blog', component: BlogComponent},
  { path: 'Contact', component: ContactComponent},
  { path: 'Privacy-Policy', component: PrivacyPolicyComponent},
  { path: 'Terms-Conditions', component: TermsConditionsComponent},
  { path: 'Support', component: SupportComponent},
  { path: '', redirectTo: '/AdoptKittens', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
