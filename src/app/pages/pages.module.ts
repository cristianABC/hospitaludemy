import { NgModule } from "@angular/core";
import { SharedModule } from '../shared/shared.module';
import {FormsModule} from '@angular/forms';

import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { PagesComponent } from './pages.component';
import { PAGES_ROUTES } from './pages.routes';
import { IncrementadorComponent } from '../components/incrementador/incrementador.component';
import { ChartsModule } from 'ng2-charts';
import { GraficoDonaComponent } from '../components/grafico-dona/grafico-dona.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { PromesasComponent } from './promesas/promesas.component';
import { RxjsComponent } from './rxjs/rxjs.component';
import { PipesModule } from '../pipes/pipes.module';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
        declarations:[
            DashboardComponent,
            ProgressComponent,
            Graficas1Component,
            PagesComponent,
            IncrementadorComponent,
            GraficoDonaComponent,
            AccountSettingsComponent,
            PromesasComponent,
            RxjsComponent,
            ProfileComponent
            ],
            exports:[
            DashboardComponent,
            ProgressComponent,
            Graficas1Component,
            PagesComponent,
            IncrementadorComponent,
            GraficoDonaComponent
            ],
            imports:[
                SharedModule, PAGES_ROUTES, FormsModule, ChartsModule, PipesModule
            ]
})
export class PagesModule {}