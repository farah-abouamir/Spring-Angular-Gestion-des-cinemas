import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CinemasComponent } from './cinemas/cinemas.component';
import { CinemaComponent } from './cinema/cinema.component';
import { CityComponent } from './ville/city.component';
import { RoomComponent } from './salle/room.component';
import { CinemaDetailComponent } from './cinema-detail/cinema-detail.component';
import {LoginComponent} from './login/login.component';
// import { CinemasComponent } from './cinema/cinema.component';


const routes: Routes = [
  {path: 'admin/cinema', component: CinemaComponent  },
  {path: 'admin/cinema-detail/:id/:cityId', component: CinemaDetailComponent  },
  {path: 'admin/city', component: CityComponent  },
  {path: 'admin/room', component: RoomComponent  },

  {path: 'cinemas', component: CinemasComponent  },
  {path: 'login', component: LoginComponent},


  {path: '', redirectTo: 'cinemas', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
