import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Libro } from "../libro";
import { PagerService } from '../pager.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { LibrodetailComponent } from '../librodetail/librodetail.component';

@Component({
  selector: 'app-ricerca',
  templateUrl: './ricerca.component.html',
  styleUrls: ['./ricerca.component.scss']
})
export class RicercaComponent implements OnInit {
  public title: string = 'Liceo Berchet - Biblioteca';
  public libri: Libro[];
  public submitted: boolean = false;
  pager: any = {};
  pagedItems: Libro[];
  public error: boolean = false;
  private currentPage: number;
  
  constructor(private apiService: ApiService, private pagerService: PagerService, private modalService: NgbModal) { }

  ngOnInit() { }
  
  public cerca(ricercaForm: any) {
    this.apiService.getLibri(ricercaForm.stringa).subscribe(data => {
      this.libri = data;
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
  }
  openModal(n: number) {
    const modalRef = this.modalService.open(LibrodetailComponent);
    modalRef.componentInstance.n = n;
  }
}
