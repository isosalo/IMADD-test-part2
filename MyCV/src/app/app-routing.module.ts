import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'CV', loadChildren: './cv/cv.module#CVPageModule' },
  { path: 'projects', loadChildren: './projects/projects.module#ProjectsPageModule' },
  { path: 'extra', loadChildren: './extra/extra.module#ExtraPageModule' }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
