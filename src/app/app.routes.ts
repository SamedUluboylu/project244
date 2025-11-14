import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home.component';
import { HizmetlerComponent } from './pages/hizmetler.component';
import { ProjelerComponent } from './pages/projeler.component';
import { ReferanslarComponent } from './pages/referanslar.component';
import { IletisimComponent } from './pages/iletisim.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'hizmetler', component: HizmetlerComponent },
  { path: 'projeler', component: ProjelerComponent },
  { path: 'referanslar', component: ReferanslarComponent },
  { path: 'iletisim', component: IletisimComponent },
  { path: '**', redirectTo: '' }
];
