import { Component, OnInit } from '@angular/core';
import { ScullyRoute, ScullyRoutesService } from '@scullyio/ng-lib';
import { Observable, of } from 'rxjs';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.scss'],
})
export class BlogsComponent implements OnInit {
  available$: Observable<ScullyRoute[]> = this.scully.available$.pipe(
    map((r) => r.filter((page) => page.route.startsWith('/blog/'))),
    map((r) =>
      r.sort(
        (page1, page2) =>
          new Date(page2.publishedAt).getTime() -
          new Date(page1.publishedAt).getTime()
      )
    )
  );

  constructor(private scully: ScullyRoutesService) {}

  ngOnInit(): void {}
}
