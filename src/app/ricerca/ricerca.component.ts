import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Libro } from "../libro";
import { PagerService } from '../pager.service';

@Component({
  selector: 'app-ricerca',
  templateUrl: './ricerca.component.html',
  styleUrls: ['./ricerca.component.scss']
})
export class RicercaComponent implements OnInit {
  public libri: Libro[];
  public submitted: boolean = false;
  pager: any = {};
  pagedItems: Libro[];
  public error: boolean = false;
  private currentPage: number;
  
  constructor(private apiService: ApiService, private pagerService: PagerService) { }

  ngOnInit() {
    this.apiService.lastSearch.subscribe(data => this.libri = data);
    this.apiService.currentPage.subscribe(res => this.currentPage = res);
    if (this.libri.length > 0 && this.currentPage != 0) {
      this.submitted = true;
      this.setPage(this.currentPage);
    }
  }
  
  public cerca(ricercaForm: any) {
    this.apiService.getLibri(ricercaForm.stringa).subscribe(data => {
      this.libri = data;
      this.apiService.lastSearch.next(data);
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
    this.pagedItems = this.libri.slice(this.pager.startIndex, this.pager.endIndex + 1);
    this.apiService.currentPage.next(this.pager.currentPage);
  }
}
