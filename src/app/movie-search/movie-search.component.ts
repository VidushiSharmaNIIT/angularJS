import { Component, OnInit ,Output,EventEmitter} from '@angular/core';
import {MovieServiceService} from '../movie-service.service';

@Component({
  selector: 'app-movie-search',
  templateUrl: './movie-search.component.html',
  styleUrls: ['./movie-search.component.css']
})
export class MovieSearchComponent implements OnInit {
public movies:any;
data: any=[];
@Output() movieList=new EventEmitter<any>();
  constructor(private MovieService:MovieServiceService) { }

  ngOnInit() {

  }
  
searchMovie(movie:string):any{
 return this.MovieService.getOnlineMovies(movie)
 .subscribe((res)=>{
	this.movies=res.results;
this.movieList.emit(this.movies)
console.log(this.movies)
})
}

showMovie(){
	this.MovieService.showMovieDetails()
  .subscribe(movieData=>{
	this.data=movieData;
	
})

}
}