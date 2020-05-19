import { Component, OnInit } from '@angular/core';
import { PublicationService } from '../service/publication.service';
import { of, concat } from 'rxjs';

@Component({
  selector: 'app-publication',
  templateUrl: './publication.component.html',
  styleUrls: ['./publication.component.css']
})
export class PublicationComponent implements OnInit {

  publication: any;
  author: [];
  publiList: [];

  constructor(private publicationService: PublicationService) { }

  ngOnInit() {
    this.publications();
  }

  list(){
    this.publicationService.getPublication().subscribe((data: [])=>{
      this.publication = data.concat(this.author);
    });

  }

  authorList(){
    this.publicationService.getAuthor().subscribe((data: [])=>{
      this.author = data;
    })
  }

  publications(){
    concat(
      this.publication,
      this.author
    ).subscribe(
      (itens: [])=> this.publiList = itens);
      console.log(this.publiList);
  }

}
