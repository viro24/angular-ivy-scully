import { Component, OnInit } from '@angular/core';
import { ScullyRoute, ScullyRoutesService } from '@scullyio/ng-lib';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  template: `<ul>
      <li *ngFor="let post of posts$ | async">
        <a [routerLink]="post.route">{{ post.title }}</a>
      </li>
    </ul>
    <hr />
    <router-outlet></router-outlet>`,
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  posts$: Observable<ScullyRoute[]> = this.srs.available$;

  constructor(private srs: ScullyRoutesService) {}
  ngOnInit(): void {}
}
