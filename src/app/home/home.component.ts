import { Component, OnInit } from '@angular/core';
import { MoviesService } from "../movies.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  trendingMovies = [];
  trendingTv = [];
  imgPrefix = 'https://image.tmdb.org/t/p/w500/';
  constructor( _MoviesService:MoviesService) {

    _MoviesService.getTrendingMovies().subscribe( (data)=> {

     this.trendingMovies = data.results;
    }, (err)=> {console.log(err)})



    _MoviesService.getTrendingTv().subscribe( (data)=> {

      this.trendingTv = data.results;
     }, (err)=> {console.log(err)})



   }

  ngOnInit(): void {
  }

}
