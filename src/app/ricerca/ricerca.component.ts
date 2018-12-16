import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Libro } from "../libro";

@Component({
  selector: 'app-ricerca',
  templateUrl: './ricerca.component.html',
  styleUrls: ['./ricerca.component.css']
})
export class RicercaComponent implements OnInit {
  libri: Libro[];
  public submitted: boolean = false;
  constructor(private apiService: ApiService) { }

  ngOnInit() {
  }
  
  public cerca(ricercaForm: any) {
    this.apiService.getLibri(ricercaForm.stringa).subscribe(data => {
      this.libri = data;
      if (this.libri.length > 0) {
        this.submitted = true;
      }
    });
  }
}
