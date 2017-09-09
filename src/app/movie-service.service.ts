import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class MovieServiceService {
private movieUrl = "http://api.themoviedb.org/3/search/movie?api_key=c8c9a862bfcd9257bd0fe4ea95003bf1&query=";
  constructor(private http:Http) { }

  getOnlineMovies(movie: string){
  	return this.http
  	.get(this.movieUrl+movie)
  	.map((res)=>res.json());

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
delete(fav:any){
  return this.http
  .delete('http://localhost:3000/user/'+fav)
  .map(res=>res.json())
}
}
