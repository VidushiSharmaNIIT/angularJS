import { Component, OnInit } from '@angular/core';
import {MovieServiceService} from '../movie-service.service';

@Component({
  selector: 'app-favourite-list',
  templateUrl: './favourite-list.component.html',
  styleUrls: ['./favourite-list.component.css']
})
export class FavouriteListComponent implements OnInit {
data: any=[];
  favourite:any={};
  constructor(private MovieService:MovieServiceService) { }

  ngOnInit() {
    this.MovieService.showMovieDetails()
  .subscribe(movieData=>{
  this.data=movieData;
  	
  })}
  del(detail:any){
this.favourite={
  "poster_path":detail.poster_path,
    "title":detail.title,
    "release_date":detail.release_date
}
this.MovieService
.delete(this.favourite)
.subscribe((data)=>
  console.log(data))

  }



}




