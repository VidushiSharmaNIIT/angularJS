import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {RouterModule,Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { MoviesComponent } from './movies/movies.component';
import { MovieSearchComponent } from './movie-search/movie-search.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { MovieServiceService } from './movie-service.service';
import { FavouriteListComponent } from './favourite-list/favourite-list.component';

const apiRoutes:Routes =[
{
  path:'search',
  component:MoviesComponent
},
{
  path:'fav-movies',
  component:FavouriteListComponent
}];
@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    MovieSearchComponent,
    MovieListComponent,
    FavouriteListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(apiRoutes)
  ],
  providers: [MovieServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
