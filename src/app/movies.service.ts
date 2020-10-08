import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(public _HttpClient:HttpClient) 
  { 

  }

  getTrendingMovies():Observable<any>
  {
    return this._HttpClient.get('https://api.themoviedb.org/3/trending/movie/day?api_key=874626f56d8c88bd6491d6d879b33324#'); 
  }

  getTrendingTv():Observable<any>
  {
    return this._HttpClient.get('https://api.themoviedb.org/3/trending/tv/day?api_key=874626f56d8c88bd6491d6d879b33324#'); 
  }

  getMovieDetails(id):Observable<any>
  {
    return this._HttpClient.get(`https://api.themoviedb.org/3/movie/${id}?api_key=874626f56d8c88bd6491d6d879b33324&language=en-US#`); 
  }
}
