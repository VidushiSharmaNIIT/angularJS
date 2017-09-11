import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class MovieServiceService {
private movieUrl = "http://api.themoviedb.org/3/search/movie?api_key=c8c9a862bfcd9257bd0fe4ea95003bf1&query=";
  constructor(private http:Http) { }

  getOnlineMovies(movie: string){
  	return this.http
    
  	.get(this.movieUrl+movie)
    .catch(this.handleError)
  	.map((res)=>res.json());
     

}
  handleError(error:any){
    if(error instanceof Response){
      return Observable.throw(alert(error.status)||"backend server error")
    }
  }
add(fav){
	//console.log(fav);
	return this.http
	.post('http://localhost:3000/user',fav)
	.map(res=>res.json())
}

showMovieDetails(){
   return this.http
	.get('http://localhost:3000/users')
	.map(res=>res.json())
}
delFav(id:any){
    return this.http
            .delete('http://localhost:3000/user/'+id)
            .map(res=>res.json());
}
EditFav(id:any){
    return this.http
            .delete('http://localhost:3000/user/'+id)
            .map(res=>res.json());
}
}
