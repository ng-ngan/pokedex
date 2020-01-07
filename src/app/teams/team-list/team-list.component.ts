import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'src/app/local-storage.service';

@Component({
  selector: 'app-team-list',
  templateUrl: './team-list.component.html',
  styleUrls: ['./team-list.component.css']
})
export class TeamListComponent implements OnInit {
  teams : []= [];
  constructor(private localService: LocalStorageService) { }

  ngOnInit() {
    this.localService.storageSubject.subscribe( (data:any) => this.teams = data);
  }

}
