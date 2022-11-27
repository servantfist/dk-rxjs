import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { WelcomeComponent } from './home/welcome.component';
import { PageNotFoundComponent } from './page-not-found.component';

@NgModule({
    imports: [
        RouterModule.forRoot([
            { path: 'welcome', component: WelcomeComponent },
            {
                path: 'products',
                loadChildren: () =>
                    import('./products/product.module').then(
                        (m) => m.ProductModule
                    )
            },
            {
                path: 'configuration',
                loadChildren: () =>
                    import('./configuration/config-mgr.module').then(
                        (m) => m.ConfigMgrModule
                    )
            },
            { path: '', redirectTo: 'welcome', pathMatch: 'full' },
            { path: '**', component: PageNotFoundComponent }
        ])
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {}
