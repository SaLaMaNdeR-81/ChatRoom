import { Component, OnInit } from '@angular/core';
import { LoadingService } from 'src/app/@Core/Service/Loading.Service';

@Component({
  selector: 'Component-Loading',
  templateUrl: './Loading.Component.html',
  styleUrls: ['./Loading.Component.scss']
})
export class ComponentLoading implements OnInit {
  isLoading: boolean = false;

  constructor(private loadingService: LoadingService) {}

  ngOnInit() {
    this.loadingService.getLoaderState().subscribe((isLoading) => {
      this.isLoading = isLoading;
    });
  }
}
