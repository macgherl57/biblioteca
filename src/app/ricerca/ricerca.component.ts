import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Libro } from "../libro";
import { PagerService } from '../pager.service';

@Component({
  selector: 'app-ricerca',
  templateUrl: './ricerca.component.html',
  styleUrls: ['./ricerca.component.css']
})
export class RicercaComponent implements OnInit {
  libri: Libro[];
  public submitted: boolean = false;
  pager: any = {};
  pagedItems: Libro[];
  public error: boolean = false;
  constructor(private apiService: ApiService, private pagerService: PagerService) { }

  ngOnInit() {
  }
  
  public cerca(ricercaForm: any) {
    this.apiService.getLibri(ricercaForm.stringa).subscribe(data => {
      this.libri = data;
      //console.log(this.libri.length);
      if (this.libri.length > 0) {
        this.submitted = true;
        this.setPage(1);
      } else {
        this.error = true;
        this.submitted = false;
      }
    });
  }
  setPage(page: number) {
    this.pager = this.pagerService.getPager(this.libri.length, page, 8);
    this.pagedItems = this.libri.slice(this.pager.startIndex, this.pager.endIndex + 1)
  }
}
