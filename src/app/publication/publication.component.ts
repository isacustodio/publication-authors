import { Component, OnInit } from '@angular/core';
import { PublicationService } from '../service/publication.service';

@Component({
  selector: 'app-publication',
  templateUrl: './publication.component.html',
  styleUrls: ['./publication.component.css']
})
export class PublicationComponent implements OnInit {

  publication: [];
  author: [];

  constructor(private publicationService: PublicationService) { }

  ngOnInit() {
    this.list();
    this.authorList();
  }

  list(){
    this.publicationService.getPublication().subscribe((data: [])=>{
      this.publication = data;
    })
  }

  authorList(){
    this.publicationService.getAuthor().subscribe((data: [])=>{
      this.author = data;
      console.log(this.author);
    })
  }

}
