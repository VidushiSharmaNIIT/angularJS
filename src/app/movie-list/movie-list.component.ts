import { Component, OnInit,Input } from '@angular/core';
import {MovieServiceService} from '../movie-service.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
	favourite:any={};

@Input() movieList:any;

   constructor(private MovieService:MovieServiceService) { }


  ngOnInit() {
  }

  //Update Movie List
updateMovieList(event){
	this.movieList=event
}

add(detail:any){
	this.favourite={
		"poster_path":detail.poster_path,
		"title":detail.title,
		"release_date":detail.release_date
	}
	this.MovieService
	.add(this.favourite).subscribe((data)=>{
		
		console.log(data)
	})
}
}
