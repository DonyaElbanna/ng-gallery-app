import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from '../../services/users.services';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css'],
})
export class PhotosComponent implements OnInit {
  constructor(private route: ActivatedRoute, public SService: UsersService) {}

  albumId: any;
  photos: any;
  ngOnInit(): void {
    // getting album id
    this.albumId = this.route.snapshot.paramMap.get('id');
    console.log(this.albumId);

    // getting photos in selected album
    this.SService.getPhotos(this.albumId).subscribe({
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
