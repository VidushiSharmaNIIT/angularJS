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
  delFavo(id:any){
    this.MovieService.delFav(id)
          .subscribe((data)=>{
            console.log("successfully deleted")
})

  }
EditFavo(id:any){
    this.MovieService.EditFav(id)
          .subscribe((data)=>{
            console.log("successfully updated")
})

  }


}




