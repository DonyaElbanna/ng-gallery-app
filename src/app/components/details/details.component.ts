import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from '../../services/users.services';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent implements OnInit {
  constructor(private route: ActivatedRoute, public SService: UsersService) {}

  id: any;
  user: any;
  albums: any;
  photos: any;

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    console.log(this.id);

    this.SService.getUser(this.id).subscribe({
      next: (data) => {
        console.log(data);
        this.user = data;
      },
      error: (err) => {
        console.log(err);
      },
    });

    this.SService.getAlbums(this.id).subscribe({
      next: (data: any) => {
        console.log(data);
        this.albums = data;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  viewAlbum(x:any){
    this.SService.getPhotos(x).subscribe({
      next: (data: any) => {
        console.log(data);
        this.photos = data;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
