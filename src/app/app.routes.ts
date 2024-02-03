import { Routes } from '@angular/router';
import { MainComponent } from './pages/main/main.component';
import { MovieComponent } from './pages/movie/movie.component';
import { ActorComponent } from './pages/actor/actor.component';

export const routes: Routes = [
    { path: '', component: MainComponent },
    { path: 'title/:id', component: MovieComponent},
    { path: 'actor/:id', component: ActorComponent},
    
];