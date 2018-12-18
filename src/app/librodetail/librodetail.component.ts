import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Libro } from '../libro';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { NgbPopoverConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-librodetail',
  templateUrl: './librodetail.component.html',
  styleUrls: ['./librodetail.component.scss'],
  providers: [ NgbPopoverConfig ]
})
export class LibrodetailComponent implements OnInit {
  public libro: Object;
  public rows: string[];

  constructor(private apiService: ApiService, private route: ActivatedRoute, private location: Location, private config: NgbPopoverConfig) { 
    config.placement = 'bottom-left';
    config.container = 'body';
    config.popoverClass = 'my-custom-width';
  }

  ngOnInit() {
    this.rows = [];
    this.getLibro();
  }
  
  getLibro(): void {
    const n = +this.route.snapshot.paramMap.get('n');
    this.apiService.getLibroDetail(n).subscribe(data => {
      this.libro = data;
      this.rows = Object.keys(this.libro);
    });
  }
  goBack(): void {
    this.location.back();
  }
}
