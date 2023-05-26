import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { DetailsComponent } from './components/details/details.component';
import { PhotosComponent } from './components/photos/photos.component';
import { LoginComponent } from './components/login/login.component';
import { authGuard } from './auth/auth.guard';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'users', component: HomeComponent, canActivate: [authGuard] },
  {
    path: 'users/:userId',
    component: DetailsComponent,
    canActivate: [authGuard],
  },
  {
    path: 'users/:userId/album/:albumId',
    component: PhotosComponent,
    canActivate: [authGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
