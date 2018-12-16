import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Libro } from '../libro';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-librodetail',
  templateUrl: './librodetail.component.html',
  styleUrls: ['./librodetail.component.css']
})
export class LibrodetailComponent implements OnInit {
  public libro: Object;
  public rows: string[];

  constructor(private apiService: ApiService, private route: ActivatedRoute, private location: Location) { }

  ngOnInit() {
    this.rows = [];
    this.getLibro();
  }
  
  getLibro(): void {
    const n = +this.route.snapshot.paramMap.get('n');
    this.apiService.getLibroDetail(n).subscribe(data => {
      this.libro = data;
      this.rows = Object.keys(this.libro);
      console.log(this.rows);
    });
  }
  goBack(): void {
    this.location.back();
  }
}
