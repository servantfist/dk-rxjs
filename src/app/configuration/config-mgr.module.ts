import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfigMgrComponent } from './config-mgr.component';
import { ConfigComponent } from './config/config.component';
import { DownloaderComponent } from './downloader/downloader.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ProductListComponent } from '../products/product-list.component';
import { SharedModule } from '../shared/shared.module';

const materialModules = [MatButtonModule, MatCardModule, MatCheckboxModule];

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        materialModules,
        RouterModule.forChild([
            {
                path: '',
                component: ConfigMgrComponent
            }
        ])
    ],
    declarations: [ConfigMgrComponent, ConfigComponent, DownloaderComponent]
})
export class ConfigMgrModule {}
