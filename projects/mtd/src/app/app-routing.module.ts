import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'about',
    pathMatch: 'full'
  },
  {
    path: 'about',
    loadChildren: () =>
      import('./pages/about/about.module').then(m => m.AboutModule)
  },
  {
    path: 'browse',
    loadChildren: () =>
      import('./pages/browse/browse.module').then(m => m.BrowseModule)
  },
  {
    path: 'bookmarks',
    loadChildren: () =>
      import('./pages/bookmarks/bookmarks.module').then(m => m.BookmarksModule)
  },
  {
    path: 'random',
    loadChildren: () =>
      import('./pages/random/random.module').then(m => m.RandomModule)
  },
  {
    path: 'search',
    loadChildren: () =>
      import('./pages/search/search.module').then(m => m.SearchModule)
  },
  {
    path: 'settings',
    loadChildren: () =>
      import('./pages/settings/settings.module').then(m => m.SettingsModule)
  },
  {
    path: '**',
    redirectTo: 'about'
  }
];

@NgModule({
  // useHash supports github.io demo page, remove in your app
  imports: [
    RouterModule.forRoot(routes, {
      useHash: true,
      scrollPositionRestoration: 'enabled',
      preloadingStrategy: PreloadAllModules
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
