import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BlogComponent } from './blog.component';
import { TailWindComponent } from './sites/tail-wind/tail-wind.component';

const routes: Routes = [
  {
    path: ':slug',
    component: BlogComponent,
  },
  {
    path: '**',
    component: BlogComponent,
  },
  {
    path: '',
    loadChildren: () =>
      import('../blogs/blogs.module').then((m) => m.BlogsModule),
  },
  {
    path: 'tailwind',
    component: TailWindComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  declarations: [],
})
export class BlogRoutingModule {}
